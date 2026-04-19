import { useState } from 'react';
import './Header.css';
import logoglico from '../assets/images/logoglico.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Sobre', id: 'sobre' },
    { label: 'Ecossistema', id: 'ecossistema' },
    { label: 'Publicações', id: 'publicacoes' },
    { label: 'Blog', id: 'blog' },
    { label: 'Equipe', id: 'equipe' },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-container">
        
        {/* Ícone Hamburguer (Apenas Mobile) */}
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Logo (No Mobile vai para a direita via CSS) */}
        <div className="header-logo">
          <img src={logoglico} alt="Glicogotas Logo" />
        </div>

        {/* Navegação */}
        <nav className={`header-menu ${menuOpen ? 'open' : ''}`}>
          {menuItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        
        </nav>

        {/* Botão Contato (Apenas Desktop) */}
        <div className="header-action">
          <button onClick={() => window.location.href = '#contato'}>
            Contato
          </button>
        </div>

      </div>
    </header>
  );
}