import React from 'react';
import { Hammer, Package } from 'lucide-react';

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="container">
        <div className="section-header">
          <h2>¿Quienes somos?</h2>
          <p>Conoce nuestro pequeño gigante equipo</p>
        </div>

        <div className="team-grid">
          <div className="team-card">
            <div className="team-image">
              <img
                src="./yo.jpg"
                alt="Gabriel Alberini"
              />
            </div>
            <div className="team-content">
              <div className="team-icon">
                <Hammer size={24} />
              </div>
              <h3>Gabriel Alberini</h3>
              <p className="team-role">Producción y Fabricación</p>
              <p className="team-description">
                Gabriel es el responsable del proceso de elaboración de las alfombras. Entre sus tareas se encuentran trasladar el diseño al bastidor, realizar el tufteado, recortar la alfombra del lienzo y aplicar la base de tela que se adhiere al piso.
              </p>
            </div>
          </div>

          <div className="team-card">
            <div className="team-image">
              <img
                src="./luciana.jpg"
                alt="Luciana Giné"
              />
            </div>
            <div className="team-content">
              <div className="team-icon">
                <Package size={24} />
              </div>
              <h3>Luciana Giné</h3>
              <p className="team-role">Gestión y Contenido</p>
              <p className="team-description">
                Luciana se encarga de la gestión del taller, controlando el ovillado de lana, el stock y el estado de los materiales. Además, es la responsable de la comunicación del emprendimiento, creando y gestionando el contenido para nuestras redes sociales, especialmente en Instagram.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;