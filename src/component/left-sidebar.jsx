import img1 from '../images/img1.webp';
import img2 from '../images/img2.webp';
import '../stylesheet/left-sidebar.css';
export default function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <div className="news-1">
        <div className="img1">
         <img src={img1} alt="" />
        </div>
        <a href="#">
          <h3>
          'We just had to flee': Fear and tension in Lebanon under deadly Israeli bombardment
          </h3>
        </a>
        <p className='headline'>
        Thousands have fled southern Lebanon while others say they are leaving the capital Beirut.
        </p>
        <p className="day">
        1 day ago | <p className="location">Middle East</p>
        </p>

      </div>

      <div className="news-2">
      <div className="img2">
         <img src={img2} alt="" />
        </div>
        <a href="#">
          <h3>
          India anger over alleged sexual assault on woman inside police station
          </h3>
        </a>
        <p className='headline'>
        A video of the woman, detailing her alleged abuse by police, has gone viral and led to an outcry in India.
        </p>
        <p className="day">
        3 day ago | <p className="location">Asia</p>
        </p>
      </div>
    </div>
  );
}