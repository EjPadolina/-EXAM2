import "../App.css";

function Projects() {
  const featured = [
    {
      id: "f1",
      title: "Facebook Clone (Demo)",
      desc: "A front-end replica focusing on timelines, likes, and comments.",
      type: "facebook",
    },
    {
      id: "f2",
      title: "Corporate Website",
      desc: "Marketing site with CMS-ready sections and responsive layouts.",
      type: "website",
    },
  ];

  const projects = [
    { id: 1, title: "Customer Support Dashboard", desc: "Chat analytics and ticketing." },
    { id: 2, title: "Live Chat System", desc: "Real-time messaging for clients." },
    { id: 3, title: "Design System", desc: "Reusable UI components library." },
    { id: 4, title: "Portfolio Site", desc: "Personal website and project showcase." },
    { id: 5, title: "Analytics Widget", desc: "Small embeddable dashboard widget." },
    { id: 6, title: "Booking Flow", desc: "Multi-step booking UI prototype." },
  ];

  return (
    <div className="page">
      <h1 className="title">Projects</h1>

      <div className="project-hero-grid">
        {featured.map((f) => (
          <div key={f.id} className={`project-hero ${f.type}`}>
            <div className="hero-badge">Featured</div>
            <div className="hero-body">
              <h3 className="hero-title">{f.title}</h3>
              <p className="hero-desc">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
