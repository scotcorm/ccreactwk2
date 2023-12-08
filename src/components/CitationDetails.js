import { useParams } from 'react-router-dom';

export default function CitationPage({ citationList }) {
  let { citationId } = useParams();
  citationId = parseInt(citationId);

  const citation = citationList.find((c) => c.id === citationId);

  if (!citation) {
    return <h2>Citation Not Found</h2>;
  }

  return (
    <div>
      <div>
        <h3>{citation.title}</h3>
        <p>by: {citation.creator}</p>
        <p>source: {citation.source}</p>
        <p>is licensed: {citation.license}</p>
      </div>
    </div>
  );
}
