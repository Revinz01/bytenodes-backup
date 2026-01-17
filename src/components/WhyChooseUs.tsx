import { Cpu, Shield, Wifi, Headphones, Zap, Server } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, scrollVariants, staggerContainer } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: Cpu,
    title: "Lightning Fast CPUs",
    description: "We only use some of the fastest and highest end CPUs in our servers, including AMD EPYC and Intel Xeon processors."
  },
  {
    icon: Wifi,
    title: "Network",
    description: "We offer up to 1 Gbit network uplinks in most of our locations, a massive upgrade from what is typically standard."
  },
  {
    icon: Server,
    title: "NVMe Storage",
    description: "All our servers use enterprise-grade NVMe SSDs for blazing fast read/write speeds and maximum reliability."
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Advanced DDoS mitigation to keep your services online and protected against malicious attacks."
  },
  {
    icon: Zap,
    title: "99.9% Uptime SLA",
    description: "We guarantee 99.9% uptime with our robust infrastructure and proactive monitoring systems."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our expert support team is always ready to help you whenever you need assistance."
  }
];

export const WhyChooseUs = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={scrollVariants}
          className="text-center mb-16"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">WHY CHOOSE US</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for Performance
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div key={index} variants={scrollVariants}>
                <div 
                  className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors duration-300 h-full"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
