import modals from "./modules/modals";
import sliders from "./modules/sliders";

import accordion from "./modules/accordion";

window.addEventListener('DOMContentLoaded', () =>{
    'use strict';

    modals ();
    sliders ('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders ('.main-slider-item', 'vertical');

    accordion ('.accordion-heading');

});