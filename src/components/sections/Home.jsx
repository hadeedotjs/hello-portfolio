// import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      {/* <RevealOnScroll> */}
        <div className="text-center z-10 px-4">
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 font-sans">
            hi, i'm hadi rasool
          </h1>

          <p className="text-white text-lg mb-8 max-w-lg mx-auto">
            i'm a full stack developer, that is, bad at both frontend & backend. I'm 
            curious and passionate about the web3 space, blockchains - especially solana, economics,
            cryptography, and ai.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-white text-black py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 "
            >
              projects
            </a>

            <a
              href="#contact"
              className="border bg-black text-white py-3 px-6 rounded font-medium transition-all duration-200 
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
