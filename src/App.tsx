import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Agency } from './types/agency';
import Button from "./components/ui/Button";
import { Card, CardContent } from "./components/ui/Card";
import Header from './components/ui/Header';
import SettingsProfile from './pages/SettingsProfile';

const LOCAL_STORAGE_KEY = 'agency_profile_data';

type Agency = {
  title: string;
  contacts: string;
  logoUrl: string;
  logoCircular: boolean;
};

function App() {
  const [agency, setAgency] = useState<Agency>({
    title: '',
    contacts: '',
    logoUrl: '',
    logoCircular: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setAgency(JSON.parse(saved));
    }
  }, []);

  const handleSaveProfile = (newProfile: Agency) => {
    setAgency(newProfile);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newProfile));
    // eventuale futura integrazione API aggiornamento
  };

  return (
    <BrowserRouter>
      <Header agency={agency} />
      <div className="min-h-screen">
        <aside className="fixed left-0 top-0 h-full w-64 bg-white shadow hidden md:block">
          <div className="p-4 text-xl font-bold">Chimera CRM</div>
          <nav className="p-2 space-y-1 text-sm">
            <a className="block px-4 py-2 hover:bg-gray-100 rounded" href="#">Dashboard</a>
            <a className="block px-4 py-2 hover:bg-gray-100 rounded" href="#">Fornitori</a>
            <a className="block px-4 py-2 hover:bg-gray-100 rounded" href="#">Listini & Offerte</a>
            <a className="block px-4 py-2 hover:bg-gray-100 rounded" href="#">Piani Provvigionali</a>
            <a className="block px-4 py-2 hover:bg-gray-100 rounded" href="#">Anagrafiche</a>
            <a className="block px-4 py-2 hover:bg-gray-100 rounded" href="#">Leads & Trattative</a>
          </nav>
        </aside>

        <main className="md:ml-64 p-6">
          <Routes>
            <Route path="/" element={
              <>
                <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent>
                      <h2 className="text-lg font-semibold">Anagrafica Collaboratori</h2>
                      <p className="mt-1">Gestisci collaboratori, ruoli, percentuali.</p>
                      <Button className="mt-3">Vai</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent>
                      <h2 className="text-lg font-semibold">Contratti</h2>
                      <p className="mt-1">Inserisci e gestisci i contratti acquisiti.</p>
                      <Button className="mt-3">Vai</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent>
                      <h2 className="text-lg font-semibold">Listini & Provvigioni</h2>
                      <p className="mt-1">Configura listini, deroghe e regole economiche.</p>
                      <Button className="mt-3">Vai</Button>
                    </CardContent>
                  </Card>
                </div>
              </>
            }/>
            <Route
              path="/settings/profile"
              element={<SettingsProfile agencyData={agency} onSave={handleSaveProfile} />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

