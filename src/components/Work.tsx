import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { getAssetPath } from "../utils/paths";

const projects = [
  {
    title: "Citizen Issue Reporting System",
    category: "Civic-Tech | In Progress · 2025",
    tools: "FastAPI, PostgreSQL, PostGIS, React, Leaflet, Docker, JWT",
    desc:
      "Geospatial civic-tech platform for location-based issue reporting. Features JWT-authenticated admin resolution workflows and a scalable REST API with Swagger/OpenAPI docs. Architected for municipal IoT integration aligned with UN SDG 11.",
    image: getAssetPath("images/project1.png"),
  },
  {
    title: "Blockchain Records Management",
    category: "Decentralised Application",
    tools: "React, Node.js, MySQL, Ethereum, Solidity, SHA-256",
    desc:
      "Decentralized document verification platform with Ethereum smart contracts and SHA-256 hashing for tamper-proof audit trails. Role-based dashboards with expiry validation and on-chain verification.",
    image: getAssetPath("images/project2.png"),
  },
  {
    title: "LLM Fine-Tuning on NCERT Data",
    category: "AI / NLP",
    tools: "Python, Google Colab, LLM, NLP, Fine-Tuning",
    desc:
      "Fine-tuned an open-source LLM on 1.2 lakh+ curated NCERT examples. Achieved measurable improvement in curriculum-specific QA accuracy with a full data cleaning & preprocessing pipeline.",
    image: getAssetPath("images/project3.png"),
  },
  {
    title: "Mandir Connect",
    category: "Full-Stack Web Application",
    tools: "React, Node.js, Google Maps API, Razorpay, DBMS",
    desc:
      "Temple management platform with event booking, online donations, Google Maps integration for discovery, and Razorpay payment gateway. Separate role-based dashboards for users and temple admins.",
    image: getAssetPath("images/project4.png"),
  },
  {
    title: "IoT Voice-Automated Wheelchair",
    category: "IoT / Embedded Systems",
    tools: "ESP32, Firebase, Arduino, Blynk, IoT",
    desc:
      "Voice-controlled wheelchair prototype with ultrasonic obstacle detection and grid-based automated path control for hands-free mobility. Built with ESP32 and Firebase real-time sync.",
    image: getAssetPath("images/project5.png"),
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
