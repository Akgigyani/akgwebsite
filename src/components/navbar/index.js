import { Link, NavLink } from 'react-router-dom'
import AKGBlack from "./../../assets/images/AKGb.png"
import './navbar.scss';

function Navbar(props) {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img className="logo" src={AKGBlack} alt="" />
                </Link>
                <span className="pageIdentifier">&#124;</span><span className="pageName">{props.pageName}</span>
                <div className="navbar-links">
                    <li><NavLink to={props.pageFirstLink} style={{textDecoration: 'none', color: '#fff'}}>{props.firstLink}</NavLink></li>
                    <li><NavLink to="/about"style={{textDecoration: 'none', color: '#fff'}}>Blogs</NavLink></li>
                    <li><NavLink to="/about"style={{textDecoration: 'none', color: '#fff'}}>Case Study</NavLink></li>
                    <li><NavLink to="/about"style={{textDecoration: 'none', color: '#fff'}}>Contact</NavLink></li>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;