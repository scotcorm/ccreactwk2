export default function RandomPage({ citationList }) {
  const randomCitation =
    citationList[Math.floor(Math.random() * citationList.length)];
  return (
    <div>
      <h5>Featured Image:</h5>
      <h2>{randomCitation.title}</h2>
      <img src={randomCitation.img} />
    </div>
  );
}
