import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><Link to="/contact">Contato</Link></li>
        <li><Link to="/maps">Mapa</Link></li>
      </ul>
    </nav>
  );
}