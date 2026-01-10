import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ParticleBackground } from "@/components/ParticleBackground";

const DISCORD_URL = "https://discord.gg/2PMmPp6Yx8";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10 animate-gradient"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      
      {/* Particle Effects */}
      <ParticleBackground />

      <div className="container mx-auto px-4 relative z-10 py-32 pt-40">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Status Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>All systems operational</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>Singapore Location</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>99.9% SLA guarantee</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
            <span className="text-foreground">High Performance </span>
            <span className="text-primary">Cloud Infrastructure</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Solusi hosting profesional dengan performa tinggi. Game server, VPS, Discord bot, dan website hosting dengan uptime 99.9%.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-base px-8 py-6 font-semibold">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-base px-8 py-6 font-semibold">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
