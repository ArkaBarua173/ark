import github from "../assets/GitHub_Logo_White.png";
import kaggle from "../assets/kaggle-logo-transparent-300.png";
import LinkedIn from "../assets/LinkedIn-Blue-40@2x.png";

export default function SocialLinks() {
  return (
    <div className="text-gray-50">
      <h2 className="font-bold text-2xl mb-10">🖇️ Profile Links</h2>
      <ul className="flex w-64 mx-auto align-middle justify-between">
        <li>
          <a
            href="https://github.com/ArkaBarua173"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              className="w-auto h-6 object-cover"
              alt="github_logo"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.kaggle.com/arkabarua173"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={kaggle}
              className="w-[60px] h-6 object-cover"
              alt="kaggle_logo"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/arka-barua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedIn}
              className="w-[80px] h-5 object-cover"
              alt="linkedin_logo"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
