import "../App.css";
import profile from "../assets/profile.jpg";

function Home() {
  const smallWords = ["Design", "Code", "Build", "React", "UI", "Neon"];
  const bigRepeats = new Array(6).fill("FRONTEND DEVELOPER");

  return (
    <div className="page center home-hero">
      <div className="neon-runner" aria-hidden>
        {bigRepeats.map((t, i) => (
          <span key={`big-${i}`} className={`h1-runner`} style={{ top: `${8 + i * 12}%`, animationDelay: `${-i * 2}s` }}>
            {t}
          </span>
        ))}

        {smallWords.map((w, i) => {
          const sizeClass = i % 3 === 0 ? "large" : i % 3 === 1 ? "medium" : "small";
          const colorClass = i % 4 === 0 ? "blue" : i % 4 === 1 ? "purple" : i % 4 === 2 ? "green" : "orange";
          return (
            <span key={`w-${i}`} className={`${sizeClass} ${colorClass}`}>{w}</span>
          );
        })}
      </div>

      <div className="hover-objects" aria-hidden>
        <span className="dot dot1" />
        <span className="dot dot2" />
        <span className="dot dot3" />
        <span className="dot dot4" />
        <span className="blob blob1" />
        <span className="blob blob2" />
      </div>

      <div className="content">
        <img src={profile} alt="profile" className="profile-photo" />

        <h1 className="title glow">Eduard June Padolina</h1>

        <h3>Front-End Developer</h3>

        <p style={{ marginTop: "15px", maxWidth: "600px", margin: "auto" }}>
          Front-end wizard: I speak fluent HTML and CSS, and my JavaScript jokes
          are async but always resolve. Debugging coffee-fueled dreams into
          digital magic!
        </p>
      </div>
    </div>
  );
}

export default Home;
