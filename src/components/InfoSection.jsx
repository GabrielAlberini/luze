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
              El valor final de cada alfombra depende de la <strong>cantidad de colores</strong> utilizados y la <strong>complejidad del diseño</strong>.
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <RefreshCw size={32} />
            </div>
            <h3>Reproducimos Diseños</h3>
            <p>
              ¿Te gustó un diseño que ya se vendió? <strong>¡No hay problema! </strong>
              Comunicate con nosotros y lo volvemos a hacer especialmente para vos.
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <Calculator size={32} />
            </div>

            <h3>¿Cómo calculamos el precio?</h3>

            <p>
              El precio final se compone de dos elementos:
            </p>

            <ol>
              <li>
                <strong>Costo materia prima × 3</strong>: Este es nuestro precio base.
              </li>
              <li>
                <strong>Adicional por dificultad del diseño</strong>: Se suma un porcentaje según la complejidad.
              </li>
            </ol>

            <div className="pricing-breakdown">
              <h4>Porcentajes según dificultad</h4>
              <div className="pricing-item">
                <span className="difficulty easy">Fácil</span>
                <span className="percentage">+10%</span>
              </div>
              <div className="pricing-item">
                <span className="difficulty medium">Media</span>
                <span className="percentage">+15%</span>
              </div>
              <div className="pricing-item">
                <span className="difficulty hard">Difícil</span>
                <span className="percentage">+20%</span>
              </div>
            </div>

            <div className="example">
              <h4>Ejemplo</h4>
              <p>
                Si la materia prima cuesta <strong>$20.000</strong> y el diseño es de dificultad <span className="difficulty medium">media</span>:
              </p>
              <ul>
                <li>Base: $20.000 × 3 = $60.000</li>
                <li>Adicional por dificultad media (15%): $9.000</li>
                <li><strong>Total final: $69.000</strong></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="info-footer">
          <p>
            Contactame via Whatsapp y charlamos sobre la idea y las posibilidad que existen para obtener tu Luzé Rugs.
          </p>
          <a
            href="https://wa.me/543498528087?text=Hola Luzé! me gustaría conocer más sobre sus alfombras artesanales."
            className="btn btn-secondary btn-large"
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