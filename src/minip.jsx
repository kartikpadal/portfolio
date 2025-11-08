function Minip() {
  
    const projects = [
    {
      title: "RingZo",
      desc: "Custom ringtone generator using YouTube & Spotify links.",
      link: "https://github.com/kartikpadal/ringzo",
    },
    {
      title: "TeamSync",
      desc: "Real-time project management app with chat & notifications.",
      link: "#",
    },
    {
      title: "WeatherNow",
      desc: "A minimal weather forecasting app using OpenWeather API.",
      link: "#",
    },
    {
      title: "QuizMaster",
      desc: "MCQ quiz web app with timer, scoring and leaderboard.",
      link: "#",
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
