"use client";

import { Card } from "@/components/ui/card";
import {
  Server,
  Globe,
  Bot,
  Gamepad2,
  HardDrive,
  Cpu,
  Shield,
  Clock,
  Headphones,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  useScrollAnimation,
  scrollVariants,
  staggerContainer,
} from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Gamepad2,
    title: "Game Servers",
    startingPrice: "Rp 12.000",
    priceUsd: "$0.75",
    link: "/pricing/servers",
    features: [
      "Minecraft, FiveM, Rust & more",
      "Pterodactyl Panel",
      "DDoS Protection",
      "24/7 Uptime",
      "Auto Backup",
      "Low Latency Network",
      "Shared CPU Options",
      "Singapore Location",
    ],
  },
  {
    icon: Server,
    title: "VPS & Dedicated",
    startingPrice: "Rp 175.000",
    priceUsd: "$10.90",
    link: "/pricing/vps",
    features: [
      "AMD EPYC Processors",
      "NVMe SSD Storage",
      "Full Root Access",
      "Custom Specifications",
      "24/7 Support",
      "DDoS Protection",
      "Multiple CPU Options",
      "High Performance",
    ],
  },
  {
    icon: Globe,
    title: "Website Hosting",
    startingPrice: "Rp 5.000",
    priceUsd: "$0.30",
    link: "/pricing/website",
    features: [
      "NVMe SSD Storage",
      "Free SSL Certificate",
      "Cloudflare Tunnel",
      "Auto Backup",
      "Pterodactyl Panel",
      "Resource Isolated",
      "PHP & Node.js Support",
      "Custom Domain Option",
    ],
  },
  {
    icon: Bot,
    title: "Discord Bot Hosting",
    startingPrice: "Rp 10.000",
    priceUsd: "$0.60",
    link: "/pricing/bot",
    features: [
      "24/7 Uptime",
      "Auto Restart",
      "Multiple Instances",
      "Database Support",
      "Easy Deployment",
      "Priority Support",
      "Custom Domain Option",
      "Free SSL",
    ],
  },
];

export const Services = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={scrollVariants}
          className="text-center mb-16"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
            SOLUTIONS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our Products
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={scrollVariants}>
              <Card className="p-6 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 bg-card border-border/50 hover:border-primary/50 group h-full flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-1">
                    Starting at
                  </p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-primary">
                      {service.startingPrice}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      /month
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-muted-foreground"
                      >
                        <HardDrive className="w-4 h-4 text-muted-foreground mr-2 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={service.link} className="mt-6">
                  <Button
                    variant="outline"
                    className="w-full text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
