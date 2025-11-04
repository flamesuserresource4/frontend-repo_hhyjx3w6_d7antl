import React from 'react';
import Hero3D from './components/Hero3D';
import NotebookTabs from './components/NotebookTabs';
import ProjectGallery from './components/ProjectGallery';
import StickyNotesBoard from './components/StickyNotesBoard';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-neutral-950">
      {/* Hero with Spline 3D scene */}
      <Hero3D />

      {/* Notebook-style interactive tabs */}
      <NotebookTabs />

      {/* Animated project gallery */}
      <ProjectGallery />

      {/* Sticky notes sketchboard */}
      <StickyNotesBoard />

      {/* Footer */}
      <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-16 text-center text-sm text-white/60">
        Made with motion, code, and coffee.
      </footer>
    </div>
  );
};

export default App;
