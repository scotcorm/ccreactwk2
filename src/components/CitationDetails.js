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
          <h5>{citation.title2}</h5>
        </p>
        <p>
          {citation.source2}{' '}
          <i>
            <u>{citation.sourceUrl2}</u>
          </i>{' '}
          {citation.license2}
          <i>
            <u>{citation.licenseUrl2}</u>
          </i>
        </p>
        <p>
          {' '}
          <h5>{citation.title3}</h5>
        </p>
        <p>
          {citation.source3}{' '}
          <i>
            <u>{citation.sourceUrl3}</u>
          </i>{' '}
          {citation.license3}{' '}
          <u>
            <i>{citation.licenseUrl3}</i>
          </u>
        </p>
      </div>
    </div>
  );
}
