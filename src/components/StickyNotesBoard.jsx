import React from 'react';
import { motion } from 'framer-motion';

const colors = [
  'bg-yellow-200/90 text-yellow-950',
  'bg-pink-200/90 text-pink-950',
  'bg-lime-200/90 text-lime-950',
  'bg-sky-200/90 text-sky-950',
];

const Note = ({ id, text, color, onDelete, onChange }) => {
  return (
    <motion.div
      drag
      dragMomentum={false}
      whileHover={{ rotate: -0.5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative w-48 cursor-grab select-none rounded-md p-3 shadow-xl ${color}`}
      style={{ transform: `rotate(${(id % 7) - 3}deg)` }}
    >
      <button
        onClick={() => onDelete(id)}
        className="absolute right-1 top-1 rounded px-1 text-xs/4 text-black/60 hover:bg-black/10"
        title="Remove"
      >
        ×
      </button>
      <textarea
        value={text}
        onChange={(e) => onChange(id, e.target.value)}
        className="h-28 w-full resize-none bg-transparent outline-none"
        placeholder="Write a quick idea…"
      />
    </motion.div>
  );
};

const StickyNotesBoard = () => {
  const [notes, setNotes] = React.useState([
    { id: 1, text: 'Try a ribbon shader', color: colors[0] },
    { id: 2, text: 'Notebook paper micro-anim', color: colors[1] },
  ]);

  const addNote = () => {
    setNotes((n) => [
      ...n,
      {
        id: Date.now(),
        text: '',
        color: colors[Math.floor(Math.random() * colors.length)],
      },
    ]);
  };

  const deleteNote = (id) => setNotes((n) => n.filter((x) => x.id !== id));
  const updateNote = (id, text) => setNotes((n) => n.map((x) => (x.id === id ? { ...x, text } : x)));

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-['Mona_Sans',ui-sans-serif] text-2xl font-bold text-white">Sketchboard</h3>
        <button
          onClick={addNote}
          className="rounded-full border border-violet-500/40 bg-violet-500/20 px-4 py-2 text-sm text-violet-100 hover:bg-violet-500/30"
        >
          + Add note
        </button>
      </div>
      <div className="min-h-[220px] rounded-2xl border border-white/10 bg-neutral-900/60 p-4 backdrop-blur">
        <div className="flex flex-wrap gap-4">
          {notes.map((n) => (
            <Note key={n.id} {...n} onDelete={deleteNote} onChange={updateNote} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StickyNotesBoard;
