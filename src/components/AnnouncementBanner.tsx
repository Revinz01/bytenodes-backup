"use client";

import { X, MessageCircle } from "lucide-react";
import { useState } from "react";

const DISCORD_URL = "https://discord.gg/2PMmPp6Yx8";

export const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary via-primary to-primary/90 py-2 px-4 shadow-md">
      <div className="container mx-auto flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm pr-8">
        <MessageCircle className="w-4 h-4 text-primary-foreground flex-shrink-0 hidden sm:block" />
        <p className="text-primary-foreground font-medium text-center">
          <span className="hidden sm:inline">
            🛒 Pembelian & Transaksi Resmi Hanya Melalui{" "}
          </span>
          <span className="sm:hidden">🛒 Order via </span>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80 transition-opacity font-bold"
          >
            Discord Server
          </a>
          <span className="hidden sm:inline"> Kami!</span>
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 sm:right-4 p-1 hover:bg-primary-foreground/10 rounded transition-colors"
          aria-label="Tutup pengumuman"
        >
          <X className="w-4 h-4 text-primary-foreground" />
        </button>
      </div>
    </div>
  );
};
