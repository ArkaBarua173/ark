export default function Skill() {
  const language_items = [
    { text: "Python" },
    { text: "SQL" },
    { text: "JavaScript" },
  ];

  const package_items = [
    { text: "Pandas" },
    { text: "PostgreSQL" },
    { text: "Scikit-learn" },
    { text: "React" },
  ];

  const viz_items = [
    { text: "Matplotlib" },
    { text: "Seaborn" },
    { text: "Tableau" },
    { text: "PowerBI" },
  ];

  return (
    <div className="py-4 mt-10 text-gray-50 text-wrap">
      <div className="pb-4 text-2xl tracking-wide font-bold">Skills</div>
      <h3 className="text-base font-semibold">💻 Programming Languages</h3>
      <ul className="flex flex-shrink gap-2">
        {language_items.map((item, index) => (
          <li key={index} className=" py-4">
            <span className="text-green-400 font-extrabold mr-2">&#10003;</span>
            {item.text}
          </li>
        ))}
      </ul>

      <h3 className="text-base font-semibold">📚 Libraries</h3>
      <ul className="flex flex-shrink gap-2">
        {package_items.map((item, index) => (
          <li key={index} className=" py-4">
            <span className="text-green-400 font-extrabold mr-2">&#10003;</span>
            {item.text}
          </li>
        ))}
      </ul>

      <h3 className="text-base font-semibold">📊 Visualization Tools</h3>
      <ul className="flex flex-shrink gap-2">
        {viz_items.map((item, index) => (
          <li key={index} className=" py-4">
            <span className="text-green-400 font-extrabold mr-2">&#10003;</span>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
