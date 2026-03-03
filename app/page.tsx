"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";

export default function Home() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative bg-black text-white overflow-hidden"
    >
      <ParticlesBackground />

      {/* NAVBAR */}
      <header className="fixed top-0 w-full backdrop-blur-xl bg-black/40 border-b border-white/5 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold tracking-wide">AROTECH</h1>
          <nav className="hidden md:flex gap-8 text-sm text-white/70">
            <a href="#games" className="hover:text-white transition">Games</a>
            <a href="#vision" className="hover:text-white transition">Vision</a>
            <a href="#careers" className="hover:text-white transition">Careers</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        onMouseMove={handleMouseMove}
        className="relative min-h-screen flex items-center justify-center text-center pt-32 overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/logo.mp4" type="video/mp4" />
        </video>

        <motion.div
          style={{ rotateX, rotateY }}
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.3 },
            },
          }}
          className="relative z-10 px-6"
        >
          <motion.h1
            variants={fadeUp}
            className="text-6xl md:text-8xl font-extrabold tracking-tight"
          >
            BUILD THE SYSTEM
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl mx-auto opacity-60 text-lg"
          >
            구조와 전략이 살아있는 게임을 설계하는 차세대 스튜디오
          </motion.p>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <motion.section
        id="games"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={fadeUp}
        className="py-32 px-6 border-t border-white/5 text-center"
      >
        <h2 className="text-5xl font-bold mb-20">
          OUR PROJECTS
        </h2>
      </motion.section>

      {/* VISION */}
      <motion.section
        id="vision"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={fadeUp}
        className="py-40 px-6 border-t border-white/5 text-center"
      >
        <h2 className="text-6xl font-extrabold mb-10">
          DESIGN. SYSTEM. EXPERIENCE.
        </h2>
        <p className="max-w-3xl mx-auto opacity-60 text-lg">
          우리는 구조적 완성도를 통해 오래 남는 게임을 만듭니다.
        </p>
      </motion.section>

      {/* CAREERS */}
      <motion.section
        id="careers"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={fadeUp}
        className="py-32 px-6 border-t border-white/5 text-center"
      >
        <h2 className="text-4xl font-bold mb-8">CAREERS</h2>
        <p className="opacity-60">
          함께 시스템을 설계할 동료를 찾습니다.
        </p>
      </motion.section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-32 px-6 border-t border-white/5 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">CONTACT</h2>
        <p className="opacity-60">arotech@arotech.co.kr</p>
      </section>

    </motion.main>
  );
}