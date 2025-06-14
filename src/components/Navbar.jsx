import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen? "hidden" : ""
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="text-2xl font-bold text-white hover:text-blue-500 transition-colors duration-300"
          >
            Kingsley <span className="text-blue-500">Dada</span>
          </a>
          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
          onClick={() => setMenuOpen((prev)=> !prev )}>
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#Home"
              className="text-gray-300 hover:text-white transition colors"
            >
              {""}
              Home{""}
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition colors"
            >
              {""}
              About{""}
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition colors"
            >
              {""}
              Projects{""}
            </a>
            <a
              href="#Contact"
              className="text-gray-300 hover:text-white transition colors"
            >
              {""}
              Contacts{""}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
