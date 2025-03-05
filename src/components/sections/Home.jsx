// import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      {/* <RevealOnScroll> */}
        <div className="text-center z-10 px-4">
          <h1 className="text-cyan-100 text-5xl md:text-7xl font-bold mb-6 font-sans">
            hi, i'm hadi rasool
          </h1>

          <p className="text-blue-100 text-lg mb-8 max-w-lg mx-auto">
            i'm a full stack developer, that is, bad at both frontend & backend. I'm 
            curious and passionate about the web3 space, blockchains - especially solana, economics,
            cryptography, and ai.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-100 text-gray-800 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 "
            >
              projects
            </a>

            <a
              href="#contact"
              className="border bg-gray-600 text-blue-100 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 "
            >
              ping me 
            </a>
          </div>
        </div>
      {/* </RevealOnScroll> */}
    </section>
  );
};
