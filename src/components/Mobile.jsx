import { useEffect, useState } from "react"

export const Mobile = ({ menu, setMenu }) => {
    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 flex flex-col items-center justify-center
                       transition-all duration-300 ease-in-out
  
                       ${menu
                    ? "h-screen opacity-100 pointer-events-auto"
                    : "h-0 opacity-0 pointer-events-none"
                }
                     `}
        >
            <button
                onClick={() => setMenu(false)}
                className="absolute top-6 right-6 text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
                
            >
               x
            </button>
        </div>
    )
}