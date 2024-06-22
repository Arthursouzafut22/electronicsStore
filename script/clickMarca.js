
import { btnMarca,marcas } from "./selectors.js";

export default function clickMarca(event) {
    const target = event.target.querySelector('.seta');
    target.classList.toggle('ativo');
 
    return marcas.classList.toggle('ativo');
 
 }
 
 
 btnMarca.addEventListener('click', clickMarca);