import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Badge, Spinner, Alert } from 'react-bootstrap';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        // Points to your confirmed singular endpoint path
        axios.get('http://localhost:8082/api/project')
            .then((res) => {
                if (res.data && res.data.length > 0) {
                    setProjects(res.data);
                } else {
                    setErrorMsg("Connected to backend, but no projects found.");
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("API error details:", err);
                setErrorMsg("Could not fetch project data from Spring Boot server.");
                setLoading(false);
            });
    }, []);

    if (loading) return <Container className="text-center my-5 py-5"><Spinner animation="border" variant="info" /></Container>;
    if (errorMsg) return <Container className="my-5"><Alert variant="danger" className="text-center shadow-sm">{errorMsg}</Alert></Container>;

    return (
        <div style={{ backgroundColor: '#0f172a', minHeight: '85vh', padding: '40px 0', borderRadius: '15px' }}>
            
            {/* Injecting CSS Keyframe Animations and Hover States */}
            <style>{`
                .dashboard-project-card {
                    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease, border-color 0.3s ease !important;
                }
                .dashboard-project-card:hover {
                    transform: translateY(-8px) scale(1.02);
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2) !important;
                    border-color: #38bdf8 !important;
                }
                .btn-source-glow {
                    transition: all 0.2s ease-in-out !important;
                }
                .btn-source-glow:hover {
                    background-color: #38bdf8 !important;
                    color: #0f172a !important;
                    border-color: #38bdf8 !important;
                    box-shadow: 0 0 15px rgba(56, 189, 248, 0.4) !important;
                }
            `}</style>

            <Container>
                {/* Section Title */}
                <div className="text-center mb-5">
                    <div className="text-uppercase tracking-wider small fw-bold mb-2" style={{ color: '#38bdf8', letterSpacing: '2px' }}>
                        PORTFOLIO SHOWCASE
                    </div>
                    <h2 className="fw-bold display-5 text-white" style={{ letterSpacing: '-1px' }}>
                        Featured Projects
                    </h2>
                    <div style={{ height: '3px', width: '50px', background: '#38bdf8', margin: '15px auto', borderRadius: '2px' }}></div>
                </div>

                {/* Projects Rendering Grid */}
                <Row className="g-4">
                    {projects.map((project) => (
                        <Col key={project.id} md={6} lg={4}>
                            {/* Added the 'dashboard-project-card' class for animated motion */}
                            <Card className="border shadow-lg h-100 d-flex flex-column justify-content-between dashboard-project-card" style={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '16px' }}>
                                <Card.Body className="p-4">
                                    <div className="mb-3">
                                        <Badge bg="dark" className="px-2.5 py-1.5 font-monospace text-uppercase border border-secondary" style={{ color: '#10b981', fontSize: '0.75rem' }}>
                                            ● LIVE SYSTEM
                                        </Badge>
                                    </div>
                                    <Card.Title className="fw-bold text-white fs-4 mb-2">{project.title}</Card.Title>
                                    <Card.Text style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                        {project.description}
                                    </Card.Text>
                                </Card.Body>
                                
                                {/* Footer Section matching your exact JSON keys */}
                                <div className="px-4 pb-4 mt-auto">
                                    {project.technologies && (
                                        <div className="mb-3 small font-monospace" style={{ color: '#38bdf8' }}>
                                            <strong>Tools:</strong> {project.technologies}
                                        </div>
                                    )}
                                    {project.githubLink ? (
                                        /* Added the 'btn-source-glow' class for smooth button color transitions */
                                        <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-light w-100 fw-bold btn-source-glow" style={{ borderRadius: '8px' }}>
                                            View Source Code 📦
                                        </a>
                                    ) : (
                                        <span className="text-muted small d-block text-center border p-1 rounded border-secondary">Link Offline</span>
                                    )}
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Projects;

