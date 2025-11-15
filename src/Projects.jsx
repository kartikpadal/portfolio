function Projects(){

    const mainProjects = [
    {
      title: "TeamSync",
      desc: "A real-time project management web app with chat, notifications, and admin control. Built with React, Socket.IO, Express.js, MongoDB, and JWT.",
      link: "https://github.com/Kaustubh-Upare/ProjectManagement",
    },
    {
      title: "RingZo",
      desc: "Web app that lets users paste YouTube/Spotify links, trim favorite segments, and download them as ringtones. Responsive UI built with React and Node.js.",
      link: "https://github.com/kartikpadal/ringzo",
    }
  ];
    

  return (
    <>
      <section className="projects-section">
        <h2 className="projects-title">Main Projects</h2>

        <div className="projects-scroll-container">
          {mainProjects.map((p, i) => (
            <div className="project-card" key={i}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-btn">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;