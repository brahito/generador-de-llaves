export default function Groups({ groups }: { groups: string[][] }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-white">Grupos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((group, idx) => (
          <div key={idx} className="border p-4 bg-white rounded shadow">
            <h3 className="font-semibold mb-2">Grupo {idx + 1}</h3>
            <ul className="list-disc ml-4">
              {group.map(player => (
                <li className="text-black" key={player}>{player}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
