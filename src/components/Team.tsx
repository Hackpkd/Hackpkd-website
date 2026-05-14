"use client";

export default function Team() {
  const team = [
    { name: "Karthik T S", role: "Community Lead" },
    { name: "A.Adarsh", role: "Community Lead" },
    { name: "Thejus", role: "Community Lead" },
  ];

  return (
    <section id="team" className="py-20 bg-[#f9fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ec3750] mb-4">Meet The Team</h2>
          <p className="text-[#3c4858] text-lg max-w-2xl mx-auto">
            The students driving HackPKD. Send a message to any of us on Slack to get connected!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm border border-[#e0e6ed] hover:shadow-md transition-shadow">
              <div className="w-24 h-24 bg-[#e0e6ed] rounded-full mb-4 flex items-center justify-center text-[#8492a6] font-bold text-xl">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-[#1f2d3d]">{member.name}</h3>
              <p className="text-[#ec3750] font-medium mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
