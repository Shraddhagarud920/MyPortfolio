import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div style={{
            background: 'radial-gradient(circle at 10% 20%, rgb(26, 42, 108) 0%, rgb(43, 62, 133) 41.3%, rgb(215, 60, 67) 100.2%)',
            color: '#fff',
            minHeight: '85vh',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            margin: '20px 0',
            position: 'relative'
        }}>
            {/* Injecting CSS Keyframe Animations directly into the document */}
            <style>{`
                @keyframes floatParticle {
                    0% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
                    50% { transform: translateY(-20px) rotate(180deg); opacity: 0.4; }                    100% { transform: translateY(0px) rotate(360deg); opacity: 0.2; }
                }
                @keyframes glowText {
                    0% { text-shadow: 0 0 10px rgba(255,222,89,0.2); }
                    50% { text-shadow: 0 0 25px rgba(255,222,89,0.6); }
                    100% { text-shadow: 0 0 10px rgba(255,222,89,0.2); }
                }
                .moving-bg-circle {
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    background: rgba(0, 1, 1, 0.1);
                    border-radius: 50%;
                    filter: blur(50px);
                    animation: floatParticle 8s infinite ease-in-out;
                    pointer-events: none;
                }
                .btn-hover-move {
                    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
                }
                .btn-hover-move:hover {
                    transform: translateY(-4px) !important;
                    box-shadow: 0 8px 20px rgba(0,0,0,0.3) !important;
                }
            `}</style>

            {/* Background floating glow nodes */}
            <div className="moving-bg-circle" style={{ top: '10%', left: '5%' }}></div>
            <div className="moving-bg-circle" style={{ bottom: '10%', right: '5%', animationDelay: '4s' }}></div>

            <Container className="py-5" style={{ zIndex: 2 }}>
                <Row className="align-items-center justify-content-center">
                    <Col lg={10} className="text-center">
                        <span className="badge bg-warning text-dark mb-4 px-3 py-2 text-uppercase tracking-wider fw-bold" style={{ borderRadius: '30px' }}>
                            Available For Hire
                        </span>
                        <h1 className="display-1 fw-bold mb-3" style={{ letterSpacing: '-2px', lineHeight: '1.1' }}>
                            Design. Code. <span style={{ color: '#ffde59', animation: 'glowText 3s infinite ease-in-out', display: 'inline-block' }}>Deliver.</span>
                        </h1>
                        <p className="fs-2 fw-light text-light mb-5 opacity-90">
                            Hi, I am <strong className="fw-bold text-white">Shraddha Garud</strong>. <br />
                            I build enterprise-ready full-stack applications with Java and React.
                        </p>
                        <div className="d-flex justify-content-center gap-3 mt-4">
                            <Button as={Link} to="/projects" variant="light" size="lg" className="px-5 py-3 fw-bold shadow-sm btn-hover-move" style={{ borderRadius: '10px', color: '#1a2a6c' }}>
                                Explore Projects 🚀
                            </Button>
                            <Button as={Link} to="/about" variant="outline-light" size="lg" className="px-5 py-3 fw-bold btn-hover-move" style={{ borderRadius: '10px' }}>
                                About Me
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;

