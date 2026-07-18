
### (Dev)


*   **Iniciar en Dev:**
    ```bash
    pm2 start npm --name "astro-dev" -- run dev -- --host 0.0.0.0
    ```
*   **Aturar en Dev:**
    ```bash
    pm2 stop astro-dev
    ```

---

###  (Prod)


*   **Compilar la web**
    ```bash
    npm run build
    ```
*   **Iniciar el servei de producció**
    ```bash
    pm2 start npx --name "astro-prod" -- preview --host 0.0.0.0
    ```
*   **Actualitzar canvis en producció**
    ```bash
    pm2 restart astro-prod
    ```
*   **Aturar en Prod:**
    ```bash
    pm2 stop astro-prod
    ```

