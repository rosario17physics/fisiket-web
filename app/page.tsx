const temas = [
  {
    simbolo: '✦',
    categoria: 'ASTROFÍSICA',
    titulo: 'Mensajeros cósmicos',
    descripcion:
      'Rayos gamma, rayos cósmicos y las señales que atraviesan el universo.',
  },
  {
    simbolo: 'φ',
    categoria: 'FÍSICA CUÁNTICA',
    titulo: 'El mundo cuántico',
    descripcion:
      'Qubits, superposición y fenómenos extraños explicados sin complicaciones.',
  },
  {
    simbolo: '◌',
    categoria: 'PARTÍCULAS',
    titulo: 'El universo invisible',
    descripcion:
      'Neutrinos, materia oscura y las partículas que casi no podemos observar.',
  },
];

const rutas = [
  {
    numero: '01',
    titulo: 'Solo tengo curiosidad',
    descripcion: 'Ideas sorprendentes sin fórmulas ni conocimientos previos.',
  },
  {
    numero: '02',
    titulo: 'Quiero entender',
    descripcion:
      'Conceptos, analogías y experimentos para comprender la física.',
  },
  {
    numero: '03',
    titulo: 'Quiero profundizar',
    descripcion:
      'Matemática, recursos y rutas de estudio para continuar aprendiendo.',
  },
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <nav className="navbar">
          <a className="logo" href="#inicio">
            <span className="logoSymbol">φ</span>
            <span>FISIKET</span>
          </a>

          <div className="navLinks">
            <a href="#explorar">Explorar</a>
            <a href="#rutas">Empieza aquí</a>
            <a href="#sobre-mi">Sobre mí</a>
          </div>

          <a className="navButton" href="#rutas">
            Quiero aprender ↗
          </a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="stars" aria-hidden="true" />

        <div className="heroContent">
          <p className="eyebrow">DIVULGACIÓN CIENTÍFICA SIN FRONTERAS</p>

          <h1>
            La física está
            <br />
            en <em>todas partes.</em>
          </h1>

          <p className="heroDescription">
            No necesitas ser científico para entender el universo. Solo
            necesitas una buena pregunta.
          </p>

          <div className="heroActions">
            <a className="primaryButton" href="#explorar">
              Explorar la física <span>→</span>
            </a>

            <a className="secondaryButton" href="#sobre-mi">
              Conoce FISIKET
            </a>
          </div>
        </div>

        <div className="atom" aria-hidden="true">
          <div className="orbit orbitOne" />
          <div className="orbit orbitTwo" />
          <div className="orbit orbitThree" />
          <div className="nucleus">φ</div>
        </div>

        <a className="scrollIndicator" href="#explorar">
          ↓<span>SEGUIR EXPLORANDO</span>
        </a>
      </section>

      <section className="manifesto">
        <p>
          La física no es una colección de fórmulas.
          <br />
          Es una manera de <em>mirar el mundo.</em>
        </p>
      </section>

      <section className="topics section" id="explorar">
        <div className="sectionHeader">
          <div>
            <span className="sectionLabel">UN UNIVERSO POR DESCUBRIR</span>
            <h2>
              Empieza por lo que
              <br />
              te haga decir <em>“¿qué?”</em>
            </h2>
          </div>

          <p>
            Historias, ideas y experimentos para acercarte a la física a tu
            propio ritmo.
          </p>
        </div>

        <div className="topicGrid">
          {temas.map((tema) => (
            <article className="topicCard" key={tema.titulo}>
              <div className="topicCardTop">
                <span className="topicSymbol">{tema.simbolo}</span>
                <span className="topicCategory">{tema.categoria}</span>
              </div>

              <div>
                <h3>{tema.titulo}</h3>
                <p>{tema.descripcion}</p>
                <span className="comingSoon">Próximamente ↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="routesSection" id="rutas">
        <div className="routesIntroduction">
          <span className="sectionLabel">
            NO HAY UNA SOLA PUERTA DE ENTRADA
          </span>

          <h2>
            ¿Desde dónde
            <br />
            quieres empezar?
          </h2>

          <p>
            Elige la ruta que más se parece a ti. Aquí no existen las preguntas
            tontas.
          </p>
        </div>

        <div className="routesList">
          {rutas.map((ruta) => (
            <a className="route" href="#explorar" key={ruta.numero}>
              <span className="routeNumber">{ruta.numero}</span>

              <span>
                <strong>{ruta.titulo}</strong>
                <small>{ruta.descripcion}</small>
              </span>

              <span className="routeArrow">→</span>
            </a>
          ))}
        </div>
      </section>

      <section className="about section" id="sobre-mi">
        <div className="aboutImage">
          <div className="initials">RA</div>
          <span>Desde Perú para el universo ✦</span>
        </div>

        <div className="aboutText">
          <span className="sectionLabel">DETRÁS DE FISIKET</span>

          <h2>
            Hola, soy
            <br />
            <em>Rosario.</em>
          </h2>

          <h3>Física peruana, investigadora y divulgadora científica.</h3>

          <p>
            He investigado neutrinos en DUNE, rayos gamma en SWGO y sistemas
            cuánticos. Creé FISIKET para que la física deje de sentirse lejana y
            se convierta en algo que cualquiera pueda cuestionar, imaginar y
            disfrutar.
          </p>

          <blockquote>
            “Entender un poco más el universo también cambia la forma en que nos
            entendemos a nosotros mismos.”
          </blockquote>
        </div>
      </section>

      <section className="finalCall">
        <div>
          <span className="sectionLabel">ESTO RECIÉN COMIENZA</span>
          <h2>
            Una pregunta nueva
            <br />
            puede cambiarlo todo.
          </h2>
        </div>

        <div>
          <p>
            Muy pronto encontrarás historias, explicaciones y recursos para
            continuar explorando.
          </p>

          <a href="#inicio">Volver al inicio ↑</a>
        </div>
      </section>

      <footer>
        <a className="logo" href="#inicio">
          <span className="logoSymbol">φ</span>
          <span>FISIKET</span>
        </a>

        <p>Física para personas curiosas.</p>
        <span>Hecho con curiosidad en Perú · 2026</span>
      </footer>
    </main>
  );
}
