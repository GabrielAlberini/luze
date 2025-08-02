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
                Este soy yo, y me encargo de realizar las alfombras, algunas de mis tareas son: plasmar el diseño en el bastidor, "tuftear" la alfombra, recortarla del lienzo y colocarle la tela que va contra el piso.
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
                Ella es Luciana, la chica más hermosa del mundo y se encargar de la logistica del taller como controlar el obillado de la lana, el stock y el estado de los materiales. Además es la CM del emprendimiento creando contenido para Intasgram. Miren que linda que es!!!!!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;