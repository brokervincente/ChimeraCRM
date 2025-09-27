import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Agency } from '../../types/agency';

type HeaderProps = {
  agency: Agency;
};

const Header: React.FC<HeaderProps> = ({ agency }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/settings/profile');
  };

  return (
    <header style={{ backgroundColor: 'white', color: 'black', padding: 16, fontSize: 20 }}>
      <h1>Gestionale Energia e Gas</h1>
      <div className="user-icon" onClick={handleProfileClick} title="Profilo utente" style={{ cursor: 'pointer', marginTop: 12 }}>
        {agency.logoUrl ? (
          <img
            src={agency.logoUrl}
            alt="Logo Agenzia"
            style={{
              width: 50,
              height: 50,
              borderRadius: agency.logoCircular ? '50%' : '8px',
              objectFit: 'cover',
            }}
          />
        ) : (
          <div style={{ width: 50, height: 50, backgroundColor: '#ccc', borderRadius: '50%', textAlign: 'center', lineHeight: '50px', fontWeight: 'bold' }}>
            U
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
