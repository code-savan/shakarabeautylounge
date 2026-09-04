"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=2348144209739&text&type=phone_number&app_absent=0";
const INSTAGRAM_URL = "https://www.instagram.com/shakarabeautylounge/";

export default function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  const [shown, setShown] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    if (open) {
      setMounted(true);
      document.body.style.overflow = "hidden";
      const raf = requestAnimationFrame(() =>
        requestAnimationFrame(() => setShown(true))
      );
      return () => cancelAnimationFrame(raf);
    } else if (mounted) {
      setShown(false);
      document.body.style.overflow = "unset";
      const t = setTimeout(() => setMounted(false), 300);
      return () => clearTimeout(t);
    }
  }, [open, mounted]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!mounted) return null;

  const panel = (
    <div className="bg-white rounded-2xl shadow-2xl p-4 w-[calc(100vw-2rem)] max-w-sm md:w-72">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-[family-name:var(--font-figtree)] font-semibold text-gray-800">
          Send a DM
        </span>
        <button
          onClick={onClose}
          aria-label="Close"
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <X size={18} className="text-gray-500" />
        </button>
      </div>
      <div className="space-y-2">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
        >
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.2.05-.375-.025-.524-.075-.15-.672-1.612-.922-2.206-.24-.583-.487-.51-.672-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <div className="text-left">
            <p className="font-[family-name:var(--font-figtree)] font-semibold text-gray-800 text-sm">WhatsApp</p>
            <p className="font-[family-name:var(--font-figtree)] text-xs text-gray-500">Quick response</p>
          </div>
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
        >
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
            <img src="/igicon.png" alt="instagram icon" className="w-10 h-10" />
          </div>
          <div className="text-left">
            <p className="font-[family-name:var(--font-figtree)] font-semibold text-gray-800 text-sm">Instagram</p>
            <p className="font-[family-name:var(--font-figtree)] text-xs text-gray-500">@shakarabeautylounge</p>
          </div>
        </a>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[200]" role="dialog" aria-modal="true">
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${shown ? "opacity-100" : "opacity-0"}`}
      />
      <div className="absolute inset-0 pointer-events-none flex items-end justify-center p-4 pb-8 md:items-center md:p-6">
        <div
          className={`pointer-events-auto transition-all duration-300 ease-out ${
            shown
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 md:translate-y-4 md:scale-95"
          }`}
        >
          {panel}
        </div>
      </div>
    </div>
  );
}
