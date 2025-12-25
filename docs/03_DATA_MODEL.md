# Modello dati (prima versione)

## Concetti chiave (dalla tua logica)
- Una "posizione economica" è univoca per: (POD/PDR) + data inizio fornitura.
- Gli inviti a fatturare vanno caricati riga-per-riga (competenza fiscale mese/anno) e verificati automaticamente.
- I guadagni si scompongono per componenti: gettoni, storni, gettoni volume, gettoni mensili, rendite/fee.

## Tabelle principali
- agencies: multi-tenant (ogni record appartiene a un’agenzia/account)
- profiles: utente Supabase Auth ↔ agency + ruolo
- collaborators: rete commerciale (agenti/ruoli)
- customers: anagrafiche clienti
- supply_points: POD e PDR (unificati)
- economic_positions: (punto + start_date) con fornitore e listino
- suppliers: opzioni e logiche fornitore
- price_lists + price_list_components: listini versionati + componenti
- commission_plans + commission_plan_levels: percentuali per ruolo/livello e componente
- invitation_in_batches + invitation_in_lines: inviti a fatturare in ingresso (fornitori)
- verification_issues: esito verifica per riga (errori e warning)
- invitation_out_batches + invitation_out_lines: inviti a fatturare verso collaboratori
- payments: registrazione incassi/pagamenti

## Indici e performance
- Indici su (agency_id, code) e (agency_id, start_date)
- Unicità: economic_positions(agency_id, supply_point_id, supply_start_date)
- Verifica inviti: lookup O(1) tramite chiavi indicizzate su supply_point + periodo + posizione economica
