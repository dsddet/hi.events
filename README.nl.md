<div align="center">

<img src="https://hievents-public.s3.us-west-1.amazonaws.com/website/github-banner.png?v=1" alt="BrothersBit - Open Source Evenemententicketplatform" width="100%">

# BrothersBit

### Open-source evenemententicket- en beheerplatform

Verkoop online tickets voor conferenties, uitgaansevenementen, concerten, clubavonden, workshops en festivals.
Zelf-gehost of cloud. Jouw evenementen, jouw merk, jouw data.

[Probeer Cloud →](https://app.brothersbit.com/auth/register?utm_source=gh-readme) · [Live Demo](https://app.brothersbit.com/event/2/hievents-conference-2030?utm_source=gh-readme) · [Documentatie](https://brothersbit.com/docs?utm_source=gh-readme) · [Website](https://brothersbit.com?utm_source=gh-readme)

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://github.com/dsddet/Hi.Events/blob/develop/LICENCE)
[![GitHub Release](https://img.shields.io/github/v/release/dsddet/Hi.Events?include_prereleases)](https://github.com/dsddet/Hi.Events/releases)
[![Run Unit Tests](https://github.com/dsddet/Hi.Events/actions/workflows/unit-tests.yml/badge.svg?event=push)](https://github.com/dsddet/Hi.Events/actions/workflows/unit-tests.yml)
[![Docker Pulls](https://ghcr.io/dsddet/brothersbit-all-in-one)](https://ghcr.io/dsddet/brothersbit-all-in-one)

<a href="https://trendshift.io/repositories/10563" target="_blank">
  <img src="https://trendshift.io/api/badge/repositories/10563" alt="dsddet%2FHi.Events | Trendshift" width="250" height="55"/>
</a>

<p>
<a href="README.de.md">Deutsch</a> · <a href="README.pt.md">Português</a> · <a href="README.pt-br.md">Português do Brasil</a> · <a href="README.fr.md">Français</a> · <a href="README.it.md">Italiano</a> · <a href="README.nl.md">Nederlands</a> · <a href="README.es.md">Español</a> · <a href="README.zh-cn.md">中文</a> · <a href="README.zh-hk.md">繁體中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.vi.md">Tiếng Việt</a> · <a href="README.tr.md">Türkçe</a> · <a href="README.hu.md">Magyar</a> · <a href="README.pl.md">Polski</a>
</p>

</div>

<br>

## Waarom BrothersBit?

De meeste ticketplatformen rekenen kosten per ticket en sluiten je data op in hun ecosysteem. **BrothersBit is een modern,
open-source alternatief voor Eventbrite, Tickettailor, Dice.fm en andere ticketplatformen** voor organisatoren die
volledige controle willen over branding, checkout, data en infrastructuur.

Gebouwd voor nachtleven-promotors, festivalorganisatoren, venues, gemeenschapsgroepen en congresorganisatoren.

<br>

<img alt="BrothersBit Dashboard" src="https://hievents-public.s3.us-west-1.amazonaws.com/website/github-screenshot.png"/>

<br>

## Functies

<table>
<tr>
<td width="50%" valign="top">

### 🎟️ Ticketing & Verkoop

- Flexibele tickettypes (gratis, betaald, donatie, gelaagd)
- Verborgen en vergrendelde tickets achter promocodes
- Promocodes en voorverkoop toegang
- Product add-ons (merchandise, upgrades, extra's)
- Productcategorieën voor organisatie
- Volledige belasting- en kostenondersteuning (BTW, servicekosten)
- Capaciteitsbeheer en gedeelde limieten

</td>
<td width="50%" valign="top">

### 🎨 Branding & Aanpassing

- Mooie, conversie-geoptimaliseerde checkout
- Aanpasbare PDF ticketontwerpen
- Branded organisator-homepage
- Drag-and-drop evenementpagina-builder
- Insluitbare ticketwidget
- SEO-tools (meta tags, Open Graph)

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 👥 Bezoekerbeheer

- Aangepaste checkout-vragen
- Geavanceerd zoeken, filteren en exporteren (CSV/XLSX)
- Volledige en gedeeltelijke terugbetalingen
- Bulkberichten per tickettype
- QR-code check-in met scanlogs
- Toegangsgecontroleerde check-in lijsten

</td>
<td width="50%" valign="top">

### 📊 Analytics & Groei

- Real-time verkoopdashboard
- Affiliate en doorverwijzingstracking
- Geavanceerde rapportage (verkoop, belasting, promo's)
- Webhooks (Zapier, Make, CRM's)

</td>
</tr>
<tr>
<td colspan="2" valign="top">

### ⚙️ Operations

Multi-gebruikersrollen en permissies · Stripe Connect directe uitbetalingen · Offline betaalmethoden · Ondersteuning voor offline evenementen ·
Automatische facturering · Evenementarchief · Meertalige ondersteuning · Volledige REST API

</td>
</tr>
</table>

<br>

## Vergelijking

| Functie                                | BrothersBit | Eventbrite | Tickettailor | Dice    |
|:---------------------------------------|:----------|:-----------|:-------------|:--------|
| Zelf-gehoste optie                     | ✅         | ❌          | ❌            | ❌       |
| Open source                            | ✅         | ❌          | ❌            | ❌       |
| Geen kosten per ticket (zelf-gehost)   | ✅         | ❌          | ❌            | ❌       |
| Volledige aangepaste branding          | ✅         | Beperkt    | ✅            | Beperkt |
| Affiliate tracking                     | ✅         | ✅          | ❌            | ❌       |
| API-toegang                            | ✅         | ✅          | ✅            | Beperkt |
| Eigen je data                          | ✅         | ❌          | ❌            | ❌       |

<br>

## Snelle Start

### One-Click Deploy

[![Deploy on DigitalOcean](https://www.deploytodo.com/do-btn-blue.svg)](https://github.com/dsddet/Hi.Events-digitalocean)
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://github.com/dsddet/Hi.Events-render.com)
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/8CGKmu?referralCode=KvSr11)
[![Deploy on Zeabur](https://zeabur.com/button.svg)](https://zeabur.com/templates/8DIRY6)

### Docker

```bash
git clone git@github.com:dsddet/Hi.Events.git
cd Hi.Events/docker/all-in-one

# Genereer sleutels (Linux/macOS)
echo "APP_KEY=base64:$(openssl rand -base64 32)" >> .env
echo "JWT_SECRET=$(openssl rand -base64 32)" >> .env

docker compose up -d
```

> [!TIP]
> **Windows-gebruikers:** Zie `./docker/all-in-one/README.md` voor instructies voor het genereren van sleutels.

Open `http://localhost:8123` en maak je account aan.

📖 [Volledige installatiehandleiding](https://brothersbit.com/docs/getting-started?utm_source=gh-readme)

<br>

## BrothersBit Cloud

Liever niet zelf hosten? **[BrothersBit Cloud](https://app.brothersbit.com/auth/register?utm_source=gh-readme)** is een volledig
beheerde optie met geen installatie, automatische updates en beheerde infrastructuur.

[Aan de slag →](https://app.brothersbit.com/auth/register?utm_source=gh-readme)

<br>

## Documentatie

| Bron            | Link                                                                                          |
|:----------------|:----------------------------------------------------------------------------------------------|
| Aan de slag     | [brothersbit.com/docs/getting-started](https://brothersbit.com/docs/getting-started?utm_source=gh-readme) |
| Configuratie    | [brothersbit.com/docs/configuration](https://brothersbit.com/docs/configuration?utm_source=gh-readme)     |
| API Referentie  | [brothersbit.com/docs/api](https://brothersbit.com/docs/api?utm_source=gh-readme)                         |
| Webhooks        | [brothersbit.com/docs/webhooks](https://brothersbit.com/docs/webhooks?utm_source=gh-readme)               |

<br>

## Bijdragen

We verwelkomen bijdragen. Zie de [bijdragegids](CONTRIBUTING.md) voor details.

<br>

## Ondersteuning

📖 [Documentatie](https://brothersbit.com/docs?utm_source=gh-readme) · 📧 [contact@brothersbit.com](mailto:contact@brothersbit.com) ·
🐛 [GitHub Issues](https://github.com/dsddet/Hi.Events/issues)

<br>

## Changelog

Blijf op de hoogte van nieuwe functies en verbeteringen op
de [releases-pagina](https://github.com/dsddet/Hi.Events/releases).

<br>

## Licentie

BrothersBit is gelicentieerd onder **AGPL-3.0 met aanvullende voorwaarden**. Commerciële licenties
beschikbaar. [Meer informatie](https://brothersbit.com/licensing).

<br>

<div align="center">

**[Website](https://brothersbit.com)** · **[Documentatie](https://brothersbit.com/docs)** · *
*[Twitter/X](https://x.com/brothersbit)**

Gemaakt met ☘️ in Ierland

</div>
