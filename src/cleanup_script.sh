#!/bin/bash

# Script per pulire la struttura file duplicata

echo "Pulizia repository CRM Energia..."

# 1. Rimuovi la cartella src/src duplicata
if [ -d "src/src" ]; then
    echo "Rimozione cartella duplicata src/src/"
    rm -rf src/src
fi

# 2. Pulisci node_modules e lock file
echo "Pulizia dipendenze..."
rm -rf node_modules
rm -f package-lock.json

# 3. Reinstalla dipendenze pulite
echo "Reinstallazione dipendenze..."
npm install

# 4. Verifica struttura file
echo "Verifica struttura repository:"
tree src -I node_modules

echo "Pulizia completata!"
echo "Ora puoi eseguire: npm run dev per testare localmente"