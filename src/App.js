import './App.css';
import CitationCard from './CitationCard';

const citationList = [
  {
    id: 0,
    title: 'robot maid',
    author: 'Vinzence Studio',
    from: 'Noun Project',
    sourceUrl: 'https://thenounproject.com/icon/robot-maid-2838673/',
    license: 'CC BY 3.0',
    licenseLink: 'https://creativecommons.org/licenses/by/3.0/',
  },
  {
    id: 1,
    title: 'robot maid2',
    author: 'Vinzence Studio',
    from: 'Noun Project',
    sourceUrl: 'https://thenounproject.com/icon/robot-maid-2838673/',
    license: 'CC BY 3.0',
    licenseLink: 'https://creativecommons.org/licenses/by/3.0/',
  },
  {
    id: 2,
    title: 'robot maid3',
    author: 'Vinzence Studio',
    from: 'Noun Project',
    sourceUrl: 'https://thenounproject.com/icon/robot-maid-2838673/',
    license: 'CC BY 3.0',
    licenseLink: 'https://creativecommons.org/licenses/by/3.0/',
  },
  {
    id: 3,
    title: 'robot maid4',
    author: 'Vinzence Studio',
    from: 'Noun Project',
    sourceUrl: 'https://thenounproject.com/icon/robot-maid-2838673/',
    license: 'CC BY 3.0',
    licenseLink: 'https://creativecommons.org/licenses/by/3.0/',
  },
];

function App() {
  return (
    <div>
      <h1>My Citations Record</h1>
      {citationList.map((c) => (
        <CitationCard citation={c} />
      ))}
    </div>
  );
}

export default App;
