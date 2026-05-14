"use client";

import { motion } from "framer-motion";
import { Video, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="join" className="py-20 bg-white border-t border-[#e0e6ed]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#ec3750] mb-4">How to Join and Contact Us</h2>
        <p className="text-[#3c4858] text-lg mb-10 max-w-2xl mx-auto">
          We want to make sure you get in without any trouble. To see the exact step-by-step setup—from creating your Slack account to verifying your profile—definitely check out this walkthrough video!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <a
            href="https://www.youtube.com/watch?v=a9HrzM3NeXY"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-[#ec3750] text-white rounded-full hover:bg-[#d62839] transition-transform hover:scale-105 font-bold shadow-md w-full sm:w-auto justify-center text-lg"
          >
            <Video size={24} />
            Watch the Tutorial Video Here
          </a>
        </div>

        <div className="bg-[#f9fafc] border border-[#e0e6ed] p-8 rounded-2xl max-w-3xl mx-auto text-left flex flex-col md:flex-row items-center gap-6">
          <div className="bg-[#e0e6ed] w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 text-[#ec3750]">
            <ArrowRight size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#1f2d3d] mb-2">Once you are all set up inside Slack...</h3>
            <p className="text-[#3c4858] m-0">
              Send a message to any of us in the community so we can connect with you directly, 
              help you find the right clubs, and bring you right into our Palakkad circle!
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://hack.club/join/TLJMYS"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-white text-[#ec3750] border-2 border-[#ec3750] rounded-full hover:bg-[#f9fafc] transition-transform hover:scale-105 font-bold shadow-sm"
          >
            Join the HackPKD Club Form
          </a>
        </div>
      </motion.div>
    </section>
  );
}
