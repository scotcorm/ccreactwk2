import { useState } from 'react';
import CitationCard from './components/CitationCard';
import { TEST_CITATIONS } from './TEST_CITATIONS';
import './App.css';
import Homepage from './components/HomePage';
import RandomPage from './components/RandomPage';
// import { Route } from 'react-router';
import { Link, Route, Routes } from 'react-router-dom';
import CitationDetails from './components/CitationDetails';

function App() {
  const [citationList, setCitationList] = useState(TEST_CITATIONS);

  return (
    <div>
      <h1>My Citation Records</h1>
      <div className="nav">
        <ul>
          <li>
            {' '}
            <Link to="/" className="btn-link me-3">
              Main Citation Page
            </Link>
          </li>
          <li>
            {' '}
            <Link to="/random" className="btn-link">
              A Random Record
            </Link>
          </li>
        </ul>
      </div>

      {/* <Link to="/" className="btn-link me-3">
        Home
      </Link>
      <Link to="/random" className="btn-link">
        Random
      </Link> */}

      <div className="cardFilters">
        <Routes>
          <Route path="/" element={<Homepage citationList={citationList} />} />
          <Route
            path="/random"
            element={<RandomPage citationList={citationList} />}
          />
          <Route
            path="/citations/:citationId"
            element={<CitationDetails citationList={citationList} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
