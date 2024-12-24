import reciclaje from "../../images/Group__reciclaje.svg";
import corazon from "../../images/Vector-corazon.svg";

export default function Cards({ card, onImagenClick, onRecycleClick, onLikeToggle }) {
    const { isLiked, name, link } = card;
    const cardLikeButtonClassName = `${isLiked ? 'cards__like_active' : ''}`

    return (
        <div className="cards__element" id="cards__element_trastId">
            <div className="cards__element_trast">
                <img
                    src={reciclaje}
                    alt="Icono de reciclaje"
                    onClick={() => onRecycleClick && onRecycleClick(card)}
                />
            </div>
            <img
                className="cards__element_image"
                src={card.link}
                alt={card.name}
                onClick={() => onImagenClick(card)}
            />
            <div className="cards__element_item">
                <h2 className="cards__element_itemTitle">{name}</h2>
                <div className="cards__element_like">
                    <img
                        className={`cards__element_itemImage`}
                        src={corazon}
                        onClick={() => cardLikeButtonClassName}
                        alt="incono de me gusta"
                    />
                    <h3 className="countlike">{card.likes?.lenght || 0}</h3>
                </div>
            </div>
        </div>

    );
}
