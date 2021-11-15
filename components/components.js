
/*PRIMER COMPONENTE CARD* */

class Card extends HTMLElement{
    constructor(){
        super();

        const template = document.createElement('template');

        template.innerHTML =
       `
       <head>
       <link rel="stylesheet" href="./css/card.css">
       </head>
      <style>
      
      </style>
       
       
       <div class="card">

        <img class="card_img" src="${this.getAttribute('source')}">
        <h2 class="card_title">${this.getAttribute('title')}</h2>
        <p>
        Este es un ejemplo sobre un parrafo 
        aqui se tiene que escribir una breve
       descripcion sobre lo que trata la card
       </p>

       <button class="card_btn" onclick="${this.getAttribute('clicked')}">${this.getAttribute('btn-value')}</button>


        </div>`;
    
        const ShadowRoot = this.attachShadow({mode:'open'});

        ShadowRoot.appendChild(template.content);
    }
}

window.customElements.define('card-template',Card);