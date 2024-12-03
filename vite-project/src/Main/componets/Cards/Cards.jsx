import reciclaje from "../../../images/Group__reciclaje.svg";
import corazon from "../../../images/Vector-corazon.svg";

export default function Cards({ card, onLikeToggle }) {
    const { isLiked, name, link } = card;

    return (
        <div className="cards">
            <div className="cards__element" id="cards__element_trastId">
                <div className="cards__element_trast">
                    <img src={reciclaje} alt="Icono de reciclaje" />
                </div>
                <img className="cards__element_image" src={link} alt="Imagen Seleccionada para mostrarse" />
                <div className="cards__element_item">
                    <h2 className="cards__element_itemTitle">{name}</h2>
                    <div className="cards__element_like">
                        <img
                            className="cards__element_itemImage"
                            src={corazon}
                            onClick={() => onLikeToggle && onLikeToggle(card)}
                            alt="incono de me gusta"
                        />
                        <h3 className="countlike"></h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
