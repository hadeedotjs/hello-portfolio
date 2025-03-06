import project from "/src/assets/project.jpeg"

export const Projects = () => {
    return <section id="projects" className="min-h-screen flex justify-center items-center">
        <div className="flex flex-col p-15 w-auto h-auto md:w-max md:h-max">
            
            <h1 className="text-2xl md:text-5xl text-white py-4">  
                Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full-screen rounded-5xl border-white/10 border gap-5">
                <div className="border border-white border-solid md:border-blue-800 rounded w-full  h-full ">
                    <img src={project} alt="hi" className="w-max h-50 md:h-80"></img>
                    <p className="text-white"> hijkhuihuhuhhuhuiuihh</p>
                </div>
                <div className="border border-white border-solid md:border-blue-800 rounded w-full  h-full" >
                    <img src={project} alt="hi" className="w-max h-50 md:h-80"></img>
                    <p className="text-white">hjyfyuyuioijojiojoijoij</p>
                </div>
                <div className="border border-white border-solid md:border-blue-800 rounded w-full  h-full">
                    <img src={project} alt="hi" className="w-max h-50 md:h-80"></img>
                    <p className="text-white">hjyfyuyuioijojiojoijoij</p>
                </div>
                <div className="border border-white border-solid md:border-blue-800 rounded w-full  h-full ">
                    <img src={project} alt="hi" className="w-max h-50 md:h-80"></img>
                    <p className="text-white">hjyfyuyuioijojiojoijoij</p>
                </div>
            </div>
        </div>
    </section>
}