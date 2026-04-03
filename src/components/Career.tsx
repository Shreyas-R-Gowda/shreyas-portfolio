import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br />
          background &amp; certifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. in Computer Science Engineering</h4>
                <h5>R.V. College of Engineering, Bengaluru</h5>
              </div>
              <h3>2023–2027</h3>
            </div>
            <p>CGPA: 8.73 (Ongoing)</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>PUC — Karnataka State Board</h4>
                <h5>Jnanasudha P.U. College, Karkala</h5>
              </div>
              <h3>2021–2023</h3>
            </div>
            <p>
              98.5% | KCET Rank: 325 | JEE Mains: 98.9 Percentile
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class 10 — CBSE</h4>
                <h5>Podar International School, Shivamogga</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>94.2%</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CCNA: Introduction to Networks</h4>
                <h5>Cisco Networking Academy</h5>
              </div>
              <h3>Jun 2025</h3>
            </div>
            <p>Certification in networking fundamentals, IP addressing, and routing protocols.</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Vibe Coding 101 with Replit</h4>
                <h5>DeepLearning.AI</h5>
              </div>
              <h3>Aug 2025</h3>
            </div>
            <p>Practical AI-assisted development course covering rapid prototyping with LLM tooling.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
