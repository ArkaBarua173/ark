import kaggleIcon from "../assets/kaggle-icon.svg";
import githubIcon from "../assets/github.svg";

export default function ProjectComponent({
  title,
  description,
  github,
  kaggle,
}) {
  return (
    <div className="text-wrap">
      <h1 className="text-xl font-bold text-white mb-4">{title}</h1>
      <div className="mb-4">{description}</div>
      <div className="flex gap-3">
        <span className="font-bold">Links:</span>
        <a href={github} className="hover:underline text-blue-300">
          <img src={githubIcon} alt="github" className="w-4 mt-1" />
        </a>{" "}
        |
        <a href={kaggle} className="hover:underline text-blue-300">
          <img src={kaggleIcon} alt="kaggle" className="w-4 mt-1" />
        </a>
      </div>
      {/* <div className="flex align-text-bottom">
        <a href={github} className="hover:underline text-blue-300">
          <img src={githubIcon} alt="github" className="w-4 mr-2 mt-1" />
        </a>
      </div>
      <div className="flex align-text-bottom">
        <a href={kaggle} className="hover:underline text-blue-300">
          <img src={kaggleIcon} alt="kaggle" className="w-4 mr-2 mt-1" />
        </a>
      </div> */}
    </div>
  );
}
