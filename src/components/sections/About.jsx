// import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Javascript",
    "TypeScript",
    "TailwindCSS",
    "Zustand",
    "Redux",
    "Nextjs"
  ];

  const backendSkills = ["Node.js", "Expressjs", "MongoDB", "Postgres", "Zod"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      {/* <RevealOnScroll> */}
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-white">
            {" "}
            About Me
          </h2>


          <div className="rounded-xl p-8 border-white/10 border">

          <h1 className="text-2xl text-white"> Skills</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-white"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-white text-black py-1 px-3 rounded-full text-sm 
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-white"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-white text-black py-1 px-3 rounded-full text-sm 
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl text-white font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-white space-y-2">
                <li>
                  <strong> Bachelors of technology, Computer science & Engineering </strong> - IUST, Awantipora, Kashmir
                  (2023-2027)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold text-white mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-white">
                <div>
                  <h4 className="font-semibold text-white">
                    {" "}
                    Web2 developer intern at CyberSpark (March 2025 - Present){" "}
                  </h4>
                  <p>
                   
                  </p>
                </div>

              
              </div>
            </div>
          </div>
        </div>
      {/* </RevealOnScroll> */}
    </section>
  );
};