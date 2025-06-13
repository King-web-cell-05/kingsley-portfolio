import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {
  const frontendSkills = ["HTML", "CSS", "React", "JavaScript", "TailwindCSS", "TypeScript"];

  const backendSkills = ["Node.js", "C#", "Next.js"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 "
    >
        <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About me
        </h2>
        <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y">
          <p>
            Passionate developer with expertise in building scalable web
            applications and creating innovative solutions.As a versitile full stack developer, I craft seamless digital experiences by bridging the gap between front-end finesse and back-end expertise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span 
                  key={key}
                  className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246,0.2 )] transition" >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span 
                  key={key}
                  className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246,0.2 )] transition" >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">  📘 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                BSc in Computer Science from the University of Ife, Nigeria.
                    </li>              
                <li>
                    Relevant Coursework: Data Structures,Web Development,Graphic designing 
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
             <div className="space-y-4 text-gray-300">
                <div>
                    <h4 className="font-semibold">Software Engineer at Microsoft (2022-Present) </h4>
                    <p>
                        Developed and maintained microservices for cloud-based applications
                    </p>
                </div>

                  <div>
                    <h4 className="font-semibold">Intern at DEF Startups (2021)</h4>
                    <p>
                       Assisted in building front-end components and integration REST APIs
                    </p>
                </div>
             </div>
            </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
