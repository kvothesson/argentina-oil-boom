import { useState } from "react";

const BRENT = 92;
const BRENT_PREV = 71;
const SUBA_PCT = (((BRENT - BRENT_PREV) / BRENT_PREV) * 100).toFixed(0);

const acciones = [
  { ticker: "YPF", nombre: "YPF S.A.", razon: "La más directa. Produce y exporta. Más dólares por barril = más ganancia.", riesgo: "Medio", upside: "Alto", emoji: "🛢️", link: "https://finance.yahoo.com/quote/YPF" },
  { ticker: "PAMP", nombre: "Pampa Energía", razon: "Diversificada en gas y petróleo. Se beneficia del aumento de exportaciones.", riesgo: "Medio", upside: "Alto", emoji: "⚡", link: "https://finance.yahoo.com/quote/PAM" },
  { ticker: "VISTA", nombre: "Vista Energy", razon: "100% Vaca Muerta. Probablemente la más sensible al precio del barril.", riesgo: "Medio-alto", upside: "Muy alto", emoji: "🔥", link: "https://finance.yahoo.com/quote/VIST" },
  { ticker: "TGSU2", nombre: "Transportadora Gas Sur", razon: "Transporta el gas que sale de Vaca Muerta. Más volumen = más ingresos.", riesgo: "Bajo", upside: "Moderado", emoji: "🔩", link: "#" },
];

const sectores = [
  { nombre: "Ingeniería de petróleo y gas", demanda: "🔥 Muy alta", detalle: "Perforación, mantenimiento de pozos, geología. Vaca Muerta necesita miles de trabajadores técnicos.", accion: "Capacitate en certificaciones de la industria O&G. ITBA, UTN tienen programas." },
  { nombre: "Tecnología para energía", demanda: "🔥 Alta", detalle: "Software para monitoreo de pozos, automatización, IA aplicada a exploración.", accion: "Si ya trabajás con AI agents/LLMs, hay aplicaciones directas en el sector energético." },
  { nombre: "Logística y transporte", demanda: "📈 Creciente", detalle: "Mover equipos, materiales y personal hacia la Patagonia. Boom de servicios.", accion: "Emprendimientos de transporte especializado tienen ventana de entrada hoy." },
  { nombre: "Construcción en zonas productivas", demanda: "📈 Creciente", detalle: "Campamentos, infraestructura, vivienda en Neuquén, Río Negro.", accion: "El precio del suelo en Neuquén ya subió. Hay oportunidad en servicios auxiliares." },
  { nombre: "Finanzas y commodities", demanda: "📊 Estable-alta", detalle: "Análisis de mercados energéticos, trading de futuros de petróleo.", accion: "Plataformas como IOL, PPI o Balanz permiten operar desde Argentina." },
];

const ahorros = [
  {
    perfil: "Sin capital (solo orientación)",
    emoji: "🧭",
    color: "#6366f1",
    pasos: [
      "Informate sobre YPF y el sector energético. Entender es el primer paso.",
      "Abrí una cuenta comitente en IOL o Balanz (gratis, sin monto mínimo).",
      "Seguí el precio del Brent y YPF. Cuando tengas aunque sea $5.000, ya podés empezar.",
      "Considerá capacitarte en áreas con alta demanda en el sector (ver pestaña Sectores).",
    ]
  },
  {
    perfil: "Ahorros pequeños (hasta $500k)",
    emoji: "💰",
    color: "#f59e0b",
    pasos: [
      "Cedears de YPF o VISTA: comprás desde Argentina en pesos, pero cotiza en dólares. Cobertura cambiaria + exposición al petróleo.",
      "FCI (fondos comunes) con exposición a energía: Balanz, Cohen o Consultatio tienen opciones.",
      "No pongas todo en uno. 50% energía, 50% en algo más estable (dólar MEP o bono CER).",
      "Horizonte mínimo: 3-6 meses. Esta crisis no se resuelve en semanas.",
    ]
  },
  {
    perfil: "Ahorros medianos ($500k+ o dólares)",
    emoji: "📈",
    color: "#10b981",
    pasos: [
      "ADRs directos: YPF, PAM y VIST cotizan en NYSE. Podés comprarlos con dólares desde Argentina.",
      "Diversificá con ETFs globales de energía: XLE (Energy Select SPDR) o VDE (Vanguard Energy).",
      "Bonos soberanos argentinos: cuando el país exporta más, mejora la percepción de riesgo → bonos suben.",
      "Considerá invertir en startups o proyectos de servicios para Vaca Muerta. Hay incubadoras activas en Neuquén.",
      "Ojo con el timing: si el conflicto se resuelve rápido, el precio baja. No apostar todo a un escenario.",
    ]
  },
];

const vaca_muerta_facts = [
  { label: "Reservas de gas", valor: "2° del mundo", icon: "🌎" },
  { label: "Reservas de petróleo", valor: "4° del mundo", icon: "🛢️" },
  { label: "% explotado actualmente", valor: "~5%", icon: "⛏️" },
  { label: "Inversión proyectada", valor: "$50B en 10 años", icon: "💵" },
  { label: "Empleos directos potenciales", valor: "+200.000", icon: "👷" },
  { label: "Extra por barril a $92 vs $71", valor: "+$21/barril", icon: "📈" },
];

const TABS = [["opp","🚀 Oportunidad"],["acciones","📊 Acciones"],["sectores","💼 Sectores"],["ahorros","💰 Ahorros"]];

export default function App() {
  const [tab, setTab] = useState("opp");
  const [perfilIdx, setPerfilIdx] = useState(0);
  const [accionOpen, setAccionOpen] = useState(null);

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#080812", minHeight: "100vh", color: "#e8e8f0" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0f172a, #1e1b4b)", padding: "20px 16px 0", borderBottom: "1px solid #1e1e3a" }}>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
            <span style={{ fontSize: 28 }}>🇦🇷</span>
            <div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#fff", letterSpacing: -0.5 }}>Argentina Oil Boom</div>
              <div style={{ fontSize: 11, color: "#818cf8" }}>La crisis afuera es tu oportunidad acá adentro</div>
            </div>
            <div style={{ marginLeft: "auto", textAlign: "right" }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#f97316" }}>+{SUBA_PCT}%</div>
              <div style={{ fontSize: 10, color: "#666" }}>Brent esta semana</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 2, marginTop: 14 }}>
            {TABS.map(([id, label]) => (
              <button key={id} onClick={() => setTab(id)} style={{
                flex: 1, padding: "8px 2px", border: "none", cursor: "pointer", fontSize: 10.5, fontWeight: 700,
                background: "transparent", color: tab === id ? "#818cf8" : "#555",
                borderBottom: tab === id ? "2px solid #6366f1" : "2px solid transparent",
                transition: "all 0.2s", whiteSpace: "nowrap"
              }}>{label}</button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 500, margin: "0 auto", padding: "16px 14px 40px" }}>

        {/* OPORTUNIDAD TAB */}
        {tab === "opp" && (
          <div>
            <div style={{ background: "linear-gradient(135deg, #312e81, #1e1b4b)", borderRadius: 14, padding: 16, marginBottom: 14, border: "1px solid #4f46e5" }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: "#a5b4fc", marginBottom: 6 }}>¿Por qué Argentina gana cuando el petróleo sube?</div>
              <div style={{ fontSize: 12, color: "#c7d2fe", lineHeight: 1.7 }}>
                Argentina tiene <strong style={{color:"#fff"}}>Vaca Muerta</strong>: la segunda reserva de gas no convencional y la cuarta de petróleo del mundo. Solo el 5% está explotado. Cada dólar que sube el barril son más dólares que entran al país y más demanda de trabajo, inversión y servicios.
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 14 }}>
              {vaca_muerta_facts.map((f, i) => (
                <div key={i} style={{ background: "#12121f", borderRadius: 10, padding: "10px 8px", textAlign: "center", border: "1px solid #1e1e3a" }}>
                  <div style={{ fontSize: 18 }}>{f.icon}</div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#a5b4fc", margin: "2px 0" }}>{f.valor}</div>
                  <div style={{ fontSize: 9, color: "#555", lineHeight: 1.3 }}>{f.label}</div>
                </div>
              ))}
            </div>

            <div style={{ background: "#12121f", borderRadius: 14, padding: 14, marginBottom: 14, border: "1px solid #1e1e3a" }}>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 12, color: "#e2e8f0" }}>⚡ El ciclo virtuoso</div>
              {[
                ["🌍 Sube el petróleo global", "Crisis en Ormuz → escasez → precio alto"],
                ["💵 Más ingresos para Argentina", "Cada barril extra vale $21 más que hace 2 semanas"],
                ["🏗️ Más inversión en Vaca Muerta", "Las empresas aceleran la perforación"],
                ["👷 Más trabajo y salarios", "Ingenieros, técnicos, logística, tecnología"],
                ["📈 Acciones y bonos argentinos suben", "El mercado descuenta mejora del país"],
              ].map(([titulo, sub], i, arr) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: i < arr.length-1 ? 8 : 0 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#1e1b4b", border: "2px solid #4f46e5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0 }}>{i+1}</div>
                    {i < arr.length-1 && <div style={{ width: 2, height: 16, background: "#1e1b4b", margin: "2px 0" }} />}
                  </div>
                  <div style={{ paddingTop: 4 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#e2e8f0" }}>{titulo}</div>
                    <div style={{ fontSize: 11, color: "#64748b" }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: "linear-gradient(135deg, #064e3b, #065f46)", borderRadius: 12, padding: 14, border: "1px solid #10b981" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#6ee7b7", marginBottom: 4 }}>🎯 ¿Y vos qué hacés con esto?</div>
              <div style={{ fontSize: 12, color: "#a7f3d0", lineHeight: 1.6 }}>Mirá las pestañas de <strong>Acciones</strong>, <strong>Sectores</strong> y <strong>Ahorros</strong>. Hay oportunidades para todos los perfiles, desde el que no tiene un peso hasta el que tiene dólares para mover.</div>
            </div>
          </div>
        )}

        {/* ACCIONES TAB */}
        {tab === "acciones" && (
          <div>
            <div style={{ fontSize: 12, color: "#64748b", marginBottom: 14, background: "#12121f", padding: "10px 12px", borderRadius: 10, lineHeight: 1.6 }}>
              ⚠️ Esto no es asesoramiento financiero. Es orientación informativa. Siempre investigá antes de invertir.
            </div>
            {acciones.map((a, i) => (
              <div key={i} style={{ background: "#12121f", borderRadius: 12, marginBottom: 10, border: "1px solid #1e1e3a", overflow: "hidden" }}>
                <button onClick={() => setAccionOpen(accionOpen === i ? null : i)} style={{
                  width: "100%", background: "transparent", border: "none", padding: "14px", cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 12, textAlign: "left"
                }}>
                  <div style={{ fontSize: 26 }}>{a.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 15, fontWeight: 800, color: "#fff" }}>{a.ticker}</span>
                      <span style={{ fontSize: 11, color: "#64748b" }}>{a.nombre}</span>
                    </div>
                    <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
                      <span style={{ fontSize: 10, background: "#1e1b4b", color: "#818cf8", padding: "2px 6px", borderRadius: 4 }}>Riesgo: {a.riesgo}</span>
                      <span style={{ fontSize: 10, background: "#064e3b", color: "#6ee7b7", padding: "2px 6px", borderRadius: 4 }}>Upside: {a.upside}</span>
                    </div>
                  </div>
                  <span style={{ color: "#4f46e5", fontSize: 18 }}>{accionOpen === i ? "−" : "+"}</span>
                </button>
                {accionOpen === i && (
                  <div style={{ padding: "0 14px 14px", borderTop: "1px solid #1e1e3a" }}>
                    <div style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.7, marginTop: 10 }}>{a.razon}</div>
                    <div style={{ marginTop: 10, fontSize: 11, color: "#64748b" }}>
                      💡 Podés comprarla como <strong style={{color:"#a5b4fc"}}>Cedear</strong> desde Argentina con pesos, o como <strong style={{color:"#a5b4fc"}}>ADR</strong> con dólares en el exterior.
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div style={{ background: "#12121f", borderRadius: 12, padding: 14, border: "1px solid #1e1e3a", marginTop: 4 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#e2e8f0", marginBottom: 8 }}>🏦 ¿Dónde comprarlas?</div>
              {[["IOL (Invertir Online)", "Para principiantes. Fácil, comisiones bajas."],["Balanz Capital", "Más productos, buen soporte."],["PPI (Portfolio Personal)", "Muy completo para usuarios más activos."]].map(([nombre, desc], i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: i < 2 ? "1px solid #1e1e3a" : "none" }}>
                  <span style={{ fontSize: 12, color: "#a5b4fc", fontWeight: 600 }}>{nombre}</span>
                  <span style={{ fontSize: 11, color: "#64748b", maxWidth: "55%", textAlign: "right" }}>{desc}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTORES TAB */}
        {tab === "sectores" && (
          <div>
            <div style={{ fontSize: 12, color: "#6ee7b7", background: "#064e3b22", border: "1px solid #10b98133", borderRadius: 10, padding: "10px 12px", marginBottom: 14, lineHeight: 1.6 }}>
              🔑 Si el capital financiero no es tu herramienta, <strong>el capital humano sí lo es</strong>. Estos sectores van a necesitar gente en los próximos años.
            </div>
            {sectores.map((s, i) => (
              <div key={i} style={{ background: "#12121f", borderRadius: 12, padding: 14, marginBottom: 10, border: "1px solid #1e1e3a" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#e2e8f0" }}>{s.nombre}</div>
                  <div style={{ fontSize: 11, fontWeight: 700 }}>{s.demanda}</div>
                </div>
                <div style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.6, marginBottom: 8 }}>{s.detalle}</div>
                <div style={{ background: "#1e1b4b", borderRadius: 8, padding: "8px 10px", fontSize: 11, color: "#a5b4fc", lineHeight: 1.5 }}>
                  🎯 <strong>Acción concreta:</strong> {s.accion}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* AHORROS TAB */}
        {tab === "ahorros" && (
          <div>
            <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
              {ahorros.map((a, i) => (
                <button key={i} onClick={() => setPerfilIdx(i)} style={{
                  flex: 1, padding: "8px 4px", borderRadius: 8, border: `2px solid ${perfilIdx === i ? a.color : "#1e1e3a"}`,
                  background: perfilIdx === i ? a.color + "22" : "transparent",
                  color: perfilIdx === i ? a.color : "#555", fontSize: 10, fontWeight: 700, cursor: "pointer", lineHeight: 1.3
                }}>{a.emoji}<br/>{a.perfil.split(" ")[0]}</button>
              ))}
            </div>

            {(() => {
              const p = ahorros[perfilIdx];
              return (
                <div>
                  <div style={{ background: "#12121f", borderRadius: 12, padding: 14, marginBottom: 12, border: `1px solid ${p.color}44` }}>
                    <div style={{ fontSize: 14, fontWeight: 800, color: p.color, marginBottom: 2 }}>{p.emoji} {p.perfil}</div>
                  </div>
                  {p.pasos.map((paso, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, marginBottom: 10, background: "#12121f", borderRadius: 10, padding: 12, border: "1px solid #1e1e3a" }}>
                      <div style={{ width: 24, height: 24, borderRadius: "50%", background: p.color + "33", border: `2px solid ${p.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: p.color, flexShrink: 0 }}>{i+1}</div>
                      <div style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.7, paddingTop: 2 }}>{paso}</div>
                    </div>
                  ))}
                </div>
              );
            })()}

            <div style={{ background: "linear-gradient(135deg, #1e1b4b, #312e81)", borderRadius: 12, padding: 14, marginTop: 4, border: "1px solid #4f46e5" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#a5b4fc", marginBottom: 6 }}>📌 Regla de oro para cualquier perfil</div>
              <div style={{ fontSize: 12, color: "#c7d2fe", lineHeight: 1.7 }}>
                No invertís en lo que no entendés. Primero leé, después abrí cuenta, después operá con poco. El conocimiento es el primer capital.
              </div>
            </div>
          </div>
        )}
      </div>
      <style>{`* { box-sizing: border-box; }`}</style>
    </div>
  );
}