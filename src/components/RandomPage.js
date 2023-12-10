export default function RandomPage({ citationList }) {
  const randomCitation =
    citationList[Math.floor(Math.random() * citationList.length)];
  return (
    <div className='randomCard' row justify-content-center>
      <div container-fluid>
        <h5>Featured Image:</h5>
        <h2>{randomCitation.title}</h2>
        <img
          src={randomCitation.img}
          alt={randomCitation.title}
          class='img-fluid'
        />
      </div>
    </div>
  );
}
