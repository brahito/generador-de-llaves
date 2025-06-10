export function generateBrackets(players: string[]): string[][] {
  const shuffled = [...players].sort(() => Math.random() - 0.5);
  const brackets: string[][] = [];

  for (let i = 0; i < shuffled.length; i += 2) {
    if (i + 1 < shuffled.length) {
      brackets.push([shuffled[i], shuffled[i + 1]]);
    } else {
      brackets.push([shuffled[i]]); // jugador solo en llave
    }
  }

  return brackets;
}

export function generateGroups(players: string[], groupSize: number) {
  const shuffled = [...players].sort(() => Math.random() - 0.5);
  const groups: string[][] = [];

  for (let i = 0; i < shuffled.length; i += groupSize) {
    groups.push(shuffled.slice(i, i + groupSize));
  }

  return groups;
}
