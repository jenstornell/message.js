class MessageBase {
  addTemplate() {
    if(!this.$(`#message-template`)) {
      document.body.insertAdjacentHTML('beforeend', this.template());
    }
  }

  init() {
    this.addTemplate();
    this.events();
  }

  actionOpen(type, options) {
    window.clearTimeout(this.timeout);
    
    this.setOptions(type, options);
    this.setOpen();
    this.setType();
    this.setAutoHide();
    this.setOpenText();
    this.setText();
    this.autohide();
    this.setOpenTextTimeout();
  }

  setOptions(type, options) {
    if(type === false) options.type = 'error';
    if(type === true) options.type = 'success';
    else options.type = type;
    this.o = Object.assign({}, this.defaults(type), options);
  }

  setOpen() {
    this.$('ms-box').dataset.open = '';
  }

  setType() {
    this.$('ms-box').dataset.type = this.o.type;
  }

  setAutoHide() {
    if(this.o.autohide) {
      this.$('ms-box').dataset.autohide = '';
    } else {
      delete this.$('ms-box').dataset.autohide;
    }
  }

  setOpenText() {
    if(this.o.openText && typeof this.o.text !== 'undefined') {
      this.$('ms-box').dataset.openText = '';
    } else {
      delete this.$('ms-box').dataset.openText;
    }
  }

  setOpenTextTimeout() {
    if(this.o.openText) {
      this.openText();
    }
  }

  $(selector) {
    return document.querySelector(selector);
  }

  events() {
    this.onOpenTextClick();
    this.onCloseMessageClick();
  }

  // EVENTS

  onOpenTextClick() {
    this.$('ms-box-icon').addEventListener('click', (e) => {
      if(this.$('ms-box-text').innerHTML === '') return;
      this.openText();
    });
  }

  onCloseMessageClick() {
    this.$('ms-close-button').addEventListener('click', (e) => {
      this.closeMessage();
    });
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

  setText() {
    if(typeof this.o.text !== 'undefined') {
      this.$('ms-box-text').innerHTML = this.o.text;
    } else {
      this.$('ms-box-text').innerHTML = '';
    }
  }

  has(data) {
    return (typeof data !== 'undefined');
  }

  autohide() {
    if(this.o.autohide && !this.has(this.$('ms-box').dataset.openText)) {
      this.timeout = window.setTimeout(() => {
        delete this.$('ms-box').dataset.open;
      }, 1500);
    }
  }

  openText() {
    window.clearTimeout(this.timeout);
    if(typeof this.o.text !== 'undefined') {
      this.$('ms-box').dataset.openText = '';
    }
    delete this.$('ms-box').dataset.autohide;
  }

  closeMessage() {
    delete this.$('ms-box').dataset.open;
    delete this.$('ms-box').dataset.openText;
  }
}