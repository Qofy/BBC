import './BBC.css';
 import Header from "./component/header";
 import SubHeader from './component/sub-header';
import Body from './component/body';
import LeftSidebar from './component/left-sidebar';
import RightSidebar from './component/right-sidebar';


export default function BBC() {
  return (
    <> 
    <div className="content">
      <Header />
      <SubHeader />
    </div>

    <div className="container">
    <div className="container-1">
     <LeftSidebar />
     <Body />
     <RightSidebar />
    </div>
    <div className="container-2">
      <LeftSidebar />
    </div>
    </div>
    </>
  );
}