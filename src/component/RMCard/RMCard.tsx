import './RMCard.css';

interface RMCard {
  id: number;
  image: string;
  name: string;
  status: string;
  specie: string;
  handleClick: (id: number) => void;
}

const RMCard = ({ id, image, name, specie, status, handleClick }: RMCard) => {
  return (
    <div className="card">
      <img src={image} className="cardImg" />
      <div className="Personalinfo">
        <div className="name">
          <h5>{name}</h5>
        </div>
        <div className="status--specie">
          <h5>{status}</h5>
          <h5>{specie}</h5>
        </div>
      </div>
      <div className="cardBtns">
        <button onClick={handleClick.bind(null, id)}>Delete</button>
      </div>
    </div>
  );
};

export default RMCard;
