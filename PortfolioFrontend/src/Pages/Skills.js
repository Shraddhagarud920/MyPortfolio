import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Badge, Spinner } from 'react-bootstrap';

function Skills() {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8082/api/skills')
            .then((res) => {
                setSkills(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Skills fetch skipped. Using baseline layers: ", err);
                setLoading(false);
            });
    }, []);

    // Technical categories structured to match premium design expectations
    const backendTech = ["Java 21", "Spring Boot", "Spring Data JPA", "RESTful APIs", "Hibernate"];
    const frontendTech = ["React.js", "JavaScript (ES6)", "Bootstrap 5", "HTML5 & CSS3", "Axios Client"];
    const databaseTech = ["MySQL", "Relational DBs", "SQL Queries", "Database Design"];

    if (loading) return <Container className="text-center my-5 py-5"><Spinner animation="border" variant="info" /></Container>;

    return (
        <div style={{ backgroundColor: '#0f172a', minHeight: '85vh', padding: '40px 0', borderRadius: '15px' }}>
            <Container>
                {/* Section Header */}
                <div className="text-center mb-5">
                    <div className="text-uppercase tracking-wider small fw-bold mb-2" style={{ color: '#38bdf8', letterSpacing: '2px' }}>
                        ENGINEERING CAPABILITIES
                    </div>
                    <h2 className="fw-bold display-5 text-white" style={{ letterSpacing: '-1px' }}>
                        Technical Expertise
                    </h2>
                    <div style={{ height: '3px', width: '50px', background: '#38bdf8', margin: '15px auto', borderRadius: '2px' }}></div>
                </div>

                {skills.length > 0 ? (
                    /* Render live records from your MySQL table if data exists */
                    <Row className="g-4 justify-content-center">
                        {skills.map((skill) => (
                            <Col key={skill.id} xs={12} sm={6} md={4} lg={3}>
                                <Card className="border-0 shadow-sm p-2 text-center" style={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px' }}>
                                    <Card.Body>
                                        <div className="text-info mb-2 fs-4">⚙️</div>
                                        <h5 className="fw-bold text-white mb-0">{skill.name}</h5>
                                        <Badge style={{ backgroundColor: '#0f172a', color: '#38bdf8', border: '1px solid #334155' }} className="mt-2 font-monospace">Live Sync</Badge>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                ) : (
                    /* Categorized Dashboard Matrices when your table is empty */
                    <Row className="g-4">
                        {/* Backend Layer Card */}
                        <Col md={4}>
                            <Card className="border-0 shadow-lg h-100 p-2" style={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '16px' }}>
                                <Card.Body>
                                    <h4 className="fw-bold mb-4 d-flex align-items-center gap-2" style={{ color: '#38bdf8' }}>
                                        <span>☕</span> Backend Core
                                    </h4>
                                    {backendTech.map((tech, index) => (
                                        <div key={index} className="d-flex justify-content-between align-items-center mb-3 p-2.5 rounded" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
                                            <span style={{ color: '#cbd5e1', fontWeight: '500' }}>{tech}</span>
                                            <Badge style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.2)' }} className="px-2.5 py-1.5">Expert</Badge>
                                        </div>
                                    ))}
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Frontend Layer Card */}
                        <Col md={4}>
                            <Card className="border-0 shadow-lg h-100 p-2" style={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '16px' }}>
                                <Card.Body>
                                    <h4 className="fw-bold mb-4 d-flex align-items-center gap-2" style={{ color: '#38bdf8' }}>
                                        <span>💻</span> Frontend UI
                                    </h4>
                                    {frontendTech.map((tech, index) => (
                                        <div key={index} className="d-flex justify-content-between align-items-center mb-3 p-2.5 rounded" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
                                            <span style={{ color: '#cbd5e1', fontWeight: '500' }}>{tech}</span>
                                            <Badge style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.2)' }} className="px-2.5 py-1.5">Advanced</Badge>
                                        </div>
                                    ))}
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Database Layer Card */}
                        <Col md={4}>
                            <Card className="border-0 shadow-lg h-100 p-2" style={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '16px' }}>
                                <Card.Body>
                                    <h4 className="fw-bold mb-4 d-flex align-items-center gap-2" style={{ color: '#38bdf8' }}>
                                        <span>🗄️</span> Database Engine
                                    </h4>
                                    {databaseTech.map((tech, index) => (
                                        <div key={index} className="d-flex justify-content-between align-items-center mb-3 p-2.5 rounded" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
                                            <span style={{ color: '#cbd5e1', fontWeight: '500' }}>{tech}</span>
                                            <Badge style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.2)' }} className="px-2.5 py-1.5">Proficient</Badge>
                                        </div>
                                    ))}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                )}
            </Container>
        </div>
    );
}

export default Skills;
