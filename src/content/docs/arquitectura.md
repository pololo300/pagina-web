---
title: Arquitectura del Servidor
description: Detalls del maquinari i programari del node local.
---

Aquí s'explica com està organitzat aquest node domèstic de serveis.

### Maquinari (Hardware)
*   **CPU:** Intel Core i7-7700T (4 cores / 8 threads)
*   **RAM:** 16 GB DDR4
*   **Gràfica:** Intel HD Graphics 630 (Sense GPU dedicada)

### Serveis en execució
1.  **Proxy Invers:** Nginx redirigint el trànsit extern de forma neta.
2.  **Servidor Web:** Astro Starlight gestionat en segon pla amb PM2.
3.  **Intel·ligència Artificial:** Ollama executant models en local utilitzant la CPU.

Aquest model de fitxers Markdown permet una actualització ràpida i fluida des de qualsevol terminal.

