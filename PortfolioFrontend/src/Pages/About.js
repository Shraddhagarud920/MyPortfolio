import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Spinner, Alert, Row, Col, Card, Badge } from 'react-bootstrap';

function About() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8082/api/profile')
            .then((response) => {
                if (response.data && response.data.length > 0) {
                    setProfile(response.data); 
                } else {
                    setError("No profile row found in your MySQL database table.");
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Connection details:", err);
                setError("Could not connect to Spring Boot server.");
                setLoading(false);
            });
    }, []);

    if (loading) return <Container className="text-center my-5 py-5"><Spinner animation="border" variant="info" /></Container>;
    if (error) return <Container className="my-5"><Alert variant="dark" className="shadow-sm border-start border-danger border-3 style={{ background: '#1e293b', color: '#94a3b8' }}">{error}</Alert></Container>;

    return (
        <div style={{ backgroundColor: '#0f172a', minHeight: '85vh', padding: '40px 0', borderRadius: '15px' }}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={10} lg={8}>
                        
                        {/* Premium Dark Surface Card */}
                        <Card className="border-0 shadow-lg p-4" style={{ backgroundColor: '#1e293b', borderRadius: '16px' }}>
                            <Card.Body>
                                
                                {/* Header Grid Block */}
                                <Row className="align-items-center mb-4 text-center text-md-start">
                                    <Col md="auto" className="mb-3 mb-md-0">
                                        {/* Contrast Steel Monogram Container */}
                                        <div className="text-dark d-flex align-items-center justify-content-center shadow-sm mx-auto" style={{ 
                                            width: '80px', 
                                            height: '80px', 
                                            backgroundColor: '#38bdf8', // Soft Sky Blue Accent
                                            borderRadius: '12px',
                                            fontSize: '2rem',
                                            fontWeight: '700'
                                        }}>
                                            {profile?.name ? profile.name.charAt(0) : 'S'}
                                        </div>
                                    </Col>
                                    <Col>
                                        <h2 className="fw-bold mb-1 text-white" style={{ letterSpacing: '-0.5px' }}>
                                            {profile ? profile.name : 'Shraddha Garud'}
                                        </h2>
                                        <div className="fw-medium text-uppercase small tracking-wider" style={{ letterSpacing: '1px', color: '#38bdf8' }}>
                                            Full-Stack Software Engineer
                                        </div>
                                    </Col>
                                </Row>

                                <hr style={{ borderColor: '#334155' }} />

                                {/* Biography Segment */}
                                <div className="my-4">
                                    <h6 className="fw-bold mb-3" style={{ color: '#94a3b8', letterSpacing: '0.5px' }}>PROFESSIONAL PROFILE</h6>
                                    <p className="lh-lg fs-5" style={{ color: '#cbd5e1' }}>
                                        I am an ambitious Full-Stack Developer specializing in robust enterprise applications. 
                                        Backed by powerful Java frameworks like <strong style={{ color: '#38bdf8' }}>Spring Boot</strong> on the backend and dynamic user experiences 
                                        powered by <strong style={{ color: '#38bdf8' }}>React</strong> on the frontend, I engineer clean, efficient, and scaleable web apps.
                                    </p>
                                </div>

                                {/* Dark-Theme Premium Badges */}
                                <div className="d-flex flex-wrap gap-2 my-4">
                                    <Badge style={{ background: '#334155', color: '#f1f5f9', border: '1px solid #475569' }} className="px-3 py-2 rounded">Java EE</Badge>
                                    <Badge style={{ background: '#334155', color: '#f1f5f9', border: '1px solid #475569' }} className="px-3 py-2 rounded">Spring Boot REST</Badge>
                                    <Badge style={{ background: '#334155', color: '#f1f5f9', border: '1px solid #475569' }} className="px-3 py-2 rounded">ReactJS</Badge>
                                    <Badge style={{ background: '#334155', color: '#f1f5f9', border: '1px solid #475569' }} className="px-3 py-2 rounded">MySQL</Badge>
                                </div>

                                {/* Clean Matte Data-Link Subcard */}
                                <div className="p-3 mt-4 d-flex align-items-center justify-content-between rounded-3" style={{ 
                                    backgroundColor: '#0f172a',
                                    border: '1px solid #334155'
                                }}>
                                    <div className="d-flex align-items-center gap-2">
                                        <span style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 8px #10b981' }}></span>
                                        <span className="small font-monospace" style={{ color: '#94a3b8' }}>Database Connectivity Status:</span>
                                        <span className="text-white fw-semibold small font-monospace">my_portfolio Schema Live</span>
                                    </div>
                                    <Badge bg="dark" className="px-2 py-1 font-monospace text-uppercase border border-secondary" style={{ fontSize: '0.7rem', color: '#10b981' }}>Sync Active</Badge>
                                </div>

                            </Card.Body>
                        </Card>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
