class Option {
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }
  createDiv(text) {
    let elem = document.createElement('div');
    document.body.appendChild(elem);
    elem.textContent = text;

    let params = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
    elem.style.cssText = params;
  }
}

const item = new Option(250, 550, 'red', 18, 'center');

item.createDiv('hello world');