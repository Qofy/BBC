import '../stylesheet/right-sidebar.css';
import {Play} from 'lucide-react';

let newsItem = [
  {
    id: 1,
    title: `  CrowdStrike: Company to face questions over global IT outage`,
    desc: '   Cancer delays, holidays ruined, businesses out of pocket - the CrowdStrike outage examined.',
    date: '29 day ago | Technology',
},
{
  id: 2,
  title: ' Astronauts return to Earth after longest stay on ISS',
  desc: 'One Nasa astronaut and two Russian cosmonauts, who spent 374 days in space, were aboard the shuttle.',
  date: '8 hrs ago | World',
},
{
  id: 3,
  title: 'I Ex-minister found guilty in case that gripped Singapore',
  desc: '      S Iswaran, best known for bringing the F1 to Singapore, pleaded guilty to receiving gifts while in office.',
  date: '2 hrs ago | Asia',
},
{
  id: 4,
  title: ' Listen: The Global Story - America and the world',
  desc: `  What is the US's relationship with the world today, and how would Donald Trump and Kamala Harris shape it?`,
  date: '9 hrs ago | Middle East',
  icon: Play
}
]

export default function RightSidebar() {
  return (
    <div className="right-sidebar">
      {newsItem.map((item) => (
        <div className="news-item" key={item.id}>
          <div className="news-item-content">
            <a href="#">
              <h3>
                {item.icon && <item.icon />}
                {item.title}
              </h3>
            </a>
            <p className="headline">{item.desc}</p>
            <p className="day">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}