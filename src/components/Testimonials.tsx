import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Ahmad Rizky",
    role: "CEO, TechStartup Indonesia",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
    text: "ByteNodes sangat luar biasa untuk kebutuhan hosting kami. Performa VPS mereka outstanding dan tim support selalu responsif."
  },
  {
    name: "Siti Nurhaliza",
    role: "Lead Developer, WebSolutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
    text: "Pindah dari provider lain dan sangat puas. Uptime server luar biasa dan dashboard sangat mudah digunakan."
  },
  {
    name: "Budi Santoso",
    role: "Marketing Director, GrowthCo",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    rating: 5,
    text: "Layanan hosting terbaik yang pernah saya gunakan. Server dedicated sangat cepat dan customer support mereka luar biasa."
  },
  {
    name: "Dewi Lestari",
    role: "Pemilik Game Server",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
    text: "Menjalankan beberapa game server disini. Zero lag, performa bagus, dan tim membantu setup semuanya dengan sempurna."
  },
  {
    name: "Eko Prasetyo",
    role: "Freelance Designer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    rating: 5,
    text: "ByteNodes memudahkan untuk mengelola website klien. Harga terjangkau dan layanan reliable - sangat direkomendasikan!"
  },
  {
    name: "Rina Wulandari",
    role: "Pemilik Toko Online",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    rating: 5,
    text: "Toko online saya tidak pernah berjalan semulus ini. Loading cepat, uptime excellent, dan sistem backup memberi ketenangan."
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Dipercaya Ribuan Pelanggan
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl mx-auto">
            Lihat apa yang pelanggan kami katakan tentang pengalaman mereka dengan ByteNodes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg hover:shadow-cyan/5 transition-all bg-card border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cyan text-cyan" />
                ))}
              </div>
              
              <p className="text-foreground/80 mb-6 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={`Foto profil ${testimonial.name}`}
                  className="w-10 h-10 rounded-full object-cover"
                  width={40}
                  height={40}
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-foreground/60 text-sm">
            <Star className="w-5 h-5 fill-cyan text-cyan" />
            <span className="font-semibold text-foreground">4.9/5</span>
            <span>berdasarkan 2.500+ ulasan</span>
          </div>
        </div>
      </div>
    </section>
  );
};
