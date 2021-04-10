/*
 * Warning! Custom elements all need to have a hyphen in their
 * name.
 */

customElements.define('multi-col', class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'}).innerHTML = `
      <style>
        :host {
          display: flex;
        }
      </style>
      <slot></slot>`;
    }
  }
);

customElements.define('one-col', class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'}).innerHTML = `
      <style>
        :host {
          display: block; /* default is 'inline' */
          flex: 1;
        }
      </style>
      <slot></slot>`;
    }
  }
);
