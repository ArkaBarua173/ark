import kaggleIcon from "../assets/kaggle-icon.svg";
import githubIcon from "../assets/github.svg";

export default function ProjectComponent({
  title,
  description,
  github,
  kaggle,
}) {
  return (
    <div>
      <h1 className="text-xl font-bold text-white mb-4">{title}</h1>
      <div className="mb-4">{description}</div>
      <div className="flex align-text-bottom">
        <span>
          <img src={githubIcon} alt="github" className="w-4 mr-2 mt-1" />
        </span>{" "}
        <a href={github} className="hover:underline text-blue-300">
          {github}
        </a>
      </div>
      <div className="flex align-text-bottom">
        <span>
          <img src={kaggleIcon} alt="kaggle" className="w-4 mr-2 mt-1" />
        </span>
        <a href={kaggle} className="hover:underline text-blue-300">
          {kaggle}
        </a>
      </div>
    </div>
  );
}
