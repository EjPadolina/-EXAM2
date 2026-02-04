import "../App.css";
import { useEffect, useState } from "react";

function Contact() {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", comment: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("reviews");
    if (saved) setReviews(JSON.parse(saved));
    else
      setReviews([
        {
          id: 1,
          name: "Demo User",
          email: "demo@demo.com",
          comment: "Great experience working with this dev!",
          date: new Date().toLocaleString(),
        },
      ]);
  }, []);

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.comment.trim()) return;

    if (editingId) {
      setReviews((r) =>
        r.map((it) => (it.id === editingId ? { ...it, ...form, date: new Date().toLocaleString() } : it))
      );
      setEditingId(null);
    } else {
      const next = { ...form, id: Date.now(), date: new Date().toLocaleString() };
      setReviews((r) => [next, ...r]);
    }

    setForm({ name: "", email: "", comment: "" });
  }

  function startEdit(review) {
    setEditingId(review.id);
    setForm({ name: review.name, email: review.email || "", comment: review.comment });
  }

  function handleDelete(id) {
    if (!confirm("Delete this review?")) return;
    setReviews((r) => r.filter((it) => it.id !== id));
  }

  function cancelEdit() {
    setEditingId(null);
    setForm({ name: "", email: "", comment: "" });
  }

  return (
    <div className="page">
      <h1 className="title">Contact</h1>
      <div className="contact-grid">
        <div className="contact-card">
          <h3>Contact Info</h3>
          <p>📞 <strong>+63 908 603 6965</strong></p>
          <p>📧 <strong>Eduardjunepadolina2@gmail.com</strong></p>
          <p>💬 <strong>Ej Padolina</strong></p>
          <hr />
          <p className="muted" style={{ marginTop: 8 }}>
            I'm available for front-end work, collaboration, and freelance
            projects. Send a message and I'll reply as soon as I can.
          </p>

          <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
            <a className="btn secondary" href="#">Message</a>
            <a className="btn" href="#">Download CV</a>
          </div>
        </div>

        <div className="review-card">
          <h3>Reviews</h3>

          <form onSubmit={handleSubmit} style={{ display: "grid", gap: 8, marginTop: 8 }}>
            <input
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              aria-label="Your name"
            />
            <input
              name="email"
              placeholder="Your email (optional)"
              value={form.email}
              onChange={handleChange}
              aria-label="Your email"
            />
            <textarea
              name="comment"
              placeholder="Your review"
              value={form.comment}
              onChange={handleChange}
              rows={4}
              aria-label="Your review"
            />

            <div style={{ display: "flex", gap: 8 }}>
              <button className="btn primary" type="submit">
                {editingId ? "Save" : "Add Review"}
              </button>
              {editingId && (
                <button type="button" className="btn ghost" onClick={cancelEdit}>
                  Cancel
                </button>
              )}
            </div>
          </form>

          <div className="review-list" style={{ marginTop: 12 }}>
            {reviews.length === 0 && <div className="muted">No reviews yet — be the first!</div>}

            {reviews.map((r) => (
              <div className="review-item" key={r.id}>
                <div className="review-avatar">{(r.name || "?").split(" ").map(n => n[0]).slice(0,2).join("")}</div>
                <div className="review-body">
                  <div className="review-meta">
                    <strong>{r.name}</strong> • <span>{r.date}</span>
                  </div>
                  <div>{r.comment}</div>
                  <div className="review-actions">
                    <button className="btn" onClick={() => startEdit(r)}>
                      Edit
                    </button>
                    <button className="btn" onClick={() => handleDelete(r.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
