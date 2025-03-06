export const Contact = () => {
    return <section id="contact" className="min-h-screen flex flex-col gap-6 justify-center items-center py-10 ">

        <h1 className="text-2xl md:text-5xl text-white py-20">
            Ping me here :
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center text-black gap-6">
        <a href="#" className="border border rounded bg-white px-10 py-5" > 
            twitter
        </a>
        <a href="https://github.com/hadeedotjs" className="border border rounded bg-white px-10 py-5">
            github
        </a>
        <a href="https://www.linkedin.com/in/hadeedotjs/" className="border border rounded bg-white px-10 py-5">
            linkedin
        </a> 
        </div>

        <a className="border bg-black text-white p-5 ">
           email: hadirasoolx@gmail.com
        </a>

    </section>
}