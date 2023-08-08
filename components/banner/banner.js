class Banner extends HTMLElement {
  #shadow;
  constructor() {
    self = super();
      console.log(self.children);
    this.#shadow = this.attachShadow({ mode: 'closed' });
    this.#render();
  }
  async #render() {
    const bannerCSS = document.createElement("link");
    bannerCSS.setAttribute("href", new URL("banner.css", import.meta.url));
    bannerCSS.setAttribute("rel","stylesheet");
    bannerCSS.setAttribute("type","text/css");
    this.#shadow.appendChild(bannerCSS);

    const header = document.createElement("div");
    header.setAttribute("class", "bannerbg");
    this.#shadow.appendChild(header);

    const logo = document.createElement("img");
    logo.setAttribute("src", new URL("logowhite.png", import.meta.url));
    header.appendChild(logo);

    const title = document.createElement("p")
    title.setAttribute("class", "title");
    title.innerHTML = this.getAttribute("title");
    header.appendChild(title);

    this.#defineCallBacks();
    return;
  }
  #defineCallBacks(){
    return;
  }
}

export {Banner}
