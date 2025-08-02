import React from 'react';
import { Palette, RefreshCw, Calculator } from 'lucide-react';

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="container">
        <div className="section-header">
          <h2>¿Cómo Trabajamos?</h2>
          <p>Conoce nuestro proceso artesanal y cómo determinamos los precios</p>
        </div>

        <div className="info-grid">
          <div className="info-card">
            <div className="info-icon">
              <Palette size={32} />
            </div>
            <h3>Precio Personalizado</h3>
            <p>
              El precio de cada alfombra varía según la <strong>cantidad de colores</strong> y
              la <strong>complejidad de la trama</strong>.
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <RefreshCw size={32} />
            </div>
            <h3>Reproducimos Diseños</h3>
            <p>
              ¿Te gustó un diseño que ya se vendió? <strong>¡No hay problema! </strong>
              Podemos recrear cualquier alfombra de nuestro catálogo.
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <Calculator size={32} />
            </div>
            <h3>Cálculo del Precio</h3>
            <p>
              Nuestro precio base es:<br></br> <strong>Materia prima × 3</strong>
            </p>
            <p>Luego de este calculo le sumamos un porcentaje dependiendo de la difucultad del diseño.</p>
            <div className="pricing-breakdown">
              <div className="pricing-item">
                <span className="difficulty easy">Fácil</span>
                <span className="percentage">+10%</span>
              </div>
              <div className="pricing-item">
                <span className="difficulty medium">Medio</span>
                <span className="percentage">+15%</span>
              </div>
              <div className="pricing-item">
                <span className="difficulty hard">Difícil</span>
                <span className="percentage">+20%</span>
              </div>
            </div>
            <p>Por ejemplo: para <strong>$20000</strong> de materia prima y un diseño de complejidad <span className='difficulty medium'>medio</span> el total es de <strong>$72000</strong></p>
          </div>
        </div>

        <div className="info-footer">
          <p>
            Contactame via Whatsapp y charlamos sobre la idea y las posibilidad que existen para obtener tu Luzé Rugs.
          </p>
          <a
            href="https://wa.me/543498528087?text=Hola Luzé! me gustaría conocer más sobre sus alfombras artesanales."
            className="btn btn-primary btn-large"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enviar mensaje por Whatsapp
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;