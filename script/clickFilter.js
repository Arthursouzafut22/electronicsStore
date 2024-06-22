
import { btnFilter,modalFilter } from "./selectors.js";


export default function clickFilter(event) {
    const target = event.target.querySelector('.seta');
    target.classList.toggle('ativo');
 
    return modalFilter.classList.toggle('ativo')
 }
 
 
  btnFilter.addEventListener('click',clickFilter)