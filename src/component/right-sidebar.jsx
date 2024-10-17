import '../stylesheet/right-sidebar.css';
// import {Play} from 'lucide-react';



export default function RightSidebar(props) {
const { article = [], newTiltle, newDesc, newDate } = props;
if (!article || article.length === 0){
  return null;
}
  return (
 <div className="right-sidebar">
  {article.map((article, index)=>(
    <div key={index} className='article'>
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