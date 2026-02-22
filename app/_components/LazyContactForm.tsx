'use client';

import { useEffect, useRef, useState } from 'react';
import type { ComponentType } from 'react';
import type { TranslationStructure } from '@/lib/translations';

type ContactFormComponentType = ComponentType<{
  t: TranslationStructure;
}>;

function ContactFormSkeleton() {
  return (
    <div
      className="rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 min-h-[520px] animate-pulse"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="h-6 w-48 bg-gray-200 dark:bg-slate-700 rounded mb-6" />
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="h-12 bg-gray-100 dark:bg-slate-800 rounded" />
        <div className="h-12 bg-gray-100 dark:bg-slate-800 rounded" />
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="h-12 bg-gray-100 dark:bg-slate-800 rounded" />
        <div className="h-12 bg-gray-100 dark:bg-slate-800 rounded" />
      </div>
      <div className="h-28 bg-gray-100 dark:bg-slate-800 rounded mb-6" />
      <div className="h-12 w-40 bg-gray-200 dark:bg-slate-700 rounded" />
    </div>
  );
}

interface LazyContactFormProps {
  t: TranslationStructure;
}

export default function LazyContactForm({ t }: LazyContactFormProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [ContactFormComponent, setContactFormComponent] =
    useState<ContactFormComponentType | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || shouldLoad) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '900px 0px',
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [shouldLoad]);

  useEffect(() => {
    if (!shouldLoad || ContactFormComponent) {
      return;
    }

    let isCancelled = false;

    import('@/components/contact-form').then((module) => {
      if (!isCancelled) {
        setContactFormComponent(() => module.default);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [shouldLoad, ContactFormComponent]);

  return (
    <div ref={containerRef}>
      {ContactFormComponent ? (
        <ContactFormComponent t={t} />
      ) : (
        <ContactFormSkeleton />
      )}
    </div>
  );
}
