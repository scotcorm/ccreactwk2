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
          is from: {citation.source}, at {citation.sourceUrl}
        </p>
        <p>
          and is licensed via: {citation.license}, at {citation.licenseUrl}
        </p>
        <p>Additional Information/Derived from: </p>
        <p>{citation.title2}</p>
        <p>
          {citation.source2} {citation.sourceUrl2} {citation.license2}
          {citation.licenseUrl2}
        </p>
        <p> {citation.title3}</p>
        <p>
          {citation.source3} {citation.sourceUrl3} {citation.license3}{' '}
          {citation.licenseUrl3}
        </p>
      </div>
    </div>
  );
}
