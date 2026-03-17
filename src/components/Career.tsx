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
                <h4>Software Development Intern</h4>
                <h5>Summer of Bitcoin</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built a Python/C# REST API validation tool with multi-source data
              comparison and optimized SQL query caching — reducing data
              retrieval latency by 50% and saving 500+ engineering hours
              annually.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Fellow</h4>
                <h5>Princeton University Research Computing</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Accelerated an AI research pipeline by 67% by engineering
              CUDA-accelerated Python/C++ data pipelines with GPU-parallel
              memory management. Architected CI/CD workflows, cutting ML system
              build cycles by 35% for an 8-person research team.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student Assistant — Grader & Mentor</h4>
                <h5>UT Dallas, ECSS Department</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Delivering code reviews on LLM API integration, agentic workflow
              design, RAG systems, and multi-agent orchestration across 100+
              projects. Raised average quality scores by 30% and accelerated
              technical proficiency for 300+ students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
