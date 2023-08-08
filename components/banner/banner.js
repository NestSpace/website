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
    const bannerHTML = await fetch(new URL("banner.html", import.meta.url));
    this.#shadow.innerHTML += await bannerHTML.text();
    const title = document.createElement("p")
    title.setAttribute("class", "title");
    title.innerHTML = this.getAttribute("title");
    const titleli = document.createElement("li");
    titleli.setAttribute("class", "push");
    titleli.appendChild(title);
    this.#shadow.querySelector("ul").appendChild(titleli);
    this.#defineCallBacks();
    return;
  }
  #defineCallBacks(){
    return;
  }
}

export {Banner}
