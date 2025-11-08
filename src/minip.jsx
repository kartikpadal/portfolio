function Minip() {
  
    const projects = [
    {
      title: "RingZo",
      desc: "Custom ringtone generator using YouTube & Spotify links.",
      link: "https://github.com/kartikpadal/ringzo",
    },
    {
      title: "Rate my friend",
      desc: "Just learning and goofin around.",
      link: "https://kartikpadal.github.io/star-rating",
    },
    {
      title: "Tic-Tac-Toe",
      desc: "Wanna play games bro???",
      link: "https://kartikpadal.github.io/tic-tac-toe-game",
    },
    {
      title: "To-do list",
      desc: "Make a list of things you want to do.",
      link: "https://kartikpadal.github.io/todo-list",
    },
  ];

  return (
    <>
      <section className="minip-section">
        <h2 className="mini-title">Mini-Projects</h2>

        <div className="mini-scroll-container">
          {projects.map((p, i) => (
            <div className="mini-card" key={i}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.link} target="_blank" className="mini-btn">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Minip;
