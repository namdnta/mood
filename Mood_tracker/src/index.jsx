import { createRoot } from 'react-dom/client';
import Mood from './Components/Mood';
import MoodItem from './Components/MoodItem';

const room = createRoot(document.getElementById('root'));
room.render(
  <Mood>
    <MoodItem />
  </Mood>
);