"use client";

import { motion } from "framer-motion";

export const GameSupportLogos = () => {
  const games = [
    { name: "FiveM", logo: "/fivem-logo.png" },
    { name: "Minecraft", logo: "/minecraft-logo.png" },
    { name: "Rust", logo: "/rust-logo.png" },
    { name: "Terraria", logo: "/terraria-logo.png" },
    { name: "SA-MP", logo: "/samp-logo.png" },
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-xl font-bold mb-2">Supported Games</h3>
          <p className="text-sm text-muted-foreground">
            Our servers support all popular game platforms
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 px-5 py-3 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-colors"
            >
              <img
                src={game.logo}
                alt={game.name}
                className="w-10 h-10 object-contain"
              />
              <span className="font-semibold text-sm">{game.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
