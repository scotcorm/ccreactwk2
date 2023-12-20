import { useParams } from 'react-router-dom';

export default function CitationPage({ citationList }) {
  let { citationId } = useParams();
  citationId = parseInt(citationId);

  const citation = citationList.find((c) => c.id === citationId);

  if (!citation) {
    return <h2>Citation Not Found</h2>;
  }

  return (
    <div className='citation-card'>
      <div className='container'>
        <h3>
          <b>{citation.title}</b>
        </h3>
        <p>by: {citation.creator}</p>
        <p>
          is from: {citation.source}, at{' '}
          <i>
            <u>{citation.sourceUrl}</u>
          </i>
        </p>
        <p>
          and is licensed via: {citation.license}, at{' '}
          <i>
            <u>{citation.licenseUrl}</u>
          </i>
        </p>
        <p>Additional Information/Derived from: </p>
        <p>
          <p className='derived-from-style'>{citation.derivedFrom}</p>
        </p>
      </div>
    </div>
  );
}
