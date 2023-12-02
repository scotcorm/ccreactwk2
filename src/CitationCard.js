import App from './App';
// import Image from './Images';
// import img1 from './Images2';

function CitationCard(props) {
  return (
    <section>
      <article className="citation">
        <img src={props.citation.img} />
        <h4>{props.citation.title}</h4>
        <p>{props.citation.author}</p>
        <p>{props.citation.source}</p>
        <p>{props.citation.license}</p>
      </article>
    </section>
  );
}

export default CitationCard;
