import { MessageSquareHeart } from 'lucide-react';

const CarpetCard = ({ carpet }) => {
  return (
    <div className={`carpet-card ${!carpet.available ? 'unavailable' : ''}`}>
      <div className="card-image">
        <img src={carpet.image} alt={carpet.name} />
        <div className={`availability-badge ${carpet.available ? 'available' : 'not-available'}`}>
          {carpet.available ? 'Disponible' : 'Agotado'}
        </div>
      </div>

      <div className="card-content">
        <div className="card-header">
          <h3 className="carpet-name">{carpet.name}</h3>
          <span className="category-tag">{carpet.category}</span>
        </div>

        <p className="carpet-description">{carpet.description}</p>

        <div className="card-footer">
          <span className="price">${carpet.price}</span>
          {carpet.available ? (
            <a
              href={`https://wa.me/543498528087?text=Hola Luzé! estoy interesado en la alfombra ${carpet.name}.`}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enviar mensaje por WhatsApp"
            >
              Consultar
              <MessageSquareHeart size={18} style={{ marginLeft: '6px' }} />
            </a>
          ) : (
            <span className="btn btn-disabled" aria-disabled="true">
              No disponible
            </span>
          )}
        </div>

      </div>
    </div>
  );
};

export default CarpetCard;