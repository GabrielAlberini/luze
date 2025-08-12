import React, { useState } from 'react';
import { Palette, RefreshCw, Calculator } from 'lucide-react';

const InfoSection = () => {
  const [materialCost, setMaterialCost] = useState(20000);
  const [difficulty, setDifficulty] = useState('medium');

  const difficultyRates = {
    easy: 0.10,
    medium: 0.15,
    hard: 0.20,
  };

  const basePrice = materialCost * 3;
  const difficultyExtra = basePrice * difficultyRates[difficulty];
  const finalPrice = basePrice + difficultyExtra;

  return (
    <section className="info-section">
      <div className="container">
        <div className="section-header">
          <h2>¿Cómo trabajamos?</h2>
          <p>Te mostramos nuestro proceso artesanal y cómo calculamos el precio final de tu alfombra.</p>
        </div>

        <div className="info-grid">
          {/* Precio Personalizado */}
          <div className="info-card">
            <div className="info-icon">
              <Palette size={32} />
            </div>
            <h3>Precio a medida</h3>
            <p>
              Cada alfombra es única. El valor depende de la <strong>cantidad de colores</strong> y la <strong>complejidad del diseño</strong> que elijas.
            </p>
          </div>

          {/* Reproducimos Diseños */}
          <div className="info-card">
            <div className="info-icon">
              <RefreshCw size={32} />
            </div>
            <h3>Recreamos diseños</h3>
            <p>
              ¿Viste un modelo que te encantó pero ya fue vendido? <strong>¡Podemos hacerlo de nuevo!</strong> Lo adaptamos y producimos especialmente para vos.
            </p>
          </div>

          {/* Calculadora de precio */}
          <div className="info-card">
            <div className="info-icon">
              <Calculator size={32} />
            </div>
            <h3>Calculá tu presupuesto estimado</h3>
            <p>
              Usá esta herramienta para hacerte una idea del costo final. El valor real lo confirmaremos después de evaluar tu diseño.
            </p>

            {/* Input para costo materia prima */}
            <label>
              <strong>Costo de materia prima:</strong> ${materialCost.toLocaleString()}
              <input
                type="range"
                min="5000"
                max="100000"
                step="500"
                value={materialCost}
                onChange={(e) => setMaterialCost(Number(e.target.value))}
              />
            </label>

            {/* Selector de dificultad */}
            <label>
              <strong>Dificultad estimada del diseño:</strong>
              <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                <option value="easy">Fácil (+10%)</option>
                <option value="medium">Media (+15%)</option>
                <option value="hard">Difícil (+20%)</option>
              </select>
              <small> (La dificultad final la determinaremos nosotros a partir del diseño que nos compartas)</small>
            </label>

            {/* Resultado dinámico */}
            <div className="example">
              <h4>Presupuesto estimado</h4>
              <ul>
                <li><strong>Base:</strong> ${basePrice.toLocaleString()} (materia prima × 3)</li>
                <li><strong>Adicional por dificultad:</strong> ${difficultyExtra.toLocaleString()}</li>
                <li><strong>Total aproximado:</strong> ${finalPrice.toLocaleString()}</li>
              </ul>
              <small>Este valor es orientativo y puede variar según el diseño final.</small>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="info-footer">
          <p>
            Escribinos por WhatsApp y contanos tu idea. Podemos ayudarte a elegir colores, tamaños y diseño para que tu alfombra sea perfecta.
          </p>
          <a
            href={`https://wa.me/543498528087?text=Hola Luzé! Me gustaría conocer más sobre sus alfombras artesanales. Mi presupuesto estimado es de $${finalPrice.toLocaleString()}.`}
            className="btn btn-secondary btn-large"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enviar mensaje por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
