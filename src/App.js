import { useState } from 'react';
import CitationCard from './components/CitationCard';
import { TEST_CITATIONS } from './TEST_CITATIONS';
import './App.css';
import Homepage from './components/HomePage';
import RandomPage from './components/RandomPage';
import LicenseInfo from './components/LicenseInfo';

import { Link, Route, Routes } from 'react-router-dom';
import CitationDetails from './components/CitationDetails';
import { Container, Nav, Navbar } from 'react-bootstrap';

function App() {
  const [citationList, setCitationList] = useState(TEST_CITATIONS);

  return (
    <div>
      <Navbar className='nav' bg='light' data-bs-theme='light'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            Citation Records
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/'>
              Main Page
            </Nav.Link>
            <Nav.Link as={Link} to='/random'>
              A Random Record
            </Nav.Link>
            <Nav.Link as={Link} to='/LicenseInfo'>
              Information about Licenses
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <h1>My Citation Records</h1> */}
      {/* <div className='nav'>
        <ul>
          <li>
            {' '}
            <Link to='/' className='btn-link me-3'>
              Main Citation Page
            </Link>
          </li>
          <li>
            {' '}
            <Link to='/random' className='btn-link'>
              A Random Record
            </Link>
          </li>
        </ul>
      </div> */}

      {/* <Link to="/" className="btn-link me-3">
        Home
      </Link>
      <Link to="/random" className="btn-link">
        Random
      </Link> */}

      <div>
        <Routes>
          <Route path='/' element={<Homepage citationList={citationList} />} />
          <Route
            path='/random'
            element={<RandomPage citationList={citationList} />}
          />
          <Route
            path='/citations/:citationId'
            element={<CitationDetails citationList={citationList} />}
          />
          <Route path='/LicenseInfo' element={<LicenseInfo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
