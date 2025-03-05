export const Contact = () => {
    return <section id="contact" className="min-h-screen flex flex-col gap-6 justify-center items-center py-10 ">

        <h1 className="text-2xl md:text-5xl text-cyan-100 py-20">
            Ping me here :
        </h1>
        <div className="flex justify-center items-center text-black gap-6">
        <a href="https://x.com/hanzaladotjs" className="border border-4xl rounded bg-blue-100 px-10 py-5" > 
            twitter
        </a>
        <a href="https://github.com/hadeedotjs" className="border border-4xl rounded bg-blue-100 px-10 py-5">
            github
        </a>
        <a href="https://www.linkedin.com/in/hadeedotjs/" className="border border-4xl rounded bg-blue-100 px-10 py-5">
            linkedin
        </a> 
        </div>

        <a className="border bg-black text-blue-100 p-5 ">
           email: hadirasoolx@gmail.com
        </a>

    </section>
}