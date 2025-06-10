export default function Bracket({ brackets }: { brackets: string[][] }) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-bold text-white">Llaves</h2>
      {brackets.map((pair, idx) => (
        <div key={idx} className="border p-2 rounded bg-white shadow">
          {pair.length === 2 ? (
            <p>{pair[0]} vs {pair[1]}</p>
          ) : (
            <p>{pair[0]} (Sin rival)</p>
          )}
        </div>
      ))}
    </div>
  );
}
