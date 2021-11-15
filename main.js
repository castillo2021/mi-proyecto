
class HolaMundo extends HTMLElement{

    
  constructor(){
    super();
     this.name = this.getAttribute('text');
     
    const template = document.createElement('template');

    template.innerHTML = `
    <head>
    <link rel="stylesheet" href="css/style.css">

    </head>
    
    <style>
   
      h1{
        ${this.getAttribute('css')}
      }
   
    
    </style>
    <h1 class="${this.getAttribute('classc')}">${this.name}</h1>
    
    `;
    
    const ShadowRoot = this.attachShadow({mode:'open'});


    ShadowRoot.appendChild(template.content);
  }

}




window.customElements.define('hola-mundo',HolaMundo);