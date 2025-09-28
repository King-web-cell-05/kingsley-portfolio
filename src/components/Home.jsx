import { RevealOnScroll } from "./RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="Home"
      className="min-h-screen w-full flex items-center justify-center 
      relative bg-black"
    >
        <RevealOnScroll>
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent leading-right">
          Hi, I'm Kingsley Dada
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I'm a full-stack developer with a passion for creating dynamic and
          responsive web applications. I specialize in building user-friendly
          interfaces and robust back-end systems that deliver seamless
          experiences.
          
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
            hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-blue-500/10 "
          >
            View Projects
          </a>
                <a
            href="#Contact"
            className="border border-blue-500/50 text-blue-500 px-3 py-3 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 
            hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover: bg-blue-500/10 hover:bg-blue-500 hover:text-white"
          >
            Contact Me
          </a>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
