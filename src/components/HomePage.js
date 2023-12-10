import { useState } from 'react';
import CitationCard from './CitationCard';

export default function HomePage({ citationList }) {
  const [licenseFilter, setLicenseFilter] = useState('All');
  let filteredCitations;
  if (licenseFilter === 'All') {
    filteredCitations = citationList;
  } else {
    filteredCitations = citationList.filter(
      (citation) => citation.license === licenseFilter
    );
  }
  return (
    <div>
      <h1 className='alfa title-headline tracked-tight'>
        Main Page: Citation List
      </h1>
      <div className='cardFilters'>
        <button
          className='btn btn-primary me-2'
          onClick={() => setLicenseFilter('All')}
        >
          All
        </button>
        <button
          className='btn btn-primary me-2'
          onClick={() => setLicenseFilter('CC0')}
        >
          CC0
        </button>
        <button
          className='btn btn-primary'
          onClick={() => setLicenseFilter('CC BY 3.0')}
        >
          CC BY 3.0
        </button>
      </div>
      <div className='citationList'>
        {filteredCitations.map((c) => (
          <CitationCard citation={c} />
        ))}
      </div>
    </div>
  );
}
