import ShopCard from '../ShopCard/ShopCard';
import './cardsView.css';

// компонент-родитель(ul) для карточек ShopCard(li) <- модульная сетка:
const CardsView = ({ cards }) => {
  return (
    <ul className="cards-view">
      {cards.map((card, index) => (
        <ShopCard key={index} data={card} /> // ключ не передается в пропсах!!!
      ))}
    </ul>
  );
};

export default CardsView;
