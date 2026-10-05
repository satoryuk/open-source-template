export default function DashboardIndex() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      <header className="flex justify-between items-center border-b border-zinc-800 pb-5">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Management Console</h1>
          <p className="text-zinc-400 text-sm mt-1">Real-time template analytical baseline endpoints.</p>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Total Platform Base Users", "Gross Analytical Target", "System Performance Metrics"].map((title, i) => (
          <div key={i} className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 backdrop-blur-sm">
            <h3 className="text-zinc-400 text-sm font-medium">{title}</h3>
            <p className="text-2xl font-bold text-white mt-2">{(i + 1) * 124}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
