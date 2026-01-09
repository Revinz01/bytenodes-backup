"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Apa saja yang termasuk dalam paket hosting?",
    answer: "Semua paket hosting kami sudah termasuk virtualisasi KVM, penyimpanan SSD, dedicated resources, backup gratis, perlindungan DDoS, dan dukungan pelanggan 24/7. Anda akan mendapatkan akses root penuh dan dapat menginstall software apapun yang dibutuhkan."
  },
  {
    question: "Bisakah saya upgrade atau downgrade paket?",
    answer: "Ya! Anda bisa upgrade atau downgrade paket kapan saja. Saat upgrade, Anda akan dikenakan biaya prorata untuk sisa periode billing. Downgrade akan berlaku pada tanggal billing berikutnya."
  },
  {
    question: "Berapa jaminan uptime Anda?",
    answer: "Kami menjamin uptime 99.9% pada semua layanan hosting. Jika kami gagal memenuhi jaminan ini, Anda akan menerima kredit layanan sesuai kebijakan SLA kami. Infrastruktur kami dipantau 24/7 untuk memastikan keandalan maksimal."
  },
  {
    question: "Apakah Anda menawarkan refund?",
    answer: "Ya, kami menawarkan garansi 30 hari uang kembali untuk semua pembelian baru. Jika Anda tidak puas dengan layanan kami dalam 30 hari pertama, hubungi tim support untuk refund penuh, tanpa pertanyaan."
  },
  {
    question: "Metode pembayaran apa saja yang diterima?",
    answer: "Kami menerima transfer bank (BCA, BNI, Mandiri, BRI), e-wallet (GoPay, OVO, DANA), QRIS, dan kartu kredit/debit. Semua pembayaran diproses dengan aman."
  },
  {
    question: "Berapa lama setup server?",
    answer: "Kebanyakan server diaktifkan otomatis dalam 5-10 menit setelah pembayaran terkonfirmasi. Dedicated server mungkin membutuhkan hingga 24 jam untuk setup dan konfigurasi awal."
  },
  {
    question: "Apakah ada dukungan teknis?",
    answer: "Tentu saja! Kami menawarkan dukungan teknis 24/7 melalui live chat, email, dan tiket support. Tim ahli kami selalu siap membantu konfigurasi server, troubleshooting, dan optimisasi."
  },
  {
    question: "Bisakah hosting beberapa website dalam satu server?",
    answer: "Ya, Anda bisa hosting sebanyak mungkin website sesuai kapasitas resource server. Semua paket kami memberikan kontrol penuh atas server, memungkinkan konfigurasi sesuai kebutuhan."
  },
  {
    question: "Apakah ada biaya setup?",
    answer: "Tidak, tidak ada biaya setup untuk semua paket hosting kami. Harga yang terlihat adalah yang Anda bayar - tanpa biaya tersembunyi atau kejutan."
  },
  {
    question: "Langkah keamanan apa yang ada?",
    answer: "Kami menerapkan berbagai lapisan keamanan termasuk perlindungan DDoS, firewall, update keamanan rutin, sertifikat SSL, dan backup otomatis. Data Anda disimpan di data center yang aman dengan keamanan fisik 24/7."
  }
];

export const PricingFAQ = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pertanyaan <span className="text-gradient">Yang Sering Diajukan</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Semua yang perlu Anda ketahui tentang layanan hosting kami
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-cyan hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Masih punya pertanyaan? Kami siap membantu!
          </p>
          <a
            href="/contact"
            className="text-cyan font-semibold hover:underline"
          >
            Hubungi tim support kami →
          </a>
        </div>
      </div>
    </section>
  );
};
