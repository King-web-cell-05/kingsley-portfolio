import { RevealOnScroll } from "./RevealOnScroll";
import todoAppImg from "../assets/images/todo-app.jpg";
import weatherAppImg from "../assets/images/weather-apc-org.jpg";
import loginPageImg from "../assets/images/login-page.jpg";
import webPageImg from "../assets/images/web-page-design.jpg";
import profileCardImg from "../assets/images/profile-card-pic.png";
import realEstateImg from "../assets/images/real-estate-pic.jpg"
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
            <h3>Todo-App</h3> <br />
            <img src={todoAppImg} alt="Todo App" /> <br />
            <p className="text-gray-400 mb-4">
              Intuitive Todo App, where you can effortlessly organise tasks and
              achieve your goals. Get more done in less time and feel
              accomplished everyday.{" "}
            </p>
            <div>
              {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-xfull text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246,0.1 )] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
                <a target="_blank" rel="noreferral" href="https://king-web-cell-05.github.io/todo-app/" className="text-blue-400 hover: text-blue-300 transition colors my-4">View Projects <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246,0.2 )] transition-all">
            <h3>Weather-App</h3> <br />
            <img src={weatherAppImg} alt="Weather App" /> <br />
            <p className="text-gray-400 mb-4">
              Get instant access to accurate weather forecasts, Stay prepared for anything the skies may bring and plan your day with confidence.{" "}
            </p>
            <div>
              {["HTML", "CSS",  "JavaScript"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246,0.1 )] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
                <a target="_blank" href="https://king-web-cell-05.github.io/weather-Apc/" className="text-blue-400 hover: text-blue-300 transition colors my-4">View Projects <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246,0.2 )] transition-all">
            <h3>Login-Page</h3> <br />
            <img src={loginPageImg} alt="Login Page" /> <br />
            <p className="text-gray-400 mb-4">
              A login page is the gateway to your application, providing a secure and user-friendly interface for authentication.{" "}
            </p>
            <div>
              {["HTML", "CSS"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246,0.1 )] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
                <a target="_blank" href="https://king-web-cell-05.github.io/login-design/" className="text-blue-400 hover: text-blue-300 transition colors my-4">View Projects <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>

          
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246,0.2 )] transition-all">
            <h3>Web-Page-design</h3> <br />
            <img src={webPageImg} alt="Web Page Design" /> <br />
              <p className="text-gray-400 mb-4">
               Clean lines, subtle colors, and a focus on typography come together to create a visually stunning and user-friendly web page Design.
              </p>
            <div>
              {["HTML", "CSS"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246,0.1 )] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
                <a target="_blank" href="https://king-web-cell-05.github.io/boltex/" className="text-blue-400 hover: text-blue-300 transition colors my-4">View Projects <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>

           <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246,0.2 )] transition-all">
            <h3>Profile Card Design</h3> <br />
            <img src={profileCardImg} alt="Profile Card" /> <br />
            <p className="text-gray-400 mb-4">
              A profile card is a UI element that displays a user's information
              in a concise and visually appealing manner. It typically includes
              the user's name, profile picture, and a brief bio or description.
            </p>
            <div>
              {["HTML", "CSS"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-xfull text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246,0.1 )] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
                <a target="_blank" rel="noreferral" href="https://king-web-cell-05.github.io/profile-card-design/" className="text-blue-400 hover: text-blue-300 transition colors my-4">View Projects <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>

          
           <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246,0.2 )] transition-all">
            <h3>Real Estate Website</h3> <br />
            <img src={realEstateImg} alt="Real Estate Website" /> <br />
            <p className="text-gray-400 mb-4">
              A real estate website is a platform that allows users to browse,
              buy, and sell properties. It typically includes property listings,
              search functionality, and information about the buying/selling
              process.
            </p>
            <div>
              {[ "React", "HTML", "CSS", "JavaScript" ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-xfull text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246,0.1 )] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
                <a target="_blank" rel="noreferral" href="https://king-web-cell-05.github.io/profile-card-design/" className="text-blue-400 hover: text-blue-300 transition colors my-4">View Projects <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>

        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
