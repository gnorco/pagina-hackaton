export default function MonoxidoInfo() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <div
        className="text-center py-5 mb-0"
        style={{
          background: "linear-gradient(135deg, #0d6efd 0%, #0dcaf0 100%)",
          color: "white",
        }}
      >
        <h1 className="fw-light mb-2" style={{ fontSize: "2.5rem", letterSpacing: "-0.5px" }}>
          Monóxido de Carbono
        </h1>
        <h3 className="fw-light mb-2"style={{ fontSize: "2.5rem", letterSpacing: "-0.5px" }}>¡Hace la diferencia! Aprende a purificar el aire y proteger el medio ambiente.</h3>
        <p className="mb-0 opacity-75">CO</p>
      </div>

      <div className="container flex-grow-1 py-5">

        <div className="mb-5">
          <h2 className="text-center fw-semibold mb-4" style={{ fontSize: "1.8rem", color: "#212529" }}>
            Información Esencial
          </h2>

          <div className="row g-4">

            <div className="col-md-6 col-lg-3">
              <div className="card border-0 h-100" style={{ backgroundColor: "#f8f9fa" }}>
                <div className="card-body p-4">
                  <div className="mb-3" style={{ color: "#0d6efd", fontSize: "1.5rem" }}>
                    ●
                  </div>
                  <h5 className="card-title fw-semibold mb-3" style={{ fontSize: "1.1rem" }}>
                    ¿Qué es?
                  </h5>
                  <p className="card-text text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                    Gas incoloro, inodoro e insípido que se produce al quemar combustibles. Altamente tóxico y difícil
                    de detectar.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card border-0 h-100" style={{ backgroundColor: "#f8f9fa" }}>
                <div className="card-body p-4">
                  <div className="mb-3" style={{ color: "#198754", fontSize: "1.5rem" }}>
                    ●
                  </div>
                  <h5 className="card-title fw-semibold mb-3" style={{ fontSize: "1.1rem" }}>
                    Fuentes
                  </h5>
                  <p className="card-text text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                    Estufas, calentadores, hornos, autos en garajes cerrados, braseros y generadores con mala
                    ventilación.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card border-0 h-100" style={{ backgroundColor: "#f8f9fa" }}>
                <div className="card-body p-4">
                  <div className="mb-3" style={{ color: "#dc3545", fontSize: "1.5rem" }}>
                    ●
                  </div>
                  <h5 className="card-title fw-semibold mb-3" style={{ fontSize: "1.1rem" }}>
                    Efectos
                  </h5>
                  <p className="card-text text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                    Dolor de cabeza, mareos, náuseas, confusión e incluso la muerte. Especialmente peligroso durante el
                    sueño.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card border-0 h-100" style={{ backgroundColor: "#f8f9fa" }}>
                <div className="card-body p-4">
                  <div className="mb-3" style={{ color: "#ffc107", fontSize: "1.5rem" }}>
                    ●
                  </div>
                  <h5 className="card-title fw-semibold mb-3" style={{ fontSize: "1.1rem" }}>
                    Prevención
                  </h5>
                  <ul className="list-unstyled text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.8" }}>
                    <li className="mb-2">→ Ventilar regularmente</li>
                    <li className="mb-2">→ Revisar instalaciones</li>
                    <li className="mb-2">→ No usar braseros</li>
                    <li>→ Instalar detectores</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <h2 className="text-center fw-semibold mb-4" style={{ fontSize: "1.8rem", color: "#212529" }}>
            Contexto Ambiental
          </h2>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h5 className="card-title fw-semibold mb-3">Tendencia del Monóxido de Carbono (CO)</h5>
                  <p className="card-text text-muted">
                    Las concentraciones globales de CO en la atmósfera libre han mostrado una tendencia de disminución
                    desde los años 90, gracias a regulaciones y el uso de convertidores catalíticos en vehículos.
                  </p>

                  <div className="text-center py-4 rounded mt-3">
                    <p className="mb-0 text-dark fw-bold"></p>
                    <img src="https://img.europapress.es/fotoweb/fotonoticia_20200909191153_9999.webp" width={"600px"} height={"400px"} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-center fw-semibold mb-4" style={{ fontSize: "1.8rem", color: "#212529" }}>
            Sobre el Proyecto
          </h2>

          <div className="row g-4">

            <div className="col-lg-6">
              <div className="card border-0 h-100" style={{ backgroundColor: "#e7f3ff" }}>
                <div className="card-body p-4">
                  <h5 className="fw-semibold mb-3" style={{ color: "#0d6efd", fontSize: "1.1rem" }}>
                    Construcción de la Página (React + Bootstrap)
                  </h5>
                  <p className="text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
                    Esta página informativa fue creada utilizando React para la estructura del componente y
                    Bootstrap para el diseño y el estilo responsivo. Los problemas que tuvimos fueron:
                  </p>
                  <ul className="list-unstyled text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.8" }}>
                    <li className="mb-2">
                      1. Problemas de conexion: Debido a este problema nos demoramos mucho al principio para descargar dependecias 
                    </li>
                    <li className="mb-2">
                      2. Falta de programas instalados: Tuvimos que instalar algunos programas que no venian incluidos en la computadora, como por ejemplo: Git, node y otras extensiones de visual studio.
                    </li>
                    <li className="mb-2">
                      3. Problemas con las imagenes: A la hora de poner las imagenes nos generaba un error y no se importaban asi que tuvimos que buscar y solucionar el problema ya que no se encontraba el fichero donde habiamos guardado las imagenes.
                    </li>
                  </ul>
                </div>
              </div>
            </div>


            <div className="col-lg-6">
              <div className="card border-0 h-100" style={{ backgroundColor: "#d1f2eb" }}>
                <div className="card-body p-4">
                  <h5 className="fw-semibold mb-3" style={{ color: "#198754", fontSize: "1.1rem" }}>
                    Proyecto Paralelo: Juego Educativo en Pygame
                  </h5>
                  <p className="text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
                    Simultáneamente, desarrollamos un juego educativo utilizando la librería Pygame en Python.
                    El objetivo es que los jugadores aprendan sobre la prevención del Monóxido de Carbono de forma
                    interactiva.
                  </p>
                  <blockquote
                    className="bg-white p-3 rounded text-muted mb-3"
                    style={{
                      fontSize: "0.9rem",
                      borderLeft: "4px solid #198754",
                      lineHeight: "1.6",
                    }}
                  >
                    En "EcoCleanner", el jugador controla a Sparky, un héroe ecológico encargado de
                    proteger el planeta. Una gran fábrica cercana está liberando CO₂ al ambiente, contaminando la ciudad
                    y poniendo en riesgo a sus habitantes. El objetivo del jugador es purificar el aire absorbiendo el
                    CO₂ antes de que los niveles sean peligrosos.
                  </blockquote>
                  <p className="text-muted small mb-0">
                    ¡Es una forma práctica y divertida de aplicar los conocimientos de esta página!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-4 border-top mt-auto" style={{ backgroundColor: "#f8f9fa" }}>
        <p className="text-muted small mb-0">
          © 2025 Hackaton Grupo 6. Todos los derechos reservados.
        </p>
      </div>
    </div>
  )
}
