'use client';
import { useState } from 'react';
import players from '@/data/players.json';

export default function PlayerSelector({ onSelect }: { onSelect: (players: string[]) => void }) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (name: string) => {
    setSelected(prev =>
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
  };

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-white">Selecciona jugadores</h1>
      <div className="grid grid-cols-2 gap-2">
        {players.map(p => (
          <button
            key={p.pseudonym}
            onClick={() => toggle(p.pseudonym)}
            className={`p-2 rounded border hover:cursor-pointer transition-colors ${selected.includes(p.pseudonym) ? 'bg-blue-500 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-300'}`}
          >
            {p.pseudonym} 
          </button>
        ))}
      </div>
      <button
        onClick={() => onSelect(selected)}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-green-700 transition-colors"
      >
        Generar torneo
      </button>
    </div>
  );
}
