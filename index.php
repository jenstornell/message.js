<!doctype html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title>message.js</title>
  
  <link rel="stylesheet" href="assets/css/dist/message.min.css?t=<?= time(); ?>">
</head>
<body data-message-init="true">

<div class="test"></div>

<button>Trigger</button>
<button class="two">Two</button>
<button class="three">three</button>

<script src="assets/js/dist/message.js?t=<?= time(); ?>"></script>
<script>
document.querySelector('button').addEventListener('click', (e) => {
  message.open('success', {
    autohide: true
  });
});

document.querySelector('.two').addEventListener('click', (e) => {
  message.open('error', {
    text: 'Short text',
    autohide: true,
    openText: true
  });
});

document.querySelector('.three').addEventListener('click', (e) => {
  message.open('error', {
    autohide: false,
    openText: false
  });
});
</script>

</body>
</html>