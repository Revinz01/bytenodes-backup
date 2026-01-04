import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaDiscord } from "react-icons/fa";
import { Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-card/30 border-t border-border/50 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold mb-4" aria-label="ByteNodes Beranda">
              <img src={logo} alt="" className="w-8 h-8 object-contain" width={32} height={32} />
              <span className="text-gradient">ByteNodes</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Solusi hosting profesional untuk bisnis segala ukuran. Infrastruktur yang andal, cepat, dan aman.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/6285126080236" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110" aria-label="WhatsApp">
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/bytenodeshost" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110" aria-label="Instagram">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://discord.gg/2PMmPp6Yx8" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110" aria-label="Discord">
                <FaDiscord className="w-5 h-5" />
              </a>
              <a href="mailto:support@bytenodes.icu" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">Produk</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/pricing/servers" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Game Server
                </Link>
              </li>
              <li>
                <Link to="/pricing/vps" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  VPS KVM
                </Link>
              </li>
              <li>
                <Link to="/pricing/vps" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Dedicated Server
                </Link>
              </li>
              <li>
                <Link to="/pricing/vps" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  RDP Windows
                </Link>
              </li>
              <li>
                <Link to="/pricing/bot" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Discord Bot Hosting
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">Dukungan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Pusat Bantuan
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Hubungi Kami
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Dokumentasi
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Syarat Layanan
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Kebijakan Cookie
                </Link>
              </li>
              <li>
                <Link to="/acceptable-use" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Kebijakan Penggunaan
                </Link>
              </li>
              <li>
                <Link to="/sla" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  SLA
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Kebijakan Refund
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">Perusahaan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Kontak
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Harga
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2025 ByteNodes. Hak Cipta Dilindungi.</p>
            <p>Powered By Yeng</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
