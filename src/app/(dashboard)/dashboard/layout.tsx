import { auth } from "@/lib/auth";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch authentication credentials server-side inside our layout context wrapper
  const session = await auth();

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col text-zinc-100">
      <DashboardHeader 
        userEmail={session?.user?.email} 
        userName={session?.user?.name} 
      />
      <main className="flex-1 bg-gradient-to-b from-zinc-950 to-black relative">
        {children}
      </main>
    </div>
  );
}
