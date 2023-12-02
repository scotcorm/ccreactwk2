import './App.css';
import CitationCard from './CitationCard';
import Image from './Images';

const citationList = [
  {
    id: 0,
    title: 'robot maid',
    author: 'Vinzence Studio',
    source: 'Noun Project',
    sourceUrl: 'https://thenounproject.com/icon/robot-maid-2838673/',
    license: 'CC BY 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
    img: './img/noun-robot-maid-2838673.png',
  },
  {
    id: 1,
    title: 'Stage Design...',
    author: null,
    source: 'Cooper Hewitt, Smithsonian Design Museum',
    sourceUrl:
      'https://www.si.edu/object/stage-design-architectural-perspective:chndm_1938-88-2618',
    license: 'CC0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
    img: './stageDesign.jpg',
  },
  {
    id: 2,
    title: 'robot maid3',
    author: 'Vinzence Studio',
    source: 'Noun Project',
    sourceUrl: 'https://thenounproject.com/icon/robot-maid-2838673/',
    license: 'CC BY 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
    img: './img/stageDesign.jpg',
  },
  {
    id: 3,
    title: 'robot maid4',
    author: 'Vinzence Studio',
    source: 'Noun Project',
    sourceUrl: 'https://thenounproject.com/icon/robot-maid-2838673/',
    license: 'CC BY 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
    img: 'https://media.npr.org/chrome_svg/npr-logo.svg',
  },
];

function App() {
  return (
    <div>
      <h1>My Citation Records</h1>
      <div className="citationList">
        {citationList.map((c) => (
          <CitationCard citation={c} />
        ))}
      </div>
    </div>
  );
}

export default App;
