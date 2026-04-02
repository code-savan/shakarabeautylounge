"use client";

import { MessageCircleMore, X } from 'lucide-react';
import React, { useState } from 'react';
import igicon from '../../public/igicon.png';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/2348144209739', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/shakarabeautylounge/', '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 z-[100]">
      {/* Popup Menu */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-4 w-64 mb-2 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-[family-name:var(--font-figtree)] font-semibold text-gray-800">Send a DM</span>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={18} className="text-gray-500" />
            </button>
          </div>

          <div className="space-y-2">
            {/* WhatsApp Option */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.2.05-.375-.025-.524-.075-.15-.672-1.612-.922-2.206-.24-.583-.487-.51-.672-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="font-[family-name:var(--font-figtree)] font-semibold text-gray-800 text-sm">WhatsApp</p>
                <p className="font-[family-name:var(--font-figtree)] text-xs text-gray-500">Quick response</p>
              </div>
            </button>

            {/* Instagram Option */}
            <button
              onClick={handleInstagramClick}
              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <div className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center">
                <img src="/igicon.png" alt="instagram icon" className="w-10 h-10" />
              </div>
              <div className="text-left">
                <p className="font-[family-name:var(--font-figtree)] font-semibold text-gray-800 text-sm">Instagram</p>
                <p className="font-[family-name:var(--font-figtree)] text-xs text-gray-500">@shakarabeautylounge</p>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Main Chat Button */}
      <button
        aria-label="Toggle Chatbot"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 group cursor-pointer relative ${
          isOpen ? 'bg-black text-white' : 'bg-white text-black'
        }`}
        style={{
          background: isOpen
            ? '#000'
            : 'linear-gradient(#fff, #fff) padding-box, linear-gradient(to top right, #facc15, #ef4444, #ec4899) border-box',
          border: '2px solid transparent'
        }}
      >
        <div className="transition-transform duration-300">
          {isOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <MessageCircleMore size={24} className="text-black" />
          )}
        </div>
      </button>
    </div>
  );
};

export default ChatBot;
