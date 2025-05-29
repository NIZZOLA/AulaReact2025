import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Produtos</Link></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><Link to="/contact">Contato</Link></li>
      </ul>
    </nav>
  );
}