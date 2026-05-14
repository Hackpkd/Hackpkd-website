"use client";

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Gallery</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Memories from our hackathons and events.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, idx) => (
            <div 
              key={idx} 
              className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-sm border border-gray-100"
            >
              Image {idx + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
