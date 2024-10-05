import './iconSwitch.css';

// компонент иконки отображения товаров на странице:
const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <img
      className="icon-switch"
      src={icon}
      alt="icon switch"
      // onClick={() => onSwitch(icon)} // вариант с аргументом
      onClick={onSwitch} // вариант без аргумента
    />
  );
};

export default IconSwitch;
