import { useState } from 'react';

// Utilities per validazione form - CRITICO per un CRM finanziario

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface FieldValidation {
  field: string;
  error?: string;
}

// Validatori base
export const validators = {
  required: (value: string | number | null | undefined, fieldName: string): FieldValidation => {
    const isEmpty = value === null || value === undefined || value === '' || 
                   (typeof value === 'string' && value.trim() === '');
    
    return {
      field: fieldName,
      error: isEmpty ? `${fieldName} è obbligatorio` : undefined
    };
  },

  email: (email: string, fieldName: string = 'Email'): FieldValidation => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = !email || emailRegex.test(email.trim());
    
    return {
      field: fieldName,
      error: !isValid ? 'Email non valida' : undefined
    };
  },

  partitaIva: (piva: string, fieldName: string = 'Partita IVA'): FieldValidation => {
    if (!piva) return { field: fieldName }; // Opzionale
    
    // Rimuovi spazi e convertire in maiuscolo
    const cleanPiva = piva.replace(/\s/g, '').toUpperCase();
    
    // Verifica lunghezza e formato
    if (!/^[A-Z]{2}\d{11}$/.test(cleanPiva) && !/^\d{11}$/.test(cleanPiva)) {
      return {
        field: fieldName,
        error: 'Partita IVA non valida (formato: IT12345678901 o 12345678901)'
      };
    }
    
    return { field: fieldName };
  },

  codiceFiscale: (cf: string, fieldName: string = 'Codice Fiscale'): FieldValidation => {
    if (!cf) return { field: fieldName }; // Opzionale se non specificato diversamente
    
    const cleanCf = cf.replace(/\s/g, '').toUpperCase();
    
    // Verifica lunghezza
    if (cleanCf.length !== 16) {
      return {
        field: fieldName,
        error: 'Codice Fiscale deve essere di 16 caratteri'
      };
    }
    
    // Verifica formato base (semplificato)
    if (!/^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/.test(cleanCf)) {
      return {
        field: fieldName,
        error: 'Formato Codice Fiscale non valido'
      };
    }
    
    return { field: fieldName };
  },

  telefono: (tel: string, fieldName: string = 'Telefono'): FieldValidation => {
    if (!tel) return { field: fieldName }; // Opzionale
    
    // Rimuovi spazi, trattini, parentesi
    const cleanTel = tel.replace(/[\s\-\(\)]/g, '');
    
    // Accetta formati italiani (+39...) o internazionali (+...)
    if (!/^(\+\d{1,3})?\d{8,15}$/.test(cleanTel)) {
      return {
        field: fieldName,
        error: 'Numero di telefono non valido'
      };
    }
    
    return { field: fieldName };
  },

  codiceContratto: (codice: string, fieldName: string = 'Codice Contratto'): FieldValidation => {
    if (!codice || codice.trim().length < 3) {
      return {
        field: fieldName,
        error: 'Codice contratto deve avere almeno 3 caratteri'
      };
    }
    
    return { field: fieldName };
  },

  codicePOD: (pod: string, fieldName: string = 'Codice POD'): FieldValidation => {
    if (!pod) {
      return {
        field: fieldName,
        error: 'Codice POD è obbligatorio'
      };
    }
    
    // Formato POD italiano: IT001E12345678901
    const cleanPod = pod.replace(/\s/g, '').toUpperCase();
    
    if (!/^IT\d{3}E\d{8}\d{3}$/.test(cleanPod)) {
      return {
        field: fieldName,
        error: 'Codice POD non valido (formato: IT001E12345678901)'
      };
    }
    
    return { field: fieldName };
  },

  codicePDR: (pdr: string, fieldName: string = 'Codice PDR'): FieldValidation => {
    if (!pdr) {
      return {
        field: fieldName,
        error: 'Codice PDR è obbligatorio'
      };
    }
    
    // Formato PDR: 14 cifre numeriche
    const cleanPdr = pdr.replace(/\s/g, '');
    
    if (!/^\d{14}$/.test(cleanPdr)) {
      return {
        field: fieldName,
        error: 'Codice PDR deve avere 14 cifre numeriche'
      };
    }
    
    return { field: fieldName };
  },

  importoEuro: (importo: string | number, fieldName: string): FieldValidation => {
    const num = typeof importo === 'string' ? parseFloat(importo) : importo;
    
    if (isNaN(num) || num < 0) {
      return {
        field: fieldName,
        error: `${fieldName} deve essere un numero positivo`
      };
    }
    
    // Verifica massimo 2 decimali
    if (typeof importo === 'string' && /\.\d{3,}/.test(importo)) {
      return {
        field: fieldName,
        error: `${fieldName} può avere massimo 2 decimali`
      };
    }
    
    return { field: fieldName };
  },

  percentuale: (valore: string | number, fieldName: string): FieldValidation => {
    const num = typeof valore === 'string' ? parseFloat(valore) : valore;
    
    if (isNaN(num) || num < 0 || num > 100) {
      return {
        field: fieldName,
        error: `${fieldName} deve essere tra 0 e 100`
      };
    }
    
    return { field: fieldName };
  },

  dataFutura: (data: string, fieldName: string): FieldValidation => {
    if (!data) return { field: fieldName };
    
    const inputDate = new Date(data);
    const oggi = new Date();
    oggi.setHours(0, 0, 0, 0);
    
    if (inputDate < oggi) {
      return {
        field: fieldName,
        error: `${fieldName} non può essere nel passato`
      };
    }
    
    return { field: fieldName };
  },

  rangeDate: (dataInizio: string, dataFine: string): FieldValidation[] => {
    const results: FieldValidation[] = [];
    
    if (dataInizio && dataFine) {
      const inizio = new Date(dataInizio);
      const fine = new Date(dataFine);
      
      if (fine <= inizio) {
        results.push({
          field: 'dataFine',
          error: 'La data fine deve essere successiva alla data inizio'
        });
      }
    }
    
    return results;
  }
};

// Funzione principale di validazione
export const validateForm = (fields: Record<string, any>, rules: Record<string, string[]>): ValidationResult => {
  const errors: string[] = [];
  
  for (const [fieldName, validationRules] of Object.entries(rules)) {
    const fieldValue = fields[fieldName];
    
    for (const rule of validationRules) {
      let validation: FieldValidation;
      
      switch (rule) {
        case 'required':
          validation = validators.required(fieldValue, fieldName);
          break;
        case 'email':
          validation = validators.email(fieldValue, fieldName);
          break;
        case 'partitaIva':
          validation = validators.partitaIva(fieldValue, fieldName);
          break;
        case 'codiceFiscale':
          validation = validators.codiceFiscale(fieldValue, fieldName);
          break;
        case 'telefono':
          validation = validators.telefono(fieldValue, fieldName);
          break;
        case 'codicePOD':
          validation = validators.codicePOD(fieldValue, fieldName);
          break;
        case 'codicePDR':
          validation = validators.codicePDR(fieldValue, fieldName);
          break;
        default:
          continue;
      }
      
      if (validation.error) {
        errors.push(validation.error);
      }
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Validatori specifici per il dominio CRM Energia
export const crmValidators = {
  validaListino: (listino: any): ValidationResult => {
    const rules = {
      codice: ['required'],
      nome: ['required'],
      fornitore: ['required'],
      categoria: ['required'],
      commodity: ['required'],
      dataInizioValidita: ['required']
    };
    
    return validateForm(listino, rules);
  },

  validaCliente: (cliente: any): ValidationResult => {
    const rules = {
      ragioneSociale: ['required'],
      consulenteAttuale: ['required'],
      email: ['email'],
      telefono: ['telefono'],
      piva: ['partitaIva'],
      codiceFiscaleAzienda: ['codiceFiscale'],
      codiceFiscaleRappresentante: ['codiceFiscale']
    };
    
    return validateForm(cliente, rules);
  },

  validaPOD: (pod: any): ValidationResult => {
    const rules = {
      codice: ['codicePOD'],
      ragioneSociale: ['required'],
      collaboratore: ['required'],
      fornitore: ['required']
    };
    
    return validateForm(pod, rules);
  },

  validaPDR: (pdr: any): ValidationResult => {
    const rules = {
      codice: ['codicePDR'],
      ragioneSociale: ['required'],
      collaboratore: ['required'],
      fornitore: ['required']
    };
    
    return validateForm(pdr, rules);
  },

  validaFornitore: (fornitore: any): ValidationResult => {
    const rules = {
      nome: ['required']
    };
    
    return validateForm(fornitore, rules);
  }
};

// Hook React personalizzato per validazione (da usare nei componenti)
export const useFormValidation = (initialState: Record<string, any>, validationRules: Record<string, string[]>) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isValid, setIsValid] = useState(false);
  
  const validateField = (fieldName: string, value: any) => {
    const rules = validationRules[fieldName] || [];
    const fieldErrors: string[] = [];
    
    for (const rule of rules) {
      const validator = (validators as any)[rule];
      if (validator) {
        const result = validator(value, fieldName);
        if (result.error) {
          fieldErrors.push(result.error);
        }
      }
    }
    
    setErrors((prev: Record<string, string>) => ({
      ...prev,
      [fieldName]: fieldErrors[0] || ''
    }));
    
    return fieldErrors.length === 0;
  };
  
  const validateAll = () => {
    const validation = validateForm(formData, validationRules);
    setIsValid(validation.isValid);
    
    // Converti array di errori in oggetto con chiavi campo
    const errorObj: Record<string, string> = {};
    validation.errors.forEach(error => {
      // Estrai il nome campo dall'errore (semplificato)
      const fieldName = Object.keys(validationRules).find(field => 
        error.toLowerCase().includes(field.toLowerCase())
      );
      if (fieldName) {
        errorObj[fieldName] = error;
      }
    });
    
    setErrors(errorObj);
    return validation.isValid;
  };
  
  const updateField = (fieldName: string, value: any) => {
    setFormData((prev: Record<string, any>) => ({
      ...prev,
      [fieldName]: value
    }));
    
    // Valida il campo in tempo reale
    validateField(fieldName, value);
  };
  
  return {
    formData,
    errors,
    isValid,
    updateField,
    validateAll,
    setFormData
  };
};