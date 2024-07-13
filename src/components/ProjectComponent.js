import kaggleIcon from "../assets/kaggle-icon.svg";
import githubIcon from "../assets/github.svg";
import tableauIcon from "../assets/tableau.svg";

export default function ProjectComponent({
  title,
  description,
  github,
  kaggle,
  tableau,
}) {
  return (
    <div className="text-wrap">
      <h1 className="text-xl font-bold text-white mb-4">{title}</h1>
      <div className="mb-4">
        <span className="font-bold">Description: </span>
        {description}
      </div>
      <div className="flex gap-3">
        <span className="font-bold">Links:</span>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-blue-300"
        >
          <img src={githubIcon} alt="github" className="w-4 mt-1" />
        </a>{" "}
        |
        {kaggle && (
          <a
            href={kaggle}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-300"
          >
            <img src={kaggleIcon} alt="kaggle" className="w-4 mt-1" />
          </a>
        )}
        {tableau && (
          <a
            href={tableau}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-300"
          >
            <img src={tableauIcon} alt="tableau" className="w-4 mt-1" />
          </a>
        )}
      </div>
    </div>
  );
}
