'use client';

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalProps } from '../types/props';

export function Modal({
  open,
  onClose,
  title,
  children,
  closeOnOverlayClick = true,
}: ModalProps) {

  const [mounted, setMounted] = React.useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

  return createPortal(
    <div
      aria-hidden={!open}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      onMouseDown={(e) => {
        if (!closeOnOverlayClick) return;
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(900px_circle_at_20%_0%,rgba(250,204,21,0.18),transparent_55%),radial-gradient(700px_circle_at_80%_20%,rgba(239,68,68,0.12),transparent_55%)]" />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={title ?? "Modal"}
        className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] backdrop-blur-xl
                 shadow-[0_20px_70px_rgba(0,0,0,0.65)]"
      >
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#FADD09]/35 to-transparent opacity-80" />

        <div className="flex items-center justify-between gap-3 border-b border-white/10 p-4 sm:p-5">
          <div className="min-w-0">
            {title ? (
              <h2 className="truncate text-base font-semibold text-zinc-50 sm:text-lg">
                {title}
              </h2>
            ) : (
              <span />
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-zinc-200
                     transition hover:border-white/20 hover:bg-white/[0.06]
                     focus:outline-none focus:ring-2 focus:ring-[#FADD09]/60 focus:border-[#FADD09]/30"
          >
            ✕
          </button>
        </div>

        <div className="p-4 sm:p-5 text-sm leading-relaxed text-zinc-200">
          {children}
        </div>

        <div className="pointer-events-none absolute -bottom-24 left-1/2 h-48 w-[520px] -translate-x-1/2 rounded-full bg-[#FADD09]/10 blur-3xl" />
      </div>
    </div>,
    document.body
  );
} 