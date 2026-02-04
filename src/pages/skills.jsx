import "../App.css";

function Skills() {
  const skills = [
    "mongoDB",
    "Node.js",
    "Problem Solving",
    "HTML/CSS",
    "JavaScript",
    "React",
    "Accessibility",
    "Design Systems",
    "Testing",
  ];

  const logos = [
    { src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", alt: "GitHub" },
    { src: "https://static.wikia.nocookie.net/logopedia/images/a/a7/Vercel_favicon.svg/revision/latest?cb=20221026155821", alt: "Vercel" },
    { src: "https://cdn.freebiesupply.com/logos/large/2x/visual-studio-code-logo-svg-vector.svg", alt: "Visual Studio" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/960px-MongoDB_Logo.svg.png", alt: "MongoDB" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png", alt: "Node" },
  ];

  return (
    <div className="page">
      <h1 className="title">Skills</h1>

      <div className="skills-hero">
        <div className="skills-bg" aria-hidden>
          <span className="blob a" />
          <span className="blob b" />
          <span className="blob c" />
          <span className="blob d" />
          <span className="blob e" />
        </div>

        <div className="skills-content">
          <div className="logos">
            {logos.map((l, i) => (
              <div className="logo" key={i} title={l.alt}>
                <img src={l.src} alt={l.alt} />
              </div>
            ))}
          </div>

          <div className="flex" style={{ justifyContent: "center" }}>
            {skills.map((skill, index) => (
              <div className="card-skills" key={index} style={{ width: "140px", textAlign: "center" }}>
                <h3>{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
