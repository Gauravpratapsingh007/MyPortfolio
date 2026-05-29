import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in AI & ML</h4>
                <h5>Noida International University</h5>
              </div>
              <h3>Currently</h3>
            </div>
            <p>
              4th Year student specializing in Artificial Intelligence & Machine Learning. 
              Focused on full-stack development, data structures and algorithms, and machine learning projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Portfolio Projects</h5>
              </div>
              <h3>2024-25</h3>
            </div>
            <p>
              Building real-world applications using React, Node.js, and Python. 
              Developing AI-based solutions and data analytics systems. 
              Improving skills through hands-on project development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Skills</h4>
                <h5>Frontend & Backend</h5>
              </div>
              <h3>Proficient</h3>
            </div>
            <p>
              Frontend: React.js, HTML, CSS, JavaScript | 
              Backend: Node.js, Python, REST APIs | 
              Languages: Java, Python, JavaScript | 
              Tools: Git, GitHub, VS Code, Power BI, Excel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
