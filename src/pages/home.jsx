import "../App.css";
import profile from "../assets/profile.jpg";

function Home() {
  return (
    <div className="page center">
      <img
        src={profile}
        alt="profile"
        style={{
          borderRadius: "15%",
          marginBottom: "10px",
          width: "800px",
          height: "800px",
        }}
      />

      <h1 className="title">Eduard June Padolina</h1>

      <h3>Front-End Developer</h3>

      <p style={{ marginTop: "15px", maxWidth: "600px", margin: "auto" }}>
        Front-end wizard: I speak fluent HTML and CSS, and my JavaScript jokes
        are async but always resolve. Debugging coffee-fueled dreams into
        digital magic!
      </p>
    </div>
  );
}

export default Home;
