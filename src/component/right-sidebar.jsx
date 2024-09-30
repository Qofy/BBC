import '../stylesheet/right-sidebar.css';
import {Play} from 'lucide-react';

let newsItem = [
  {
    id: 1,
    title: `'We just had to flee:' Fear and tension in Lebanon under deadly Israeli bombardment`,
    desc: 'Israel says it hit 1,600 Hezbollah targets and tells civilians to flee areas near the group’s weapons.',
    date: '29 day ago | Middle East',
},
{
  id: 2,
  title: 'Israel air strikes kill 492 people in Lebanon, including 100 children',
  desc: 'Israel says it hit 1,600 Hezbollah targets and tells civilians to flee areas near the group’s weapons.',
  date: '29 day ago | Middle East',
},
{
  id: 3,
  title: 'Israel air strikes kill 492 people in Lebanon, including 100 children',
  desc: 'Israel says it hit 1,600 Hezbollah targets and tells civilians to flee areas near the group’s weapons.',
  date: '29 day ago | Middle East',
},
{
  id: 4,
  title: 'Israel air strikes kill 492 people in Lebanon, including 100 children',
  desc: `Israel says it hit 1,600 Hezbollah targets and tells civilians to flee areas near the group's weapons.`,
  date: '29 day ago | Middle East',
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