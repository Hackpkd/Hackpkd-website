"use client";

import { motion } from "framer-motion";
import { Users, Globe, Wrench } from "lucide-react";

export default function Kerala() {
  return (
    <section id="kerala" className="py-20 bg-white border-t border-[#e0e6ed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1f2d3d] mb-6">
            Build the future of Kerala,<br/>
            <span className="text-[#ec3750]">one club at a time.</span>
          </h2>
          <p className="text-lg text-[#3c4858] font-medium">
            Hack Club Kerala is a community of high schoolers. We build, ship, and grow together. 
            Join the movement and start your own club today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#f9fafc] border border-[#e0e6ed] p-8 rounded-2xl shadow-sm text-center"
          >
            <div className="w-16 h-16 bg-[#e0e6ed] text-[#ec3750] rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#1f2d3d] mb-4">Start a Hack Club in Kerala</h3>
            <p className="text-[#8492a6] mb-6">
              The best way to learn is by doing. Start a club at your school and build a community of makers. 
              We provide the resources, the curriculum, and the community.
            </p>
            <a 
              href="https://hackclub.com/clubs/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-white border-2 border-[#ec3750] text-[#ec3750] font-bold rounded-full hover:bg-[#ec3750] hover:text-white transition-colors"
            >
              Apply to Create a Club
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#f9fafc] border border-[#e0e6ed] p-8 rounded-2xl shadow-sm text-center"
          >
            <div className="w-16 h-16 bg-[#e0e6ed] text-[#ec3750] rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#1f2d3d] mb-4">View Active Clubs</h3>
            <p className="text-[#8492a6] mb-6">
              Discover other high school hackers and active Hack Clubs running across Kerala and the world.
            </p>
            <a 
              href="https://hackclub.com/map" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-white border-2 border-[#ec3750] text-[#ec3750] font-bold rounded-full hover:bg-[#ec3750] hover:text-white transition-colors"
            >
              Explore Map
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#f9fafc] border border-[#e0e6ed] p-8 rounded-2xl shadow-sm text-center"
          >
            <div className="w-16 h-16 bg-[#e0e6ed] text-[#ec3750] rounded-full flex items-center justify-center mx-auto mb-6">
              <Wrench size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#1f2d3d] mb-4">Our Events</h3>
            <p className="text-[#8492a6] mb-6">
              Participate in global Hack Club events, game jams, and maker challenges.
            </p>
            <a 
              href="https://hackclub.com/events/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-white border-2 border-[#ec3750] text-[#ec3750] font-bold rounded-full hover:bg-[#ec3750] hover:text-white transition-colors"
            >
              View Events
            </a>
          </motion.div>
        </div>

        <div className="bg-[#ec3750] rounded-3xl p-8 md:p-12 text-center text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-md">
          <div className="text-left max-w-2xl">
            <h2 className="text-3xl font-bold mb-2">Hack Club Kerala</h2>
            <p className="opacity-90 text-lg">
              A community of high schoolers in Kerala building and shipping cool things. 
              Part of the global Hack Club network.
            </p>
          </div>
          <a 
            href="https://kerala.hackclub.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-[#ec3750] font-bold rounded-full hover:bg-gray-100 transition-transform hover:scale-105 shadow-md flex-shrink-0"
          >
            Visit Hack Club Kerala
          </a>
        </div>
      </div>
    </section>
  );
}
