'use client';
import Bracket from '@/components/atoms/Bracket';
import Groups from '@/components/atoms/Group';
import PlayerSelector from '@/components/modals/PlayerSelector';
import { generateBrackets, generateGroups } from '@/helpers/generateKeys';
import { useState } from 'react';

export default function TournamentPage() {
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);
  const [brackets, setBrackets] = useState<string[][]>([]);
  const [groups, setGroups] = useState<string[][]>([]);
  const [view, setView] = useState<'bracket' | 'groups' | null>(null);

  const handleSelect = (players: string[]) => {
    setSelectedPlayers(players);
    setBrackets(generateBrackets(players));
    setGroups(generateGroups(players, 4)); // Por ejemplo, 4 por grupo
    setView(null);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      <PlayerSelector onSelect={handleSelect} />
      {selectedPlayers.length > 0 && (
        <div className="flex gap-4">
          <button onClick={() => setView('bracket')} className="bg-blue-600 text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-blue-700 transition-colors">Ver Llaves</button> 

          <button onClick={() => setView('groups')} className="bg-purple-600 text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-purple-700 transition-colors">Ver Grupos</button>
        </div>
      )}
      {view === 'bracket' && <Bracket brackets={brackets} />}
      {view === 'groups' && <Groups groups={groups} />}
    </div>
  );
}
