import { Clock, Shield, Headphones, Zap, Award, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Performa Optimal",
    description: "Rasakan kecepatan server tinggi dengan infrastruktur dan hardware premium kami."
  },
  {
    icon: Shield,
    title: "Keamanan Tingkat Tinggi",
    description: "Data Anda dilindungi dengan berbagai lapisan keamanan."
  },
  {
    icon: Zap,
    title: "Uptime Andal",
    description: "Jaringan kami dirancang untuk keandalan dengan sistem monitoring proaktif."
  },
  {
    icon: Headphones,
    title: "Dukungan 24/7",
    description: "Tim support kami selalu siap membantu kapan pun dibutuhkan."
  },
  {
    icon: Award,
    title: "Ramah Developer",
    description: "Dibuat dengan pemikiran developer, dilengkapi tools powerful dan interface intuitif."
  },
  {
    icon: TrendingUp,
    title: "Komunitas Berkembang",
    description: "Bergabunglah dengan komunitas developer kami dan akses resource eksklusif."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kenapa Pilih ByteNodes?
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl mx-auto">
            Temukan apa yang membuat layanan hosting kami menonjol
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group p-6 bg-card rounded-xl border border-border hover:border-cyan/50 transition-all duration-300 hover:bg-card/80"
              >
                <div className="w-12 h-12 bg-cyan/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan/20 transition-colors">
                  <Icon className="w-6 h-6 text-cyan" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
