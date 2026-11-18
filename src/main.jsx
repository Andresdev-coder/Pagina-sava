import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownToLine,
  Sprout,
  Package,
  Bell,
  ChartNoAxesCombined,
  Check,
  Menu,
  Leaf,
  Smartphone,
  ShieldCheck,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import "./style.css";

const Logo = ({ compact = false }) => (
  <a
    className={`brand ${compact ? "brand-small" : ""}`}
    href="#inicio"
    aria-label="Sava, inicio"
  >
    <span className="brand-mark">
      <Leaf className="leaf leaf-a" />
      <Leaf className="leaf leaf-b" />
      <Sprout className="leaf-stem" />
    </span>
    <span>Sava</span>
  </a>
);
const StoreBadge = ({ apple = false }) => (
  <a className="store-badge" href="#descargar">
    <span className="store-symbol">
      {apple ? "●" : <span className="play-icon">▶</span>}
    </span>
    <span>
      <small>{apple ? "Descárgala en el" : "DISPONIBLE EN"}</small>
      <strong>{apple ? "App Store" : "Google Play"}</strong>
    </span>
  </a>
);
const features = [
  {
    icon: Sprout,
    title: "Control de cultivos",
    text: "Registra y monitorea el estado de tus cultivos.",
  },
  {
    icon: Package,
    title: "Inventario agrícola",
    text: "Gestiona tus insumos y productos fácilmente.",
  },
  {
    icon: Bell,
    title: "Alertas de vencimiento",
    text: "Recibe notificaciones antes de que sea tarde.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Reportes y estadísticas",
    text: "Analiza tu producción y toma mejores decisiones.",
  },
];
function App() {
  return (
    <>
      <header className="topbar">
        <div className="nav-wrap">
          <Logo />
          <nav>
            <a className="active" href="#inicio">
              Inicio
            </a>
            <a href="#caracteristicas">Características</a>
            <a href="#beneficios">Beneficios</a>
            <a href="#sobre-sava">Sobre Sava</a>
          </nav>
          <a href="#descargar" className="download-top">
            <ArrowDownToLine size={18} /> Descarga
          </a>
          <button className="menu" aria-label="Abrir menú">
            <Menu />
          </button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="hero-shade"></div>
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="hero-brand">
                <Logo />
                <p>Tu aliado en el campo</p>
              </div>
              <h1>
                Gestiona, controla y<br /> hace crecer <em>tu cultivo</em>
              </h1>
              <p className="hero-text">
                La app agrícola diseñada para ayudarte a administrar tus
                cultivos, inventario y recibir alertas importantes, todo desde
                tu celular.
              </p>
              <div className="stores">
                <StoreBadge />
                <StoreBadge apple />
              </div>
            </div>
            <div className="phone-scene">
              <div className="phone">
                <div className="phone-island"></div>
                <div className="phone-status">
                  9:41 <span>●●● ▰</span>
                </div>
                <div className="phone-logo">
                  <span className="mini-leaves">🌿</span> Sava{" "}
                  <Bell size={15} />
                </div>
                <div className="welcome">
                  <b>Hola, Agricultor</b>
                  <small>Tu campo, nuestra prioridad</small>
                  <div className="field-strip"></div>
                </div>
                <div className="stat-grid">
                  <div>
                    <Sprout />
                    <b>12</b>
                    <small>Cultivos activos</small>
                  </div>
                  <div>
                    <Package />
                    <b>8</b>
                    <small>Productos</small>
                  </div>
                  <div>
                    <span className="calendar">▦</span>
                    <b>15 días</b>
                    <small>Vencen pronto</small>
                  </div>
                  <div>
                    <ChartNoAxesCombined />
                    <b>92%</b>
                    <small>Salud de cultivo</small>
                  </div>
                </div>
                <b className="crop-title">
                  Tus cultivos <small>Ver todos ›</small>
                </b>
                <div className="crop-card">
                  <div className="crop-photo"></div>
                  <div>
                    <b>Maíz</b>
                    <small>Saludable</small>
                    <small>Fase: Crecimiento</small>
                    <i></i>
                  </div>
                </div>
                <div className="phone-tabs">
                  <span>
                    ⌂<small>Inicio</small>
                  </span>
                  <span>
                    ▦<small>Inventario</small>
                  </span>
                  <span>
                    ▥<small>Reportes</small>
                  </span>
                  <span>
                    ⚙<small>Configuración</small>
                  </span>
                </div>
              </div>
              <div className="phone-caption">
                Tecnología
                <br /> en tus manos
              </div>
            </div>
          </div>
          <div className="hero-bottom"></div>
        </section>
        <section className="features section" id="caracteristicas">
          <div className="section-heading">
            <span></span>
            <h2>Características principales</h2>
            <p>Todo lo que necesitas para una agricultura más productiva</p>
          </div>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, text }) => (
              <article className="feature-card" key={title}>
                <div className="feature-icon">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="benefits section" id="beneficios">
          <div className="farmer-image">
            <div className="image-badge">
              <Sprout />
            </div>
          </div>
          <div className="benefit-copy">
            <span className="green-line"></span>
            <h2>¿Por qué elegir Sava?</h2>
            <p>
              Porque tu trabajo en el campo merece las mejores herramientas.
            </p>
            <ul>
              {[
                "Fácil de usar",
                "Acceso desde cualquier lugar",
                "Mejora la productividad",
                "Apoyo al agricultor",
              ].map((x) => (
                <li key={x}>
                  <Check />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="download-card" id="descargar">
            <div className="download-brand">
              <Logo compact />
            </div>
            <div>
              <h3>Descarga Sava ahora</h3>
              <p>
                y lleva tu agricultura
                <br /> al siguiente nivel
              </p>
              <div className="stores">
                <StoreBadge />
                <StoreBadge apple />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="sobre-sava">
        <div className="footer-main">
          <Logo compact />
          <span className="footer-divider"></span>
          <i>Tu aliado en el campo</i>
          <nav>
            <a href="#inicio">Inicio</a>
            <a href="#caracteristicas">Características</a>
            <a href="#beneficios">Beneficios</a>
            <a href="#sobre-sava">Sobre Sava</a>
          </nav>
          <div className="socials">
            <a href="#" aria-label="YouTube">
              <Youtube />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="#" aria-label="X">
              𝕏
            </a>
          </div>
        </div>
        <p>© 2026 Sava. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
