
import article from "./Article";
import '../stylesheet/section-3.css';
import n1 from '../images/n1.webp';
import n2 from '../images/n2.webp';
import {Play} from 'lucide-react';




const Section3 = () => {
  return (
    <div className="section-3">   
     
      <div className="section-3-1">
        {article.articleWithoutPics.slice(0, 1).map((article, index) => (
          <div key={index} className='article-section3-1'>
            <h3>
              {article.title = "Fans of Liam Payne react to his death in Argentina"}
            </h3>
            <p>
              {article.desc = "Fans of the former One Direction singer expressed their shock as they gathered in Buenos Aires."}
            </p>
            <span>{article.date = "2 hrs ago | Culture"}</span>
          </div>
        ))}

        
          {article.articleWithPics.slice(0, 1).map(index => (
          <div key={index} className='article-section3-2'>
            <img className="section3-2img" src={n1} alt="n1" />
            <div className="play">
            <Play size={35} />
            </div>
            </div>
          ))}
    
      {article.articleWithPics.slice(0, 1).map((article, index) => (
          <div key={index} className='article-section3-3'>
            <img className="section3-3img" src={n2} alt="n2" />
            <h3>
              {article.title = "US 'click to cancel' rule to ban subscription traps"}
            </h3>
            <p>
              {article.desc = "New rule requires businesses to make subscribing and cancelling subscriptions equally simple.."}
            </p>
            <span>{article.date = "2 hrs ago | Culture"}</span>
          </div>
        ))}
</div>


<div className="section3-4">
{article.articleWithPics.slice(0, 1).map((article, index) => (
          <div key={index} className='article-section3-2'>
            <img className="section3-2-1img" src={n2} alt="n2" />
            <h3>
              {article.title = "US 'click to cancel' rule to ban subscription traps"}
            </h3>
            <p>
              {article.desc = "New rule requires businesses to make subscribing and cancelling subscriptions equally simple.."}
            </p>
            <span>{article.date = "2 hrs ago | Culture"}</span>
          </div>
        ))}


{article.articleWithPics.slice(0, 1).map((article, index) => (
          <div key={index} className='article-section3-2'>
            <img className="section3-2-1img" src={n2} alt="n2" />
            <h3>
              {article.title = "US 'click to cancel' rule to ban subscription traps"}
            </h3>
            <p>
              {article.desc = "New rule requires businesses to make subscribing and cancelling subscriptions equally simple.."}
            </p>
            <span>{article.date = "2 hrs ago | Culture"}</span>
          </div>
        ))}

{article.articleWithPics.slice(0, 1).map((article, index) => (
          <div key={index} className='article-section3-3-1'>
            <img className="section3-3-1img" src={n2} alt="n2" />
            <h3>
              {article.title = "US 'click to cancel' rule to ban subscription traps"}
            </h3>
            <p>
              {article.desc = "New rule requires businesses to make subscribing and cancelling subscriptions equally simple.."}
            </p>
            <span>{article.date = "2 hrs ago | Culture"}</span>
          </div>
        ))}

{article.articleWithPics.slice(0, 1).map((article, index) => (
          <div key={index} className='article-section3-4'>
            <img className="section3-4img" src={n2} alt="n2" />
            <h3>
              {article.title = "US 'click to cancel' rule to ban subscription traps"}
            </h3>
            <p>
              {article.desc = "New rule requires businesses to make subscribing and cancelling subscriptions equally simple.."}
            </p>
            <span>{article.date = "2 hrs ago | Culture"}</span>
          </div>
        ))}

        <div className="section3-5">
     {article.articleWithoutPics.slice(0, 1).map((article, index) => (
          <div key={index} className='article-section3-5'>
            <h3>
              {article.title = "Fans of Liam Payne react to his death in Argentina"}
            </h3>
            <p>
              {article.desc = "Fans of the former One Direction singer expressed their shock as they gathered in Buenos Aires."}
            </p>
            <span>{article.date = "2 hrs ago | Culture"}</span>
          </div>
        ))}

     {article.articleWithoutPics.slice(0, 1).map((article, index) => (
          <div key={index} className='article-section3-6'>
            <h3>
              {article.title = "Fans of Liam Payne react to his death in Argentina"}
            </h3>
            <p>
              {article.desc = "Fans of the former One Direction singer expressed their shock as they gathered in Buenos Aires."}
            </p>
            <span>{article.date = "2 hrs ago | Culture"}</span>
          </div>
        ))}
        </div>
        </div>
       </div>      
)
}
   


export default Section3;