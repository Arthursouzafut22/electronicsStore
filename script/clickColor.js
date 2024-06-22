
import { btnColor,cores } from "./selectors.js";

export default function clickColor(event) {
    const target = event.target.querySelector('.seta');
    target.classList.toggle('ativo');
 
    return cores.classList.toggle('ativo');
 }
 
 
 btnColor.addEventListener('click',clickColor)
 