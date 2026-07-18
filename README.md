Aquest projecte d'Astro Starlight es pot executar en dos modes segons si estàs aplicant canvis o si vols el màxim rendiment del servidor.

### 🛠️ Mode Desenvolupament (Dev)

Ideal per quan estàs escrivint noves pàgines Markdown. **La web es recarrega sola automàticament** a cada canvi que deses, sense necessitat de reiniciar res.

*   **Iniciar en Dev:**
    ```bash
    pm2 start npm --name "astro-dev" -- run dev -- --host 0.0.0.0
    ```
*   **Aturar en Dev:**
    ```bash
    pm2 stop astro-dev
    ```

---

### 🚀 Mode Producció (Prod)

Ideal per quan la web ja està llista. Transforma tot el contingut en fitxers HTML pur ultra-ràpids. **Consumeix molta menys CPU i RAM**, però si edites un Markdown, els canvis no es veuran fins que tornis a compilar.

*   **Pas 1: Compilar la web (Build)**
    Cada vegada que modifiquis o afegeixis un fitxer Markdown, has d'executar el compilador:
    ```bash
    npm run build
    ```
*   **Pas 2: Iniciar el servei de producció**
    La primera vegada, aixeca el servei que llegeix la carpeta compilada:
    ```bash
    pm2 start npx --name "astro-prod" -- preview --host 0.0.0.0
    ```
*   **Pas 3: Actualitzar canvis en producció**
    Si has editat un fitxer i has tornat a fer un `npm run build`, aplica els canvis reiniciant el procés de PM2:
    ```bash
    pm2 restart astro-prod
    ```
*   **Aturar en Prod:**
    ```bash
    pm2 stop astro-prod
    ```

---

### 📊 Comandes útils de control

Pots revisar l'estat dels teus entorns amb les comandes de PM2:

*   **Veure quins entorns estan actius:** `pm2 list`
*   **Veure errors o logs en temps real:** `pm2 logs`
*   **Deseu la configuració actual per a reinicis del servidor:** `pm2 save`

