<!doctype html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title>message.js</title>
  
  <link rel="stylesheet" href="assets/css/dist/message.min.css">
</head>
<body>

<ms-box data-success data-show-text>
  <ms-box-icon></ms-box-icon>
  <ms-box-text>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Aliquam sed odio sapien. Maecenas vel arcu eu nibh fermentum pellentesque.</p>
    <p>Pellentesque semper eu erat vel sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras vestibulum ipsum non sem volutpat feugiat. Morbi eu ornare ex. Cras euismod volutpat porta. Maecenas eu nibh quis arcu aliquet pharetra. Duis non erat consequat ex sollicitudin fringilla ut quis magna.
    Donec non commodo nibh.</p>
  </ms-box-text>
  <ms-close-button></ms-close-button>
</ms-box>

<button>Trigger</button>

<script src="assets/js/dist/message.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
	affiliateBeautifier.init({
		selector: 'a'
    });
});
kirbyRatings.init('http://www.vardagsfinans.se');
</script>

</body>
</html>