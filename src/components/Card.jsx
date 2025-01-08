import reciclaje from "../images/Group__reciclaje.svg";
import corazon from "../images/Vector-corazon.svg";
import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";


export default function Cards({ card, onImagenClick, onRecycleClick, onCardLike }) {
    const { name, link } = card;
    const { currentUser } = useContext(CurrentUserContext);
    const [isLiked, setisLiked] = useState(card.likes.some((user) => user._id === currentUser._id));
    useEffect(() => {
        setisLiked(card.likes.some((user) => user._id === currentUser._id));
    }, [card.likes])


    const cardLikeButtonClassName = `cards__element_itemImage ${isLiked ? 'cards__like_active' : ''}`

    const handleLikeClick = () => {
        setisLiked(!isLiked);
        onCardLike(card);
    };

    const handleDeleteClick = () => {
        onRecycleClick(card);
    };

    return (
        <div className="cards__element" id="cards__element_trastId">
            <div className="cards__element_trast">
                <img
                    src={reciclaje}
                    alt="Icono de reciclaje"
                    onClick={handleDeleteClick}
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
                        className={cardLikeButtonClassName}
                        src={corazon}
                        onClick={handleLikeClick}
                        alt="incono de me gusta"
                    />
                    <h3 className="countlike">{card.likes.length || 0}</h3>
                </div>
            </div>
        </div>

    );
}
