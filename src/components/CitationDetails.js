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
        <p>Derivative of: {citation.title2}</p>
        <p>
          from: {citation.source2}, at {citation.sourceUrl2}, licensed via:{' '}
          {citation.license2}, at {citation.licenseUrl2}
        </p>
        <p>And: {citation.title3}</p>
        <p>
          from: {citation.source3}, at {citation.sourceUrl3}, licensed via:{' '}
          {citation.license3}, at {citation.licenseUrl3}
        </p>
        <p>Changed “Maze Motif” by desaturating it and adding filter.</p>
      </div>
    </div>
  );
}
