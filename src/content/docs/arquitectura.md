---
title: Com esta montat aixo 
description: que hi tinc i com funciona 
---

Aquí explico com ho tinc muntat tant a nivell físic com a nivell d'aplicació. També ho
faig per si algú té curiositat de com es munta tot això i ho vol fer.

El tinc a casa meva. Posar-ho al *cloud* costa diners, i m'agrada tenir-ho a casa.
Avanço que el cost de tot plegat és només el preu inicial de l'aparell, el consum
elèctric i la connexió a internet, si la vols comptar.

### L'aparell

Em vaig comprar un ThinkCentre de segona mà a Wallapop amb:

* **CPU:** Intel Core i7-7700T (4 nuclis / 8 fils)
* **RAM:** 16 GB DDR4
* **Gràfica:** Intel HD Graphics 630 (sense GPU dedicada)

Hi corre un Arch pelat (sense entorn gràfic ni res). Abans tenia una torre amb un i3 
bastant antic que corria un Ubuntu Server i donava molts problemes.
Ara crec que em vaig passar d'especificacions.

També hi tinc connectats un parell de discs durs externs directament a la placa base.

A part d'això, està connectat per cable al router de Vodafone.

### Configuració de xarxa

El primer pas és assignar una IP fixa al servidor des del router. Així, cada cop que es
reinicia, manté la mateixa adreça. També vaig deixar configurada la connexió Wi-Fi per
si de cas.

Per connectar-m'hi des de fora de casa, m'he muntat una VPN amb
[WireGuard](https://www.wireguard.com/). Al servidor vaig instal·lar 
[WgEasy](https://wg-easy.github.io/wg-easy/v15.3/), que es configura en un moment. 
Després d'obrir i redirigir el port del router cap al servidor, em puc connectar a la
meva xarxa des d'on vulgui. Vaig triar aquesta opció perquè és ràpida, fàcil i segura 
(o això diu la seva web).

Vodafone et fa pagar per tenir una IP pública fixa, així potser me la cambien i fa que 
no em pugi conectartot. Per reduir els problemes quan això passa, vaig agafar un domini a
[No-IP](https://www.noip.com/), que s'ha de renovar manualment un cop al mes però és 
gratuït. D'aquesta manera, si Vodafone em canvia la IP pública, només he d'actualitzar-la
a No-IP.

(L'única pega d'això és que per saber quina és la nova IP s'ha d'estar físicament a 
casa; si pots llegir això, és que encara no me l'han canviada).
