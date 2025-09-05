import React from "react";
import Button from "./components/ui/Button";
import { Card, CardContent } from "./components/ui/Card";

export default function App() {
  return (
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
      </main>
    </div>
  );
}
