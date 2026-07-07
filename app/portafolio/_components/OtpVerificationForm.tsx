'use client';

import { useState, useRef, useEffect, useCallback, type KeyboardEvent, type ClipboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  token: string;
  maskedEmail: string;
};

export default function OtpVerificationForm({ token, maskedEmail }: Props) {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const [popIndex, setPopIndex] = useState<number | null>(null);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const verify = useCallback(async (code: string) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/portafolio/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, code }),
      });
      const data = await res.json();
      if (data.success) {
        setIsVerified(true);
        setTimeout(() => { window.location.href = '/portafolio'; }, 2200);
      } else {
        setError(data.error || 'Código incorrecto');
        setTimeout(() => {
          setOtp(Array(6).fill(''));
          setLoading(false);
          inputRefs.current[0]?.focus();
        }, 800);
      }
    } catch {
      setError('Error de conexión');
      setLoading(false);
    }
  }, [token]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]$/.test(value)) return;
    const next = [...otp];
    next[index] = value;
    setOtp(next);
    setPopIndex(index);
    setTimeout(() => setPopIndex(null), 200);

    if (index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (next.every((d) => d !== '')) {
      verify(next.join(''));
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      const next = [...otp];
      if (next[index]) {
        next[index] = '';
        setOtp(next);
      } else if (index > 0) {
        next[index - 1] = '';
        setOtp(next);
        inputRefs.current[index - 1]?.focus();
      }
    }
    if (e.key === 'ArrowLeft' && index > 0) inputRefs.current[index - 1]?.focus();
    if (e.key === 'ArrowRight' && index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (!pasted) return;
    const next = [...otp];
    for (let i = 0; i < pasted.length; i++) next[i] = pasted[i];
    setOtp(next);
    const focusIdx = Math.min(pasted.length, 5);
    inputRefs.current[focusIdx]?.focus();
    if (next.every((d) => d !== '')) verify(next.join(''));
  };

  const handleResend = useCallback(async () => {
    if (resendCooldown > 0) return;
    setError('');
    try {
      const res = await fetch('/api/portafolio/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();
      if (data.success) {
        setResendCooldown(60);
        const interval = setInterval(() => {
          setResendCooldown((p) => {
            if (p <= 1) { clearInterval(interval); return 0; }
            return p - 1;
          });
        }, 1000);
      } else {
        setError(data.error || 'No se pudo reenviar');
      }
    } catch {
      setError('Error de conexión');
    }
  }, [token, resendCooldown]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const cardBg = isVerified
    ? 'bg-gradient-to-b from-emerald-950/40 via-neutral-900 to-neutral-900'
    : 'bg-neutral-900';

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`relative w-full max-w-[420px] rounded-3xl border p-8 shadow-xl transition-colors duration-700 ${isVerified ? 'border-emerald-200 bg-gradient-to-b from-emerald-50/60 via-white to-white' : 'border-gray-200 bg-white'}`}
      >
        {/* Handle decorativo */}
        <div className="mx-auto mb-6 h-1.5 w-12 rounded-full bg-gray-300" />

        {/* Logo */}
        <div className="flex justify-center mb-5">
          <svg viewBox="0 0 94.33 22.04" className="h-6" aria-label="TecnoLTS">
            <polygon fill="#406bb2" points="2.2 0 0 0 0 4.41 2.2 4.41 6.61 4.41 6.61 8.82 6.61 13.22 6.61 17.63 6.61 22.04 11.02 17.63 11.02 13.22 11.02 8.82 11.02 4.41 6.61 0 2.2 0"/>
            <polygon fill="#406bb2" points="12.51 0 8.1 0 12.51 4.41 16.92 4.41 16.92 0 12.51 0"/>
            <polygon fill="#406bb2" points="63.11 5.75 63.11 18.75 63.11 21.26 64.63 18.75 64.63 5.75 64.63 3.24 63.11 5.75"/>
            <path fill="#126e95" d="M69.89,16.13h3.97v2.34h-6.99V6.04h3.03v10.09Z"/>
            <path fill="#126e95" d="M83.47,6.03v2.43h-3.29v10h-3.03v-10h-3.29v-2.43h9.61Z"/>
            <path fill="#126e95" d="M87.36,18.17c-.72-.29-1.3-.73-1.73-1.31-.43-.58-.66-1.27-.68-2.09h3.22c.05.46.21.81.48,1.05.27.24.63.36,1.06.36s.8-.1,1.06-.31c.26-.21.39-.49.39-.86,0-.31-.1-.56-.31-.76-.21-.2-.46-.37-.76-.5-.3-.13-.73-.28-1.28-.44-.8-.25-1.46-.5-1.97-.74-.51-.25-.94-.61-1.31-1.1-.37-.48-.55-1.12-.55-1.89,0-1.16.42-2.06,1.26-2.72.84-.66,1.93-.98,3.28-.98s2.47.33,3.31.98c.84.66,1.29,1.57,1.35,2.74h-3.28c-.02-.4-.17-.72-.44-.95-.27-.23-.62-.35-1.04-.35-.37,0-.66.1-.89.29-.22.19-.34.48-.34.84,0,.4.19.71.57.94.38.22.97.47,1.77.73.8.27,1.45.53,1.96.78.5.25.94.61,1.3,1.08.37.47.55,1.08.55,1.82s-.18,1.35-.54,1.93c-.36.58-.88,1.04-1.57,1.38-.68.34-1.49.51-2.43.51s-1.72-.15-2.44-.44Z"/>
            <path fill="#126e95" d="M47.09,18.62h-3.1l-5.19-7.85v7.85h-3.1V5.89h3.1l5.19,7.89v-7.89h3.1v12.73Z"/>
            <path fill="#126e95" d="M51.82,17.94c-1-.56-1.79-1.33-2.38-2.33-.59-1-.88-2.12-.88-3.36s.29-2.36.88-3.35c.59-.99,1.38-1.76,2.38-2.32,1-.56,2.09-.83,3.29-.83s2.29.28,3.29.83c1,.56,1.78,1.33,2.36,2.32.57.99.86,2.11.86,3.35s-.29,2.37-.87,3.36c-.58,1-1.37,1.77-2.36,2.33-.99.56-2.09.83-3.28.83s-2.29-.28-3.29-.83ZM57.55,14.93c.61-.68.92-1.57.92-2.68s-.31-2.02-.92-2.69c-.61-.67-1.42-1.01-2.44-1.01s-1.85.33-2.46,1c-.61.67-.92,1.57-.92,2.7s.31,2.02.92,2.69c.61.67,1.43,1.01,2.46,1.01s1.83-.34,2.44-1.02Z"/>
            <path fill="#126e95" d="M22.6,8.9c.54-.99,1.3-1.75,2.28-2.3.97-.55,2.08-.83,3.31-.83,1.51,0,2.8.4,3.88,1.2,1.08.8,1.8,1.89,2.16,3.26h-3.41c-.25-.53-.61-.94-1.08-1.21-.47-.28-.99-.42-1.59-.42-.96,0-1.73.33-2.32,1-.59.66-.89,1.55-.89,2.67s.3,2,.89,2.67c.59.66,1.37,1,2.32,1,.59,0,1.12-.14,1.59-.42.47-.28.83-.68,1.08-1.21h3.41c-.36,1.38-1.08,2.46-2.16,3.25-1.08.79-2.37,1.19-3.88,1.19-1.23,0-2.34-.27-3.31-.83-.97-.55-1.73-1.31-2.28-2.29-.54-.98-.82-2.1-.82-3.35s.27-2.38.82-3.36Z"/>
            <path fill="#126e95" d="M15.6,8.37v2.57h4.15v2.39h-4.15v2.79h4.7v2.48h-7.8V5.89h7.8v2.48h-4.7Z"/>
          </svg>
        </div>

        {/* Títulos animados */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isVerified ? 'verified' : 'pending'}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-8"
          >
            <h2 className="text-xl font-bold text-gray-800">
              {isVerified ? 'Verificado exitosamente' : 'Verifiquemos tu identidad'}
            </h2>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              {isVerified
                ? 'Tu identidad ha sido verificada.'
                : <>Enviamos un código de 6 dígitos a <span className="font-medium text-gray-700">{maskedEmail}</span></>
              }
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Zona de inputs / check */}
        <div className="flex justify-center mb-6 min-h-[72px] items-center">
          <AnimatePresence mode="wait">
            {isVerified ? (
              <motion.div
                key="check"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 180, damping: 14 }}
                className="relative flex items-center justify-center"
              >
                {/* Halo verde */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-emerald-400/20"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.6, 1.3], opacity: [0.6, 0, 0.15] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                  style={{ width: 72, height: 72, margin: 'auto', left: 0, right: 0, top: 0, bottom: 0 }}
                />
                <div className="relative flex h-[64px] w-[64px] items-center justify-center rounded-2xl bg-emerald-500 shadow-[0_0_24px_rgba(16,185,129,0.3)]">
                  <motion.svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <motion.path
                      d="M5 13l4 4L19 7"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
                    />
                  </motion.svg>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="inputs"
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.25 }}
                animate={error ? { x: [0, -10, 10, -8, 8, -4, 4, 0] } : {}}
                className="flex gap-4"
                role="group"
                aria-label="Código de verificación"
              >
                {otp.map((digit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: popIndex === i ? 1.1 : 1,
                    }}
                    transition={{
                      opacity: { delay: i * 0.06 },
                      y: { delay: i * 0.06 },
                      scale: { type: 'spring', stiffness: 400, damping: 15 },
                    }}
                  >
                    <input
                      ref={(el) => { inputRefs.current[i] = el; }}
                      type="text"
                      inputMode="numeric"
                      autoComplete={i === 0 ? 'one-time-code' : 'off'}
                      aria-label={`Dígito ${i + 1} de 6`}
                      maxLength={1}
                      value={digit}
                      disabled={loading}
                      onChange={(e) => handleChange(e.target.value.slice(-1), i)}
                      onKeyDown={(e) => handleKeyDown(e, i)}
                      onPaste={i === 0 ? handlePaste : undefined}
                      onFocus={(e) => e.target.select()}
                      className={`
                        h-[56px] w-[46px] rounded-xl border-2 bg-gray-50 text-center text-2xl font-semibold text-gray-800
                        outline-none transition-all duration-200
                        disabled:opacity-50
                        ${error
                          ? 'border-red-400'
                          : 'border-blue-300 focus:border-blue-500 focus:shadow-[0_0_12px_rgba(59,130,246,0.25)] focus:bg-white'
                        }
                      `}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Error */}
        <AnimatePresence>
          {error && !isVerified && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-4 text-center text-sm text-red-500"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Loading */}
        {loading && !isVerified && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4 flex justify-center"
          >
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
          </motion.div>
        )}

        {/* Reenviar */}
        <div className="text-center">
          <span className="text-sm text-gray-400">No recibiste el código? </span>
          <button
            type="button"
            onClick={handleResend}
            disabled={resendCooldown > 0}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors disabled:text-gray-300"
          >
            {resendCooldown > 0 ? `Reenviar (${resendCooldown}s)` : 'Reenviar'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
