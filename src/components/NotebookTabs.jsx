import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Palette, Cpu, Send } from 'lucide-react';

const tabs = [
  { key: 'about', label: 'About', icon: Palette },
  { key: 'skills', label: 'Skills', icon: Cpu },
  { key: 'process', label: 'Process', icon: Code2 },
  { key: 'contact', label: 'Contact', icon: Send },
];

const NotebookTabs = () => {
  const [active, setActive] = useState('about');

  return (
    <section className="relative z-10 mx-auto -mt-20 max-w-5xl px-6 pb-20">
      {/* Notebook paper background */}
      <div className="relative overflow-hidden rounded-2xl border border-neutral-800 shadow-2xl">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'repeating-linear-gradient(0deg, rgba(255,255,255,0.02), rgba(255,255,255,0.02) 28px, rgba(168,85,247,0.25) 30px)',
          }}
        />
        <div className="relative bg-neutral-900/70 p-6 backdrop-blur">
          {/* Tabs */}
          <div className="mb-4 flex flex-wrap gap-2">
            {tabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
                  active === key
                    ? 'border-violet-500/40 bg-violet-500/20 text-violet-100'
                    : 'border-white/10 bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="relative min-h-[160px]">
            <AnimatePresence mode="wait">
              {active === 'about' && (
                <motion.div
                  key="about"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.35 }}
                  className="prose prose-invert max-w-none"
                >
                  <h3>Hi, I’m a creative developer</h3>
                  <p>
                    I design and build playful, interactive experiences. My work lives where
                    code meets art — blending 3D scenes, animation, and tangible UI moments.
                  </p>
                </motion.div>
              )}

              {active === 'skills' && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className="grid grid-cols-2 gap-3 sm:grid-cols-3"
                >
                  {[
                    'React + Three/Spline',
                    'Framer Motion',
                    'WebGL & GLSL',
                    'Design Systems',
                    'Creative Coding',
                    'Fast, accessible UI',
                  ].map((item) => (
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white/90"
                    >
                      {item}
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {active === 'process' && (
                <motion.ol
                  key="process"
                  initial={{ opacity: 0, rotateX: -20 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  exit={{ opacity: 0, rotateX: 20 }}
                  transition={{ duration: 0.35 }}
                  className="grid gap-3 sm:grid-cols-3"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {[
                    ['Sketch', 'Rough wireframes, motion beats, and narrative.'],
                    ['Prototype', 'Playable ideas using motion and 3D.'],
                    ['Polish', 'Craft, accessibility, and performance.'],
                  ].map(([title, desc], i) => (
                    <li
                      key={title}
                      className="rounded-xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="mb-1 text-xs uppercase tracking-wide text-violet-300/80">
                        Step {i + 1}
                      </div>
                      <div className="font-semibold text-white">{title}</div>
                      <p className="mt-1 text-sm text-white/80">{desc}</p>
                    </li>
                  ))}
                </motion.ol>
              )}

              {active === 'contact' && (
                <motion.form
                  key="contact"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  onSubmit={(e) => e.preventDefault()}
                  className="grid gap-3 sm:grid-cols-2"
                >
                  <input
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/50 outline-none focus:border-violet-400/50"
                    placeholder="Your name"
                  />
                  <input
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/50 outline-none focus:border-violet-400/50"
                    placeholder="Your email"
                    type="email"
                  />
                  <textarea
                    className="sm:col-span-2 h-28 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/50 outline-none focus:border-violet-400/50"
                    placeholder="Tell me about your project"
                  />
                  <motion.button
                    whileHover={{ y: -1 }}
                    whileTap={{ y: 0 }}
                    className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-lg border border-violet-500/40 bg-violet-500/20 px-4 py-2 text-violet-100"
                  >
                    <Send className="h-4 w-4" /> Send
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default NotebookTabs;
