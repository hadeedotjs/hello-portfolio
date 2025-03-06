import { useEffect, useState } from "react"


export const Loading = ({onComplete}) => {

    const [text, setText] = useState("")

    const theText = "hello, world computer !"

    useEffect(() =>{
        let index = 0;
        const interval = setInterval(()=>{
            setText(theText.substring(0,index))
            index++

            if(index> theText.length){
                clearInterval(interval)
                setTimeout(() => {onComplete()}, 1000)
            }
        },75)

        return ()=> clearInterval(interval)
    }, [onComplete])

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
            <div className="mb-4 text-white text-4xl font-mono font-bold ">
                {text}
            </div>
            {/* <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden"> 
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
                </div>
            </div> */}
        </div>
    )
}