class Bubble extends HTMLElement {
  #shadow;
  constructor() {
    self = super();
      console.log(self.children);
    this.#shadow = this.attachShadow({ mode: 'closed' });
    this.#render();
  }
  async #render() {
    const bubbleCSS = document.createElement("link");
    bubbleCSS.setAttribute("href", new URL("bubble.css", import.meta.url));
    bubbleCSS.setAttribute("rel","stylesheet");
    bubbleCSS.setAttribute("type","text/css");
    this.#shadow.appendChild(bubbleCSS);
    const bubble = document.createElement("div");
    bubble.setAttribute("class","bubble");
    for (let item of self.children) {
      bubble.insertAdjacentHTML("beforeend", item.outerHTML);
    }
    this.#shadow.appendChild(bubble);
    const pointer = document.createElement("div");
    pointer.setAttribute("class","pointer");
    this.#shadow.appendChild(pointer);

    const bubblebl = document.createElement("div");
    bubblebl.setAttribute("class","bubble blurred");
    this.#shadow.appendChild(bubblebl);
    const pointerbl = document.createElement("div");
    pointerbl.setAttribute("class","pointer blurred");
    this.#shadow.appendChild(pointerbl);
    this.#defineCallBacks();
    return;
  }
  #defineCallBacks(){
    return;
  }
}

export {Bubble}
