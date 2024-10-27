import Header from './component/header';
import SubHeader from './component/sub-header';
import NewsLayout from './component/News';
import Middle from './component/middle';
import article from './component/Article';
import ride from './images/ride.webp';
import checkup from './images/checkup.webp';
import { ChevronRight } from 'lucide-react';
import './BBc.css';
import Section3 from './component/Secton-3';

function BBC() {
  return (
    <div className="bbc">
      <Header />
      <SubHeader />
      <NewsLayout />
      <h3>
      <h3 className='section-1-title'>
        Only from the BBC
        </h3>
      </h3>
      <div className='section-2' >
        <Middle 
          article={article.articleWithBigPic}
          newImg={ride}
          newTiltle="Jodhpur: India's vanishing 'blue' city"
          newDesc="The blue coloured-homes that gave India's Jodhpur   its distinct identity are giving way to other hues."
          newDate="8 hrs ago | Asia"
        />
      <Middle article={article.articleWithBigPic} 
      newImg = {checkup}
      newTiltle = "Why is pre-eclampsia still such a mystery?"
      newDesc = "The condition causes more than 70,000 maternal deaths every year – but its causes continue to elude scientists."
      newDate = "22 hrs ago | Future"
      />
      </div>
      <hr />
      <h3 className='more-news'>
      More news
    <ChevronRight />
      </h3> 
      <Section3 />
    </div>
    
  )
}

export default BBC