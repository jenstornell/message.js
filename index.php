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

<script src="assets/js/dist/message.js?t=<?= time(); ?>"></script>
<script>
let message = new Message();
message.init();

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button').addEventListener('click', (e) => {
    message.open({
      text: 'When close or autohide, reset data attributes like options',
      type: 'error',
      autohide: true,
      openText: false
    });
  });
});
</script>

</body>
</html>