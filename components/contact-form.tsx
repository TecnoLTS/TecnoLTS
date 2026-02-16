"use client";

import { useState } from "react";
import { ArrowRight, Sparkles, User, Mail, Phone, Briefcase, MessageSquare, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/components/language-provider";

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

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    website: "",
    privacy: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
        service: "",
        message: "",
        website: "",
        privacy: false,
      });

      setTimeout(() => setIsSuccess(false), 5000);
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-12 shadow-xl border border-gray-200 dark:border-slate-700 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              {t.contact.form.successTitle}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              {t.contact.form.successMessage}
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
            >
              {t.contact.form.successButton}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/20 dark:border-cyan-400/30 rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            {t.contact.badge}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-slate-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  {t.contact.form.name} *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-slate-900 border ${
                      errors.name ? "border-red-500" : "border-gray-300 dark:border-slate-600"
                    } rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  {t.contact.form.email} *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-slate-900 border ${
                      errors.email ? "border-red-500" : "border-gray-300 dark:border-slate-600"
                    } rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  {t.contact.form.phone}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
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
                    <Briefcase className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-slate-900 border ${
                      errors.service ? "border-red-500" : "border-gray-300 dark:border-slate-600"
                    } rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white`}
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
                {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                {t.contact.form.message}
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-slate-900 border ${
                    errors.message ? "border-red-500" : "border-gray-300 dark:border-slate-600"
                  } rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
                  placeholder={t.contact.form.messagePlaceholder}
                ></textarea>
              </div>
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
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
                  className="mt-1 w-4 h-4 text-cyan-600 bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-600 rounded focus:ring-2 focus:ring-cyan-500"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600 dark:text-gray-400">
                  {t.contact.form.privacy}
                </label>
              </div>
              {errors.privacy && <p className="mt-1 text-sm text-red-500">{errors.privacy}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {t.contact.form.submitting}
                </>
              ) : (
                <>
                  {t.contact.form.submit}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              {t.contact.form.responseTime}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
