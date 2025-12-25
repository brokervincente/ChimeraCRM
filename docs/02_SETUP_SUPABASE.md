# Setup Supabase (passo passo)

## Obiettivo
Creare un database PostgreSQL in cloud e caricare lo schema iniziale di Chimera CRM.

## Step 1 — Crea progetto
1) Registrati/login su Supabase
2) New project
3) Scegli:
   - Nome progetto (es. chimera-crm-dev)
   - Database password (salvala!)
   - Regione (EU se possibile)
4) Attendi lo stato "Ready"

## Step 2 — Esegui lo schema
1) Vai in SQL Editor
2) New query
3) Incolla TUTTO il contenuto di: supabase/schema.sql
4) Premi Run
5) Se compare un errore:
   - NON eseguire pezzi a caso
   - Copia l’errore e lo analizziamo, poi si rilancia (lo script è in transazione)

## Step 3 — Seed (opzionale)
1) SQL Editor → New query
2) Incolla supabase/seed.sql
3) Run

## Step 4 — Variabili d’ambiente (frontend)
Crea un file .env (NON committarlo) usando .env.example come base:
- VITE_SUPABASE_URL=
- VITE_SUPABASE_ANON_KEY=

## Step 5 — Sicurezza (nota)
Lo schema abilita RLS su molte tabelle.
Nelle prime fasi puoi lavorare come "service role" lato server.
Quando integriamo il frontend, useremo policy e ruoli in modo robusto.
