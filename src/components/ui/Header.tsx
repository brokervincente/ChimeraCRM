import React from 'react';
import { useNavigate } from 'react-router-dom';


type Agency = {
  logoUrl?: string;
  logoCircular?: boolean;
};

type HeaderProps = {
  agency: Agency;
};

const Header: React.FC<HeaderProps> = ({ agency }) => {
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


