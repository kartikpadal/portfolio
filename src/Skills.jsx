function Skills() {
  const skillsRow1 = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
  ];

  const skillsRow2 = [
    "Tailwind CSS",
    "Redux Toolkit",
    "Socket.IO",
    "Firebase",
    "REST API",
    "Vite",
    "Java",
    "SQL",
    "Python",
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-container">
        {/* Row 1 */}
        <div className="skills-row row-left-to-right">
          {skillsRow1.concat(skillsRow1).map((skill, index) => (
            <div className="skill-box" key={`r1-${index}`}>
              {skill}
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="skills-row row-right-to-left">
          {skillsRow2.concat(skillsRow2).map((skill, index) => (
            <div className="skill-box" key={`r2-${index}`}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
