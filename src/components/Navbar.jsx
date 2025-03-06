import { useEffect, useState } from "react"
import dazai from "/src/assets/dazai.png"

export const Navbar = ({ menu, setMenu }) => {

    useEffect(() => {
        document.body.style.overflow = menu ? "hidden" : "";
    },[menu])
    return (
        <nav className="fixed top-0 w-full z-40 border-b border-slate-400/10">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16 text-green-500 ">
                    <div className="flex  items-center">
                        <img className="w-12 h-12" src={dazai} alt="404"></img>
                        <a href="#home" > &nbsp; hadeedotjs/hanzala.sol</a>
                    </div>

                    {/* <div className={`w-7 h-5 relative cursor-pointer z-50 md:hidden ${menu ? "opacity-0" : "opacity-100"}`} onClick={() => setMenu((prev)=> !prev) }>&#9776;</div> */}

                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#home"
                            className="hover:underline"
                        >
                            {" "}
                            Home
                        </a>
                        <a
                            href="#about"
                            className="hover:underline"
                        >
                            {" "}
                            About{" "}
                        </a>
                        <a
                            href="#projects"
                            className="hover:underline"
                        >
                            {" "}
                            Projects{" "}
                        </a>
                        <a
                            href="#contact"
                            className="hover:underline"
                        >
                            {" "}
                            Contact{" "}
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}