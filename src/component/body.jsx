import '../stylesheet/body.css';
import bodyimg from '../images/body-img.webp';
export default function Body() {
  return (
    <div className="body">
      <div className="img-con">
    <img className='con-1' src={bodyimg} alt="war" />
      </div>
      <a href="#">
        <h2 className='-headline'>
        Israeli air strikes kill 492 people in Lebanon, including 100 children
        </h2>
      </a>
      <p className="headline">
      Israel says it hit 1,600 Hezbollah targets and tells civilians to flee areas near the group’s weapons.
      </p>
      <p className="day">
        29 day ago | <p className="location">Middle East</p>
        </p>
    </div>
  )
}