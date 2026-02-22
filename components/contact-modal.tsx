"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, User, Mail, Phone, Briefcase, MessageSquare, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/components/language-provider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string;
  privacy: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
  privacy?: string;
}

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultService?: string;
}

export default function ContactModal({ open, onOpenChange, defaultService }: ContactModalProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: defaultService || "",
    message: "",
    website: "",
    privacy: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Update service when modal opens with a new defaultService
  useEffect(() => {
    if (open && defaultService) {
      setFormData(prev => ({
        ...prev,
        service: defaultService,
      }));
    }
  }, [open, defaultService]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t.contact.form.nameRequired;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t.contact.form.nameMinLength;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.contact.form.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.contact.form.emailInvalid;
    }

    if (!formData.service) {
      newErrors.service = t.contact.form.serviceRequired;
    }

    if (!formData.privacy) {
      newErrors.privacy = t.contact.form.privacyRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error(t.contact.form.errorMessage);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim() || null,
          service: formData.service,
          message: formData.message.trim() || null,
          website: formData.website.trim(),
          privacy_accepted: formData.privacy,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }

      setIsSuccess(true);
      toast.success(t.contact.form.successTitle);

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: defaultService || "",
        message: "",
        website: "",
        privacy: false,
      });

      setTimeout(() => {
        setIsSuccess(false);
        onOpenChange(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error instanceof Error ? error.message : t.contact.form.errorSending);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSuccess) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[500px] p-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {t.contact.form.successTitle}
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
              {t.contact.form.successMessage}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/20 dark:border-cyan-400/30 rounded-full text-cyan-600 dark:text-cyan-400 text-xs font-medium w-fit mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            {t.contact.badge}
          </div>
          <DialogTitle className="text-2xl font-bold">
            {t.contact.title}
          </DialogTitle>
          <DialogDescription>
            {t.contact.subtitle}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                {t.contact.form.name} *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-slate-900 border ${
                    errors.name ? "border-red-500" : "border-gray-300 dark:border-slate-600"
                  } rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm`}
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                {t.contact.form.email} *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-slate-900 border ${
                    errors.email ? "border-red-500" : "border-gray-300 dark:border-slate-600"
                  } rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm`}
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                {t.contact.form.phone}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                  placeholder={t.contact.form.phonePlaceholder}
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                {t.contact.form.service} *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Briefcase className="h-4 w-4 text-gray-400" />
                </div>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-slate-900 border ${
                    errors.service ? "border-red-500" : "border-gray-300 dark:border-slate-600"
                  } rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white text-sm`}
                >
                  <option value="">{t.contact.form.serviceSelect}</option>
                  <option value="software">{t.contact.form.serviceSoftware}</option>
                  <option value="monitoring">{t.contact.form.serviceMonitoring}</option>
                  <option value="network">{t.contact.form.serviceNetwork}</option>
                  <option value="iso">{t.contact.form.serviceIso}</option>
                  <option value="cybersecurity">{t.contact.form.serviceCybersecurity}</option>
                  <option value="backups">{t.contact.form.serviceBackups}</option>
                  <option value="licensing">{t.contact.form.serviceLicensing}</option>
                  <option value="disaster">{t.contact.form.serviceDisaster}</option>
                  <option value="datacenter">{t.contact.form.serviceDatacenter}</option>
                  <option value="other">{t.contact.form.serviceOther}</option>
                </select>
              </div>
              {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              {t.contact.form.message}
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3 pointer-events-none">
                <MessageSquare className="h-4 w-4 text-gray-400" />
              </div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-slate-900 border ${
                  errors.message ? "border-red-500" : "border-gray-300 dark:border-slate-600"
                } rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm`}
                placeholder={t.contact.form.messagePlaceholder}
              ></textarea>
            </div>
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
          </div>

          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              autoComplete="off"
              tabIndex={-1}
            />
          </div>

          <div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                className="mt-0.5 w-4 h-4 text-cyan-600 bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-600 rounded focus:ring-2 focus:ring-cyan-500"
              />
              <label htmlFor="privacy" className="text-xs text-gray-600 dark:text-gray-400">
                {t.contact.form.privacy}
              </label>
            </div>
            {errors.privacy && <p className="mt-1 text-xs text-red-500">{errors.privacy}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                {t.contact.form.submitting}
              </>
            ) : (
              <>
                {t.contact.form.submit}
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-center text-xs text-gray-500 dark:text-gray-400">
            {t.contact.form.responseTime}
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
