import App from './App';
import Image from './Images';

function CitationCard(props) {
  return (
    <section className="citationList ">
      <article className="citation">
        <Image />
        <h4>{props.citation.title}</h4>
        <p>{props.citation.author}</p>
        <p>{props.citation.source}</p>
        <p>{props.citation.license}</p>
      </article>
    </section>
  );
}

export default CitationCard;
