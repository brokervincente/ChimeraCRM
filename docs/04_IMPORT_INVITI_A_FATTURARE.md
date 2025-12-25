# Import inviti a fatturare (template)

## Principio
Ogni riga importata rappresenta:
- Punto (POD/PDR)
- Competenza fiscale (mese/anno)
- Importi per componenti
- Consumi (kWh o Smc)
- Fee sul consumo (se presente)
- Date (inizio/fine fornitura, pagamento)

## Campi consigliati CSV (prima versione)
Obbligatori:
- point_type: POD|PDR
- point_code
- fiscal_year
- fiscal_month (1-12)
- supply_start_date
- supplier_name (o supplier_code)
- amount_gettone
- amount_storno_gettone
- amount_gettone_volume
- amount_gettone_mensile
- amount_fee
- consumption_kwh (per POD) / consumption_smc (per PDR)

Opzionali:
- supply_end_date
- payment_date
- reference (numero documento, riga, note)

## Verifiche automatiche (target)
- Punto non presente in CRM → issue MISSING_POINT
- Date incoerenti con posizione economica → issue DATE_MISMATCH
- Fee inattesa (diversa dal listino) → issue FEE_MISMATCH
- Gettoni/storni non congrui → issue AMOUNT_MISMATCH
