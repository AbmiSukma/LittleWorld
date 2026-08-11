import Card from '../cards/Card';
import './Pocket.css';

const Pocket = ({ pocket, index }) => {
  return (
    <div className={`ant-hole-container hole-${index}`}>
      {/* Tunnel connecting from above */}
      <div className="ant-tunnel"></div>
      
      {/* The main chamber for this pocket */}
      <div className="ant-chamber">
        <h2 className="chamber-title">{pocket.title}</h2>
        <div className="pocket-cards-grid">
          {pocket.cards.map((card, i) => (
            <Card key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pocket;
