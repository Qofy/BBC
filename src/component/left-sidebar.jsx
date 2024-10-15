import '../stylesheet/left-sidebar.css';
import article from './Article';

export default function LeftSidebar(props) {
 const { article = [], newImg, newTiltle, newDesc, newDate } = props;
 if (!article || article.length === 0){
  return null;
 }
 
  return (
    <div className="left-sidebar">
      {article.map((article, index) =>(
      <div key={index} className='article'>
     <img src={newImg || article.img} alt="img" />
     <h3>
      {newTiltle || article.title}
     </h3>
     <p>
      {newDesc || article.desc}
     </p>
     <span>{newDate || article.date}</span>
     </div>
     ))}
    </div>
  );
}