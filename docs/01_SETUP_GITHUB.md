# Setup GitHub (senza sbagliare)

## Prerequisiti
- Git installato
- Node già presente (se poi userai il frontend)
- Un editor (VS Code consigliato)

## Metodo A (consigliato): clone + commit
1) Clona il repo:
   git clone <URL_DEL_REPO>
2) Entra nella cartella:
   cd ChimeraCRM
3) Crea le cartelle:
   mkdir -p supabase docs
4) Crea i file (copiando i contenuti forniti in chat) mantenendo i nomi identici.
5) Controlla cosa stai per committare:
   git status
6) Aggiungi i file:
   git add supabase docs .env.example
7) Commit:
   git commit -m "Add Supabase schema + docs setup"
8) Push:
   git push

## Metodo B: GitHub web (più rischioso)
- Add file → Create new file
- Devi creare manualmente path tipo: supabase/schema.sql
- Incolla il contenuto e “Commit changes”
- Ripeti per ogni file

## Errori comuni
- Nomi cartelle sbagliati (Supabase ≠ supaBase)
- File creati nel posto sbagliato (es. dentro src/)
- Copia parziale del file schema.sql (deve essere completo)
