// ── PROJECT SECTIONS DATA ────────────────────────────
// Real content extracted from project documents
// Add pdfFile: 'filename.pdf' once you place PDFs in /public/pdfs/

export const TEAM = [
  { name: 'Díaz Franco Kevin Joel',       role: 'Ingeniero VPN 1',              email: 'Kdiazf1600@alumno.ipn.mx',    schedule: '7:00–15:00' },
  { name: 'Moreno Camargo Raúl Alejandro',role: 'Ingeniero VPN 2',              email: 'rmorenoc1500@alumno.ipn.mx',  schedule: '15:00–22:00' },
  { name: 'Sandoval Mandujano Samuel',    role: 'Arquitecto / Analista Seguridad', email: 'ssandovalm1600@alumno.ipn.mx', schedule: '9:00–18:00' },
]

export const METRICS = [
  { num: '99.5%',   label: 'Disponibilidad SLA en horario laboral' },
  { num: 'AES-256', label: 'Cifrado OpenVPN (ChaCha20 WireGuard)' },
  { num: '$426K',   label: 'Inversión total del proyecto (MXN)' },
  { num: '100',     label: 'Usuarios concurrentes soportados' },
]

export const FEATURES = [
  {
    icon: '🔐', accent: 'purple',
    title: 'Cifrado Empresarial',
    body: 'Protocolo AES-256-GCM (OpenVPN) y ChaCha20/Poly1305 (WireGuard) con autenticación MFA integrada a Active Directory. Reduce el riesgo de intercepción en más del 90%.',
  },
  {
    icon: '🌐', accent: 'orange',
    title: 'Disponibilidad 24/7',
    body: 'Servidor Dell PowerEdge con failover automático, enlace de respaldo 100 Mbps simétricos y UPS con 30 min de autonomía. SLA 99.5% en horario laboral (07:00–22:00 hrs).',
  },
  {
    icon: '📊', accent: 'blue',
    title: 'COBIT 2019 Governance',
    body: 'Alineado a los procesos APO09 (Acuerdos de Servicio), APO13 (Seguridad), DSS01 (Operaciones), DSS05 (Servicios de Seguridad) y MEA01 (Supervisión y Evaluación).',
  },
  {
    icon: '🛡️', accent: 'cyan',
    title: 'ISO 27001 Ready',
    body: 'Matriz de riesgos CID, análisis de infraestructuras críticas, bitácoras de auditoría y cumplimiento de LFPDPPP. Control RBAC con principio de menor privilegio.',
  },
  {
    icon: '♻️', accent: 'green',
    title: 'Plan de Continuidad',
    body: 'BIA Táctico (3 procesos) y BIA Operacional integrados. RTO máximo 2 horas. Respaldo diario de configuraciones, semanal de bitácoras, retención 90 días.',
  },
]

export const SECTIONS = [
  // ── IDENTIDAD CORPORATIVA ──────────────────────────
  {
    id: 'identity-1', num: '01', cat: 'identity', catLabel: 'Identidad',
    title: 'Portada e Introducción',
    desc: 'Portada oficial, índice del proyecto e introducción describiendo el contexto del Servicio de VPN Corporativa de VPN DCS bajo el marco COBIT 2019.',
    detail: 'ID de servicio VPN-2026-001 · Fecha de elaboración: 27/04/2026 · ESCOM IPN · Grupo 7CV4 · Profesora: Dra. Rocío Palacios Solano.',
    pdfFile: null,
  },
  {
    id: 'identity-2', num: '02', cat: 'identity', catLabel: 'Identidad',
    title: 'Objetivo del Servicio IT',
    desc: 'Implementar un servicio de VPN Corporativa que permita conectividad segura, confiable y controlada a los recursos internos desde ubicaciones remotas.',
    detail: '5 objetivos específicos: conexiones cifradas y autenticadas, políticas RBAC de menor privilegio, disponibilidad ≥99.5%, bitácoras de auditoría, capacitación al 100% del personal.',
    pdfFile: null,
  },
  {
    id: 'identity-3', num: '03', cat: 'identity', catLabel: 'Identidad',
    title: 'Descripción del Servicio',
    desc: 'Servicio de infraestructura de red y seguridad con conectividad remota cifrada mediante OpenVPN (SSL/TLS, AES-256) y WireGuard (ChaCha20, Curve25519).',
    detail: 'Alcance: hasta 100 usuarios concurrentes, integración AD + MFA, capacitación TI (3 personas) y usuarios (100). Periodo: 4-feb al 12-jun-2026. Fuera de alcance: hardware usuario final, LAN interna.',
    pdfFile: null,
  },
  {
    id: 'identity-4', num: '04', cat: 'identity', catLabel: 'Identidad',
    title: 'Misión, Visión y Valores',
    desc: 'Declaraciones corporativas de VPN DCS: seguridad, disponibilidad y confianza como pilares del servicio empresarial de conectividad remota.',
    detail: 'Alineadas a los principios de gobernanza COBIT 2019 y cumplimiento normativo LFPDPPP e ISO/IEC 27001.',
    pdfFile: null,
  },
  // ── ALINEACIÓN ESTRATÉGICA ─────────────────────────
  {
    id: 'strategy-1', num: '05', cat: 'strategy', catLabel: 'COBIT',
    title: 'Metas Corporativas (BSC)',
    desc: 'Una meta corporativa por cada perspectiva del Balanced Scorecard: Financiera, Clientes, Procesos Internos y Aprendizaje & Crecimiento bajo COBIT 2019.',
    detail: 'Alineación estratégica según la metodología de cascada de metas COBIT 2019.',
    pdfFile: null,
  },
  {
    id: 'strategy-2', num: '06', cat: 'strategy', catLabel: 'COBIT',
    title: 'Metas IT (BSC)',
    desc: 'Una meta IT por cada perspectiva del BSC, derivadas de las metas corporativas mediante la cascada de metas de COBIT 2019.',
    detail: 'Mapeo de metas de negocio a metas de alineación y metas de proceso COBIT 2019.',
    pdfFile: null,
  },
  {
    id: 'strategy-3', num: '07', cat: 'strategy', catLabel: 'COBIT',
    title: 'Cascada de Metas',
    desc: 'Mapeo de relaciones primarias (P) y secundarias (S) entre metas corporativas e IT según la tabla oficial de cascada de COBIT 2019.',
    detail: 'Evidencia la trazabilidad desde los objetivos del negocio hasta los procesos operativos de TI.',
    pdfFile: null,
  },
  {
    id: 'strategy-4', num: '08', cat: 'strategy', catLabel: 'COBIT',
    title: 'Mapa Estratégico (BSC)',
    desc: 'Representación visual del Balanced Scorecard integrando las 4 perspectivas con sus metas y relaciones de causalidad para VPN DCS.',
    detail: 'Integra metas corporativas e IT mostrando la cadena de valor estratégica.',
    pdfFile: null,
  },
  // ── GESTIÓN DEL SERVICIO ───────────────────────────
  {
    id: 'ops-1', num: '09', cat: 'ops', catLabel: 'ITIL',
    title: 'Caso de Negocio',
    desc: 'Justificación de la inversión de $426,000 MXN: análisis costo-beneficio frente a Cisco AnyConnect ($150–$250/usuario/mes) y Fortinet FortiClient ($130–$200/usuario/mes).',
    detail: 'Nuestro servicio: $80–$120 MXN/usuario/mes con gobernanza COBIT incluida, código abierto OpenVPN/WireGuard, soporte local en español. Costo operación inicial: $80,000 MXN.',
    pdfFile: 'ProyectoVPN_ITGovernance.pdf',
  },
  {
    id: 'ops-2', num: '10', cat: 'ops', catLabel: 'ITIL',
    title: 'Cédula de Servicio (ITIL)',
    desc: 'ID: VPN-2026-001 · Cédula bajo ITIL v4 con SLAs, RACI, niveles de soporte y métricas OLA. Soporte: respuesta críticos ≤1h, resolución ≤4h.',
    detail: 'Matriz RACI: Ing. VPN 1 (Kevin Joel) 7:00–15:00, Ing. VPN 2 (Raúl Alejandro) 15:00–22:00, Arquitecto (Samuel) 9:00–18:00. Lider: Dra. Rocío Palacios.',
    pdfFile: 'CEDULA_DE_SERVICIO_VPN_COMPLETO.pdf',
  },
  {
    id: 'ops-3', num: '11', cat: 'ops', catLabel: 'ITIL',
    title: 'Inventario de Activos',
    desc: 'Registro consolidado de activos de los 3 procesos COBIT. Hardware: Dell PowerEdge, Switch Admin, UPS. Software: OpenVPN, WireGuard (código abierto). Servicios: SSL/TLS, AD, MFA.',
    detail: 'Hardware total: $115,000 MXN. Software: $0 (código abierto). Servicios: $50,000 MXN. Incluye 3 computadoras de desarrollo a $15,000 c/u.',
    pdfFile: 'Factibilidad_Operativa_EquipoVPN.pdf',
  },
  // ── SEGURIDAD Y CONTINUIDAD ────────────────────────
  {
    id: 'security-1', num: '12', cat: 'security', catLabel: 'ISO 27K',
    title: 'Matriz de Riesgos',
    desc: 'Identificación y evaluación de riesgos bajo ISO 27001/27005: caída del servidor (Alto/Media), vulnerabilidad de protocolo (Crítico/Baja), saturación de ancho de banda (Alto/Media).',
    detail: '5 riesgos clave identificados con probabilidad, impacto y mitigación definida. Mitigaciones: redundancia, parches regulares, dimensionamiento previo.',
    pdfFile: null,
  },
  {
    id: 'security-2', num: '13', cat: 'security', catLabel: 'ISO 27K',
    title: 'Matriz CID',
    desc: 'Evaluación de Confidencialidad, Integridad y Disponibilidad de los activos críticos del servicio VPN DCS bajo la tríada CID de ISO 27001.',
    detail: 'Activos evaluados: servidor VPN, certificados SSL/TLS, bitácoras, credenciales AD, políticas de acceso.',
    pdfFile: null,
  },
  {
    id: 'security-3', num: '14', cat: 'security', catLabel: 'ISO 27K',
    title: 'Infraestructuras Críticas',
    desc: 'Componentes cuya falla impacta la continuidad: Servidor Dell PowerEdge, Switch Admin, UPS (30 min), enlace 100 Mbps con respaldo, Active Directory.',
    detail: 'Arquitectura lógica documentada: Usuarios remotos → Internet (SSL/TLS cifrado) → Servidor VPN (OpenVPN/WireGuard + MFA + IPsec/IKEv2) → Red Corporativa ESCOM.',
    pdfFile: 'CEDULA_DE_SERVICIO_VPN_COMPLETO.pdf',
  },
  {
    id: 'security-4', num: '15', cat: 'security', catLabel: 'BCP',
    title: 'BIA Táctico (3 procesos)',
    desc: 'Business Impact Analysis de los 3 procesos COBIT: (1) Gestión de Accesos APO09, (2) Operación del VPN DSS01, (3) Gestión de Seguridad DSS05/APO13.',
    detail: 'KPIs: provisión ≤24h, disponibilidad ≥99.5%, MTTD/MTTR definidos. RTO máximo 2 horas. Failover automático ante caída del servidor.',
    pdfFile: 'MAPEO_DE_PROCESOS_VPN.pdf',
  },
  {
    id: 'security-5', num: '16', cat: 'security', catLabel: 'BCP',
    title: 'BIA Operacional',
    desc: 'Análisis de impacto operacional: escenarios de falla del servidor, saturación de ancho de banda, expiración de certificados SSL/TLS y ataques de fuerza bruta.',
    detail: 'Impactos cuantitativos y cualitativos. Indicadores: sesiones concurrentes, ancho de banda promedio, tasa de intentos fallidos de autenticación.',
    pdfFile: null,
  },
  {
    id: 'security-6', num: '17', cat: 'security', catLabel: 'BCP',
    title: 'Plan de Continuidad',
    desc: 'BCP con estrategias de recuperación, roles y procedimientos de activación. Respaldo diario de configuraciones, semanal de bitácoras (retención 90 días).',
    detail: 'Ventana de mantenimiento: sábados 22:00–06:00 hrs, notificación 48h anticipada. Imagen mensual completa del servidor. Pruebas de restauración trimestrales.',
    pdfFile: null,
  },
]

export const TABS = [
  { key: 'all',      label: 'Todos (17)' },
  { key: 'identity', label: 'Identidad (4)' },
  { key: 'strategy', label: 'Estrategia (4)' },
  { key: 'ops',      label: 'Gestión ITIL (3)' },
  { key: 'security', label: 'Seguridad (6)' },
]

export const FRAMEWORKS = [
  { label: 'COBIT 2019', color: 'var(--purple)' },
  { label: 'ITIL v4',    color: 'var(--blue)'   },
  { label: 'ISO 27001',  color: 'var(--orange)'  },
  { label: 'ISO 27005',  color: 'var(--cyan)'    },
  { label: 'Balanced Scorecard', color: 'var(--green)' },
  { label: 'BCP / BIA',  color: 'var(--pink)'   },
  { label: 'ESCOM · IPN', color: '#64748b'       },
]

export const TICKER_ITEMS = [
  'COBIT 2019','ITIL v4','ISO 27001','Balanced Scorecard',
  'BIA Táctico','Plan de Continuidad','Matriz CID',
  'Cascada de Metas','Cédula de Servicio VPN-2026-001',
  'Inventario de Activos','Mapa Estratégico','BCP · RTO · RPO',
  'OpenVPN · WireGuard','AES-256 · ChaCha20','RBAC · MFA · AD',
]
