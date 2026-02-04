import "../App.css";

function Contact() {
  return (
    <div className="page">
      <h1 className="title">Contact</h1>

      <div className="flex">
        <div className="card" style={{ width: "300px" }}>
          <h3>Contact Info</h3>
          <p>📞 +63 917 345 6789</p>
          <p>📧 rob@example.com</p>
          <p>💬 Discord: grobbyx</p>
        </div>

        <div className="card" style={{ width: "300px" }}>
          <h3>Reviews</h3>
          <p>⭐ Excellent communication skills</p>
          <p>⭐ Friendly and helpful support</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
