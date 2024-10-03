import '../stylesheet/left-sidebar.css';
import img1 from '../images/img1.webp';
import img2 from '../images/img2.webp';

 let newsItem = [
  {
    id: 1,
    img: img1,
    title: `'We just had to flee:' Fear and tension in Lebanon under deadly Israeli bombardment`,
    desc: 'Israel says it hit 1,600 Hezbollah targets and tells civilians to flee areas near the group’s weapons.',
    date: '29 day ago | Middle East',
},
{
  id: 2,
  img: img2,
  title: '  India anger over alleged sexual assault on woman inside police station',
  desc: '  A video of the woman, detailing her alleged abuse by police, has gone viral and led to an outcry in India.',
  date: '29 day ago | Asia',
},

]

export default function LeftSidebar() {
  return (
    <div className="left-sidebar">
     {newsItem.map((item) => (
        <div className="news-item" key={item.id}>
          <div className="news-item-img">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="news-item-content">
            <a href="#">
              <h3>{item.title}</h3>
            </a>
            <p className="headline">{item.desc}</p>
            <p className="day">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}