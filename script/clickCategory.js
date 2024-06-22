
import { btnCategory,category } from "./selectors.js";


export default function clickCategory(event) {
    const target = event.target.querySelector('.seta');
    target.classList.toggle('ativo');
     
    return category.classList.toggle('ativo');
 }
 
 
 btnCategory.addEventListener('click',clickCategory);
 