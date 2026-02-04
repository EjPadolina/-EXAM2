import "../App.css";

function Projects() {
  return (
    <div className="page">
      <h1 className="title">Projects</h1>

      <div className="flex">
        <div className="card" style={{ width: "300px" }}>
          <h3>Customer Support Dashboard</h3>
          <p>Handles chat analytics and ticket management.</p>
        </div>

        <div className="card" style={{ width: "300px" }}>
          <h3>Live Chat System</h3>
          <p>Real time messaging platform for clients.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
