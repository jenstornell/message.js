class message {
  static open(type = null, options = {}) {
    let base = new MessageBase();
    base.actionOpen(type, options);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if(
    typeof document.body.dataset.messageInit !== 'undefined' &&
    document.body.dataset.messageInit === 'false'
  ) return;

  let base = new MessageBase();
  base.init();
});