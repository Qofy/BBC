import { Menu, Search, User, ChevronDown, Settings, LogOut } from "lucide-react";
import { useState } from 'react';
import '../stylesheet/header.css';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

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
            <div 
                className={`right-header ${isOpen ? 'active' : ''}`} 
                onClick={() => setIsOpen(!isOpen)}
                style={isOpen ? { backgroundColor: '#333', color: 'white' } : {}}
            >
                <User />
                <p>Your Account</p>
                <ChevronDown />
                {isOpen && (
                    <div className="dropdown">
                        <a href="#"><User /> Profile</a>
                        <a href="#"><Settings /> Settings</a>
                        <a href="#"><LogOut /> Logout</a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header;
