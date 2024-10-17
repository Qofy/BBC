
import '../stylesheet/middle.css';

export default function Middle(props) {
  const {article = [], newImg, newTitle, newDesc, newDate} = props;
  if (!article || article.length === 0){
    return null;
  }
  return (
    <div className="middle">
     {article.map((article, index) =>(
      <div key={index} className='article1'>
     <img className='middle-img' src={newImg || article.img} alt="img" />
     <h3>
      {newTitle || article.title}
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
