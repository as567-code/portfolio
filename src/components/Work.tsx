import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Adaptive Ternary Quantization",
    category: "Research Paper · In Preparation",
    tools: "CUDA, PyTorch, INT4/INT8 Quantization, On-Device LLM Compression",
    image: "/images/atq.svg",
    github: "",
  },
  {
    title: "N-Body Simulation Optimization",
    category: "HPC · Princeton RSE Fellowship",
    tools: "CUDA C, Intel MIC, OpenMP, Multi-Architecture Performance Engineering",
    image: "/images/nbody-sim.svg",
    github: "https://github.com/as567-code/nbody-simulation-optimization",
  },
  {
    title: "CUDA-Accelerated HYPRE",
    category: "HPC / GPU Computing · Princeton",
    tools: "CUDA C, Parallel Solvers, ParFlow, Princeton Research Computing",
    image: "/images/cuda-hypre.svg",
    github: "https://github.com/as567-code/parflow-gpu-backend-analysis",
  },
  {
    title: "LLVM ML Compiler Framework",
    category: "Systems · Compiler Engineering",
    tools: "LLVM, C++, IR Optimization, Custom CUDA Memory Coalescing Pass",
    image: "/images/llvm-compiler.svg",
    github: "https://github.com/as567-code/ml-compiler-opt-framework",
  },
  {
    title: "Multi-Agent RAG System",
    category: "Applied ML / LLM",
    tools: "LangChain, Multi-Agent Pipeline, RAG, 92% Retrieval Accuracy",
    image: "/images/rag-system.svg",
    github: "",
  },
  {
    title: "Slate Detection — CV Pipeline",
    category: "Computer Vision · MLOps",
    tools: "YOLOv8, ONNX, Synthetic Dataset Generator, REST API, Docker",
    image: "/images/cocreate.svg",
    github: "https://github.com/as567-code/Cocreate-Challenge",
  },
  {
    title: "Video Understanding Chat",
    category: "AI Application · LLM",
    tools: "Streamlit, AI Video Analysis, Multi-modal LLM, Python",
    image: "/images/video-understanding.svg",
    github: "https://github.com/as567-code/Video-Understanding-Chat-System-MVP-",
  },
  {
    title: "Voyagr — AI Travel Recommender",
    category: "Full-Stack · AI",
    tools: "Angular, Express, Gemini API, Firebase, TypeScript",
    image: "/images/voyagr.svg",
    github: "",
  },
  {
    title: "MusicSourceClassifier",
    category: "ML / Audio AI",
    tools: "CNN, Mel Spectrograms, FAISS, PyTorch, Flask, React — AI vs Human Music Detection",
    image: "/images/music-classifier.svg",
    github: "https://github.com/as567-code/MusicSourceClassifier",
  },
  {
    title: "DoctorBot-AI",
    category: "AI Application · Chatbot",
    tools: "Mistral AI, TypeScript, TARDIS Console UI, Real-Time Chat",
    image: "/images/doctorbot.svg",
    github: "https://github.com/as567-code/DoctorBot-AI",
  },
  {
    title: "starckr",
    category: "Full-Stack · TypeScript",
    tools: "Auth, RBAC, Dark Mode UI, Tested — Production-Ready TS Starter",
    image: "/images/starckr.svg",
    github: "https://github.com/as567-code/starckr",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} link={project.github || undefined} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
