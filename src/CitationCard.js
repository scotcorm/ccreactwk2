function CitationCard(props) {
  return (
    <div className="bg-light border p-4 m-2">
      <h4>{props.citation.title}</h4>
      <p>{props.citation.author}</p>
      <p>{props.citation.source}</p>
      <p>{props.citation.license}</p>
    </div>
  );
}

export default CitationCard;
