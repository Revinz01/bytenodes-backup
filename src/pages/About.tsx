import { Navbar } from "@/components/Navbar";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Footer } from "@/components/Footer";
import { Server, Shield, Users, Award, Globe, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <AnnouncementBanner />
      <Navbar />
      
      <div className="pt-32 pb-12 px-4 bg-gradient-to-b from-navy-dark to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Tentang <span className="text-gradient">ByteNodes</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner terpercaya Anda dalam solusi web hosting dan infrastruktur
          </p>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              ByteNodes dimulai oleh 2 orang bernama Salman dan Davin dari SMK Negeri 13 Bandung, kelas VBAP. 
              Yang berawal dari proyek passion antara dua siswa SMK telah berkembang menjadi penyedia 
              hosting terpercaya yang melayani klien di seluruh Indonesia dan sekitarnya.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Didirikan dengan prinsip keandalan, keterjangkauan, dan layanan pelanggan yang excellent, 
              ByteNodes telah berevolusi dari ide sederhana di ruang kelas menjadi perusahaan hosting lengkap. 
              Perjalanan kami mencerminkan komitmen untuk membuat hosting profesional dapat diakses oleh semua orang, 
              dari developer individual hingga bisnis yang berkembang.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Saat ini, kami memanfaatkan teknologi dan infrastruktur mutakhir untuk memberikan 
              solusi hosting tingkat enterprise. Tim kami terus bekerja untuk memastikan kehadiran digital Anda tetap 
              aman, cepat, dan selalu tersedia. Kami memahami tantangan menjalankan layanan online 
              karena kami pernah mengalaminya sendiri.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan/10 flex items-center justify-center">
                <Server className="w-8 h-8 text-cyan" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Infrastruktur</h3>
              <p className="text-muted-foreground">
                Data center canggih dengan daya redundan dan konektivitas jaringan
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan/10 flex items-center justify-center">
                <Shield className="w-8 h-8 text-cyan" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Keamanan</h3>
              <p className="text-muted-foreground">
                Perlindungan DDoS canggih dan langkah keamanan untuk menjaga data Anda
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-cyan" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Support</h3>
              <p className="text-muted-foreground">
                Tim support ahli 24/7 siap membantu Anda kapan pun dibutuhkan
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan/10 flex items-center justify-center">
                <Award className="w-8 h-8 text-cyan" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Kualitas</h3>
              <p className="text-muted-foreground">
                Garansi uptime 99.9% didukung oleh service level agreement kami
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan/10 flex items-center justify-center">
                <Globe className="w-8 h-8 text-cyan" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Jangkauan Global</h3>
              <p className="text-muted-foreground">
                Melayani klien di seluruh dunia dengan support dan infrastruktur lokal
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan/10 flex items-center justify-center">
                <Zap className="w-8 h-8 text-cyan" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Performa</h3>
              <p className="text-muted-foreground">
                Server dan jaringan yang dioptimalkan untuk kecepatan loading super cepat
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
