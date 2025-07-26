import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import GeneralTopics from './sections/GeneralTopics';
import SurvivalGuideEMR from './sections/SurvivalGuideEMR';
import Labs from './sections/Labs';
import Imaging from './sections/Imaging';
import Neurology from './sections/Neurology';
import Psychiatry from './sections/Psychiatry';
import Labor from './sections/Labor';
import Ob from './sections/ob';
import Gyn from './sections/gyn';
import Family from './sections/family';
import PHM from './sections/phm';
import Neo from './sections/neo';
import Peds from './sections/peds';
import Im from './sections/im';
import Surgery from './sections/surgery';
import HPI from './sections/GeneralTopics/HPI'
import Discharge from './sections/GeneralTopics/Discharge'
import ROS from './sections/GeneralTopics/ROS';
import PE from './sections/GeneralTopics/PE';
import Presentation from './sections/GeneralTopics/Presentation'; // Import the Presentation component
import ScrollToTop from './ScrollToTop';
import ObGyn from './sections/OBGYN test';
import Feedback from './sections/Feedback';
import Pediatrics from './sections/Pediatrics'; // Import the Pediatrics component
import Writers from './sections/writers';
import Food from './sections/food';
import Transportation from './sections/transportation';
import OHP from './sections/ohp';
import Wellness from './sections/wellness';
import Preround from './sections/GeneralTopics/Prerounding'; // Import the Preround component

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GeneralTopics" element={<GeneralTopics />} />
        <Route path="/SurvivalGuideEMR" element={<SurvivalGuideEMR />} />
        <Route path="/Labs" element={<Labs />} />
        <Route path="/Imaging" element={<Imaging />}/>
        <Route path="/Neurology" element={<Neurology />} />
        <Route path="/Psychiatry" element={<Psychiatry />} />
        <Route path="/Labor" element={<Labor />} />
        <Route path="/ob" element={<Ob />} />
        <Route path="/gyn" element={<Gyn />} />
        <Route path="/family" element={<Family />} />
        <Route path="/phm" element={<PHM />} />
        <Route path="/neo" element={<Neo />} />
        <Route path="/peds" element={<Peds />} />
        <Route path="/im" element={<Im />} />
        <Route path="/surgery" element={<Surgery />} />
        <Route path="/HPI" element={<HPI />} />
        <Route path="/Discharge" element={<Discharge />} />
        <Route path="/ROS" element={<ROS />} />
        <Route path="/PE" element={<PE />} />
        <Route path="/Presentation" element={<Presentation />} /> {/* Add the Presentation route */}
        <Route path="/OBGYN Test" element={<ObGyn />} /> 
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Pediatrics" element={<Pediatrics />} /> {/* Add the Pediatrics route */}
        <Route path="/writers" element={<Writers />} />
        <Route path="/food" element={<Food />} />
        <Route path="/transportation" element={<Transportation />} />
        <Route path="/OHP" element={<OHP />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/Prerounding" element={<Preround />} />

      </Routes>
    </Router>
  );
}

export default App;