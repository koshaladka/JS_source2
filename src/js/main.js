import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";

import accordion from "./modules/accordion";
import burger from "./modules/burger";
import drop from "./modules/drop";


window.addEventListener('DOMContentLoaded', () =>{
    'use strict';

    modals ();
    sliders ('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders ('.main-slider-item', 'vertical');
    forms();

    accordion ('.accordion-heading');
    burger ('.burger-menu', '.burger');
    drop();

});