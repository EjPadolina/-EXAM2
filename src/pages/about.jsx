import "../App.css";

function About() {
  return (
    <div className="page">
      <h1 className="title">About Me</h1>

      <div className="about-card">
        <p>
          Code enthusiast by day, pixel perfectionist by night. As a front-end
          developer, I transform caffeine-fueled ideas into interactive web
          wonders. From sleek UIs to bug-slaying heroics, I love making the web
          a better place—one component at a time. Let's collaborate and build
          something epic!
        </p>

        <div style={{ marginTop: 14, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <div className="card" style={{ width: 220 }}>
            <h3>Design</h3>
            <p style={{ color: "#666" }}>Pixel-driven, responsive layouts, and accessible UI.</p>
          </div>

          <div className="card" style={{ width: 220 }}>
            <h3>Development</h3>
            <p style={{ color: "#666" }}>Component-first React, tooling, and testing for quality.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
