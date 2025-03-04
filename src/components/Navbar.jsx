import { useEffect, useState } from "react"

export const Navbar = ({menu, setMenu}) => {

    useEffect(()=>{
        document.body.style.overflow = menu ? "hidden" : "";
    }, [menu])
    return (
        <nav className="fixed top-0 w-full z-40 border-b border-slate-400/10">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16 text-blue-100 ">
                    <a href="#home" className="hover:underline"> hadeedotjs </a>
                    <div className="w-7 h-5 relative cursor-pointer z-50 md:hidden" onClick={() => setMenu(menu)}>&#9776;</div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#home"
                            className= "hover:underline"
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