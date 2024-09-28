import '../stylesheet/right-sidebar.css';
import {Play} from "lucide-react";

export default function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div className="nws-1">
      <a href="#">
        <h3>
        CrowdStrike: Company to face questions over global IT outage
        </h3>
      </a>
      <p className="headline">
      Cancer delays, holidays ruined, businesses out of pocket - the CrowdStrike outage examined.
      </p>
      <p className="day">
        9 hrs ago | <p className="location">Technology</p>
        </p>
      </div>

      <div className="nws-1">
      <a href="#">
        <h3>
          <Play style={{color: 'black'}} />
      Astronauts return to Earth after longest stay on ISS
        </h3>
      </a>
      <p className="headline">
      One Nasa astronaut and two Russian cosmonauts, who spent 374 days in space, were aboard the shuttle.
      </p>
      <p className="day">
        8 hrs ago | <p className="location">World</p>
        </p>
      </div>

      <div className="nws-1">
      <a href="#">
        <h3>
        Ex-minister found guilty in case that gripped Singapore
        </h3>
      </a>
      <p className="headline">
      S Iswaran, best known for bringing the F1 to Singapore, pleaded guilty to receiving gifts while in office.
      </p>
      <p className="day">
        2 hrs ago | <p className="location">Asia</p>
        </p>
      </div>

      <div className="nws-1">
      <a href="#">
        <h3>
        Listen: The Global Story - America and the world
        </h3>
      </a>
      <p className="headline">
      What is the US's relationship with the world today, and how would Donald Trump and Kamala Harris shape it?
      </p>
      <p className="day">
        9 hrs ago | <p className="location">Technology</p>
        </p>
      </div>

    </div>
  );
}