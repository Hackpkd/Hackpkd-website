"use client";

import { motion } from "framer-motion";
import { PackageOpen } from "lucide-react";

export default function About() {
  const yswsItems = [
    "MacBooks & iPads (Arcade)",
    "Sprig (Gaming Consoles)",
    "Hackpad (Custom Macropads)",
    "Onboard (Custom PCBs)",
    "Blot (Drawing Plotters)",
  ];

  return (
    <section id="about" className="py-20 bg-[#f9fafc] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-[#1f2d3d] text-lg leading-relaxed"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#ec3750] mb-8 text-center">
            What is Hack Club?
          </h2>
          
          <p>
            For anyone who hasn't heard of it yet, <strong>Hack Club</strong> is an incredibly cool, 
            completely free, global non-profit community focused entirely on learning. It is a space 
            where teens teach themselves how to code, develop awesome things, and build whatever projects 
            they dream up.
          </p>

          <p>
            And it is not just about our local group. Joining us opens the doors to an entire global network 
            where we will help you explore and join many different specialized clubs inside the ecosystem 
            based on whatever you are into—whether that is hardware, game design, web development, or anything else!
          </p>

          {/* YSWS Section */}
          <div className="bg-white border border-[#e0e6ed] rounded-2xl pt-8 pb-4 mt-12 shadow-sm text-center overflow-hidden">
            <div className="w-16 h-16 bg-[#ec3750] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <PackageOpen size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#1f2d3d] mb-4">You Ship, We Ship (YSWS)</h3>
            <p className="text-[#3c4858] mb-8 max-w-2xl mx-auto px-4">
              You Ship We Ship is Hack Club's flagship program where learning by doing pays off—literally. 
              You build a project (you ship), submit it, and you get rewarded with amazing real-world hardware, 
              grants, and cool swag (we ship).
            </p>

            {/* Scrolling Bar for 5 Ships */}
            <div className="relative flex overflow-x-hidden w-full bg-[#f9fafc] border-y border-[#e0e6ed] py-4 mb-8">
              <motion.div
                className="flex whitespace-nowrap gap-8 px-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 20,
                }}
              >
                {/* Duplicate the array to create a seamless infinite loop */}
                {[...yswsItems, ...yswsItems].map((item, index) => (
                  <span 
                    key={index} 
                    className="text-[#1f2d3d] font-bold text-lg bg-white px-6 py-2 rounded-full border border-[#e0e6ed] shadow-sm flex-shrink-0"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>

            <a 
              href="https://ysws.hackclub.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 mb-4 bg-[#ec3750] text-white font-bold rounded-full hover:bg-[#d62839] transition-transform hover:scale-105 shadow-md"
            >
              Explore YSWS Bounties
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
