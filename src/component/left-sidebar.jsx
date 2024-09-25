import img1 from '../images/img1.webp';
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

      </div>
    </div>
  );
}