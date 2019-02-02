<!doctype html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title>message.js</title>
  
  <link rel="stylesheet" href="assets/css/dist/message.min.css?t=<?= time(); ?>">
</head>
<body>

<div class="test"></div>

<button>Trigger</button>
<button class="two">Two</button>
<button class="three">three</button>

<script src="assets/js/dist/message.js?t=<?= time(); ?>"></script>
<script>
let message = new Message();
message.init();

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button').addEventListener('click', (e) => {
    message.open({
      text: 'On a success message, just a check-icon is visible by default and autohides after a time interval. When clicking the icon, you can still see the text message if any.',
      type: 'success',
      autohide: false,
      openText: true
    });
  });

  document.querySelector('.two').addEventListener('click', (e) => {
    message.open({
      text: 'Short text',
      type: 'error',
      autohide: false,
      openText: true
    });
  });

  document.querySelector('.three').addEventListener('click', (e) => {
    message.open({
      type: 'error',
      autohide: false,
      openText: false
    });
  });
});
</script>

</body>
</html>