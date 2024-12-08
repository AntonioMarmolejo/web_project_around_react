# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Tripleten web_project_around_react

## DESCRIPCIÓN Y FUNCIONALIDAD

Es una página hecha con el propósito de mostrar una interfaz amigable para los usuarios con la idea de que puedan interactuar con la misma haciendo click en los botones respectivos, se presenta el perfil del usuario con el nombre y la actividad a la que se dedica actualmente. Si el usuario quiere realizar algún cambio en el perfil, solo debe seleccionar el boton que está diseñado específicamente para eso, entonces se abrirá el formulario donde se le pedirá los datos al usuario.

Las funcionalidades pricipales de esta página son el boton de editar **perfil** que nos permite abrir el formulario, dentro de este bloque también tenemos el otro boton interactivo que nos permite cerrar el formulario, también en el mismo bloque se encuentra el formulario, el cual contiene ademas los 2 **input** donde el usuario ingresará sus datos.

También en bloque del formulario tenemos el boton **guardar** datos el cual nos sirve para almacenar los datos y remplazarlos en los bloques conrrespondientes de nuestra página web, dando lugar a una pagina de perfil de usuario totalmente personalizable

## CARACTERÍSTICAS

La página se ha separado por componentes debido a la sintaxis de react, el primer conponente se llama **Main.jsx**, dentro de este componente esta anidado el componente **App**, desde aquí se pintará o renderizará los demas componentes de la página espectivamente, dentro del componente **App.jsx** se encuentran anidados los tres componentes principales que son necesarios para esta página y estos son, **Header**, **Main**, **Footer** los cuales se encargan de renderizar cada uno de los elementos de la página, dando como resultado una interfaz de usuario muy sencilla y fácil de usar.

## PROPÓSITO

El propósito principal de este proyecto es fortalecer el conocimiento en JavaScirp y React que hagamos un recorderis de todo lo que hemos aprendido hasta ahora. Interactuar con los botones y ver cómo se comportan, poder ver los cambios que se realizan en la pagina debido a estos botones, permitirle a los usuarios tener una experiencia agradable de interacción con esta página donde éste pueda agregar las imágenes que son se su interés y personalizarlas, darle me gusta o borrar las que no son de su agrado, así mismo explorar las imágenes más a detallle al darle click a cada una de ellas.

## TÉCNICAS Y TECNOLOGÍAS UTILIZADAS

1. Para el desarrollo de esta página se utilizó la metodología BEN para separar los bloques de sus elementos y los modificadore, también la misma metodología para organizar el sistema de archivos con el que se trabajó.

2. Para crear el proyecto se utilizó servidor de desarrollo local **vite** para utilizar la plantilla de creación de poryecto predeterminada.

3. Se creó el directorio styles y dentro de este un archivo **index.css** para importar dentro del archivo todos los estilos de la página.

4. La página por defecto se la dejó en el idioma español.

5. Para las animaciones se utilizaron los _@keyframes_ y para que se adapte a los diferentes dispositivos se utilizaron _mediaqueries_ para las resoluciones **1280px, 888px, 768px, 600px, 369px, 909px** se adaptará correctamente.

6. Para que los enlaces resalten se utilizo el :hover y se le dió una animacíon para que sea más interactiva.

7. Se utilizó como herramienta principal para la programación a _VISUAL STUDIO CODE_ desde donde se realizó todo

8. Extención para identar el código se utilizó _Prettier - Code formatter, Prettier More_

9. Extención para ver los cambios en vivo se utilizó el servidor local que nos ofrece vite

10. Extención Para detectar errores más rápido se utilizó _Error Lens_ instalada en Visual Studio Code

11. Como navegador principal utilizamos _Google Chrome_ para ejecutar la página y realizar correcciónes

12. Como fuentes se utilizó la tipográfica gratuita "Inter" de Figma, de los cuales se tomaron en cuenta los font-weight de 400, 600, 900

13. Se utilizaron _varible_ declarándolas con _Let_ todas a quellas variables que en algun momento van a cambiar su valor y para las constantes se las declaró como _Const_

14. Se utilizaron las funciones y los eventos para detectar cuando el usuario hace click en algun boton de la página para provocar un evento

15. Se utilizo _displey: none_ para esconder los formularios y luego se utilizó un _keyframe_ para crear un animación que nos permita pasar de _display: none_ a _display: flex_ para que las ventanas se muestres de una forma fluida

16. En este archivo de JavaScript hemos creado las primera dos función _showInputError()_ y _hideInputError()_ una que nos servirá para mostrar el mensaje de error y la otra para ocultarlo.

17. Luego hemos creado la función _checkInputValidity()_ la cual va a validar cada uno de los campos de entrada si la propiedad valid de ese capo es _false_ entonces esta función llamará a la funcion _showInputError()_ pra mostrar el mensaje de error y si es _true_ entonces esta función llamará a la función _hideInputError()_ para ocultarlos.

18. Se ha creado la función _hasInvalidInput()_ la cual va a iterar entre varios campos de un formulario y ver si al menos uno de ellos es inválido si al menos uno de ellos e inválido devolverá _true_ esta función la vamos a llamar desde la función _toggleButtonState()_ la cual desactiva o activa los botones de guardar dependiendo de si los campos de entrada están validados todos o al menos uno no está validado.

19. Desde la función _setEventListeners()_ se llama a las tres funciones _toggleButtonState(), checkInputValidity()_ Esta función crea una lista de todos los inpus y de todos los botones. Luego itera sobre estos campos llamando a las funciones anteriores

20. Luego creamos a la última función _enableValidation()_ la cual llama a _setEventListeners()_ con todas las demas funciones que vienen incluidas. Esto nos permite crear una experiencia de usuario agradable e interactiva.

21. Al incorporar react a nuestro proyecto y emigrar todo el código a react, hemos separado nuestro código en componentes de esta manera tenemos el directorio componets y dentro de este se encuentran: **EditAvatar.jsx**, **Cards.jsx**, **EditProfile.jsx**, **Footer.jsx**, **Header.jsx**, **ImagePopup.jsx**, **Main.jsx**, **NewCard.jsx**, **Popup.jsx**, **RemoveCard.jsx**.

22. En el archivo **Main.jsx**, se han importado los archivos **Popup.jsx**, **EditProfile.jsx**, **EditAvatar.jsx**, **NewCard.jsx**, **Cards.jsx**, **ImagePopup.jsx**, **RemoveCard.jsx** que no los necesarios para formar el cuerpo de la página o el **Main**.

23. En el archivo **App** hemos importado los componentes **Header**, **Main**, con todos sus componentes y **Footer**

24. En el archivo **main.jsx** se importa el componente **App** y de esta forma se crea la página de nuestro proyecto.

## ENLACES

[VISITA EL SITIO] ("Around The US" )

[TRIPLETEN] ("Tripleten" https://tripleten.com/es-ecu/)

[Unsplash] ("Banco de imágenes gratis"https://unsplash.com/es)
