import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Mail, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero3D = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(22,22,26,1),rgba(10,10,12,1))] text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft vignette overlay that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent,rgba(0,0,0,0.35)_60%,rgba(0,0,0,0.75))]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-violet-300" />
          <span className="text-sm text-violet-200">Interactive • Animated • Visual</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 font-['Mona_Sans',ui-sans-serif] text-5xl font-black tracking-tight sm:text-6xl md:text-7xl"
        >
          Sketching Code in Motion
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-balance text-lg text-violet-100/90 sm:text-xl"
        >
          A playful, notebook-inspired portfolio blending 3D, animation, and interaction.
          Explore projects, doodle ideas, and watch interfaces come alive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/20 px-5 py-3 text-violet-100 transition hover:bg-violet-500/30"
          >
            <Rocket className="h-5 w-5 transition group-hover:translate-x-0.5" />
            See Projects
          </a>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:bg-white/10"
          >
            <Mail className="h-5 w-5" />
            Contact
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:bg-white/10"
          >
            <Github className="h-5 w-5" />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;
