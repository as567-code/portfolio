import { MdArrowOutward } from "react-icons/md";
import "./styles/Publications.css";

const publications = [
  {
    title:
      "Quantum Enhanced Tour and Travel Recommendation AI Chatbot Utilizing Bot Press",
    venue: "IGI Global",
    type: "Book Chapter",
    book: "Real-World Applications of Quantum Computers and Machine Intelligence",
    year: "2025",
    authors: "V. Simha Reddy, R. Mythili, Aditya Swaroop, B. Surya",
    doi: "10.4018/979-8-3693-3601-4.ch019",
    link: "https://www.igi-global.com/chapter/quantum-enhanced-tour-and-travel-recommendation-ai-chatbot-utilizing-bot-press/367059",
    abstract:
      "A quantum-enhanced Personal AI Travel Assistant using BotPress and quantum computing for personalized trip suggestions, itinerary creation, real-time travel updates, and seamless conversational help with lightning speed.",
  },
  {
    title:
      "A Symptom Analysis Model for the Detection of Multiple Disease Using Ensemble Machine Learning Algorithm",
    venue: "EasyChair",
    type: "Preprint",
    book: "EasyChair Preprint No. 11062",
    year: "2023",
    authors: "S. Veena, Aniket Kumar, Santhosh R Kumar, Aditya Swaroop",
    doi: "",
    link: "https://easychair.org/publications/preprint/b8Qf",
    abstract:
      "An ensemble ML system for detecting five diseases through symptom analysis using Python, R, and React — achieving high accuracy, speed, and accessibility via a cloud-hosted interface.",
  },
];

const Publications = () => {
  return (
    <div className="publications-section" id="publications">
      <div className="publications-container section-container">
        <h2>
          Research <span>&</span>
          <br />
          <span>Publications</span>
        </h2>

        <div className="publications-list">
          {publications.map((pub, index) => (
            <a
              key={index}
              className="publication-card"
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
            >
              <div className="pub-header">
                <div className="pub-badges">
                  <span className="pub-venue">{pub.venue}</span>
                  <span className="pub-type">{pub.type}</span>
                  <span className="pub-year">{pub.year}</span>
                </div>
                <div className="pub-link-icon">
                  <MdArrowOutward />
                </div>
              </div>

              <h3 className="pub-title">{pub.title}</h3>

              <p className="pub-book">{pub.book}</p>

              <p className="pub-abstract">{pub.abstract}</p>

              <p className="pub-authors">
                <span className="pub-authors-label">Authors: </span>
                {pub.authors}
              </p>

              {pub.doi && (
                <p className="pub-doi">
                  DOI: {pub.doi}
                </p>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
