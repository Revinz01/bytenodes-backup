import { Shield, Zap, HeadphonesIcon, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, scrollVariants, staggerContainer } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Shield,
    title: "Keamanan Enterprise",
    description: "Perlindungan DDoS canggih dan sertifikat SSL disertakan di setiap paket.",
  },
  {
    icon: Zap,
    title: "Sangat Cepat",
    description: "Penyimpanan SSD dan infrastruktur yang dioptimalkan untuk performa maksimal.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dukungan 24/7",
    description: "Tim support teknis ahli tersedia setiap saat untuk membantu Anda.",
  },
  {
    icon: TrendingUp,
    title: "Mudah Upgrade",
    description: "Tingkatkan resource dengan mudah seiring pertumbuhan bisnis Anda.",
  },
];

export const Features = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={scrollVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Kenapa Pilih ByteNodes
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl mx-auto">
            Kami menyediakan infrastruktur tingkat enterprise dengan fleksibilitas dan dukungan yang bisnis Anda butuhkan
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={scrollVariants}
              className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer will-change-transform"
            >
              <div className="mb-6 mx-auto w-20 h-20 rounded-2xl bg-card flex items-center justify-center group-hover:bg-primary/20 border border-border/50 group-hover:border-primary transition-colors duration-300">
                <feature.icon className="w-10 h-10 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
