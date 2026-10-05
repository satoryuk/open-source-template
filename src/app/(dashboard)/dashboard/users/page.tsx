"use client";

import React from "react";
import { FadeUp } from "@/components/ui/animations/MotionWrappers";
import { UserCheck, ShieldAlert, MoreVertical, Trash2 } from "lucide-react";

export default function UserManagementPage() {
  // Mock administrative database records representation
  const dummyUsers = [
    { name: "Demo Developer", email: "admin@template.com", role: "Administrator", status: "Active" },
    { name: "Sarah Connor", email: "sarah@cyberdyne.io", role: "Contributor", status: "Active" },
    { name: "John Doe", email: "john.doe@sandbox.net", role: "User", status: "Pending" },
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 py-6 md:py-8 space-y-8 animate-in fade-in duration-300">
      <FadeUp>
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">User Management</h1>
          <p className="text-zinc-500 text-xs md:text-sm mt-1">Review active workspace sessions, assign security roles, and manage permissions.</p>
        </div>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="w-full bg-zinc-900/40 border border-zinc-800 rounded-xl overflow-hidden backdrop-blur-sm">
          {/* Responsive Custom Data Table Wrapper */}
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-950/40 text-zinc-400 font-medium">
                  <th className="p-4">Profile Details</th>
                  <th className="p-4 hidden sm:table-cell">Assigned Role</th>
                  <th className="p-4">Status Flag</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                {dummyUsers.map((user, idx) => (
                  <tr key={idx} className="hover:bg-zinc-900/30 transition-colors">
                    <td className="p-4">
                      <div className="font-semibold text-white">{user.name}</div>
                      <div className="text-zinc-500 text-xs mt-0.5">{user.email}</div>
                    </td>
                    <td className="p-4 hidden sm:table-cell">
                      <span className="flex items-center gap-1.5 text-zinc-400">
                        {user.role === "Administrator" ? <ShieldAlert size={14} className="text-emerald-400" /> : <UserCheck size={14} />}
                        {user.role}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide border ${
                        user.status === "Active" 
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                          : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="inline-flex items-center gap-2">
                        <button 
                          type="button"
                          className="p-1 text-zinc-500 hover:text-red-400 rounded transition-colors cursor-pointer"
                          aria-label="Delete user"
                        >
                          <Trash2 size={15} />
                        </button>
                        <button 
                          type="button"
                          className="p-1 text-zinc-500 hover:text-white rounded transition-colors cursor-pointer"
                          aria-label="More options"
                        >
                          <MoreVertical size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </FadeUp>
    </div>
  );
}
