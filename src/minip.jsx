function Minip() {
  

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
