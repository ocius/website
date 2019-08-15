import BoatMarker from './boat_icons/boat00.png';
import BoatMarker1 from './boat_icons/boat01.png';
import BoatMarker2 from './boat_icons/boat02.png';
import BoatMarker3 from './boat_icons/boat03.png';
import BoatMarker4 from './boat_icons/boat04.png';
import BoatMarker5 from './boat_icons/boat05.png';
import BoatMarker6 from './boat_icons/boat06.png';
import BoatMarker7 from './boat_icons/boat07.png';

const BoatIcon = index => {
  const boatNumber = index % 8;

  // Select boat marker depending on index number
  let icon;
  switch (boatNumber) {
    case 0:
      icon = BoatMarker;
      break;
    case 1:
      icon = BoatMarker1;
      break;
    case 2:
      icon = BoatMarker2;
      break;
    case 3:
      icon = BoatMarker3;
      break;
    case 4:
      icon = BoatMarker4;
      break;
    case 5:
      icon = BoatMarker5;
      break;
    case 6:
      icon = BoatMarker6;
      break;
    case 7:
      icon = BoatMarker7;
      break;
    default:
      return null;
  }

  return { url: icon, scaledSize: { width: 34, height: 34 } };
};

export default BoatIcon;
