"use client";

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Rian Pratama",
    role: "Game Server Owner",
    avatar: "RP",
    content:
      "Server Minecraft saya tidak pernah lag sejak pindah ke ByteNodes. Support-nya juga cepat banget, mantap!",
    rating: 5,
  },
  {
    name: "Dewi Kusuma",
    role: "Web Developer",
    content:
      "Hosting website dengan harga terjangkau tapi kualitas enterprise. SSL gratis dan backup otomatis sangat membantu.",
    avatar: "DK",
    rating: 5,
  },
  {
    name: "Agung Setiawan",
    role: "Discord Bot Developer",
    content:
      "Bot Discord saya 24/7 online tanpa masalah. Panel management-nya user-friendly dan auto-restart berjalan lancar.",
    avatar: "AS",
    rating: 5,
  },
  {
    name: "Siti Nurhaliza",
    role: "E-commerce Owner",
    content:
      "VPS-nya kencang banget! Website toko online saya load-nya cepat dan tidak pernah down meski traffic tinggi.",
    avatar: "SN",
    rating: 5,
  },
  {
    name: "Budi Santoso",
    role: "FiveM Server Admin",
    content:
      "DDoS protection-nya beneran work! Server FiveM saya aman dari serangan dan player happy karena tidak ada lag.",
    avatar: "BS",
    rating: 5,
  },
  {
    name: "Maya Indah",
    role: "Startup Founder",
    content:
      "Dari awal bisnis sudah pakai ByteNodes. Scalability-nya mudah, tinggal upgrade tanpa downtime sama sekali.",
    avatar: "MI",
    rating: 5,
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => (
  <div className="flex-shrink-0 w-[340px] p-6 bg-card rounded-2xl border border-border hover:border-primary/40 transition-colors duration-300">
    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 fill-amber-400 text-amber-400"
          aria-hidden="true"
        />
      ))}
    </div>

    {/* Quote */}
    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
      &ldquo;{testimonial.content}&rdquo;
    </p>

    {/* Author */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
        {testimonial.avatar}
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">
          {testimonial.name}
        </p>
        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

export const TestimonialsMarquee = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title reveal
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Infinite marquee for track 1 (left)
      const track1 = track1Ref.current;
      if (track1) {
        const width = track1.scrollWidth / 2;
        gsap.to(track1, {
          x: -width,
          duration: 40,
          ease: "none",
          repeat: -1,
        });
      }

      // Infinite marquee for track 2 (right)
      const track2 = track2Ref.current;
      if (track2) {
        const width = track2.scrollWidth / 2;
        gsap.fromTo(
          track2,
          { x: -width },
          {
            x: 0,
            duration: 45,
            ease: "none",
            repeat: -1,
          }
        );
      }

      // Pause on hover
      const pauseOnHover = (track: HTMLElement) => {
        track.addEventListener("mouseenter", () => {
          gsap.to(track, { timeScale: 0, duration: 0.3 });
        });
        track.addEventListener("mouseleave", () => {
          gsap.to(track, { timeScale: 1, duration: 0.3 });
        });
      };
      if (track1) pauseOnHover(track1);
      if (track2) pauseOnHover(track2);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-secondary/20 overflow-hidden"
    >
      {/* Title */}
      <div ref={titleRef} className="text-center mb-16 px-4">
        <p className="text-sm text-primary uppercase tracking-widest font-semibold mb-3">
          Testimonials
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-foreground text-balance">
          Dipercaya oleh <span className="text-primary">Ribuan User</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-balance">
          Lihat apa kata mereka yang sudah menggunakan layanan ByteNodes.
        </p>
      </div>

      {/* Marquee tracks */}
      <div className="space-y-6">
        {/* Track 1 - scrolls left */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-secondary/20 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-secondary/20 to-transparent z-10 pointer-events-none" />
          <div ref={track1Ref} className="flex gap-6">
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Track 2 - scrolls right */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-secondary/20 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-secondary/20 to-transparent z-10 pointer-events-none" />
          <div ref={track2Ref} className="flex gap-6">
            {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map(
              (t, i) => (
                <TestimonialCard key={i} testimonial={t} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
