import { Menu, Search, User } from "lucide-react";
import '../stylesheet/header.css';



function Header() {
    return (
        <div className="header">
              <div className="left-header">
            <Menu />
            <Search size={20} />
            </div>
            <div className="logo">
              <div className="b">B</div>
              <div className="b">B</div>
              <div className="b">C</div>
              </div>
              <div className="right-header">
                <User />
                <p>Your Account</p>
                </div>

             
        </div>
    )
}
export default Header;