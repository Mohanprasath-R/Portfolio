import React, { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/projects");
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching projects.");
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="container py-5 vh-100" id="projects">
      <h2 className="text-center text-primary mb-4">My Projects</h2>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <p className="text-center text-danger">{error}</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projects.map((project) => (
            <div className="col" key={project.id}>
              <div className="card h-100 shadow-sm border-light rounded">
                <img
                  src={`http://localhost:5000${project.imageUrl}`}
                  className="card-img-top"
                  alt={project.title}
                  style={{ objectFit: "cover", height: "150px" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>
                </div>
                  <div className="card-footer border-0 bg-white text-center">
                  <a
                      href={project.l}
                      className="btn btn-sm btn-outline-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub of ${project.title}`}
                    >
                      Live Url
                    </a>
                    
                    <a
                      href={project.githubUrl}
                      className="btn btn-sm btn-outline-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub of ${project.title}`}
                    >
                      GitHub
                    </a>
                  </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
