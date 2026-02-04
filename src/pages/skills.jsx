import "../App.css";

function Skills() {
  const skills = ["Communication", "Customer Support", "Problem Solving"];

  return (
    <div className="page">
      <h1 className="title">Skills</h1>

      <div className="flex">
        {skills.map((skill, index) => (
          <div
            className="card-skills"
            key={index}
            style={{ width: "120px", textAlign: "center" }}
          >
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
