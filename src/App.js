import resume from "./assets/ArkaBarua-CV.pdf";

function App() {
  return (
    <div className="bg-slate-900 h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="pt-32 font-semibold">
          <p className="text-blue-500">Hi, I am</p>
          <h1 className="text-7xl text-slate-50 tracking-wide">Arka Barua</h1>
          <h2 className="text-2xl text-slate-300 max-w-[35ch] mt-3">
            Software developer primarily focusing on Machine learning and Deep
            learning
          </h2>
          <p className="mt-3 text-slate-400">
            A motivated and meticulous computer science graduate with a solid
            background in data manipulation, machine learning, deep learning,
            and statistical analysis. Skilled with multiple data science
            libraries, SQL, and Python. Strong experience in feature
            engineering, model creation, and exploratory data analysis. Devoted
            to using a strong sense of problem-solving and analytical abilities
            to make meaningful contributions to practical tasks. Eager to
            contribute to creative solutions and pick up valuable data science
            knowledge.
          </p>
          <a
            href={resume}
            download="ArkaBarua-CV"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-5 bg-transparent border-2 border-blue-500 text-blue-500 py-3 px-6 rounded-md shadow">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
