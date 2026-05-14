"use client";

import { CalendarDays, MapPin } from "lucide-react";

export default function Events() {
  const events = [
    {
      title: "Winter Hackathon 2026",
      date: "Dec 15-16, 2026",
      location: "Main Auditorium",
      description: "A 24-hour hackathon focused on building AI and Web3 applications.",
      type: "Hackathon"
    },
    {
      title: "Intro to React Workshop",
      date: "Jan 10, 2027",
      location: "Lab 3",
      description: "Learn the basics of modern web development using React and TailwindCSS.",
      type: "Workshop"
    },
    {
      title: "Algorithmic Coding Challenge",
      date: "Jan 25, 2027",
      location: "Online",
      description: "Test your competitive programming skills in our monthly challenge.",
      type: "Coding Challenge"
    },
    {
      title: "Future of AI Tech Talk",
      date: "Feb 5, 2027",
      location: "Seminar Hall",
      description: "Guest speaker discussing the latest advancements in machine learning.",
      type: "Tech Talk"
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ec3750] mb-4">Upcoming Events</h2>
          <p className="text-[#3c4858] text-lg max-w-2xl mx-auto">
            Join us for hackathons, workshops, and tech talks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, idx) => (
            <div 
              key={idx} 
              className="group border border-gray-100 rounded-2xl p-6 hover:border-blue-100 hover:shadow-lg transition-all bg-white flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    {event.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">{event.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1.5">
                    <CalendarDays size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              <button className="w-full py-2.5 bg-[#ec3750] text-white rounded-lg font-bold group-hover:bg-[#d62839] transition-colors">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
