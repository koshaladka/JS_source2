import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import chekTestInputs from "./modules/chekTestInputs";

import accordion from "./modules/accordion";
import burger from "./modules/burger";
import drop from "./modules/drop";
import showMoreStyles from "./modules/showMoreStyles";


window.addEventListener('DOMContentLoaded', () =>{
    'use strict';

    modals ();
    sliders ('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders ('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    chekTestInputs('[name="name"]');
    chekTestInputs('[name="message"]');
    showMoreStyles ('.button-styles', '#styles .row' );


    accordion ('.accordion-heading');
    burger ('.burger-menu', '.burger');
    drop();

});