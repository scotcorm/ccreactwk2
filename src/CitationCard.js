import App from './App';
import Image from './Images';
import Image2 from './Images2';

function CitationCard(props) {
  return (
    <section>
      <article className="citation">
        <span>{props.citation.img}</span>
        {/* <Image /> */}
        <h4>{props.citation.title}</h4>
        <p>{props.citation.author}</p>
        <p>{props.citation.source}</p>
        <p>{props.citation.license}</p>
      </article>
    </section>
  );
}

export default CitationCard;
