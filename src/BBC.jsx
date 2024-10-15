// React import removed as it is not used in this component
import './BBC.css';
import Header from "./component/header";
import SubHeader from './component/sub-header';
import NewsLayout from './component/News';
 

export default function BBC() {
  return (
    <>
      <div className="content">
        <Header />
        <SubHeader />
      </div>

      <div className="container">
        <NewsLayout/>
      </div>
    </>
  );
}
