class Control {
  public node: HTMLElement;

  constructor(parentNode: HTMLElement | null, tagName: string = 'div', className: string = '') {
    const el = document.createElement(tagName);
    el.className = className;
    if (parentNode) {
      parentNode.append(el);
    }
    this.node = el;
  }
}

export default Control;
