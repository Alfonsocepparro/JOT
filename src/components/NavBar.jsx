import CartWidget from "./CartWidget";
import '../App.css';
import { Link } from "react-router-dom";

const NavBar = () =>{
    return (
            <nav className="navbar">
                <ul className="menu">
                    <li><Link className="menu-link" to="/">Home</Link></li>
                    <li><Link className="menu-link" to="/sets">Sets</Link></li>
                    <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
                    <li><Link className="menu-link" to="/about">About</Link></li>
                </ul>
                <CartWidget />
            </nav>
    )
}
export default NavBar;