import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Nebula UI',
    tag: 'Motion + WebGL',
    desc: 'Micro-interactions and shaders stitched into a crisp UI.',
  },
  {
    title: 'Playground Kit',
    tag: 'Design System',
    desc: 'A tactile component library with physics-inspired motion.',
  },
  {
    title: 'Ribbon Explorer',
    tag: '3D + Spline',
    desc: 'Interactive ribbon worlds blending 3D and narrative.',
  },
  {
    title: 'Sketch Stories',
    tag: 'Creative Coding',
    desc: 'Generative doodles that react to cursor energy.',
  },
];

const TiltCard = ({ title, tag, desc }) => {
  const [transform, setTransform] = React.useState('');

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -10; // tilt up/down
    const ry = ((x / rect.width) - 0.5) * 10; // tilt left/right
    setTransform(`rotateX(${rx}deg) rotateY(${ry}deg)`);
  }

  function reset() {
    setTransform('rotateX(0deg) rotateY(0deg)');
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileHover={{ scale: 1.02 }}
      className="group relative h-48 cursor-pointer select-none rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-white shadow-lg backdrop-blur-sm transition will-change-transform"
      style={{ transform, transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/0 via-fuchsia-500/0 to-cyan-400/0 opacity-0 transition group-hover:opacity-20" />
      <div className="flex h-full flex-col justify-between" style={{ transform: 'translateZ(20px)' }}>
        <div>
          <div className="text-xs font-medium uppercase tracking-wide text-violet-300/90">
            {tag}
          </div>
          <div className="mt-1 text-xl font-semibold">{title}</div>
          <div className="mt-1 text-sm text-white/80">{desc}</div>
        </div>
        <div className="text-right text-xs text-white/60">Hover to tilt</div>
      </div>
    </motion.div>
  );
};

const ProjectGallery = () => {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="font-['Mona_Sans',ui-sans-serif] text-3xl font-bold text-white sm:text-4xl">
          Projects
        </h2>
        <div className="text-sm text-white/60">A rotating set of playful experiments</div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((p) => (
          <TiltCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
