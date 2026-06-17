export const TEAM = [
  { name: 'Díaz Franco Kevin Joel',        role: 'Ingeniero VPN 1',               email: 'Kdiazf1600@alumno.ipn.mx',    schedule: '7:00–15:00' },
  { name: 'Moreno Camargo Raúl Alejandro', role: 'Ingeniero VPN 2',               email: 'rmorenoc1500@alumno.ipn.mx',  schedule: '15:00–22:00' },
  { name: 'Sandoval Mandujano Samuel',     role: 'Arquitecto / Analista Seguridad',email: 'ssandovalm1600@alumno.ipn.mx',schedule: '9:00–18:00' },
]

export const METRICS = [
  { num: '99.5%',   label: 'Disponibilidad SLA en horario laboral' },
  { num: 'AES-256', label: 'Cifrado OpenVPN (ChaCha20 WireGuard)' },
  { num: '$426K',   label: 'Inversión total del proyecto (MXN)' },
  { num: '100',     label: 'Usuarios concurrentes soportados' },
]

export const FEATURES = [
  { icon: '🔐', accent: 'purple', title: 'Cifrado Empresarial',    body: 'Protocolo AES-256-GCM (OpenVPN) y ChaCha20/Poly1305 (WireGuard) con MFA integrado a Active Directory. Reduce el riesgo de intercepción en más del 90%.' },
  { icon: '🌐', accent: 'orange', title: 'Alta Disponibilidad',    body: 'Servidor Dell PowerEdge con failover automático, enlace de respaldo 100 Mbps y UPS 30 min. SLA 99.5% en horario laboral (07:00–22:00 hrs).' },
  { icon: '📊', accent: 'blue',   title: 'COBIT 2019 Governance',  body: 'Alineado a APO09, APO13, DSS01, DSS05 y MEA01. Cascada de metas BSC con perspectivas Financiera, Clientes, Procesos y Aprendizaje.' },
  { icon: '🛡️', accent: 'cyan',   title: 'ISO 27001 Ready',        body: 'Matriz de riesgos CID, análisis de infraestructuras críticas, bitácoras de auditoría y cumplimiento LFPDPPP.' },
  { icon: '♻️', accent: 'green',  title: 'Plan de Continuidad',    body: 'BIA Táctico (3 procesos) y BIA Operacional integrados. RTO máximo 2 horas. Respaldo diario de configuraciones, retención 90 días.' },
]

export const SECTIONS = [
  { id:'identity-1', num:'01', cat:'identity', catLabel:'Identidad',  title:'Portada e Introducción',       desc:'Portada oficial, índice del proyecto e introducción del Servicio de VPN Corporativa bajo el marco COBIT 2019.',                                                   detail:'ID: VPN-2026-001 · ESCOM IPN · Grupo 7CV4 · Profesora: Dra. Rocío Palacios Solano.',                                                                      pdfFile:'ProyectoVPN_ITGovernance.pdf' },
  { id:'identity-2', num:'02', cat:'identity', catLabel:'Identidad',  title:'Objetivo del Servicio IT',     desc:'Implementar un servicio VPN que permita conectividad segura y controlada a los recursos internos desde ubicaciones remotas.',                                  detail:'5 objetivos: conexiones cifradas, RBAC, disponibilidad ≥99.5%, bitácoras de auditoría, capacitación al 100% del personal.',                               pdfFile:'ProyectoVPN_ITGovernance.pdf' },
  { id:'identity-3', num:'03', cat:'identity', catLabel:'Identidad',  title:'Descripción del Servicio',     desc:'Servicio de infraestructura de red y seguridad con OpenVPN (AES-256) y WireGuard (ChaCha20) para hasta 100 usuarios concurrentes.',                           detail:'Alcance: diseño, implementación, integración AD+MFA, capacitación y soporte. Periodo: 4-feb al 12-jun-2026.',                                             pdfFile:'ProyectoVPN_ITGovernance.pdf' },
  { id:'identity-4', num:'04', cat:'identity', catLabel:'Identidad',  title:'Misión, Visión y Valores',     desc:'Declaraciones corporativas de VPN DCS alineadas a seguridad, disponibilidad y confianza empresarial bajo COBIT 2019.',                                        detail:'Cumplimiento LFPDPPP e ISO/IEC 27001.',                                                                                                                    pdfFile:'ProyectoVPN_ITGovernance.pdf' },
  { id:'strategy-1', num:'05', cat:'strategy', catLabel:'COBIT',      title:'Metas Corporativas (BSC)',      desc:'Una meta corporativa por perspectiva del Balanced Scorecard: Financiera, Clientes, Procesos Internos y Aprendizaje bajo COBIT 2019.',                        detail:'Alineación estratégica según la metodología de cascada de metas COBIT 2019.',                                                                              pdfFile:'Metas_Corporativas_IT.pdf' },
  { id:'strategy-2', num:'06', cat:'strategy', catLabel:'COBIT',      title:'Metas IT (BSC)',                desc:'Una meta IT por perspectiva del BSC, derivadas de las metas corporativas mediante la cascada de metas COBIT 2019.',                                          detail:'Mapeo de metas de negocio a metas de alineación y metas de proceso COBIT 2019.',                                                                          pdfFile:'Metas_Corporativas_IT.pdf' },
  { id:'strategy-3', num:'07', cat:'strategy', catLabel:'COBIT',      title:'Cascada de Metas',              desc:'Mapeo de relaciones primarias (P) y secundarias (S) entre metas corporativas e IT según la tabla oficial de cascada COBIT 2019.',                           detail:'Evidencia la trazabilidad desde los objetivos del negocio hasta los procesos operativos de TI.',                                                           pdfFile:'Metas_Corporativas_IT.pdf' },
  { id:'strategy-4', num:'08', cat:'strategy', catLabel:'COBIT',      title:'Mapa Estratégico (BSC)',        desc:'Representación visual del BSC integrando las 4 perspectivas con metas y relaciones de causalidad para VPN DCS.',                                            detail:'Integra metas corporativas e IT mostrando la cadena de valor estratégica.',                                                                                pdfFile:'Metas_Corporativas_IT.pdf' },
  { id:'strategy-5', num:'08b', cat:'strategy', catLabel:'COBIT', title:'Mapa de Procesos BPMN', desc:'Mapa de procesos del Servicio de VPN Corporativa con diagramas BPMN 2.0 de los 3 procesos clave: Gestión de Accesos, Operación del VPN y Gestión de Seguridad.', detail:'Estructura en 3 bandas: Procesos Estratégicos (Planeación y Evaluación), Procesos Clave (APO09, DSS01, DSS05/APO13) y Procesos de Apoyo (Administración y Soporte).', pdfFile:'DIAGRAMAS_DE_PROCESOS.pdf' },
  { id:'ops-1',      num:'09', cat:'ops',      catLabel:'ITIL',       title:'Caso de Negocio',               desc:'Justificación de la inversión de $426,000 MXN frente a Cisco AnyConnect ($150–$250/usuario/mes) y Fortinet FortiClient ($130–$200/usuario/mes).',           detail:'Nuestro servicio: $80–$120 MXN/usuario/mes con gobernanza COBIT incluida y código abierto OpenVPN/WireGuard.',                                             pdfFile:'ProyectoVPN_ITGovernance.pdf' },
  { id:'ops-2',      num:'10', cat:'ops',      catLabel:'ITIL',       title:'Cédula de Servicio (ITIL)',     desc:'ID: VPN-2026-001 · Cédula bajo ITIL v4 con SLAs, RACI, niveles de soporte OLA. Respuesta críticos ≤1h, resolución ≤4h.',                                   detail:'RACI: Ing. VPN 1 (Kevin) 7:00–15:00, Ing. VPN 2 (Raúl) 15:00–22:00, Arquitecto (Samuel) 9:00–18:00.',                                                   pdfFile:'CEDULA_SERVICIO_COMPLETO.pdf' },
  { id:'ops-3',      num:'11', cat:'ops',      catLabel:'ITIL',       title:'Inventario de Activos',         desc:'Registro de activos de 3 procesos COBIT. Hardware: Dell PowerEdge, Switch Admin, UPS. Software: OpenVPN, WireGuard. Total hardware: $115,000 MXN.',          detail:'Software: $0 (código abierto). Servicios: $50,000 MXN. Incluye 3 computadoras de desarrollo.',                                                            pdfFile:'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-DXckFJ54TZUFASlGw1zq_2XtYdqrq7p0k1af5gmrZpTmurh8nzIYp2EvbhujKQ/pubhtml' },
  { id:'security-1', num:'12', cat:'security', catLabel:'ISO 27K',    title:'Matriz de Riesgos',             desc:'Identificación y evaluación de riesgos bajo ISO 27001/27005: caída del servidor (Alto/Media), vulnerabilidad de protocolo (Crítico/Baja).',                 detail:'5 riesgos clave con probabilidad, impacto y mitigación. Mitigaciones: redundancia, parches regulares, dimensionamiento previo.',                          pdfFile:'RIESGOS_VPN.pdf' },
  { id:'security-2', num:'13', cat:'security', catLabel:'ISO 27K',    title:'Matriz CID',                    desc:'Evaluación de Confidencialidad, Integridad y Disponibilidad de los activos críticos del servicio VPN DCS bajo ISO 27001.',                                  detail:'Activos evaluados: servidor VPN, certificados SSL/TLS, bitácoras, credenciales AD, políticas de acceso.',                                                  pdfFile:'RIESGOS_VPN.pdf' },
  { id:'security-3', num:'14', cat:'security', catLabel:'ISO 27K',    title:'Infraestructuras Críticas',     desc:'Componentes cuya falla impacta la continuidad: Dell PowerEdge, Switch Admin, UPS (30 min), enlace 100 Mbps con respaldo, Active Directory.',                detail:'Arquitectura lógica: Usuarios remotos → Internet (SSL/TLS) → Servidor VPN (OpenVPN/WireGuard+MFA) → Red Corporativa ESCOM.',                              pdfFile:'CEDULA_SERVICIO_COMPLETO.pdf' },
  { id:'security-4', num:'15', cat:'security', catLabel:'BCP',        title:'BIA Táctico (3 procesos)',      desc:'BIA de los 3 procesos COBIT: Gestión de Accesos APO09, Operación del VPN DSS01 y Gestión de Seguridad DSS05/APO13.',                                        detail:'KPIs: provisión ≤24h, disponibilidad ≥99.5%, MTTD/MTTR definidos. RTO máximo 2 horas.',                                                                   pdfFile:'BIA_Tactico_Proceso1_GestionAccesos.pdf' },
  { id:'security-5', num:'16', cat:'security', catLabel:'BCP',        title:'BIA Operacional',               desc:'Análisis de impacto operacional: escenarios de falla del servidor, saturación de ancho de banda, expiración de certificados y ataques de fuerza bruta.',  detail:'Impactos cuantitativos y cualitativos. KPIs: sesiones concurrentes, ancho de banda promedio, tasa de intentos fallidos.',                                  pdfFile:'BIA_Operacional_VPN.pdf' },
  { id:'security-6', num:'17', cat:'security', catLabel:'BCP',        title:'Plan de Continuidad',           desc:'BCP con estrategias de recuperación, roles y procedimientos. Respaldo diario de configuraciones, semanal de bitácoras (retención 90 días).',               detail:'Ventana de mantenimiento: sábados 22:00–06:00 hrs. Imagen mensual del servidor. Pruebas de restauración trimestrales.',                                    pdfFile:'BCP_VPN.pdf' },
]

export const TABS = [
  { key: 'all',      label: 'Todos (18)' },
  { key: 'identity', label: 'Identidad (4)' },
  { key: 'strategy', label: 'Estrategia (4)' },
  { key: 'ops',      label: 'Gestión ITIL (3)' },
  { key: 'security', label: 'Seguridad (6)' },
  { key: 'strategy', label: 'Estrategia (5)' },
]

export const FRAMEWORKS = [
  { label: 'COBIT 2019',         color: '#7c3aed' },
  { label: 'ITIL v4',            color: '#2563eb' },
  { label: 'ISO 27001',          color: '#ea580c' },
  { label: 'ISO 27005',          color: '#0891b2' },
  { label: 'Balanced Scorecard', color: '#16a34a' },
  { label: 'BCP / BIA',          color: '#db2777' },
  { label: 'ESCOM · IPN',        color: '#64748b' },
]

export const TICKER_ITEMS = [
  'COBIT 2019','ITIL v4','ISO 27001','Balanced Scorecard',
  'BIA Táctico','Plan de Continuidad','Matriz CID',
  'Cascada de Metas','Cédula de Servicio VPN-2026-001',
  'Inventario de Activos','Mapa Estratégico','BCP · RTO · RPO',
  'OpenVPN · WireGuard','AES-256 · ChaCha20','RBAC · MFA · AD',
]