import './BBC.css';
 import Header from "./component/header";
 import SubHeader from './component/sub-header';
import Body from './component/body';
import LeftSidebar from './component/left-sidebar';
import RightSidebar from './component/right-sidebar';


export default function BBC() {
  return (
    <div className="content">
      <Header />
      <SubHeader />
    <div className="main-body">
     <LeftSidebar />
     <Body />
     <RightSidebar />
    </div>
    </div>
  );
}