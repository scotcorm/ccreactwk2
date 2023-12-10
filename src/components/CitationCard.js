import { Link } from 'react-router-dom';

function CitationCard({ citation }) {
  return (
    <section>
      <article className='citation'>
        <img src={citation.img} alt={citation.title} />
        <h4>{citation.title}</h4>
        <p>{citation.creator}</p>
        <p>{citation.source}</p>
        <p>{citation.license}</p>
        <Link to={'/citations/' + citation.id}>Details</Link>
      </article>
    </section>
  );
}

export default CitationCard;
