import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <main class="main">
                <header class="header">
                    <img class="header__logo" src="<%=require('./images/Vector-logo.svg')%>" alt="Logo del Proyecto" />
                    <img class="header__line" src="<%=require('./images/Line.png')%>" alt="Linea detalle del Logo" />
                </header>

                <div class="buttons">
                    <div class="buttons buttons__avatar">
                        <buttom class="buttons__edit">
                            <img class="buttom__edit_pencil" src="<%=require('./images/Vector-pencil2.svg')%>" alt="icono de pencil" />
                        </buttom>
                        <img class="buttons__image" src="<%=require('./images/image.jpg')%>" alt="Imagel de Jacques Cousteau" />
                    </div>

                    <div class="buttons buttons__intro">
                        <h2 class="buttons__intro buttons__name">Jacques Cousteau</h2>

                        <button class="buttons__item buttons__item_index_profile">
                            <img src="<%=require('./images/Vector-pencil2.svg')%>" alt="icono de pencil" />
                        </button>

                        <p class="buttons__intro buttons__explorer">Explorer</p>
                    </div>

                    <button class="buttons__item buttons__item_index_add-card">
                        <img src="<%=require('./images/Vector-suma-agregar.svg')%>" alt="ícono de mas para agregar tarjetas" />
                    </button>

                    <div class="buttons__modal"></div>
                </div>

                <div class="popup popup_edit-profile">
                    <div class="popup__overlay"></div>
                    <div class="popup__content">
                        <div class="popup__close-button">
                            <img src="<%=require('./images/Close-Icon.svg')%>" alt="ícono de cerrar" />
                        </div>

                        <form class="form" novalidate>
                            <h2 class="form__title">Editar perfil</h2>

                            <label class="form__label" for="user-name">
                                <input type="text" class="form__input" id="user-name" name="name" placeholder="Nuevo usuario" value="" minlength="2" maxlength="40" required />
                                <span class="form__error form__error_type"></span>
                            </label>

                            <label class="form__label" for="activity-input">
                                <input type="text" class="form__input" id="activity-input" name="activity" placeholder="Actividad" value="" minlength="2" maxlength="200" required />
                                <span class="form__error form__error_type"></span>
                            </label>

                            <input type="submit" class="form__submit button_inactive" value="Guardar" />
                        </form>
                    </div>
                </div>

                <div class="popup popup_content-addcard">
                    <div class="popup__overlay"></div>
                    <div class="popup__content">
                        <div class="popup__close-button">
                            <img src="<%=require('./images/Close-Icon.svg')%>" alt="ícono de cerrar ventana" />
                        </div>

                        <form class="form" novalidate>
                            <h2 class="form__title">Nuvo Lugar</h2>

                            <label class="form__label" for="place-input">
                                <input type="text" class="form__input" id="place-input" name="newplace" placeholder="Nombre del Lugar" value="" minlength="2" maxlength="30" required />
                                <span class="form__error form__error_type"> </span>
                            </label>

                            <label class="form__label" for="url-input">
                                <input type="url" class="form__input" id="url-input" name="enlace" placeholder="Url de la imagen" value="" required />
                                <span class="form__error form__error_type"></span>
                            </label>

                            <input type="submit" class="form__submit button_inactive" value="Crear" />
                        </form>
                    </div>
                </div>

                <div class="popup popup_delete-card">
                    <div class="popup__overlay"></div>
                    <div class="popup__content">
                        <div class="popup__close-button">
                            <img src="<%=require('./images/Close-Icon.svg')%>" alt="ícono de cerrar ventana" />
                        </div>

                        <form class="form" novalidate>
                            <h2 class="form__title form__title-delete">¿estás seguro...?</h2>
                            <div class="form__buttom">
                                <input type="submit" class="form__submit form__submit_confirmation" value="Sí" />
                            </div>
                        </form>
                    </div>
                </div>

                <div class="popup popup_avatar">
                    <div class="popup__overlay"></div>
                    <div class="popup__content">
                        <div class="popup__close-button">
                            <img src="<%=require('./images/Close-Icon.svg')%>" alt="ícono de cerrar ventana" />
                        </div>

                        <form class="form" novalidate>
                            <h2 class="form__title">Cambiar foto de perfil</h2>

                            <label class="form__label" for="avatar-input">
                                <input type="url" class="form__input" id="avatar-input" name="avatar" placeholder="Url de la nueva foto" value="" minlength="2" maxlength="100" required />
                                <span class="form__error form__error_type"> </span>
                            </label>
                            <input type="submit" class="form__submit form__submit_photo button_inactive" value="Actualizar" />
                        </form>
                    </div>
                </div>

                <div class="popup popup_content-image">
                    <div class="popup__overlay"></div>
                    <div class="popup__content popup__content_select">
                        <div class="popup__close-button popup__close-buttons">
                            <img src="<%=require('./images/Close-Icon.svg')%>" alt="ícono de cerrar ventana de imagen" />
                        </div>
                        <img src="#" alt="Imagen seleccionada" class="popup__image" id="popup__image" />
                        <p class="popup__title"></p>
                    </div>
                </div>

                <div class="cards"></div>

                <template id="newElement">
                    <div class="cards__element" id="cards__element_trastId">
                        <div class="cards__element_trast">
                            <img src="<%=require('./images/Group__reciclaje.svg')%>" alt="Icono de reciclaje" />
                        </div>
                        <img class="cards__element_image" src="#" alt="imagen de Vanoise National" />
                        <div class="cards__element_item">
                            <h2 class="cards__element_itemTitle"></h2>
                            <div class="cards__element_like">
                                <img class="cards__element_itemImage" src="<%=require('./images/Vector-corazon.svg')%>" alt="incono de me gusta" />
                                <h3 class="countlike"></h3>
                            </div>
                        </div>
                    </div>
                </template>

                <footer class="footer">
                    <p class="footer__copyright">&#169; 2024 Around The U.S. - Antonio Marmolejo</p>
                </footer>
            </main>
        </>
    );
}

export default App;
