class Avatar extends HTMLElement {
  #shadow;
  constructor() {
    super();
    this.#shadow = this.attachShadow({ mode: 'closed' });
    this.#render();
  }
  async #render() {
    const bubbleCSS = document.createElement("link");
    bubbleCSS.setAttribute("href","avatar.css");
    bubbleCSS.setAttribute("rel","stylesheet");
    bubbleCSS.setAttribute("type","text/css");
    this.#shadow.appendChild(bubbleCSS);
    const img = document.createElement("img");
    img.setAttribute("src", this.getAttribute("src"));
    this.#shadow.appendChild(img);
    this.#defineCallBacks();
    return;
  }
  #defineCallBacks(){
    return;
  }
}

export {Avatar}
