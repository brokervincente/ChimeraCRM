import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ agency }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/settings/profile');
  };

  return (
    <header className="header">
      <h1>Gestionale Energia e Gas</h1>
      <div className="user-icon" onClick={handleProfileClick} title="Profilo utente">
        {agency.logoUrl ? (
          <img
            src={agency.logoUrl}
            alt="Logo Agenzia"
            className={agency.logoCircular ? 'logo circular' : 'logo square'}
          />
        ) : (
          <div className="default-icon">U</div>
        )}
      </div>
    </header>
  );
};

export default Header;