export default function Cards(props) {
    const { name, link, isLiked } = props.card;

    return (
        <div className="cards">
            <div className="cards__element" id="cards__element_trastId">
                <div className="cards__element_trast">
                    <img src="<%=require('./images/Group__reciclaje.svg')%>" alt="Icono de reciclaje" />
                </div>
                <img className="cards__element_image" src="#" alt="imagen de Vanoise National" />
                <div className="cards__element_item">
                    <h2 className="cards__element_itemTitle"></h2>
                    <div className="cards__element_like">
                        <img className="cards__element_itemImage" src="<%=require('./images/Vector-corazon.svg')%>" alt="incono de me gusta" />
                        <h3 className="countlike"></h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
