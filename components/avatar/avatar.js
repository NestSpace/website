class Avatar extends HTMLElement {
  #shadow;
  constructor() {
    super();
    this.#shadow = this.attachShadow({ mode: 'closed' });
    this.#render();
  }
  async #render() {
    const avatarCSS = document.createElement("link");
    avatarCSS.setAttribute("href", new URL("avatar.css", import.meta.url));
    avatarCSS.setAttribute("rel","stylesheet");
    avatarCSS.setAttribute("type","text/css");
    this.#shadow.appendChild(avatarCSS);
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
