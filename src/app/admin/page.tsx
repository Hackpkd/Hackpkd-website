"use client";

import { useState } from "react";
import Link from "next/link";
import { PlusCircle, Image as ImageIcon, Calendar as CalendarIcon, Code, LogOut } from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("events");

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col">
        <div className="mb-8 px-4 flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
            <span className="text-white font-bold">H</span>
          </div>
          <span className="font-bold text-xl">Admin</span>
        </div>

        <nav className="flex-1 space-y-1">
          <button
            onClick={() => setActiveTab("events")}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "events" ? "bg-black text-white" : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <CalendarIcon size={18} />
            Events
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "projects" ? "bg-black text-white" : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Code size={18} />
            Projects
          </button>
          <button
            onClick={() => setActiveTab("gallery")}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "gallery" ? "bg-black text-white" : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <ImageIcon size={18} />
            Gallery
          </button>
        </nav>

        <div className="pt-4 border-t border-gray-200">
          <Link href="/" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors">
            <LogOut size={18} />
            Back to Site
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black capitalize">{activeTab} Management</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
            <PlusCircle size={18} />
            Add New
          </button>
        </header>

        <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-gray-500">
          <div className="flex flex-col items-center justify-center gap-4 py-12">
            {activeTab === "events" && <CalendarIcon size={48} className="text-gray-300" />}
            {activeTab === "projects" && <Code size={48} className="text-gray-300" />}
            {activeTab === "gallery" && <ImageIcon size={48} className="text-gray-300" />}
            <p>No items found. Click "Add New" to create one.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
