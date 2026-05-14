"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who can join HackPKD?",
      a: "Any student with a passion for learning, building, and coding can join. You don't need prior experience, just a willingness to learn!"
    },
    {
      q: "How much does it cost?",
      a: "Nothing! Joining HackPKD and attending our events is completely free for all students."
    },
    {
      q: "Do I need to know how to code?",
      a: "Not at all. We have beginners starting from scratch as well as advanced developers. Our workshops are designed to teach you what you need to know."
    },
    {
      q: "How do I get involved?",
      a: "Join our Slack community, attend our next workshop or hackathon, and start chatting with other members!"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">FAQ</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-gray-200 rounded-xl overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
              >
                <span className="font-semibold text-black">{faq.q}</span>
                <ChevronDown 
                  className={`text-gray-400 transition-transform ${openIdx === idx ? "rotate-180" : ""}`} 
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-4 text-gray-600">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
