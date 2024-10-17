import Middle from "./middle"
import LeftSidebar from "./left-sidebar"
import RightSidebar from "./right-sidebar"
import article from "./Article"
import '../stylesheet/news.css';
const NewsLayout = () =>{
return(
  <div className="news-layout">
    <LeftSidebar article = {article.articleWithPics}/>
    <Middle article = {article.articleWithBigPic}/>
    <RightSidebar article = {article.articleWithoutPics}/>
  </div>
)
}

export default NewsLayout;