import { useState } from 'react';
import { 
  BarChart3, Users, FileText, DollarSign, Zap, 
  Building2, Calculator, Settings, Home, ChevronRight,
  Menu, X, User, TrendingUp, AlertCircle,
  MapPin, Calendar, Target, Lightbulb, Plus, Search,
  Filter, Trash2, CheckCircle
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuStructure = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: Home,
      items: [
        { id: 'sintesi', title: 'Sintesi e Alert', status: 'in-progress' }
      ]
    },
    {
      id: 'consumatori-finali',
      title: 'Consumatori Finali',
      icon: Users,
      items: [
        { id: 'anagrafiche', title: 'Anagrafiche', status: 'in-progress' },
        { id: 'contratti', title: 'Contratti', status: 'planned' },
        { id: 'posizioni-economiche-agenzia', title: 'Posizioni Economiche Agenzia', status: 'planned' },
        { id: 'posizioni-economiche-collaboratori', title: 'Posizioni Economiche Collaboratori', status: 'planned' },
        { id: 'guadagni-agenzia', title: 'Guadagni Agenzia', status: 'planned' },
        { id: 'guadagni-collaboratore', title: 'Guadagni Collaboratore', status: 'planned' },
        { id: 'pod', title: 'POD', status: 'in-progress' },
        { id: 'pdr', title: 'PDR', status: 'in-progress' },
        { id: 'pdp', title: 'PDP', status: 'planned' },
        { id: 'comuni', title: 'Comuni', status: 'planned' },
        { id: 'inviti-fatturare-agenzia', title: 'Inviti a Fatturare Agenzia', status: 'planned' },
        { id: 'inviti-fatturare-collaboratori', title: 'Inviti a Fatturare Collaboratori', status: 'planned' },
        { id: 'entrate', title: 'Entrate', status: 'planned' },
        { id: 'uscite', title: 'Uscite', status: 'planned' },
        { id: 'tutti-campi', title: 'Tutti i Campi', status: 'planned' },
        { id: 'kpi-report-cf', title: 'KPI e Report', status: 'planned' }
      ]
    },
    {
      id: 'reseller-grossisti',
      title: 'Reseller e Grossisti',
      icon: Building2,
      items: [
        { id: 'rg-anagrafiche', title: 'Anagrafiche', status: 'planned' },
        { id: 'rg-contratti', title: 'Contratti', status: 'planned' },
        { id: 'rg-posizioni-economiche', title: 'Posizioni Economiche', status: 'planned' },
        { id: 'rg-consumi', title: 'Consumi', status: 'planned' },
        { id: 'rg-fornitori', title: 'Fornitori', status: 'planned' },
        { id: 'rg-inviti-fatturare', title: 'Inviti a Fatturare', status: 'planned' },
        { id: 'rg-entrate', title: 'Entrate', status: 'planned' },
        { id: 'rg-uscite', title: 'Uscite', status: 'planned' },
        { id: 'rg-tutti-campi', title: 'Tutti i Campi', status: 'planned' },
        { id: 'rg-kpi-report', title: 'KPI e Report', status: 'planned' }
      ]
    },
    {
      id: 'servizi-consulenza',
      title: 'Servizi di Consulenza',
      icon: FileText,
      items: [
        { id: 'sc-anagrafiche', title: 'Anagrafiche', status: 'planned' },
        { id: 'sc-contratti', title: 'Contratti', status: 'planned' },
        { id: 'sc-consumi', title: 'Consumi', status: 'planned' },
        { id: 'sc-partner', title: 'Partner', status: 'planned' },
        { id: 'sc-entrate', title: 'Entrate', status: 'planned' },
        { id: 'sc-uscite', title: 'Uscite', status: 'planned' },
        { id: 'sc-tutti-campi', title: 'Tutti i Campi', status: 'planned' },
        { id: 'sc-kpi-report', title: 'KPI e Report', status: 'planned' }
      ]
    },
    {
      id: 'rete-commerciale',
      title: 'Rete Commerciale',
      icon: TrendingUp,
      items: [
        { id: 'piani-provvigionali', title: 'Piani Provvigionali', status: 'complete' },
        { id: 'fornitori', title: 'Fornitori', status: 'complete' },
        { id: 'listini-offerte', title: 'Listini e Offerte', status: 'planned' },
        { id: 'collaboratori', title: 'Collaboratori', status: 'planned' },
        { id: 'rc-inviti-fatturare', title: 'Inviti a Fatturare', status: 'planned' },
        { id: 'leads', title: 'Leads', status: 'in-progress' },
        { id: 'trattative', title: 'Trattative', status: 'in-progress' }
      ]
    },
    {
      id: 'simulatori',
      title: 'Simulatori Superpartes',
      icon: Calculator,
      items: [
        { id: 'sim-energia-elettrica', title: 'Energia Elettrica', status: 'planned' },
        { id: 'sim-gas-naturale', title: 'Gas Naturale', status: 'planned' },
        { id: 'sim-agevolazioni', title: 'Agevolazioni Fiscali', status: 'planned' }
      ]
    },
    {
      id: 'impostazioni',
      title: 'Impostazioni',
      icon: Settings,
      items: [
        { id: 'profilo', title: 'Profilo', status: 'planned' },
        { id: 'agenzia', title: 'Agenzia', status: 'planned' },
        { id: 'rete-vendita', title: 'Rete Vendita', status: 'planned' }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'complete': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'planned': return 'bg-gray-100 text-gray-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusText = (status: string) => {
    switch(status) {
      case 'complete': return 'Completato';
      case 'in-progress': return 'In Sviluppo';
      case 'planned': return 'Da Sviluppare';
      default: return 'Da Sviluppare';
    }
  };

  const renderContent = () => {
    switch(activeSection) {
      case 'dashboard':
      case 'sintesi':
        return <DashboardContent />;
      case 'anagrafiche':
        return <AnagraficheContent />;
      case 'pod':
        return <PODContent />;
      case 'pdr':
        return <PDRContent />;
      case 'leads':
        return <LeadsContent />;
      case 'trattative':
        return <TrattativeContent />;
      case 'piani-provvigionali':
        return <PianiProvvigionaliContent />;
      case 'fornitori':
        return <FornitoriContent />;
      case 'listini-offerte':
        return <ListiniOfferteContent />;
      default:
        return <PlaceholderContent section={activeSection} />;
    }
  };

  const getCurrentSectionTitle = () => {
    const section = menuStructure.find(s => s.id === activeSection || s.items?.some(i => i.id === activeSection));
    if (!section) return 'Dashboard';
    
    const subItem = section.items?.find(i => i.id === activeSection);
    return subItem ? `${section.title} - ${subItem.title}` : section.title;
  };

  return (
    <div className="h-screen flex bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-80' : 'w-16'} bg-white border-r border-gray-200 transition-all duration-300 overflow-y-auto`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <div className={`${sidebarOpen ? 'block' : 'hidden'}`}>
              <h1 className="text-xl font-bold text-blue-900">CRM Energia</h1>
              <p className="text-sm text-blue-600">Consulenti Energetici</p>
            </div>
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <nav>
            {menuStructure.map((section) => (
              <div key={section.id} className="mb-4">
                <div 
                  className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                    activeSection === section.id || activeSection.startsWith(section.id) 
                      ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveSection(section.id)}
                >
                  <section.icon size={20} />
                  {sidebarOpen && (
                    <>
                      <span className="ml-3 font-medium">{section.title}</span>
                      <ChevronRight size={16} className="ml-auto" />
                    </>
                  )}
                </div>
                
                {sidebarOpen && (activeSection === section.id || section.items.some(item => item.id === activeSection)) && (
                  <div className="ml-6 mt-2 space-y-1">
                    {section.items.map((item) => (
                      <div 
                        key={item.id}
                        className={`flex items-center justify-between p-2 rounded cursor-pointer transition-colors ${
                          activeSection === item.id ? 'bg-blue-100 text-blue-800' : 'text-gray-600 hover:bg-gray-50'
                        }`}
                        onClick={() => setActiveSection(item.id)}
                      >
                        <span className="text-sm">{item.title}</span>
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(item.status)}`}>
                          {getStatusText(item.status)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">
              {getCurrentSectionTitle()}
            </h2>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <AlertCircle size={20} />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <User size={20} />
              </button>
            </div>
          </div>
        </header>

        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

// Dashboard Content
const DashboardContent = () => (
  <div className="space-y-6">
    {/* KPI Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
        <div className="flex items-center">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Zap className="h-6 w-6 text-blue-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Forniture Attive</p>
            <p className="text-2xl font-bold text-gray-900">1,247</p>
            <p className="text-xs text-green-600">+12% dal mese scorso</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
        <div className="flex items-center">
          <div className="p-2 bg-green-100 rounded-lg">
            <DollarSign className="h-6 w-6 text-green-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Fatturato Mensile</p>
            <p className="text-2xl font-bold text-gray-900">€24,891</p>
            <p className="text-xs text-green-600">+8% dal mese scorso</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
        <div className="flex items-center">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Users className="h-6 w-6 text-purple-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Collaboratori</p>
            <p className="text-2xl font-bold text-gray-900">18</p>
            <p className="text-xs text-gray-500">Attivi</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
        <div className="flex items-center">
          <div className="p-2 bg-orange-100 rounded-lg">
            <Target className="h-6 w-6 text-orange-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Trattative</p>
            <p className="text-2xl font-bold text-gray-900">43</p>
            <p className="text-xs text-orange-600">12 scadute</p>
          </div>
        </div>
      </div>
    </div>

    {/* Alert Section */}
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <AlertCircle className="mr-2 h-5 w-5 text-orange-500" />
          Alert e Messaggi del Sistema
        </h3>
      </div>
      <div className="p-6 space-y-3">
        <div className="flex items-start p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
          <div className="ml-3">
            <p className="text-sm font-medium text-yellow-800">3 collaboratori da pagare</p>
            <p className="text-sm text-yellow-700">Soglia invito a fatturare raggiunta per Marco R., Luigi B., Sara T.</p>
          </div>
        </div>
        
        <div className="flex items-start p-4 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
          <div className="ml-3">
            <p className="text-sm font-medium text-red-800">2 errori rilevati</p>
            <p className="text-sm text-red-700">Forniture duplicate su stesso PdP: POD IT001E12345678 - verificare date</p>
          </div>
        </div>
        
        <div className="flex items-start p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="ml-3">
            <p className="text-sm font-medium text-blue-800">Inviti a fatturare da verificare</p>
            <p className="text-sm text-blue-700">5 nuovi inviti ricevuti da fornitori - richiedono verifica</p>
          </div>
        </div>
      </div>
    </div>

    {/* Chart Placeholder */}
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Andamento Forniture Attive</h3>
        <p className="text-sm text-gray-600">Progressione mensile degli ultimi 12 mesi</p>
      </div>
      <div className="p-6">
        <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg bg-gray-50">
          <div className="text-center">
            <BarChart3 size={48} className="mx-auto text-gray-400 mb-2" />
            <p className="text-gray-500 font-medium">Grafico Forniture Mensili</p>
            <p className="text-sm text-gray-400">Da implementare con dati reali</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Interfaces per Listini
interface Listino {
  id: number;
  codice: string;
  nome: string;
  fornitore: string;
  categoria: string;
  commodity: string;
  attivo: boolean;
  dataCreazione: string;
  dataModifica: string;
  dataInizioValidita: string;
  dataFineValidita: string;
  gettone1Anno: string;
  gettoneVolume1Anno: string;
  gettoneMensile1Anno: string;
  ricorrente1Anno: string;
  gettone2Anno: string;
  gettoneVolume2Anno: string;
  gettoneMensile2Anno: string;
  ricorrente2Anno: string;
  note: string;
}

// Listini e Offerte Content
const ListiniOfferteContent = () => {
  const [listini, setListini] = useState<Listino[]>([
    {
      id: 1,
      codice: 'ENEL_RES_2024',
      nome: 'Enel Energia Residenziale 2024',
      fornitore: 'Enel Energia',
      categoria: 'Domestico',
      commodity: 'Energia',
      attivo: true,
      dataCreazione: '2024-01-15',
      dataModifica: '2024-03-20',
      dataInizioValidita: '2024-01-01',
      dataFineValidita: '2024-12-31',
      gettone1Anno: '120.00',
      gettoneVolume1Anno: '0.02',
      gettoneMensile1Anno: '8.00',
      ricorrente1Anno: '15.00',
      gettone2Anno: '80.00',
      gettoneVolume2Anno: '0.015',
      gettoneMensile2Anno: '5.00',
      ricorrente2Anno: '12.00',
      note: 'Listino standard per clienti residenziali'
    },
    {
      id: 2,
      codice: 'ENI_BUS_2024',
      nome: 'Eni Gas e Luce Business',
      fornitore: 'Eni Gas e Luce',
      categoria: 'PMI',
      commodity: 'Gas',
      attivo: true,
      dataCreazione: '2024-02-10',
      dataModifica: '2024-02-10',
      dataInizioValidita: '2024-02-01',
      dataFineValidita: '2025-01-31',
      gettone1Anno: '200.00',
      gettoneVolume1Anno: '0.025',
      gettoneMensile1Anno: '12.00',
      ricorrente1Anno: '25.00',
      gettone2Anno: '150.00',
      gettoneVolume2Anno: '0.02',
      gettoneMensile2Anno: '8.00',
      ricorrente2Anno: '20.00',
      note: 'Per clienti business con consumo elevato'
    },
    {
      id: 3,
      codice: 'SORG_ECO_2024',
      nome: 'Sorgenia Eco',
      fornitore: 'Sorgenia',
      categoria: 'Condominio',
      commodity: 'Energia',
      attivo: false,
      dataCreazione: '2024-01-20',
      dataModifica: '2024-04-15',
      dataInizioValidita: '2024-01-01',
      dataFineValidita: '2024-03-31',
      gettone1Anno: '100.00',
      gettoneVolume1Anno: '0.018',
      gettoneMensile1Anno: '6.00',
      ricorrente1Anno: '10.00',
      gettone2Anno: '60.00',
      gettoneVolume2Anno: '0.012',
      gettoneMensile2Anno: '4.00',
      ricorrente2Anno: '8.00',
      note: 'Listino sospeso - in revisione'
    }
  ]);

  const [listinoSelezionato, setListinoSelezionato] = useState<number | null>(null);
  const [modalModificaAperto, setModalModificaAperto] = useState<boolean>(false);
  const [modalNuovoAperto, setModalNuovoAperto] = useState<boolean>(false);
  
  const [datiListino, setDatiListino] = useState<Omit<Listino, 'id' | 'dataCreazione' | 'dataModifica'>>({
    codice: '',
    nome: '',
    fornitore: '',
    categoria: '',
    commodity: '',
    attivo: true,
    dataInizioValidita: new Date().toISOString().split('T')[0],
    dataFineValidita: '',
    gettone1Anno: '0.00',
    gettoneVolume1Anno: '0.00',
    gettoneMensile1Anno: '0.00',
    ricorrente1Anno: '0.00',
    gettone2Anno: '0.00',
    gettoneVolume2Anno: '0.00',
    gettoneMensile2Anno: '0.00',
    ricorrente2Anno: '0.00',
    note: ''
  });

  const fornitori = ['Enel Energia', 'Eni Gas e Luce', 'Sorgenia', 'A2A Energia', 'Edison'];
  const categorie = ['Domestico', 'Condominio', 'Ente Morale', 'PMI', 'Industria', 'Pubblica Amministrazione', 'Fornitura Temporanea'];
  const commodities = ['Energia', 'Gas'];

  const [filtroRicerca, setFiltroRicerca] = useState('');
  const [filtroFornitore, setFiltroFornitore] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('');
  const [filtroCommodity, setFiltroCommodity] = useState('');
  const [filtroStato, setFiltroStato] = useState('tutti');

  const listiniFiltrati = listini.filter(listino => {
    const matchRicerca = listino.codice.toLowerCase().includes(filtroRicerca.toLowerCase()) ||
                        listino.nome.toLowerCase().includes(filtroRicerca.toLowerCase());
    
    const matchFornitore = filtroFornitore === '' || listino.fornitore === filtroFornitore;
    const matchCategoria = filtroCategoria === '' || listino.categoria === filtroCategoria;
    const matchCommodity = filtroCommodity === '' || listino.commodity === filtroCommodity;
    
    const matchStato = filtroStato === 'tutti' || 
                      (filtroStato === 'attivi' && listino.attivo) ||
                      (filtroStato === 'inattivi' && !listino.attivo);
                      
    return matchRicerca && matchFornitore && matchCategoria && matchCommodity && matchStato;
  });

  const isListinoValido = (listino: Listino): boolean => {
    if (!listino.attivo) return false;
    
    const oggi = new Date().toISOString().split('T')[0];
    const inizio = listino.dataInizioValidita;
    const fine = listino.dataFineValidita;
    
    if (!fine) return oggi >= inizio;
    
    return oggi >= inizio && oggi <= fine;
  };

  const resetDatiListino = () => {
    setDatiListino({
      codice: '',
      nome: '',
      fornitore: '',
      categoria: '',
      commodity: '',
      attivo: true,
      dataInizioValidita: new Date().toISOString().split('T')[0],
      dataFineValidita: '',
      gettone1Anno: '0.00',
      gettoneVolume1Anno: '0.00',
      gettoneMensile1Anno: '0.00',
      ricorrente1Anno: '0.00',
      gettone2Anno: '0.00',
      gettoneVolume2Anno: '0.00',
      gettoneMensile2Anno: '0.00',
      ricorrente2Anno: '0.00',
      note: ''
    });
  };

  const apriModalNuovo = () => {
    resetDatiListino();
    setModalNuovoAperto(true);
  };

  const apriModalModifica = (id: number) => {
    const listino = listini.find(l => l.id === id);
    if (listino) {
      const { dataCreazione, dataModifica, ...datiSenzaDate } = listino;
      setDatiListino(datiSenzaDate);
      setListinoSelezionato(id);
      setModalModificaAperto(true);
    }
  };

  const aggiungiListino = () => {
    if (datiListino.codice.trim() && datiListino.nome.trim() && datiListino.fornitore && datiListino.categoria && datiListino.commodity) {
      const nuovoId = Math.max(...listini.map(l => l.id), 0) + 1;
      const nuovoListino: Listino = {
        ...datiListino,
        id: nuovoId,
        dataCreazione: new Date().toISOString().split('T')[0],
        dataModifica: new Date().toISOString().split('T')[0]
      };
      setListini([...listini, nuovoListino]);
      setModalNuovoAperto(false);
      resetDatiListino();
    }
  };

  const modificaListino = () => {
    if (listinoSelezionato && datiListino.codice.trim() && datiListino.nome.trim() && datiListino.fornitore && datiListino.categoria && datiListino.commodity) {
      setListini(listini.map(l =>
        l.id === listinoSelezionato 
          ? { ...datiListino, id: l.id, dataCreazione: l.dataCreazione, dataModifica: new Date().toISOString().split('T')[0] }
          : l
      ));
      setModalModificaAperto(false);
      setListinoSelezionato(null);
      resetDatiListino();
    }
  };

  const duplicaListino = (id: number) => {
    const listino = listini.find(l => l.id === id);
    if (listino) {
      const nuovoId = Math.max(...listini.map(l => l.id), 0) + 1;
      const duplicato: Listino = {
        ...listino,
        id: nuovoId,
        codice: `${listino.codice}_COPIA`,
        nome: `${listino.nome} (Copia)`,
        dataCreazione: new Date().toISOString().split('T')[0],
        dataModifica: new Date().toISOString().split('T')[0],
        attivo: false
      };
      setListini([...listini, duplicato]);
    }
  };

  const rimuoviListino = (id: number) => {
    setListini(listini.filter(l => l.id !== id));
  };

  const toggleStatoListino = (id: number) => {
    setListini(listini.map(l => 
      l.id === id 
        ? { ...l, attivo: !l.attivo, dataModifica: new Date().toISOString().split('T')[0] } 
        : l
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900">Listini e Offerte</h3>
          <p className="text-sm text-gray-600 mt-1">
            Gestione dei listini con guadagni al 100% per Broker Vincente - base per calcolo provvigioni
          </p>
        </div>
        <button 
          onClick={apriModalNuovo}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          <Plus size={16} className="mr-2" />
          Nuovo Listino
        </button>
      </div>

      {/* Statistiche Listini */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Totali</p>
              <p className="text-2xl font-bold text-gray-900">{listini.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Attivi e Validi</p>
              <p className="text-2xl font-bold text-green-900">{listini.filter(l => isListinoValido(l)).length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Building2 className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Fornitori</p>
              <p className="text-2xl font-bold text-orange-900">{new Set(listini.map(l => l.fornitore)).size}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Target className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Categorie</p>
              <p className="text-2xl font-bold text-purple-900">{new Set(listini.map(l => l.categoria)).size}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filtri e Ricerca */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            <div className="xl:col-span-2 relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cerca per codice o nome listino..."
                value={filtroRicerca}
                onChange={(e) => setFiltroRicerca(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select
              value={filtroFornitore}
              onChange={(e) => setFiltroFornitore(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Tutti i fornitori</option>
              {fornitori.map(fornitore => (
                <option key={fornitore} value={fornitore}>{fornitore}</option>
              ))}
            </select>
            <select
              value={filtroCategoria}
              onChange={(e) => setFiltroCategoria(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Tutte le categorie</option>
              {categorie.map(categoria => (
                <option key={categoria} value={categoria}>{categoria}</option>
              ))}
            </select>
            <select
              value={filtroCommodity}
              onChange={(e) => setFiltroCommodity(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Tutte le commodity</option>
              {commodities.map(commodity => (
                <option key={commodity} value={commodity}>{commodity}</option>
              ))}
            </select>
            <select
              value={filtroStato}
              onChange={(e) => setFiltroStato(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="tutti">Tutti gli stati</option>
              <option value="attivi">Solo attivi</option>
              <option value="inattivi">Solo inattivi</option>
            </select>
          </div>
        </div>
      </div>

      {/* Lista Listini */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h4 className="text-lg font-medium text-gray-900">Lista Listini ({listiniFiltrati.length})</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Listino</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fornitore</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Categoria</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Commodity</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Stato</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Validità</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Ultima Modifica</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Azioni</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {listiniFiltrati.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center">
                    <div className="text-gray-500">
                      <FileText size={48} className="mx-auto mb-4 text-gray-300" />
                      <p className="text-lg font-medium mb-2">Nessun listino trovato</p>
                      <p className="text-sm">Prova a modificare i filtri o aggiungi un nuovo listino</p>
                    </div>
                  </td>
                </tr>
              ) : (
                listiniFiltrati.map((listino) => (
                  <tr key={listino.id} className={`hover:bg-gray-50 ${!isListinoValido(listino) ? 'bg-red-50' : ''}`}>
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{listino.codice}</div>
                        <div className="text-sm text-gray-500">{listino.nome}</div>
                        {listino.note && (
                          <div className="text-xs text-gray-400 mt-1">{listino.note}</div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{listino.fornitore}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {listino.categoria}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        listino.commodity === 'Energia' 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {listino.commodity}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        isListinoValido(listino)
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {isListinoValido(listino) ? 'Valido' : 'Non Valido'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-sm text-gray-900">
                        Dal: {new Date(listino.dataInizioValidita).toLocaleDateString('it-IT')}
                      </div>
                      {listino.dataFineValidita && (
                        <div className="text-sm text-gray-500">
                          Al: {new Date(listino.dataFineValidita).toLocaleDateString('it-IT')}
                        </div>
                      )}
                      {!listino.dataFineValidita && (
                        <div className="text-xs text-gray-400">Senza scadenza</div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">
                      {new Date(listino.dataModifica).toLocaleDateString('it-IT')}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center space-x-2">
                        <button
                          onClick={() => apriModalModifica(listino.id)}
                          className="text-blue-600 hover:text-blue-800 p-1"
                          title="Modifica listino"
                        >
                          <Settings size={16} />
                        </button>
                        <button
                          onClick={() => duplicaListino(listino.id)}
                          className="text-purple-600 hover:text-purple-800 p-1"
                          title="Duplica listino"
                        >
                          <Plus size={16} />
                        </button>
                        <button
                          onClick={() => toggleStatoListino(listino.id)}
                          className={`p-1 ${listino.attivo ? 'text-red-600 hover:text-red-800' : 'text-green-600 hover:text-green-800'}`}
                          title={listino.attivo ? 'Disattiva' : 'Attiva'}
                        >
                          {listino.attivo ? <X size={16} /> : <CheckCircle size={16} />}
                        </button>
                        <button
                          onClick={() => rimuoviListino(listino.id)}
                          className="text-red-600 hover:text-red-800 p-1"
                          title="Rimuovi listino"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Nuovo Listino */}
      {modalNuovoAperto && (
        <ModalListino
          titolo="Nuovo Listino"
          dati={datiListino}
          onDatiChange={setDatiListino}
          fornitori={fornitori}
          categorie={categorie}
          commodities={commodities}
          onSalva={aggiungiListino}
          onAnnulla={() => setModalNuovoAperto(false)}
          isModifica={false}
        />
      )}

      {/* Modal Modifica Listino */}
      {modalModificaAperto && (
        <ModalListino
          titolo="Modifica Listino"
          dati={datiListino}
          onDatiChange={setDatiListino}
          fornitori={fornitori}
          categorie={categorie}
          commodities={commodities}
          onSalva={modificaListino}
          onAnnulla={() => setModalModificaAperto(false)}
          isModifica={true}
        />
      )}

      {/* Note Informative */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start">
          <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="ml-3">
            <h5 className="text-sm font-medium text-blue-800 mb-2">Informazioni sui Listini</h5>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• I listini definiscono i guadagni al 100% per Broker Vincente</li>
              <li>• Le percentuali dei Piani Provvigionali si applicano su questi importi base</li>
              <li>• Gettoni Volume sono per kWh/Smc, gli altri sono importi fissi</li>
              <li>• I valori totali sono stime basate su consumo medio di 1000 kWh</li>
              <li>• Ogni contratto deve essere associato a un listino attivo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Modal Component per Listino
const ModalListino = ({ 
  titolo, 
  dati, 
  onDatiChange, 
  fornitori,
  categorie,
  commodities,
  onSalva, 
  onAnnulla, 
  isModifica 
}: {
  titolo: string;
  dati: Omit<Listino, 'id' | 'dataCreazione' | 'dataModifica'>;
  onDatiChange: (dati: Omit<Listino, 'id' | 'dataCreazione' | 'dataModifica'>) => void;
  fornitori: string[];
  categorie: string[];
  commodities: string[];
  onSalva: () => void;
  onAnnulla: () => void;
  isModifica: boolean;
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 sticky top-0 bg-white">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">{titolo}</h3>
            <button onClick={onAnnulla} className="text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Dati Generali */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Codice Listino *</label>
              <input
                type="text"
                value={dati.codice}
                onChange={(e) => onDatiChange({...dati, codice: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="es. ENEL_RES_2024"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Nome Listino *</label>
              <input
                type="text"
                value={dati.nome}
                onChange={(e) => onDatiChange({...dati, nome: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="es. Enel Energia Residenziale 2024"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fornitore *</label>
              <select
                value={dati.fornitore}
                onChange={(e) => onDatiChange({...dati, fornitore: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Seleziona fornitore</option>
                {fornitori.map(fornitore => (
                  <option key={fornitore} value={fornitore}>{fornitore}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Categoria *</label>
              <select
                value={dati.categoria}
                onChange={(e) => onDatiChange({...dati, categoria: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Seleziona categoria</option>
                {categorie.map(categoria => (
                  <option key={categoria} value={categoria}>{categoria}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Commodity *</label>
              <select
                value={dati.commodity}
                onChange={(e) => onDatiChange({...dati, commodity: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Seleziona commodity</option>
                {commodities.map(commodity => (
                  <option key={commodity} value={commodity}>{commodity}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Date di Validità */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="text-lg font-medium text-yellow-900 mb-4">Periodo di Validità</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Data Inizio Validità *</label>
                <input
                  type="date"
                  value={dati.dataInizioValidita}
                  onChange={(e) => onDatiChange({...dati, dataInizioValidita: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Data Fine Validità</label>
                <input
                  type="date"
                  value={dati.dataFineValidita}
                  onChange={(e) => onDatiChange({...dati, dataFineValidita: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">Lasciare vuoto se senza scadenza</p>
              </div>
              <div className="flex items-center">
                <input
                  id="attivo"
                  type="checkbox"
                  checked={dati.attivo}
                  onChange={(e) => onDatiChange({...dati, attivo: e.target.checked})}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="attivo" className="ml-2 text-sm text-gray-700">
                  Listino attivo
                </label>
              </div>
            </div>
          </div>

          {/* Componenti Guadagno 1° Anno */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="text-lg font-medium text-blue-900 mb-4">Componenti Guadagno 1° Anno (€)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gettone 1° Anno</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={dati.gettone1Anno}
                  onChange={(e) => onDatiChange({...dati, gettone1Anno: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gettone Volume (€/kWh)</label>
                <input
                  type="number"
                  step="0.001"
                  min="0"
                  value={dati.gettoneVolume1Anno}
                  onChange={(e) => onDatiChange({...dati, gettoneVolume1Anno: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gettone Mensile</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={dati.gettoneMensile1Anno}
                  onChange={(e) => onDatiChange({...dati, gettoneMensile1Anno: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ricorrente</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={dati.ricorrente1Anno}
                  onChange={(e) => onDatiChange({...dati, ricorrente1Anno: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Componenti Guadagno 2° Anno */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="text-lg font-medium text-green-900 mb-4">Componenti Guadagno 2° Anno (€)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gettone 2° Anno</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={dati.gettone2Anno}
                  onChange={(e) => onDatiChange({...dati, gettone2Anno: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gettone Volume (€/kWh)</label>
                <input
                  type="number"
                  step="0.001"
                  min="0"
                  value={dati.gettoneVolume2Anno}
                  onChange={(e) => onDatiChange({...dati, gettoneVolume2Anno: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gettone Mensile</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={dati.gettoneMensile2Anno}
                  onChange={(e) => onDatiChange({...dati, gettoneMensile2Anno: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ricorrente</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={dati.ricorrente2Anno}
                  onChange={(e) => onDatiChange({...dati, ricorrente2Anno: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
          </div>

          {/* Note */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Note</label>
            <textarea
              value={dati.note}
              onChange={(e) => onDatiChange({...dati, note: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={3}
              placeholder="Note aggiuntive sul listino..."
            />
          </div>
        </div>
        
        <div className="p-6 border-t border-gray-200 bg-gray-50 flex justify-end space-x-3 sticky bottom-0">
          <button
            onClick={onAnnulla}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100"
          >
            Annulla
          </button>
          <button
            onClick={onSalva}
            disabled={!dati.codice.trim() || !dati.nome.trim() || !dati.fornitore || !dati.categoria || !dati.commodity || !dati.dataInizioValidita}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            <CheckCircle size={16} className="mr-2" />
            {isModifica ? 'Salva Modifiche' : 'Crea Listino'}
          </button>
        </div>
      </div>
    </div>
  );
};

// Fornitori Content
const FornitoriContent = () => {
  interface Fornitore {
    id: number;
    nome: string;
    descrizione: string;
    attivo: boolean;
    dataCreazione: string;
    configurato: boolean;
  }

  const [fornitori, setFornitori] = useState<Fornitore[]>([
    { 
      id: 1, 
      nome: 'Enel Energia', 
      descrizione: 'Fornitore principale per energia elettrica',
      attivo: true, 
      dataCreazione: '2024-01-15', 
      configurato: true 
    },
    { 
      id: 2, 
      nome: 'Eni Gas e Luce', 
      descrizione: 'Fornitore gas naturale e elettricità',
      attivo: true, 
      dataCreazione: '2024-02-10', 
      configurato: false 
    },
    { 
      id: 3, 
      nome: 'Sorgenia', 
      descrizione: 'Fornitore energia rinnovabile',
      attivo: false, 
      dataCreazione: '2024-01-20', 
      configurato: true 
    }
  ]);

  const [fornitoreSelezionato, setFornitoreSelezionato] = useState<number | null>(null);
  const [modalConfigAperta, setModalConfigAperta] = useState<boolean>(false);
  const [modalNuovoAperta, setModalNuovoAperta] = useState<boolean>(false);
  
  // Stati per la configurazione del fornitore
  const [configFornitore, setConfigFornitore] = useState({
    // Ritardi di pagamento (in mesi) - Agenzia
    ritardoGettone1AnnoAgenzia: '2',
    ritardoGettone2AnnoAgenzia: '2', 
    ritardoGettoniMensiliAgenzia: '2',
    ritardoRenditeAgenzia: '1',
    
    // Ritardi di pagamento (in mesi) - Agenti
    ritardoGettone1AnnoAgenti: '2',
    ritardoGettone2AnnoAgenti: '2', 
    ritardoGettoniMensiliAgenti: '2',
    ritardoRenditeAgenti: '1',
    
    // Modalità pagamento - Agenzia
    pagamentoGettoni1AnnoAgenzia: 'fiducia' as 'fiducia' | 'incassato',
    pagamentoGettoni2AnnoAgenzia: 'fiducia' as 'fiducia' | 'incassato',
    pagamentoMensiliAgenzia: 'fiducia' as 'fiducia' | 'incassato',
    pagamentoRenditeAgenzia: 'incassato' as 'fiducia' | 'incassato',
    
    // Modalità pagamento - Agenti
    pagamentoGettoni1AnnoAgenti: 'fiducia' as 'fiducia' | 'incassato',
    pagamentoGettoni2AnnoAgenti: 'fiducia' as 'fiducia' | 'incassato',
    pagamentoMensiliAgenti: 'fiducia' as 'fiducia' | 'incassato',
    pagamentoRenditeAgenti: 'incassato' as 'fiducia' | 'incassato',
    
    // Gestione mesi parziali
    mesiParzialiTotaliAgenzia: true,
    mesiParzialiTotaliAgenti: true,
    
    // Logiche storno per ogni mese - Agenzia
    logicheStornoAgenzia: Array.from({ length: 12 }, (_, i) => {
      if (i < 3) return '0';
      return '100';
    }) as string[],
    
    // Logiche storno per ogni mese - Agenti
    logicheStornoAgenti: Array.from({ length: 12 }, (_, i) => {
      if (i < 3) return '0';
      return '100';
    }) as string[],
    
    // Gestione cambi offerta
    gettoniCambioOffertaAgenzia: 'data_firma' as 'data_firma' | 'data_cambio',
    gettoniCambioOffertaAgenti: 'data_firma' as 'data_firma' | 'data_cambio',
    stornoGettoneRinnovoAgenzia: true,
    stornoGettoneRinnovoAgenti: true,
    
    // Opzione mensilizzazione gettoni dal 2° anno per agenti
    mensilizzaGettoniAgenti: false
  });

  const [nuovoFornitore, setNuovoFornitore] = useState({
    nome: '',
    descrizione: '',
    attivo: true
  });

  const [filtroRicerca, setFiltroRicerca] = useState('');
  const [filtroStato, setFiltroStato] = useState('tutti');

  const fornitoriFiltrati = fornitori.filter(fornitore => {
    const matchRicerca = fornitore.nome.toLowerCase().includes(filtroRicerca.toLowerCase()) ||
                        fornitore.descrizione.toLowerCase().includes(filtroRicerca.toLowerCase());
    
    const matchStato = filtroStato === 'tutti' || 
                      (filtroStato === 'attivi' && fornitore.attivo) ||
                      (filtroStato === 'inattivi' && !fornitore.attivo);
                      
    return matchRicerca && matchStato;
  });

  const aggiungiFornitore = () => {
    if (nuovoFornitore.nome.trim()) {
      const nuovoId = Math.max(...fornitori.map(f => f.id), 0) + 1;
      const nuovo: Fornitore = {
        ...nuovoFornitore,
        id: nuovoId,
        dataCreazione: new Date().toISOString().split('T')[0],
        configurato: false
      };
      setFornitori([...fornitori, nuovo]);
      setNuovoFornitore({ nome: '', descrizione: '', attivo: true });
      setModalNuovoAperta(false);
    }
  };

  const rimuoviFornitore = (id: number) => {
    setFornitori(fornitori.filter(f => f.id !== id));
  };

  const toggleStatoFornitore = (id: number) => {
    setFornitori(fornitori.map(f => 
      f.id === id ? { ...f, attivo: !f.attivo } : f
    ));
  };

  const apriConfigFornitore = (id: number) => {
    setFornitoreSelezionato(id);
    setModalConfigAperta(true);
  };

  const salvaConfigFornitore = () => {
    if (fornitoreSelezionato) {
      setFornitori(fornitori.map(f =>
        f.id === fornitoreSelezionato ? { ...f, configurato: true } : f
      ));
      console.log('Configurazione salvata per fornitore:', fornitoreSelezionato, configFornitore);
      setModalConfigAperta(false);
      setFornitoreSelezionato(null);
    }
  };

  const aggiornaLogicaStorno = (tipo: 'agenzia' | 'agenti', mese: number, valore: string) => {
    if (tipo === 'agenzia') {
      const nuoveLogiche = [...configFornitore.logicheStornoAgenzia];
      nuoveLogiche[mese] = valore;
      setConfigFornitore({ ...configFornitore, logicheStornoAgenzia: nuoveLogiche });
    } else {
      const nuoveLogiche = [...configFornitore.logicheStornoAgenti];
      nuoveLogiche[mese] = valore;
      setConfigFornitore({ ...configFornitore, logicheStornoAgenti: nuoveLogiche });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900">Gestione Fornitori</h3>
          <p className="text-sm text-gray-600 mt-1">
            Configurazione fornitori con logiche di storno, tempistiche pagamento e opzioni avanzate
          </p>
        </div>
        <button 
          onClick={() => setModalNuovoAperta(true)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          <Plus size={16} className="mr-2" />
          Nuovo Fornitore
        </button>
      </div>

      {/* Statistiche Fornitori */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Building2 className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Totali</p>
              <p className="text-2xl font-bold text-gray-900">{fornitori.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Attivi</p>
              <p className="text-2xl font-bold text-green-900">{fornitori.filter(f => f.attivo).length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Settings className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Configurati</p>
              <p className="text-2xl font-bold text-yellow-900">{fornitori.filter(f => f.configurato).length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Da Configurare</p>
              <p className="text-2xl font-bold text-red-900">{fornitori.filter(f => !f.configurato).length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filtri e Ricerca */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cerca per nome o descrizione..."
                value={filtroRicerca}
                onChange={(e) => setFiltroRicerca(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select
              value={filtroStato}
              onChange={(e) => setFiltroStato(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="tutti">Tutti i fornitori</option>
              <option value="attivi">Solo attivi</option>
              <option value="inattivi">Solo inattivi</option>
            </select>
          </div>
        </div>
      </div>

      {/* Lista Fornitori */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h4 className="text-lg font-medium text-gray-900">Lista Fornitori ({fornitoriFiltrati.length})</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrizione</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Stato</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Configurazione</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Data Creazione</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Azioni</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {fornitoriFiltrati.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <div className="text-gray-500">
                      <Building2 size={48} className="mx-auto mb-4 text-gray-300" />
                      <p className="text-lg font-medium mb-2">Nessun fornitore trovato</p>
                      <p className="text-sm">Prova a modificare i filtri o aggiungi un nuovo fornitore</p>
                    </div>
                  </td>
                </tr>
              ) : (
                fornitoriFiltrati.map((fornitore) => (
                  <tr key={fornitore.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            fornitore.attivo ? 'bg-green-100' : 'bg-gray-100'
                          }`}>
                            <Building2 className={`h-5 w-5 ${
                              fornitore.attivo ? 'text-green-600' : 'text-gray-400'
                            }`} />
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{fornitore.nome}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{fornitore.descrizione}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        fornitore.attivo 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {fornitore.attivo ? 'Attivo' : 'Inattivo'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        fornitore.configurato 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {fornitore.configurato ? 'Configurato' : 'Da Configurare'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">
                      {new Date(fornitore.dataCreazione).toLocaleDateString('it-IT')}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center space-x-2">
                        <button
                          onClick={() => apriConfigFornitore(fornitore.id)}
                          className="text-blue-600 hover:text-blue-800 p-1"
                          title="Configura fornitore"
                        >
                          <Settings size={16} />
                        </button>
                        <button
                          onClick={() => toggleStatoFornitore(fornitore.id)}
                          className={`p-1 ${fornitore.attivo ? 'text-red-600 hover:text-red-800' : 'text-green-600 hover:text-green-800'}`}
                          title={fornitore.attivo ? 'Disattiva' : 'Attiva'}
                        >
                          {fornitore.attivo ? <X size={16} /> : <CheckCircle size={16} />}
                        </button>
                        <button
                          onClick={() => rimuoviFornitore(fornitore.id)}
                          className="text-red-600 hover:text-red-800 p-1"
                          title="Rimuovi fornitore"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Nuovo Fornitore */}
      {modalNuovoAperta && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">Nuovo Fornitore</h3>
                <button
                  onClick={() => setModalNuovoAperta(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome Fornitore *</label>
                <input
                  type="text"
                  value={nuovoFornitore.nome}
                  onChange={(e) => setNuovoFornitore({...nuovoFornitore, nome: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Es. Enel Energia"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Descrizione</label>
                <textarea
                  value={nuovoFornitore.descrizione}
                  onChange={(e) => setNuovoFornitore({...nuovoFornitore, descrizione: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                  placeholder="Breve descrizione del fornitore..."
                />
              </div>
              <div className="flex items-center">
                <input
                  id="attivo"
                  type="checkbox"
                  checked={nuovoFornitore.attivo}
                  onChange={(e) => setNuovoFornitore({...nuovoFornitore, attivo: e.target.checked})}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="attivo" className="ml-2 text-sm text-gray-700">
                  Fornitore attivo
                </label>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button
                onClick={() => setModalNuovoAperta(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
              >
                Annulla
              </button>
              <button
                onClick={aggiungiFornitore}
                disabled={!nuovoFornitore.nome.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Aggiungi Fornitore
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Configurazione Fornitore */}
      {modalConfigAperta && fornitoreSelezionato && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 sticky top-0 bg-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  Configurazione: {fornitori.find(f => f.id === fornitoreSelezionato)?.nome}
                </h3>
                <button
                  onClick={() => setModalConfigAperta(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-8">
              {/* SEZIONE AGENZIA MASTER */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                  <Building2 className="mr-2 h-6 w-6" />
                  Configurazioni per Agenzia Master
                </h3>
                
                {/* Ritardi di Pagamento - Agenzia */}
                <div className="bg-white border border-blue-100 rounded-lg p-4 mb-6">
                  <h4 className="text-lg font-medium text-blue-900 mb-4">Ritardi di Pagamento (in mesi)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gettone 1° Anno</label>
                      <input
                        type="number"
                        min="0"
                        max="24"
                        value={configFornitore.ritardoGettone1AnnoAgenzia}
                        onChange={(e) => setConfigFornitore({...configFornitore, ritardoGettone1AnnoAgenzia: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gettone 2° Anno</label>
                      <input
                        type="number"
                        min="0"
                        max="24"
                        value={configFornitore.ritardoGettone2AnnoAgenzia}
                        onChange={(e) => setConfigFornitore({...configFornitore, ritardoGettone2AnnoAgenzia: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gettoni Mensili</label>
                      <input
                        type="number"
                        min="0"
                        max="24"
                        value={configFornitore.ritardoGettoniMensiliAgenzia}
                        onChange={(e) => setConfigFornitore({...configFornitore, ritardoGettoniMensiliAgenzia: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Rendite</label>
                      <input
                        type="number"
                        min="0"
                        max="24"
                        value={configFornitore.ritardoRenditeAgenzia}
                        onChange={(e) => setConfigFornitore({...configFornitore, ritardoRenditeAgenzia: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Modalità di Pagamento - Agenzia */}
                <div className="bg-white border border-blue-100 rounded-lg p-4 mb-6">
                  <h4 className="text-lg font-medium text-blue-900 mb-4">Modalità di Pagamento</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gettoni 1° Anno</label>
                      <select
                        value={configFornitore.pagamentoGettoni1AnnoAgenzia}
                        onChange={(e) => setConfigFornitore({...configFornitore, pagamentoGettoni1AnnoAgenzia: e.target.value as 'fiducia' | 'incassato'})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="fiducia">Pagamento a fiducia</option>
                        <option value="incassato">Pagamento su incassato</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gettoni 2° Anno</label>
                      <select
                        value={configFornitore.pagamentoGettoni2AnnoAgenzia}
                        onChange={(e) => setConfigFornitore({...configFornitore, pagamentoGettoni2AnnoAgenzia: e.target.value as 'fiducia' | 'incassato'})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="fiducia">Pagamento a fiducia</option>
                        <option value="incassato">Pagamento su incassato</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gettoni Mensili</label>
                      <select
                        value={configFornitore.pagamentoMensiliAgenzia}
                        onChange={(e) => setConfigFornitore({...configFornitore, pagamentoMensiliAgenzia: e.target.value as 'fiducia' | 'incassato'})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="fiducia">Pagamento a fiducia</option>
                        <option value="incassato">Pagamento su incassato</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Rendite</label>
                      <select
                        value={configFornitore.pagamentoRenditeAgenzia}
                        onChange={(e) => setConfigFornitore({...configFornitore, pagamentoRenditeAgenzia: e.target.value as 'fiducia' | 'incassato'})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="fiducia">Pagamento a fiducia</option>
                        <option value="incassato">Pagamento su incassato</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Gestione Mesi Parziali - Agenzia */}
                <div className="bg-white border border-blue-100 rounded-lg p-4 mb-6">
                  <h4 className="text-lg font-medium text-blue-900 mb-4">Gestione Mesi Parziali</h4>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <input
                        id="mesiParzialiTotaliAgenzia"
                        type="radio"
                        checked={configFornitore.mesiParzialiTotaliAgenzia}
                        onChange={() => setConfigFornitore({...configFornitore, mesiParzialiTotaliAgenzia: true})}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label htmlFor="mesiParzialiTotaliAgenzia" className="ml-2 text-sm text-gray-700">
                        Pagamento totale del mese
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="mesiParzialiProporzionaliAgenzia"
                        type="radio"
                        checked={!configFornitore.mesiParzialiTotaliAgenzia}
                        onChange={() => setConfigFornitore({...configFornitore, mesiParzialiTotaliAgenzia: false})}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label htmlFor="mesiParzialiProporzionaliAgenzia" className="ml-2 text-sm text-gray-700">
                        Pagamento proporzionale (pro quota die)
                      </label>
                    </div>
                  </div>
                </div>

                {/* Cambi Offerta - Agenzia */}
                <div className="bg-white border border-blue-100 rounded-lg p-4 mb-6">
                  <h4 className="text-lg font-medium text-blue-900 mb-4">Cambi Offerta e Rinnovi</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Decorrenza Gettoni in caso di Cambio Offerta</label>
                      <select
                        value={configFornitore.gettoniCambioOffertaAgenzia}
                        onChange={(e) => setConfigFornitore({...configFornitore, gettoniCambioOffertaAgenzia: e.target.value as 'data_firma' | 'data_cambio'})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="data_firma">Decorrono dalla data firma originale</option>
                        <option value="data_cambio">Decorrono dalla data cambio offerta</option>
                      </select>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="stornoRinnovoAgenzia"
                        type="checkbox"
                        checked={configFornitore.stornoGettoneRinnovoAgenzia}
                        onChange={(e) => setConfigFornitore({...configFornitore, stornoGettoneRinnovoAgenzia: e.target.checked})}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="stornoRinnovoAgenzia" className="ml-3 text-sm text-gray-700">
                        Applica storno su gettone precedente in caso di rinnovo
                      </label>
                    </div>
                  </div>
                </div>

                {/* Logiche di Storno - Agenzia */}
                <div className="bg-white border border-blue-100 rounded-lg p-4">
                  <h4 className="text-lg font-medium text-blue-900 mb-4">Logiche di Storno per Mese</h4>
                  <p className="text-sm text-blue-700 mb-4">
                    Percentuale di gettone rimanente se il cliente va via in quel mese (0% = storno totale, 100% = nessuno storno)
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {configFornitore.logicheStornoAgenzia.map((valore, index) => (
                      <div key={index}>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          {index + 1}° Mese
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={valore}
                            onChange={(e) => aggiornaLogicaStorno('agenzia', index, e.target.value)}
                            className="w-full px-2 py-1 pr-6 text-center border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                          <span className="absolute right-1 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* SEZIONE AGENTI/COLLABORATORI */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-900 mb-6 flex items-center">
                  <Users className="mr-2 h-6 w-6" />
                  Configurazioni per Agenti/Collaboratori
                </h3>
                
                {/* Ritardi di Pagamento - Agenti */}
                <div className="bg-white border border-green-100 rounded-lg p-4 mb-6">
                  <h4 className="text-lg font-medium text-green-900 mb-4">Ritardi di Pagamento (in mesi)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gettone 1° Anno</label>
                      <input
                        type="number"
                        min="0"
                        max="24"
                        value={configFornitore.ritardoGettone1AnnoAgenti}
                        onChange={(e) => setConfigFornitore({...configFornitore, ritardoGettone1AnnoAgenti: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gettone 2° Anno</label>
                      <input
                        type="number"
                        min="0"
                        max="24"
                        value={configFornitore.ritardoGettone2AnnoAgenti}
                        onChange={(e) => setConfigFornitore({...configFornitore, ritardoGettone2AnnoAgenti: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gettoni Mensili</label>
                      <input
                        type="number"
                        min="0"
                        max="24"
                        value={configFornitore.ritardoGettoniMensiliAgenti}
                        onChange={(e) => setConfigFornitore({...configFornitore, ritardoGettoniMensiliAgenti: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Rendite</label>
                      <input
                        type="number"
                        min="0"
                        max="24"
                        value={configFornitore.ritardoRenditeAgenti}
                        onChange={(e) => setConfigFornitore({...configFornitore, ritardoRenditeAgenti: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Modalità di Pagamento - Agenti */}
                <div className="bg-white border border-green-100 rounded-lg p-4 mb-6">
                  <h4 className="text-lg font-medium text-green-900 mb-4">Modalità di Pagamento</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gettoni 1° Anno</label>
                      <select
                        value={configFornitore.pagamentoGettoni1AnnoAgenti}
                        onChange={(e) => setConfigFornitore({...configFornitore, pagamentoGettoni1AnnoAgenti: e.target.value as 'fiducia' | 'incassato'})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="fiducia">Pagamento a fiducia</option>
                        <option value="incassato">Pagamento su incassato</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gettoni 2° Anno</label>
                      <select
                        value={configFornitore.pagamentoGettoni2AnnoAgenti}
                        onChange={(e) => setConfigFornitore({...configFornitore, pagamentoGettoni2AnnoAgenti: e.target.value as 'fiducia' | 'incassato'})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="fiducia">Pagamento a fiducia</option>
                        <option value="incassato">Pagamento su incassato</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gettoni Mensili</label>
                      <select
                        value={configFornitore.pagamentoMensiliAgenti}
                        onChange={(e) => setConfigFornitore({...configFornitore, pagamentoMensiliAgenti: e.target.value as 'fiducia' | 'incassato'})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="fiducia">Pagamento a fiducia</option>
                        <option value="incassato">Pagamento su incassato</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Rendite</label>
                      <select
                        value={configFornitore.pagamentoRenditeAgenti}
                        onChange={(e) => setConfigFornitore({...configFornitore, pagamentoRenditeAgenti: e.target.value as 'fiducia' | 'incassato'})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="fiducia">Pagamento a fiducia</option>
                        <option value="incassato">Pagamento su incassato</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Gestione Mesi Parziali - Agenti */}
                <div className="bg-white border border-green-100 rounded-lg p-4 mb-6">
                  <h4 className="text-lg font-medium text-green-900 mb-4">Gestione Mesi Parziali</h4>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <input
                        id="mesiParzialiTotaliAgenti"
                        type="radio"
                        checked={configFornitore.mesiParzialiTotaliAgenti}
                        onChange={() => setConfigFornitore({...configFornitore, mesiParzialiTotaliAgenti: true})}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                      />
                      <label htmlFor="mesiParzialiTotaliAgenti" className="ml-2 text-sm text-gray-700">
                        Pagamento totale del mese
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="mesiParzialiProporzionaliAgenti"
                        type="radio"
                        checked={!configFornitore.mesiParzialiTotaliAgenti}
                        onChange={() => setConfigFornitore({...configFornitore, mesiParzialiTotaliAgenti: false})}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                      />
                      <label htmlFor="mesiParzialiProporzionaliAgenti" className="ml-2 text-sm text-gray-700">
                        Pagamento proporzionale (pro quota die)
                      </label>
                    </div>
                  </div>
                </div>

                {/* Opzione Mensilizzazione Gettoni - Agenti */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start">
                    <input
                      id="mensilizzaGettoniAgenti"
                      type="checkbox"
                      checked={configFornitore.mensilizzaGettoniAgenti}
                      onChange={(e) => setConfigFornitore({...configFornitore, mensilizzaGettoniAgenti: e.target.checked})}
                      className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded mt-1"
                    />
                    <div className="ml-3">
                      <label htmlFor="mensilizzaGettoniAgenti" className="text-sm font-medium text-yellow-900">
                        Trasforma gettoni annui dal 2° anno in gettoni mensili per gli agenti
                      </label>
                      <p className="text-xs text-yellow-700 mt-1">
                        Se attivato, i gettoni annui dal 2° anno vengono divisi in 12 rate mensili e sommati agli eventuali gettoni mensili già presenti
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cambi Offerta - Agenti */}
                <div className="bg-white border border-green-100 rounded-lg p-4 mb-6">
                  <h4 className="text-lg font-medium text-green-900 mb-4">Cambi Offerta e Rinnovi</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Decorrenza Gettoni in caso di Cambio Offerta</label>
                      <select
                        value={configFornitore.gettoniCambioOffertaAgenti}
                        onChange={(e) => setConfigFornitore({...configFornitore, gettoniCambioOffertaAgenti: e.target.value as 'data_firma' | 'data_cambio'})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="data_firma">Decorrono dalla data firma originale</option>
                        <option value="data_cambio">Decorrono dalla data cambio offerta</option>
                      </select>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="stornoRinnovoAgenti"
                        type="checkbox"
                        checked={configFornitore.stornoGettoneRinnovoAgenti}
                        onChange={(e) => setConfigFornitore({...configFornitore, stornoGettoneRinnovoAgenti: e.target.checked})}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label htmlFor="stornoRinnovoAgenti" className="ml-3 text-sm text-gray-700">
                        Applica storno su gettone precedente in caso di rinnovo
                      </label>
                    </div>
                  </div>
                </div>

                {/* Logiche di Storno - Agenti */}
                <div className="bg-white border border-green-100 rounded-lg p-4">
                  <h4 className="text-lg font-medium text-green-900 mb-4">Logiche di Storno per Mese</h4>
                  <p className="text-sm text-green-700 mb-4">
                    Percentuale di gettone rimanente se il cliente va via in quel mese (0% = storno totale, 100% = nessuno storno)
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {configFornitore.logicheStornoAgenti.map((valore, index) => (
                      <div key={index}>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          {index + 1}° Mese
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={valore}
                            onChange={(e) => aggiornaLogicaStorno('agenti', index, e.target.value)}
                            className="w-full px-2 py-1 pr-6 text-center border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          />
                          <span className="absolute right-1 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-200 bg-gray-50 flex justify-end space-x-3 sticky bottom-0">
              <button
                onClick={() => setModalConfigAperta(false)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100"
              >
                Annulla
              </button>
              <button
                onClick={salvaConfigFornitore}
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center"
              >
                <CheckCircle size={16} className="mr-2" />
                Salva Configurazione
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Note Informative */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start">
          <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="ml-3">
            <h5 className="text-sm font-medium text-blue-800 mb-2">Informazioni sulla Configurazione Fornitori</h5>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• <strong>Ritardi di pagamento:</strong> Numero di mesi di ritardo dal maturato per ogni tipo di guadagno</li>
              <li>• <strong>Pagamento su incassato:</strong> Se attivo, i pagamenti dipendono dai reali incassi del fornitore</li>
              <li>• <strong>Logiche di storno:</strong> Definiscono quanto viene stornato per ogni mese di permanenza del cliente</li>
              <li>• <strong>Mesi parziali:</strong> Come gestire i pagamenti quando un cliente entra/esce a metà mese</li>
              <li>• <strong>Cambi offerta:</strong> Come gestire le tempistiche quando il cliente cambia offerta dello stesso fornitore</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Piani Provvigionali Content
const PianiProvvigionaliContent = () => {
  interface LivelloGerarchico {
    id: number;
    nome: string;
    livello: number;
  }

  interface LivelloNonGerarchico {
    id: number;
    nome: string;
  }

  const [livelliGerarchici, setLivelliGerarchici] = useState<LivelloGerarchico[]>([
    { id: 1, nome: 'Direttore Commerciale', livello: 1 },
    { id: 2, nome: 'Consulente', livello: 2 }
  ]);
  
  const [livelliNonGerarchici, setLivelliNonGerarchici] = useState<LivelloNonGerarchico[]>([
    { id: 1, nome: 'Segnalatore' }
  ]);
  
  const [colonneBase] = useState<string[]>([
    'Gettone Annuo 1° Anno',
    'Gettone Volume 1° Anno', 
    'Gettone Mensile 1° Anno',
    'Rendita 1° Anno',
    'Gettone Annuo 2° Anno',
    'Gettone Volume 2° Anno',
    'Gettone Mensile 2° Anno',
    'Rendita 2° Anno'
  ]);
  
  const [colonnePersonalizzate, setColonnePersonalizzate] = useState<string[]>([]);
  const [nuovaColonna, setNuovaColonna] = useState<string>('');
  const [valoriPercentuali, setValoriPercentuali] = useState<Record<string, string>>({});
  const [etichette, setEtichette] = useState<Record<number, string>>(
    colonneBase.reduce((acc, col, index) => ({...acc, [index]: col}), {} as Record<number, string>)
  );

  const aggiungiLivelloGerarchico = () => {
    const nuovoLivello = Math.max(...livelliGerarchici.map(l => l.livello), 0) + 1;
    const nuovoId = Math.max(...livelliGerarchici.map(l => l.id), 0) + 1;
    setLivelliGerarchici([...livelliGerarchici, {
      id: nuovoId,
      nome: `Livello ${nuovoLivello}`,
      livello: nuovoLivello
    }]);
  };

  const aggiungiLivelloNonGerarchico = () => {
    const nuovoId = Math.max(...livelliNonGerarchici.map(l => l.id), 0) + 1;
    setLivelliNonGerarchici([...livelliNonGerarchici, {
      id: nuovoId,
      nome: `Livello Non Gerarchico ${nuovoId}`
    }]);
  };

  const rimuoviLivelloGerarchico = (id: number) => {
    if (livelliGerarchici.length > 1) {
      setLivelliGerarchici(livelliGerarchici.filter(l => l.id !== id));
    }
  };

  const rimuoviLivelloNonGerarchico = (id: number) => {
    setLivelliNonGerarchici(livelliNonGerarchici.filter(l => l.id !== id));
  };

  const aggiungiColonna = () => {
    if (nuovaColonna.trim()) {
      setColonnePersonalizzate([...colonnePersonalizzate, nuovaColonna.trim()]);
      setNuovaColonna('');
    }
  };

  const rimuoviColonna = (index: number) => {
    setColonnePersonalizzate(colonnePersonalizzate.filter((_, i) => i !== index));
  };

  const aggiornaPercentuale = (tipoLivello: string, livelloId: number, colonnaIndex: number, valore: string) => {
    const key = `${tipoLivello}-${livelloId}-${colonnaIndex}`;
    setValoriPercentuali({...valoriPercentuali, [key]: valore});
  };

  const aggiornaEtichetta = (colonnaIndex: number, nuovaEtichetta: string) => {
    setEtichette({...etichette, [colonnaIndex]: nuovaEtichetta});
  };

  const aggiornaLivello = (tipo: string, id: number, nuovoNome: string) => {
    if (tipo === 'gerarchico') {
      setLivelliGerarchici(livelliGerarchici.map(l => 
        l.id === id ? {...l, nome: nuovoNome} : l
      ));
    } else {
      setLivelliNonGerarchici(livelliNonGerarchici.map(l => 
        l.id === id ? {...l, nome: nuovoNome} : l
      ));
    }
  };

  const salvaImpostazioni = () => {
    console.log('Impostazioni salvate:', {
      livelliGerarchici,
      livelliNonGerarchici,
      colonnePersonalizzate,
      valoriPercentuali,
      etichette
    });
  };

  const tuteLeColonne = [...colonneBase, ...colonnePersonalizzate];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900">Piani Provvigionali</h3>
          <p className="text-sm text-gray-600 mt-1">
            Configurazione delle percentuali di provvigione per livelli gerarchici e non gerarchici
          </p>
        </div>
        <button 
          onClick={salvaImpostazioni}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
        >
          <CheckCircle size={16} className="mr-2" />
          Salva Impostazioni
        </button>
      </div>

      {/* Gestione Colonne Personalizzate */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h4 className="text-lg font-medium text-gray-900 mb-4">Gestione Colonne</h4>
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            value={nuovaColonna}
            onChange={(e) => setNuovaColonna(e.target.value)}
            placeholder="Nome nuova colonna (es. Bonus Acquisizione)"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            onClick={aggiungiColonna}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
          >
            <Plus size={16} className="mr-2" />
            Aggiungi Colonna
          </button>
        </div>
        
        {colonnePersonalizzate.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">Colonne Personalizzate:</p>
            <div className="flex flex-wrap gap-2">
              {colonnePersonalizzate.map((col, index) => (
                <div key={index} className="bg-blue-50 px-3 py-1 rounded-full flex items-center">
                  <span className="text-sm text-blue-800">{col}</span>
                  <button
                    onClick={() => rimuoviColonna(index)}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Livelli Gerarchici */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-lg font-medium text-gray-900">Livelli Gerarchici</h4>
              <p className="text-sm text-gray-600">Struttura gerarchica con subordinazione (livello 1 = più alto)</p>
            </div>
            <button
              onClick={aggiungiLivelloGerarchico}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              <Plus size={16} className="mr-2" />
              Aggiungi Livello
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase w-12">#</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase min-w-48">Nome Livello</th>
                {tuteLeColonne.map((col, index) => (
                  <th key={index} className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase min-w-32">
                    <input
                      type="text"
                      value={etichette[index] || col}
                      onChange={(e) => aggiornaEtichetta(index, e.target.value)}
                      className="w-full text-center bg-transparent border-none text-xs font-medium text-gray-500 uppercase focus:outline-none focus:bg-white focus:border focus:border-blue-500 focus:rounded px-1"
                    />
                  </th>
                ))}
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase w-20">Azioni</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {livelliGerarchici
                .sort((a, b) => a.livello - b.livello)
                .map((livello) => (
                <tr key={livello.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {livello.livello}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <input
                      type="text"
                      value={livello.nome}
                      onChange={(e) => aggiornaLivello('gerarchico', livello.id, e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </td>
                  {tuteLeColonne.map((_, colIndex) => {
                    const key = `gerarchico-${livello.id}-${colIndex}`;
                    return (
                      <td key={colIndex} className="px-3 py-4">
                        <div className="relative">
                          <input
                            type="number"
                            min="0"
                            max="100"
                            step="0.01"
                            value={valoriPercentuali[key] || ''}
                            onChange={(e) => aggiornaPercentuale('gerarchico', livello.id, colIndex, e.target.value)}
                            className="w-full px-2 py-2 pr-6 text-center border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="0.00"
                          />
                          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">%</span>
                        </div>
                      </td>
                    );
                  })}
                  <td className="px-4 py-4 text-center">
                    {livelliGerarchici.length > 1 && (
                      <button
                        onClick={() => rimuoviLivelloGerarchico(livello.id)}
                        className="text-red-600 hover:text-red-800 p-1"
                        title="Rimuovi livello"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Livelli Non Gerarchici */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-lg font-medium text-gray-900">Livelli Non Gerarchici</h4>
              <p className="text-sm text-gray-600">Ruoli senza subordinazione gerarchica (es. segnalatori, partner esterni)</p>
            </div>
            <button
              onClick={aggiungiLivelloNonGerarchico}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
            >
              <Plus size={16} className="mr-2" />
              Aggiungi Livello
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase min-w-48">Nome Livello</th>
                {tuteLeColonne.map((col, index) => (
                  <th key={index} className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase min-w-32">
                    <input
                      type="text"
                      value={etichette[index] || col}
                      onChange={(e) => aggiornaEtichetta(index, e.target.value)}
                      className="w-full text-center bg-transparent border-none text-xs font-medium text-gray-500 uppercase focus:outline-none focus:bg-white focus:border focus:border-blue-500 focus:rounded px-1"
                    />
                  </th>
                ))}
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase w-20">Azioni</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {livelliNonGerarchici.map((livello) => (
                <tr key={livello.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <input
                      type="text"
                      value={livello.nome}
                      onChange={(e) => aggiornaLivello('non-gerarchico', livello.id, e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </td>
                  {tuteLeColonne.map((_, colIndex) => {
                    const key = `non-gerarchico-${livello.id}-${colIndex}`;
                    return (
                      <td key={colIndex} className="px-3 py-4">
                        <div className="relative">
                          <input
                            type="number"
                            min="0"
                            max="100"
                            step="0.01"
                            value={valoriPercentuali[key] || ''}
                            onChange={(e) => aggiornaPercentuale('non-gerarchico', livello.id, colIndex, e.target.value)}
                            className="w-full px-2 py-2 pr-6 text-center border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="0.00"
                          />
                          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">%</span>
                        </div>
                      </td>
                    );
                  })}
                  <td className="px-4 py-4 text-center">
                    <button
                      onClick={() => rimuoviLivelloNonGerarchico(livello.id)}
                      className="text-red-600 hover:text-red-800 p-1"
                      title="Rimuovi livello"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Note Informative */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start">
          <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="ml-3">
            <h5 className="text-sm font-medium text-blue-800 mb-1">Note Importanti</h5>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Le percentuali si riferiscono al 100% del guadagno totale dell'agenzia</li>
              <li>• I livelli gerarchici sono numerati dal più alto (1) al più basso</li>
              <li>• I livelli non gerarchici non hanno subordinazione tra loro</li>
              <li>• Le colonne delle etichette sono modificabili cliccando sui titoli</li>
              <li>• Il "2° Anno" si intende dal secondo anno in poi per tutti gli anni successivi</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Altri componenti esistenti...
const AnagraficheContent = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-semibold text-gray-900">Anagrafiche Consumatori Finali</h3>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
        <Plus size={16} className="mr-2" />
        Nuovo Cliente
      </button>
    </div>
    
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Cerca per ragione sociale, P.IVA, consulente..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors flex items-center">
            <Filter size={16} className="mr-2" />
            Filtri
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ragione Sociale</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Consulente</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">P.IVA</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contatti</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fatturato 1° Anno</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fatturato Storico</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Azioni</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td colSpan={7} className="px-6 py-12 text-center">
                <div className="text-gray-500">
                  <Users size={48} className="mx-auto mb-4 text-gray-300" />
                  <p className="text-lg font-medium mb-2">Nessun cliente inserito</p>
                  <p className="text-sm">Clicca "Nuovo Cliente" per iniziare ad inserire le anagrafiche</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const PODContent = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold text-gray-900">Gestione POD (Punti di Prelievo Elettrici)</h3>
        <p className="text-sm text-gray-600 mt-1">Gestione dei punti di prelievo elettricità con consumi e fornitori</p>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
        <Plus size={16} className="mr-2" />
        Nuovo POD
      </button>
    </div>
    
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Codice POD" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Ragione Sociale" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <select className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="">Tutti i consulenti</option>
            <option value="marco">Marco Rossi</option>
            <option value="luigi">Luigi Bianchi</option>
            <option value="sara">Sara Verdi</option>
          </select>
          <select className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="">Tutti i fornitori</option>
            <option value="enel">Enel Energia</option>
            <option value="eni">Eni Gas e Luce</option>
            <option value="sorgenia">Sorgenia</option>
          </select>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Codice POD</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ragione Sociale</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Consulente</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fornitore</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Livello Tensione</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Consumo Annuo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Azioni</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td colSpan={7} className="px-6 py-12 text-center">
                <div className="text-gray-500">
                  <Zap size={48} className="mx-auto mb-4 text-gray-300" />
                  <p className="text-lg font-medium mb-2">Nessun POD inserito</p>
                  <p className="text-sm">Inizia inserendo i punti di prelievo elettrici dei tuoi clienti</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const PDRContent = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold text-gray-900">Gestione PDR (Punti di Riconsegna Gas)</h3>
        <p className="text-sm text-gray-600 mt-1">Gestione dei punti di riconsegna gas naturale</p>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
        <Plus size={16} className="mr-2" />
        Nuovo PDR
      </button>
    </div>
    
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input type="text" placeholder="Codice PDR" className="px-3 py-2 border border-gray-300 rounded-md" />
          <input type="text" placeholder="Codice REMI" className="px-3 py-2 border border-gray-300 rounded-md" />
          <input type="text" placeholder="Ragione Sociale" className="px-3 py-2 border border-gray-300 rounded-md" />
          <select className="px-3 py-2 border border-gray-300 rounded-md">
            <option value="">Tutti i fornitori</option>
            <option value="enel">Enel Energia</option>
            <option value="eni">Eni Gas e Luce</option>
          </select>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Codice PDR</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ragione Sociale</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Consulente</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fornitore</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">REMI</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contatore</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Consumo Annuo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Azioni</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td colSpan={8} className="px-6 py-12 text-center">
                <div className="text-gray-500">
                  <MapPin size={48} className="mx-auto mb-4 text-gray-300" />
                  <p className="text-lg font-medium mb-2">Nessun PDR inserito</p>
                  <p className="text-sm">Aggiungi i punti di riconsegna gas dei tuoi clienti</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const LeadsContent = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold text-gray-900">Gestione Leads</h3>
        <p className="text-sm text-gray-600 mt-1">Segnalazioni da inviare ai collaboratori e trattative da sviluppare</p>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
        <Plus size={16} className="mr-2" />
        Nuovo Lead
      </button>
    </div>
    
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h4 className="text-lg font-medium text-gray-900 mb-4">Inserisci Nuovo Lead</h4>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nome e Cognome</label>
              <input 
                type="text" 
                placeholder="Mario Rossi" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Azienda</label>
              <input 
                type="text" 
                placeholder="Nome azienda (se cliente aziendale)" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Telefono</label>
              <input 
                type="tel" 
                placeholder="+39 123 456 7890" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                placeholder="mario.rossi@esempio.it" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Informazioni e Opportunità</label>
            <textarea 
              placeholder="Descrivi la situazione, le opportunità economiche, il potenziale del cliente..."
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Salva Lead
            </button>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Invia a Superiore
            </button>
            <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              Allega File
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h4 className="text-lg font-medium text-gray-900">Leads Recenti</h4>
      </div>
      <div className="p-6">
        <div className="text-center text-gray-500 py-8">
          <Target size={48} className="mx-auto mb-4 text-gray-300" />
          <p className="text-lg font-medium mb-2">Nessun lead inserito</p>
          <p className="text-sm">I leads salvati appariranno qui</p>
        </div>
      </div>
    </div>
  </div>
);

const TrattativeContent = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold text-gray-900">Gestione Trattative - Task Manager</h3>
        <p className="text-sm text-gray-600 mt-1">Gestione delle attività e delle trattative in corso</p>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
        <Plus size={16} className="mr-2" />
        Nuova Trattativa
      </button>
    </div>
    
    {/* Task Statistics */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Calendar className="h-6 w-6 text-blue-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Task Totali</p>
            <p className="text-2xl font-bold text-gray-900">0</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center">
          <div className="p-2 bg-red-100 rounded-lg">
            <AlertCircle className="h-6 w-6 text-red-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Scaduti</p>
            <p className="text-2xl font-bold text-red-900">0</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center">
          <div className="p-2 bg-orange-100 rounded-lg">
            <Calendar className="h-6 w-6 text-orange-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Oggi</p>
            <p className="text-2xl font-bold text-orange-900">0</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center">
          <div className="p-2 bg-green-100 rounded-lg">
            <Target className="h-6 w-6 text-green-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Completati</p>
            <p className="text-2xl font-bold text-green-900">0</p>
          </div>
        </div>
      </div>
    </div>

    {/* Task Filters */}
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h4 className="text-lg font-medium text-gray-900 mb-4">Filtri Rapidi</h4>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors">
            Tutti
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            Da fare oggi
          </button>
          <button className="px-4 py-2 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 transition-colors">
            Scaduti
          </button>
          <button className="px-4 py-2 bg-orange-100 text-orange-800 rounded-lg hover:bg-orange-200 transition-colors">
            Prossima settimana
          </button>
          <button className="px-4 py-2 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition-colors">
            Completati
          </button>
        </div>
      </div>
    </div>

    {/* Task List */}
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h4 className="text-lg font-medium text-gray-900">Lista Trattative</h4>
      </div>
      <div className="p-6">
        <div className="text-center text-gray-500 py-12">
          <Calendar size={48} className="mx-auto mb-4 text-gray-300" />
          <p className="text-lg font-medium mb-2">Nessuna trattativa attiva</p>
          <p className="text-sm">Clicca "Nuova Trattativa" per iniziare</p>
        </div>
      </div>
    </div>
  </div>
);

// Placeholder Content
const PlaceholderContent = ({ section }: { section: string }) => {
  const getSectionInfo = () => {
    const sectionNames: Record<string, string> = {
      'contratti': 'Contratti',
      'posizioni-economiche-agenzia': 'Posizioni Economiche Agenzia',
      'posizioni-economiche-collaboratori': 'Posizioni Economiche Collaboratori',
      'guadagni-agenzia': 'Guadagni Agenzia',
      'guadagni-collaboratore': 'Guadagni Collaboratore',
      'pdp': 'PDP (Punti di Prelievo)',
      'comuni': 'Comuni',
      'inviti-fatturare-agenzia': 'Inviti a Fatturare Agenzia',
      'inviti-fatturare-collaboratori': 'Inviti a Fatturare Collaboratori',
      'entrate': 'Entrate',
      'uscite': 'Uscite',
      'tutti-campi': 'Tutti i Campi',
      'kpi-report-cf': 'KPI e Report Consumatori Finali',
      'collaboratori': 'Collaboratori',
      'rc-inviti-fatturare': 'Inviti a Fatturare Rete Commerciale',
      'sim-energia-elettrica': 'Simulatore Energia Elettrica',
      'sim-gas-naturale': 'Simulatore Gas Naturale',
      'sim-agevolazioni': 'Simulatore Agevolazioni Fiscali',
      'profilo': 'Profilo Utente',
      'agenzia': 'Impostazioni Agenzia',
      'rete-vendita': 'Impostazioni Rete Vendita'
    };
    
    return sectionNames[section] || section;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
      <Lightbulb size={48} className="mx-auto text-gray-400 mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{getSectionInfo()}</h3>
      <p className="text-gray-500 mb-4">Questa sezione è in fase di sviluppo</p>
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium">
        In Sviluppo
      </div>
      <div className="mt-6 text-sm text-gray-400">
        <p>Sarà implementata nelle prossime iterazioni</p>
      </div>
    </div>
  );
};

export default App;
