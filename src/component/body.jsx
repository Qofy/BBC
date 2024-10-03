// React import removed as it is not used in this component
import '../stylesheet/body.css';
import bodyimg from '../images/body-img.webp';

const defaultNews = [{
  id: 1,
  img: bodyimg,
  title: 'Israel air strikes kill 492 people in Lebanon, including 100 children',
  desc: "Israel says it hit 1,600 Hezbollah targets and tells civilians to flee areas near the group's weapons.",
  date: '29 day ago | Middle East'
}];

export default function Body({ news = defaultNews }) {
  return (
    <div className="body">
      {news.map((item) => (
        <div className="news-item" key={item.id}>
          <div className="news-item-img">
            <img className='bimg' src={item.img} alt={item.title} />
          </div>
          <div className="news-item-content4">
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
