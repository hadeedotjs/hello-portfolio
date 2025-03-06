import { useEffect, useState } from "react"

export const Mobile = ({ menu, setMenu }) => {
    return (
        <div
            className={`fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center
                       transition-all duration-300 ease-in-out text-white md:hidden
  
                       ${menu ? "h-screen opacity-100 pointer-events-auto":"h-screen opacity-0 pointer-events-none"}`}
        >
            <button
                onClick={() => {setMenu(false)}
                }
                className="absolute top-6 right-6 text-white focus:outline-none cursor-pointer"
                aria-label="Close Menu"

                
            >
               ^
            </button>
            <div className="flex flex-col items-center space-y-6">
            <a
                            href="#home"
                            className="hover:underline text-2xl"
                            onClick={()=> setMenu(false)}
                        >
                            {" "}
                            Home
                        </a>
                        <a
                            href="#about"
                            className="hover:underline text-2xl"
                            onClick={()=> setMenu(false)}
                        >
                            {" "}
                            About{" "}
                        </a>
                        <a
                            href="#projects"
                            className="hover:underline text-2xl"
                            onClick={()=> setMenu(false)}
                        >
                            {" "}
                            Projects{" "}
                        </a>
                        <a
                            href="#contact"
                            className="hover:underline text-2xl"
                            onClick={()=> setMenu(false)}
                        >
                            {" "}
                            Contact{" "}
                        </a>
                        </div>
        </div>
    )
}