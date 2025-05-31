import { createRoot } from 'react-dom/client';
import Mood from './Components/Mood';
import MoodItem from './Components/MoodItem';
import MoodApp from './Components/MoodApp';

const room = createRoot(document.getElementById('root'));
room.render(
  <Mood>
    <MoodApp />
  </Mood>
);