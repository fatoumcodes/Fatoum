import { useState } from "react";

function App() {
    const [activeProject, setActiveProject] = useState(null);
    const [activeSkill, setActiveSkill] = useState(null);

    return (
        <>
            <header className="relative z-10 border-b border-fuchsia-400/10">
                <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
                    <h2 className="font-mono text-fuchsia-400 text-lg tracking-wide">
                        FATOUM CODES
                    </h2>

                    <div className="hidden sm:flex items-center gap-8 text-sm text-gray-400">
                        <a href="#about" className="hover:text-fuchsia-400 transition">
                            About
                        </a>
                        <a href="#learning" className="hover:text-fuchsia-400 transition">
                            Skills
                        </a>
                        <a href="#projects" className="hover:text-fuchsia-400 transition">
                            Projects
                        </a>
                        <a href="#contact" className="hover:text-fuchsia-400 transition">
                            Contact
                        </a>
                    </div>
                </nav>
            </header>

            <main>
                <section
                    id="hero"
                    className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
                >
                    <div className="absolute w-72 h-72 bg-fuchsia-500/10 blur-3xl rounded-full top-20 left-10"></div>

                    <div className="absolute w-96 h-96 bg-purple-600/10 blur-3xl rounded-full bottom-0 right-0"></div>

                    <div className="relative z-10">
                        <p className="font-mono text-fuchsia-400 text-sm md:text-base mb-6 tracking-wide">
                            &lt;fatoum-codes/&gt;
                        </p>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight mb-6">
                            I'm Fatuma.
                            <br />
                            <span className="text-fuchsia-400">
                                AI Software Engineer
                            </span>
                        </h1>

                        <p className="max-w-2xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed mb-10">
                            I build thoughtful digital experiences with JavaScript,
                            React and AI, combining creativity with a background
                            in healthcare.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="#projects"
                                className="px-7 py-3 rounded-full bg-fuchsia-500 text-white font-medium hover:bg-fuchsia-400 hover:scale-105 transition"
                            >
                                View My Projects →
                            </a>

                            <a
                                href="#contact"
                                className="px-7 py-3 rounded-full border border-fuchsia-400/60 text-fuchsia-300 font-medium hover:bg-fuchsia-400/10 hover:scale-105 transition"
                            >
                                Let's Work Together
                            </a>
                        </div>
                    </div>
                </section>

                <section
                    id="about"
                    className="max-w-5xl mx-auto px-6 py-28"
                >
                    <div className="max-w-3xl">
                        <p className="font-mono text-fuchsia-400 text-sm mb-4">
                            about_me
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            A different path into tech.
                        </h2>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                I'm transitioning from a career in healthcare into
                                software and AI engineering.
                            </p>

                            <p>
                                My background taught me how to solve problems under
                                pressure, communicate clearly and approach challenges
                                with curiosity. I'm bringing those skills into
                                technology while building products from the ground up.
                            </p>
                        </div>
                    </div>
                </section>

                <section
                    id="learning"
                    className="border-y border-fuchsia-400/10 bg-white/[0.02]"
                >
                    <div className="max-w-5xl mx-auto px-6 py-28">
                        <p className="font-mono text-fuchsia-400 text-sm mb-4">
                            currently_learning
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold mb-12">
                            Building my AI engineering toolkit.
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                "JavaScript",
                                "React",
                                "LLM APIs",
                                "RAG",
                                "AI Agents"
                            ].map((skill) => (
                                <button
                                    key={skill}
                                    onClick={() =>
                                        setActiveSkill(
                                            activeSkill === skill ? null : skill
                                        )
                                    }
                                    className={`text-left p-5 rounded-2xl border transition ${
                                        activeSkill === skill
                                            ? "border-fuchsia-400 bg-fuchsia-400/10 shadow-lg shadow-fuchsia-500/10"
                                            : "border-fuchsia-400/20 bg-white/5 hover:border-fuchsia-400/50"
                                    }`}
                                >
                                    <p className="text-lg font-semibold">
                                        {skill}
                                    </p>

                                    <p className="text-sm text-gray-500 mt-2">
                                        {skill === "JavaScript" &&
                                            "Programming & web development"}

                                        {skill === "React" &&
                                            "Interactive interfaces"}

                                        {skill === "LLM APIs" &&
                                            "AI-powered applications"}

                                        {skill === "RAG" &&
                                            "Retrieval augmented generation"}

                                        {skill === "AI Agents" &&
                                            "AI workflows & tools"}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    id="projects"
                    className="max-w-6xl mx-auto px-6 py-28"
                >
                    <p className="font-mono text-fuchsia-400 text-sm mb-4">
                        projects
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mb-14">
                        Things I've built.
                    </h2>

                    <div className="grid gap-6 md:grid-cols-3">
                        <article
                            onClick={() =>
                                setActiveProject(
                                    activeProject === "sakura" ? null : "sakura"
                                )
                            }
                            className="group rounded-3xl border border-fuchsia-400/20 bg-white/[0.04] p-7 hover:border-fuchsia-400/60 hover:bg-fuchsia-400/[0.04] transition duration-300 cursor-pointer"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-3xl">🌸</span>
                                <span className="text-xs font-mono text-gray-500">
                                    01
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold mb-4">
                                Sakura Club
                            </h3>

                            <p className="text-gray-400 leading-relaxed mb-6">
                                A desktop and web widget built with JavaScript,
                                Tailwind CSS and Electron.
                            </p>

                            {activeProject === "sakura" && (
                                <div className="mb-6 text-sm text-gray-300 space-y-2">
                                    <p>
                                        Interactive UI and desktop application
                                        development.
                                    </p>

                                    <p>
                                        Click the links below to explore the project.
                                    </p>
                                </div>
                            )}

                            <div className="flex gap-5 text-sm">
                                <a
                                    href="https://fatoumcodes.github.io/Sakura_club/"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-fuchsia-400 hover:text-fuchsia-300"
                                >
                                    Live Demo →
                                </a>

                                <a
                                    href="https://github.com/fatoumcodes/Sakura_club"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-fuchsia-400 hover:text-fuchsia-300"
                                >
                                    GitHub →
                                </a>
                            </div>
                        </article>

                        <article
                            onClick={() =>
                                setActiveProject(
                                    activeProject === "reading-room"
                                        ? null
                                        : "reading-room"
                                )
                            }
                            className="group rounded-3xl border border-fuchsia-400/20 bg-white/[0.04] p-7 hover:border-fuchsia-400/60 hover:bg-fuchsia-400/[0.04] transition duration-300 cursor-pointer"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-3xl">📚</span>

                                <span className="text-xs font-mono text-gray-500">
                                    02
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold mb-4">
                                The Reading Room
                            </h3>

                            <p className="text-gray-400 leading-relaxed mb-6">
                                An interactive book recommendation project exploring
                                JavaScript, DOM manipulation and dynamic content.
                            </p>

                            {activeProject === "reading-room" && (
                                <div className="mb-6 text-sm text-gray-300 space-y-2">
                                    <p>
                                        An interactive reading experience built
                                        with JavaScript.
                                    </p>

                                    <p>
                                        Explore books through dynamic content and
                                        recommendations.
                                    </p>
                                </div>
                            )}

                            <a
                                href="https://javascript-project-alpha-five.vercel.app/"
                                onClick={(e) => e.stopPropagation()}
                                className="text-fuchsia-400 hover:text-fuchsia-300 text-sm"
                            >
                                Live Demo →
                            </a>
                        </article>

                        <article
                            onClick={() =>
                                setActiveProject(
                                    activeProject === "referral"
                                        ? null
                                        : "referral"
                                )
                            }
                            className="group rounded-3xl border border-fuchsia-400/20 bg-white/[0.04] p-7 hover:border-fuchsia-400/60 hover:bg-fuchsia-400/[0.04] transition duration-300 cursor-pointer"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-3xl">✦</span>

                                <span className="text-xs font-mono text-gray-500">
                                    03
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold mb-4">
                                AI Referral Letter Assistant
                            </h3>

                            <p className="text-gray-400 leading-relaxed mb-6">
                                An AI-powered healthcare tool that helps clinicians
                                draft structured referral letters using an LLM API.
                            </p>

                            {activeProject === "referral" && (
                                <div className="mb-6 text-sm text-gray-300 space-y-2">
                                    <p>
                                        Built with React, JavaScript, Express and
                                        an LLM API.
                                    </p>

                                    <p>
                                        Designed around your healthcare-to-AI
                                        engineering journey.
                                    </p>
                                </div>
                            )}

                            <a
                                href="https://ai-referral-letter-assistant.vercel.app"
                                onClick={(e) => e.stopPropagation()}
                                className="text-fuchsia-400 hover:text-fuchsia-300 text-sm"
                            >
                                Live Demo →
                            </a>
                        </article>
                    </div>
                </section>

                <section
                    id="contact"
                    className="border-t border-fuchsia-400/10"
                >
                    <div className="max-w-4xl mx-auto px-6 py-28 text-center">
                        <p className="font-mono text-fuchsia-400 text-sm mb-4">
                            contact
                        </p>

                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            Let's Connect.
                        </h2>

                        <p className="text-gray-400 text-lg mb-10">
                            Interested in my work? Find me online.
                        </p>

                        <div className="flex justify-center gap-8 text-sm">
                            <a
                                href="#"
                                className="text-fuchsia-400 hover:text-fuchsia-300 transition"
                            >
                                GitHub
                            </a>

                            <a
                                href="#"
                                className="text-fuchsia-400 hover:text-fuchsia-300 transition"
                            >
                                LinkedIn
                            </a>

                            <a
                                href="#"
                                className="text-fuchsia-400 hover:text-fuchsia-300 transition"
                            >
                                CV
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t border-fuchsia-400/10 text-center py-8 text-gray-500 text-sm">
                <p>
                    © 2026 Fatoum Codes · Built with React, Tailwind CSS & JavaScript
                </p>
            </footer>
        </>
    );
}

export default App;