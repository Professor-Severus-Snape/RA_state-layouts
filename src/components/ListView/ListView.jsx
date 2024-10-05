import ShopItem from '../ShopItem/ShopItem';
import './listView.css';

// компонент-родитель(ul) для карточек ShopItem(li) <- список:
const ListView = ({ items }) => {
  return (
    <ul className="list-view">
      {items.map((item, index) => (
        <ShopItem key={index} data={item} /> // ключ не передается в пропсах!!!
      ))}
    </ul>
  );
};

export default ListView;
