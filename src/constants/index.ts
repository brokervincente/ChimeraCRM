// Costanti condivise per tutto il CRM

export const FORNITORI = [
  'Enel Energia', 
  'Eni Gas e Luce', 
  'Sorgenia', 
  'A2A Energia', 
  'Edison',
  'Acea Energia',
  'Hera Comm'
] as const;

export const CATEGORIE_CLIENTE = [
  'Domestico',
  'Condominio', 
  'Ente Morale',
  'PMI',
  'Industria',
  'Pubblica Amministrazione',
  'Fornitura Temporanea'
] as const;

export const COMMODITIES = [
  'Energia',
  'Gas'
] as const;

export const LIVELLI_TENSIONE = [
  'BTA1', 'BTA2', 'BTA3', 'BTA4', 'BTA5',
  'BTA6', 'MT', 'AT'
] as const;

export const STATI_CONTRATTO = [
  'attivo',
  'sospeso', 
  'terminato',
  'in_lavorazione'
] as const;

export const TIPI_CONTATORE_GAS = [
  'G4', 'G6', 'G10', 'G16', 'G25', 'G40', 
  'G65', 'G100', 'G160', 'G250', 'G400',
  'diretto'
] as const;

export const MENU_STRUCTURE = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    items: [
      { id: 'sintesi', title: 'Sintesi e Alert', status: 'in-progress' }
    ]
  },
  {
    id: 'consumatori-finali',
    title: 'Consumatori Finali',
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
    items: [
      { id: 'piani-provvigionali', title: 'Piani Provvigionali', status: 'complete' },
      { id: 'fornitori', title: 'Fornitori', status: 'complete' },
      { id: 'listini-offerte', title: 'Listini e Offerte', status: 'complete' },
      { id: 'collaboratori', title: 'Collaboratori', status: 'planned' },
      { id: 'rc-inviti-fatturare', title: 'Inviti a Fatturare', status: 'planned' },
      { id: 'leads', title: 'Leads', status: 'in-progress' },
      { id: 'trattative', title: 'Trattative', status: 'in-progress' }
    ]
  },
  {
    id: 'simulatori',
    title: 'Simulatori Superpartes',
    items: [
      { id: 'sim-energia-elettrica', title: 'Energia Elettrica', status: 'planned' },
      { id: 'sim-gas-naturale', title: 'Gas Naturale', status: 'planned' },
      { id: 'sim-agevolazioni', title: 'Agevolazioni Fiscali', status: 'planned' }
    ]
  },
  {
    id: 'impostazioni',
    title: 'Impostazioni',
    items: [
      { id: 'profilo', title: 'Profilo', status: 'planned' },
      { id: 'agenzia', title: 'Agenzia', status: 'planned' },
      { id: 'rete-vendita', title: 'Rete Vendita', status: 'planned' }
    ]
  }
] as const;
