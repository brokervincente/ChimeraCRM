// Definizioni TypeScript per il CRM Energia

import { FORNITORI, CATEGORIE_CLIENTE, COMMODITIES, STATI_CONTRATTO } from '../constants';

// Tipi base
export type Fornitore = typeof FORNITORI[number];
export type CategoriaCliente = typeof CATEGORIE_CLIENTE[number];
export type Commodity = typeof COMMODITIES[number];
export type StatoContratto = typeof STATI_CONTRATTO[number];
export type StatusSviluppo = 'complete' | 'in-progress' | 'planned';

// Cliente/Anagrafica
export interface Cliente {
  id: number;
  consulenteAttuale: string;
  ragioneSociale: string;
  rappresentanteLegale?: string;
  referente?: string;
  piva?: string;
  codiceFiscaleAzienda?: string;
  codiceFiscaleRappresentante?: string;
  telefono?: string;
  email?: string;
  fatturato1Anno: number;
  fatturato2Anno: number;
  fatturatoStorico: number;
  note?: string;
  dataCreazione: string;
  dataModifica: string;
}

// Listini e Offerte
export interface Listino {
  id: number;
  codice: string;
  nome: string;
  fornitore: Fornitore;
  categoria: CategoriaCliente;
  commodity: Commodity;
  attivo: boolean;
  dataCreazione: string;
  dataModifica: string;
  dataInizioValidita: string;
  dataFineValidita?: string;
  
  // Componenti guadagno 1° Anno (importi in euro al 100% per BV)
  gettone1Anno: number;
  gettoneVolume1Anno: number; // €/kWh o €/Smc
  gettoneMensile1Anno: number;
  ricorrente1Anno: number;
  
  // Componenti guadagno 2° Anno
  gettone2Anno: number;
  gettoneVolume2Anno: number;
  gettoneMensile2Anno: number;
  ricorrente2Anno: number;
  
  note?: string;
}

// Fornitori
export interface FornitoreDettaglio {
  id: number;
  nome: string;
  descrizione?: string;
  attivo: boolean;
  dataCreazione: string;
  configurato: boolean;
  
  // Configurazioni specifiche (se configurato = true)
  configurazione?: ConfigurazioneFornitore;
}

export interface ConfigurazioneFornitore {
  // Ritardi pagamento (mesi)
  ritardoPagamenti: {
    agenzia: {
      gettone1Anno: number;
      gettone2Anno: number;
      gettoniMensili: number;
      rendite: number;
    };
    agenti: {
      gettone1Anno: number;
      gettone2Anno: number;
      gettoniMensili: number;
      rendite: number;
    };
  };
  
  // Modalità pagamento
  modalitaPagamento: {
    agenzia: {
      gettoni1Anno: 'fiducia' | 'incassato';
      gettoni2Anno: 'fiducia' | 'incassato';
      gettoniMensili: 'fiducia' | 'incassato';
      rendite: 'fiducia' | 'incassato';
    };
    agenti: {
      gettoni1Anno: 'fiducia' | 'incassato';
      gettoni2Anno: 'fiducia' | 'incassato';
      gettoniMensili: 'fiducia' | 'incassato';
      rendite: 'fiducia' | 'incassato';
    };
  };
  
  // Gestione mesi parziali
  mesiParziali: {
    agenzia: boolean; // true = totali, false = proporzionali
    agenti: boolean;
  };
  
  // Logiche storno per ogni mese (0-100%)
  logicheStorno: {
    agenzia: number[]; // 12 valori per i 12 mesi
    agenti: number[];
  };
  
  // Gestione cambi offerta
  cambiOfferta: {
    agenzia: 'data_firma' | 'data_cambio';
    agenti: 'data_firma' | 'data_cambio';
    stornoRinnovo: {
      agenzia: boolean;
      agenti: boolean;
    };
  };
  
  // Opzioni speciali
  mensilizzaGettoniAgenti: boolean;
}

// POD (Punti di Prelievo Elettrici)
export interface POD {
  id: number;
  codice: string; // Formato: IT001E12345678901
  collaboratore: string;
  ragioneSociale: string;
  livelloTensione: string;
  fornitore: Fornitore;
  listino: string;
  potenza: number; // kW
  consumoAnnuoTeorico: number; // kWh
  consumoTotaleReale12Mesi: number; // kWh
  consumiMensili: ConsumoMensile[];
  note?: string;
  dataCreazione: string;
  dataModifica: string;
}

// PDR (Punti di Riconsegna Gas)
export interface PDR {
  id: number;
  codice: string; // 14 cifre
  collaboratore: string;
  ragioneSociale: string;
  codiceREMI: string;
  fornitore: Fornitore;
  listino: string;
  contatore: string; // G4, G6, etc. o "diretto"
  consumoAnnuoTeorico: number; // Smc
  consumoTotaleReale12Mesi: number; // Smc
  consumiMensili: ConsumoMensile[];
  note?: string;
  dataCreazione: string;
  dataModifica: string;
}

// Consumi mensili
export interface ConsumoMensile {
  mese: number; // 1-12
  anno: number;
  valore: number; // kWh o Smc
  stimato: boolean;
  dataLettura?: string;
}

// Livelli Gerarchici e Piani Provvigionali
export interface LivelloGerarchico {
  id: number;
  nome: string;
  livello: number; // 1 = più alto
  percentuali: Record<string, number>; // chiave = nome colonna, valore = percentuale
}

export interface LivelloNonGerarchico {
  id: number;
  nome: string;
  percentuali: Record<string, number>;
}

// Collaboratori
export interface Collaboratore {
  id: number;
  nome: string;
  cognome: string;
  email: string;
  telefono?: string;
  codiceFiscale: string;
  partitaIva?: string;
  
  // Livello attuale
  livelloGerarchico?: number;
  livelloNonGerarchico?: number;
  
  // Storico livelli (per gestire promozioni/degradazioni)
  storicoLivelli: {
    livelloGerarchico?: number;
    livelloNonGerarchico?: number;
    dataInizio: string;
    dataFine?: string;
  }[];
  
  // Associazioni gerarchiche
  storicoAssociazioni: {
    teamManager?: number;
    areaManager?: number;
    direttoreCommerciale?: number;
    dataInizio: string;
    dataFine?: string;
  }[];
  
  attivo: boolean;
  dataCreazione: string;
  dataModifica: string;
  note?: string;
}

// Contratti e Posizioni Economiche
export interface Contratto {
  id: number;
  codice: string;
  consulente: number; // ID collaboratore
  cliente: number; // ID cliente
  fornitore: Fornitore;
  listino: number; // ID listino
  dataFirma: string;
  dataInizioFornitura: string;
  dataInizioOfferta: string;
  dataFineFornitura?: string;
  stato: StatoContratto;
  
  // Associazioni aggiuntive
  segnalatore?: number; // ID collaboratore
  livelliNonGerarchici: number[]; // ID livelli non gerarchici
  
  // Guadagni personalizzati (se diversi dal listino standard)
  guadagniPersonalizzati?: {
    [key: string]: number; // chiave = tipo guadagno, valore = percentuale/importo personalizzato
  };
  
  note?: string;
  dataCreazione: string;
  dataModifica: string;
}

export interface PosizioneEconomica {
  id: number;
  codice: string; // POD/PDR + Data inizio
  contratto: number; // ID contratto
  collaboratore: number; // ID collaboratore
  fornitore: Fornitore;
  listino: number; // ID listino
  
  // Calcoli gettoni
  gettoni: {
    primoAnno: {
      totale: number;
      ricevuto: number;
      storno: number;
    };
    secondoAnno: {
      totale: number;
      ricevuto: number;
      storno: number;
    };
  };
  
  // Calcoli gettoni volume
  gettoniVolume: {
    primoAnno: {
      totale: number;
      ricevuto: number;
    };
    secondoAnno: {
      totale: number;
      ricevuto: number;
    };
  };
  
  // Calcoli mensili
  mensili: {
    totale: number;
    ricevuto: number;
  };
  
  // Rendite sui consumi
  rendite: {
    totale: number;
    ricevuto: number;
  };
  
  // Altri importi
  anticipi: number;
  penalita: number;
  
  // Totali
  totaleSpettante: number;
  totaleRicevuto: number;
  saldo: number;
  
  // Rischio
  rischioStorni: number;
  
  // Stime
  fatturatoStimato1Anno: number;
  fatturatoStimato2Anno: number;
  fatturatoStorico: number;
  
  note?: string;
  dataCreazione: string;
  dataModifica: string;
}

// Leads e Trattative
export interface Lead {
  id: number;
  nome: string;
  cognome: string;
  azienda?: string;
  telefono?: string;
  email?: string;
  informazioni: string;
  collaboratore: number; // Chi ha inserito il lead
  superiore?: number; // A chi è stato inviato
  stato: 'nuovo' | 'inviato' | 'in_lavorazione' | 'convertito' | 'scartato';
  dataCreazione: string;
  dataModifica: string;
}

export interface Trattativa {
  id: number;
  nome: string;
  cognome: string;
  azienda?: string;
  telefono?: string;
  email?: string;
  informazioni: string;
  daFare: string;
  dataScadenza: string;
  oraScadenza: string;
  collaboratore: number;
  stato: 'da_fare' | 'in_corso' | 'completata' | 'scaduta';
  dataCreazione: string;
  dataModifica: string;
  dataCompletamento?: string;
}

// Menu e Navigazione
export interface MenuItem {
  id: string;
  title: string;
  status: StatusSviluppo;
}

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
}