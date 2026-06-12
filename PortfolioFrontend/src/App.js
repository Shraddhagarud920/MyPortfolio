import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'; 
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

// Imported pages from your Pages folder
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';

function App() {
  // Your updated professional email address configuration
  const myEmail = "sharddhagarud20@gmail.com"; 

  return (
    <div className="App" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <BrowserRouter>
        
        {/* Injecting smooth horizontal dashboard hover animations */}
        <style>{`
          .nav-hover-link {
            transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out !important;
          }
          .nav-hover-link:hover {
            color: #38bdf8 !important;
            background-color: rgba(255, 255, 255, 0.05);
            border-radius: 6px;
          }
          .btn-resume {
            transition: all 0.2s ease-in-out !important;
          }
          .btn-resume:hover {
            transform: translateY(-2px);
            box-shadow: 0 0 12px rgba(56, 189, 248, 0.4);
          }
        `}</style>

        {/* Classic Horizontal Dashboard Header Bar */}
        <Navbar expand="lg" style={{ backgroundColor: '#0f172a', padding: '12px 0' }} variant="dark" className="shadow-sm mb-4">
          <Container>
            {/* Left Brand Area */}
            <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 d-flex align-items-center" style={{ color: '#fff', letterSpacing: '0.5px' }}>
              <span style={{ color: '#38bdf8', marginRight: '8px' }}>📋</span>
              SG <span style={{ fontSize: '1rem', color: '#94a3b8', marginLeft: '8px', fontWeight: 'normal' }}>| Dashboard</span>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />

            {/* Horizontal Dashboard Navigation Links */}
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto mt-2 mt-lg-0">
                <Nav.Link as={Link} to="/" className="px-3 mx-1 text-white-50 fw-medium nav-hover-link" style={{ fontSize: '0.95rem' }}>
                  🏠 Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className="px-3 mx-1 text-white-50 fw-medium nav-hover-link" style={{ fontSize: '0.95rem' }}>
                  👤 About
                </Nav.Link>
                <Nav.Link as={Link} to="/skills" className="px-3 mx-1 text-white-50 fw-medium nav-hover-link" style={{ fontSize: '0.95rem' }}>
                  ⚙️ Skills
                </Nav.Link>
                <Nav.Link as={Link} to="/projects" className="px-3 mx-1 text-white-50 fw-medium nav-hover-link" style={{ fontSize: '0.95rem' }}>
                  💻 Projects
                </Nav.Link>
              </Nav>

              {/* Right Side: Clickable Email & Live Download Resume Button Node */}
              <Nav className="ms-auto align-items-center gap-3 mt-3 mt-lg-0">
                {/* Clickable Email Display */}
                <a href={`mailto:${myEmail}`} className="text-decoration-none small font-monospace fw-bold px-2 py-1 text-light-50" style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#38bdf8'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>
                  📧 {myEmail}
                </a>

                {/* The Resume Button linked to your original file name */}
                <Button 
                  href="/SHRADDHA%20GARUD.pdf" 
                  download="SHRADDHA_GARUD_Resume.pdf" 
                  variant="outline-info" 
                  size="sm" 
                  className="fw-bold btn-resume px-3" 
                  style={{ borderRadius: '20px', fontSize: '0.85rem' }}
                >
                  📄 Resume
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Main Content Area Grid Container */}
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Container>

      </BrowserRouter>
    </div>
  );
}

export default App;

