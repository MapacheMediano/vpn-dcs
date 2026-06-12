# VPN DCS — IT Governance Final Project

**Proyecto Final · Materia: IT Governance · ESCOM IPN · Grupo 7CV4**

> Sitio web interactivo que documenta el diseño e implementación de un Servicio de VPN Corporativa bajo los frameworks COBIT 2019, ITIL v4 e ISO 27001.

---

## 🔐 Descripción

VPN DCS es un servicio de infraestructura de red y seguridad que provee conectividad remota cifrada y autenticada mediante OpenVPN (AES-256) y WireGuard (ChaCha20). La solución está gobernada bajo COBIT 2019 y documentada con las 17 secciones del proyecto final de IT Governance.

**ID de Servicio:** `VPN-2026-001`  
**SLA:** 99.5% disponibilidad en horario laboral  
**Capacidad:** 100 usuarios concurrentes (escalable a 250)  
**Inversión:** $426,000 MXN

---

## 👥 Equipo

| Nombre | Rol | Horario |
|--------|-----|---------|
| Díaz Franco Kevin Joel | Ingeniero VPN 1 | 7:00–15:00 |
| Moreno Camargo Raúl Alejandro | Ingeniero VPN 2 | 15:00–22:00 |
| Sandoval Mandujano Samuel | Arquitecto / Analista Seguridad | 9:00–18:00 |

**Profesora:** Dra. Rocío Palacios Solano  
**Contacto:** soporte.vpn@escom.ipn.mx

---

## 🛠 Stack Técnico

| Tecnología | Uso |
|-----------|-----|
| React 18 | UI framework |
| Vite 5 | Build tool + dev server |
| GitHub Pages | Hosting gratuito |
| GitHub Actions | CI/CD pipeline automático |
| Google Fonts (Syne + DM Sans) | Tipografía |

---

## 🚀 Instalación y uso local

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/vpn-dcs.git
cd vpn-dcs

# 2. Instalar dependencias
npm install

# 3. Servidor de desarrollo (http://localhost:5173/vpn-dcs/)
npm run dev

# 4. Build de producción
npm run build
```

---

## 📦 Agregar PDFs

Coloca los archivos PDF en `/public/pdfs/` con los nombres definidos en `src/data/sections.js`:

```
public/
  pdfs/
    ProyectoVPN_ITGovernance.pdf
    CEDULA_DE_SERVICIO_VPN_COMPLETO.pdf
    MAPEO_DE_PROCESOS_VPN.pdf
    Factibilidad_Operativa_EquipoVPN.pdf
```

---

## 🌐 Despliegue en GitHub Pages

### Automático (recomendado)
1. Sube el repositorio a GitHub
2. Ve a **Settings → Pages → Source: GitHub Actions**
3. Cada `push` a `main` desplegará automáticamente

### Configuración requerida
En `vite.config.js`, cambia `base` al nombre de tu repositorio:
```js
base: '/nombre-de-tu-repo/',
```

---

## 📋 Frameworks integrados

- **COBIT 2019** — APO09, APO13, DSS01, DSS05, MEA01
- **ITIL v4** — Catálogo, SLA, OLA, RACI
- **ISO 27001 / 27005** — Matriz de riesgos, CID, BIA
- **Balanced Scorecard** — 4 perspectivas, cascada de metas

---

## 📄 Estructura del proyecto

```
src/
  components/
    WelcomeScreen.jsx   # Pantalla de bienvenida animada
    Navbar.jsx          # Navegación responsiva
    Hero.jsx            # Hero + métricas + ticker
    Features.jsx        # Bento grid de características
    ProjectSection.jsx  # 17 secciones con filtros + modal PDF
    PdfModal.jsx        # Visor PDF con upload local
    Footer.jsx          # Frameworks strip + métricas + footer
    useScrollReveal.js  # Hook para animaciones de scroll
  data/
    sections.js         # Datos reales extraídos de los documentos
  index.css             # Tokens globales + animaciones
  main.jsx
  App.jsx
public/
  pdfs/                 # Coloca aquí tus PDFs
.github/workflows/
  deploy.yml            # CI/CD automático → GitHub Pages
```

---

*Instituto Politécnico Nacional · Escuela Superior de Cómputo · 2026*
