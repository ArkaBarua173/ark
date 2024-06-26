import resume from "./assets/ArkaBarua-CV.pdf";
import BackToTopButton from "./components/BackToTopButton";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import SocialLinks from "./components/Social";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen min-w-screen">
      <div className="container mx-auto">
        <h1 className="text-3xl text-center text-white font-bold pt-20 pb-10">
          Welcome
        </h1>
        <main className="lg:flex lg:gap-4 lg:justify-between">
          <section className="mt-10 p-8 bg-slate-950 rounded-md border-4 shadow-lg border-gray-200 md:min-w-max">
            <p className="text-gray-100 font-semibold">Hi, I am</p>
            <h1 className="text-7xl text-gray-200 tracking-wide font-bold">
              Arka Barua
            </h1>
            <h2 className="text-[15pt] text-gray-300 mx-auto max-w-[40ch] mt-3 font-semibold">
              Seeking an internship as a Machine Learning Engineer with a strong
              focus on machine learning and advanced statistical analysis.
            </h2>
            <div className="flex gap-4">
              <a
                href={resume}
                download="ArkaBarua-CV"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-5 bg-transparent border-2 border-gray-200 text-gray-200 py-2 px-4 rounded-md shadow">
                  Download Resume
                </button>
              </a>

              <a href="#projects">
                <button className="mt-5 font-bold bg-gray-200 border-2 border-slate-900 text-slate-900 py-2 px-4 rounded-md shadow">
                  ⬇️ Projects
                </button>
              </a>
            </div>
          </section>
          <Skill />
        </main>
        <section className="text-center mt-16">
          <SocialLinks />
        </section>
        <section id="projects" className="pt-14">
          <Projects />
        </section>
      </div>
      <BackToTopButton />
    </div>
  );
}

export default App;
