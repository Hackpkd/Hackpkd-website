"use client";

import { motion } from "framer-motion";
import { Users, Calendar, Code, Laptop } from "lucide-react";

export default function Hero() {
  const stats = [
    { icon: <Users size={20} />, value: "13-18", label: "Years Old" },
    { icon: <Calendar size={20} />, value: "0$", label: "Completely Free" },
    { icon: <Code size={20} />, value: "Global", label: "Network" },
    { icon: <Laptop size={20} />, value: "Gear", label: "Earn Prizes" },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <span className="text-[#ec3750] font-bold tracking-wider text-sm uppercase mb-4 block">
          A Hack Club Community in Palakkad
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#1f2d3d] tracking-tight mb-6">
          HackPKD
        </h1>
        <p className="text-xl text-[#3c4858] mb-10 leading-relaxed font-medium">
          If you are between 13 and 18 years old and living in Palakkad, this is a massive opportunity 
          to step up, learn together, and build something great in the tech and making scene!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://hack.club/join/TLJMYS"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#ec3750] text-white font-bold rounded-full hover:bg-[#d62839] transition-transform hover:scale-105 shadow-md w-full sm:w-auto"
          >
            Join HackPKD
          </a>
          <a
            href="https://hackclub.com/slack"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-[#ec3750] border-2 border-[#ec3750] font-bold rounded-full hover:bg-gray-50 transition-transform hover:scale-105 w-full sm:w-auto"
          >
            Join Global Slack
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl"
      >
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-shadow">
            <div className="text-[#ec3750] mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-[#1f2d3d]">{stat.value}</div>
            <div className="text-sm text-[#8492a6] font-medium">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
