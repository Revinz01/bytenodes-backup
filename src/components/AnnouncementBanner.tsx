import { X, ShoppingCart } from "lucide-react";
import { useState } from "react";

const DISCORD_URL = "https://discord.gg/2PMmPp6Yx8";

export const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary py-2.5 px-4 relative">
      <div className="container mx-auto flex items-center justify-center gap-3 text-sm">
        <ShoppingCart className="w-4 h-4 text-primary-foreground flex-shrink-0" />
        <p className="text-primary-foreground font-medium">
          Pembelian & Transaksi Hanya Tersedia Melalui Server Discord Resmi Kami
          <span className="hidden sm:inline"> —</span>{" "}
          <a 
            href={DISCORD_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:opacity-80 transition-opacity font-bold"
          >
            Gabung Sekarang
          </a>
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:bg-primary-foreground/10 rounded transition-colors"
          aria-label="Tutup pengumuman"
        >
          <X className="w-4 h-4 text-primary-foreground" />
        </button>
      </div>
    </div>
  );
};
