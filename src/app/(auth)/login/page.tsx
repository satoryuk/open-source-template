export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 backdrop-blur-md shadow-2xl">
        <h2 className="text-2xl font-bold text-center text-white">Welcome Back</h2>
        <p className="text-zinc-500 text-sm text-center mt-2">Sign in to your template sandbox</p>
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">Email Address</label>
            <input type="email" placeholder="you@example.com" className="w-full mt-2 bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 transition-all" required />
          </div>
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">Password</label>
            <input type="password" placeholder="••••••••" className="w-full mt-2 bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 transition-all" required />
          </div>
          <button type="submit" className="w-full py-3 mt-2 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-lg transition-colors">
            Continue with Email
          </button>
        </form>
      </div>
    </div>
  );
}
