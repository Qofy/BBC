import '../stylesheet/left-sidebar.css';

export default function LeftSidebar(props) {
 const { article = [], newImg, newTiltle, newDesc, newDate } = props;
 if (!article || article.length === 0){
  return null;
 }
 
  return (
    <div className="left-sidebar  left-sidebar-1">
      {article.map((article, index) =>(
      <div key={index} className='article'>
     <img className='left-img' src={newImg || article.img} alt="img" />
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