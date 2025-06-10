import { RevealOnScroll } from "./RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246,0.2 )] transition-all">
            <h3>Todo-App</h3>
            <p className="text-gray-400 mb-4">
              Intuitive Todo App, where you can effortlessly organise tasks and
              achieve your goals. Get more done in less time and feel
              accomplished everyday.{" "}
            </p>
            <div>
              {["React", "TailwindCSS", "TypeScript"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246,0.1 )] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover: text-blue-300 transition colors my-4">View Projects <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246,0.2 )] transition-all">
            <h3>Weather-App</h3>
            <p className="text-gray-400 mb-4">
              Get instant access to accurate weather forecasts, Stay prepared for anything the skies may bring and plan your day with confidence.{" "}
            </p>
            <div>
              {["React", "TailwindCSS", "TypeScript"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246,0.1 )] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover: text-blue-300 transition colors my-4">View Projects <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
