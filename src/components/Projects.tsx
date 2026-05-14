"use client";

import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 border-t border-[#e0e6ed]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f2d3d] mb-4">Student Projects</h2>
        <p className="text-[#8492a6] text-lg max-w-2xl mx-auto mb-12">
          Check out what our community has been building.
        </p>

        <div className="bg-white border-2 border-dashed border-[#e0e6ed] rounded-3xl p-16 max-w-3xl mx-auto flex flex-col items-center justify-center text-[#8492a6]">
          <div className="w-20 h-20 bg-[#f9fafc] text-[#ec3750] rounded-full flex items-center justify-center mb-6">
            <Wrench size={40} />
          </div>
          <h3 className="text-2xl font-bold text-[#1f2d3d] mb-2">Projects Coming Soon!</h3>
          <p className="text-lg">
            Our members are currently hard at work building awesome new things. 
            Check back later to see our latest shipped projects.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
