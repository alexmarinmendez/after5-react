import './App.css';
import Video from './Video';

const data = {
    title: "Rod Stewart - Young Turks (Official Video)",
    dateAdded: "2009-10-29T21:26:05Z",
    channel: "Rod Stewart",
    thumbnail: "https://i.ytimg.com/vi/zQ41hqlV0Kk/mqdefault.jpg",
    description: "Official music video for Rod Stewart – Young Turks from 'Tonight I'm Yours' (1981) Listen to more Rod Stewart here: https://rhino.lnk.to/RodStewartStr ..."
}

function App() {
  return (
    <Video
      title={data.title} 
      dateAdded={data.dateAdded}
      channel={data.channel}
      thumbnail={data.thumbnail}
      description={data.description} />
  );
}

export default App;
