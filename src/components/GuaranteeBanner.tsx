import { Shield, CheckCircle, Clock } from "lucide-react";

export const GuaranteeBanner = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-cyan/10 via-navy/5 to-cyan/10 border-y border-border">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan/10 rounded-full mb-4">
              <Shield className="w-8 h-8 text-cyan" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Garansi <span className="text-gradient">30 Hari</span> Uang Kembali Tanpa Risiko
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Coba ByteNodes dengan kepercayaan penuh. Jika Anda tidak 100% puas, kami akan mengembalikan uang Anda—tanpa pertanyaan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Tanpa Pertanyaan</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Tidak puas dengan layanan kami? Dapatkan refund penuh dalam 30 hari. Kami percaya pada pilihan Anda.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Proses Cepat</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ajukan refund kapan saja dalam 30 hari pertama. Kami memproses refund dalam 5-7 hari kerja.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Data Anda Terlindungi</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Dapatkan backup penuh data Anda sebelum pembatalan. Informasi Anda tetap aman bersama kami.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground">
              Punya pertanyaan tentang garansi kami? <a href="/contact" className="text-cyan font-semibold hover:underline">Hubungi tim kami</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
