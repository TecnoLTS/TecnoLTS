'use client';

import { useState } from 'react';
import type { ReactNode, ComponentProps } from 'react';
import ContactModal from '@/components/contact-modal';
import { Button } from '@/components/ui/button';
import type { TranslationStructure } from '@/lib/translations';

interface ContactModalButtonProps extends Omit<ComponentProps<typeof Button>, 'children' | 'onClick'> {
  t: TranslationStructure;
  children: ReactNode;
  defaultService?: string;
}

export default function ContactModalButton({
  t,
  children,
  defaultService,
  type = 'button',
  ...buttonProps
}: ContactModalButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        {...buttonProps}
        type={type}
        onClick={() => setIsOpen(true)}
      >
        {children}
      </Button>

      <ContactModal
        open={isOpen}
        onOpenChange={setIsOpen}
        t={t}
        defaultService={defaultService}
      />
    </>
  );
}
