import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e0e6ed] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <img 
              src="https://assets.hackclub.com/flag-standalone.svg" 
              alt="Hack Club Flag" 
              className="h-12 w-auto"
            />
            <div>
              <span className="font-extrabold text-xl text-[#1f2d3d] block">HackPKD</span>
              <p className="text-[#8492a6] text-sm mt-1 max-w-sm">
                A community of high schoolers in Kerala building and shipping cool things. 
                Part of the global Hack Club network.
              </p>
            </div>
          </div>

          <div className="flex gap-6 text-sm font-bold text-[#8492a6]">
            <Link href="#home" className="hover:text-[#ec3750] transition-colors">Home</Link>
            <Link href="#about" className="hover:text-[#ec3750] transition-colors">About</Link>
            <Link href="#kerala" className="hover:text-[#ec3750] transition-colors">Kerala</Link>
            <a href="https://kerala.hackclub.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ec3750] transition-colors">Hack Club Kerala</a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-[#8492a6] font-bold text-sm">
            <a href="https://github.com/Hackpkd" target="_blank" rel="noopener noreferrer" className="hover:text-[#ec3750] transition-colors">
              GitHub
            </a>
            <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ec3750] transition-colors">
              Hack Club Home
            </a>
            <a href="https://hackclub.com/clubs" target="_blank" rel="noopener noreferrer" className="hover:text-[#ec3750] transition-colors">
              Global Clubs
            </a>
            <a href="https://hackclub.com/donate" target="_blank" rel="noopener noreferrer" className="hover:text-[#ec3750] transition-colors">
              Donate
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
