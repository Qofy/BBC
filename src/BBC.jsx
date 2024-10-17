import Header from './component/header';
import SubHeader from './component/sub-header';
import NewsLayout from './component/News';
import './BBc.css';

function BBC() {
  return (
    <div className="bbc">
      <Header />
      <SubHeader />
      <NewsLayout />
    </div>
  )
}

export default BBC