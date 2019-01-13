class Message {
  constructor() {

  }

  init() {
    this.addTemplate();
    this.events();
  }

  events() {
    document.addEventListener('DOMContentLoaded', () => {
      this.onOpenTextClick();
      this.onCloseMessageClick();
    });
  }


  // EVENTS

  onOpenTextClick() {
    document.querySelector('ms-box-icon').addEventListener('click', (e) => {
      this.openText();
    });
  }

  onCloseMessageClick() {
    document.querySelector('ms-close-button').addEventListener('click', (e) => {
      this.closeMessage();
    });
  }

  // ACTIONS

  // Open message box
  open(options) {
    this.o = Object.assign({}, this.defaults(), options);

    document.querySelector('ms-box').dataset.open = '';
    document.querySelector('ms-box').dataset.type = this.o.type;

    if(this.o.openText) {
      document.querySelector('ms-box').dataset.openText = '';
    } else {
      delete document.querySelector('ms-box').dataset.openText;
    }
    document.querySelector('ms-box-text').innerHTML = this.o.text;

    this.autohide();
    if(this.o.openText) {
      this.openText();
    }
  }

  autohide() {
    if(this.o.autohide) {
      window.setTimeout(() => {
        delete document.querySelector('ms-box').dataset.open;
      }, 1500);
    }
  }

  defaults(type) {
    if(type == 'success') {
      return {
        openText: false,
        autohide: true,
      };
    } else {
      return {
        openText: true,
        autohide: false,
      }
    }
  }

  openText() {
    document.querySelector('ms-box').dataset.openText = '';
  }

  closeMessage() {
    delete document.querySelector('ms-box').dataset.open;
  }

  addTemplate() {
    if(!document.querySelector(`#message-template`)) {
      document.body.insertAdjacentHTML('beforeend', this.template());
    }
  }

  template() {
    return `
      <ms-box>
        <ms-box-icon></ms-box-icon>
          <ms-box-text></ms-box-text>
        <ms-close-button></ms-close-button>
      </ms-box>
    `;
  }
}