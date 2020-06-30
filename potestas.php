<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:cc="http://creativecommons.org/ns#"
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
      xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
>
<head>
    <title>Semantic maps - WoPoss</title>
    <script src="js/paths-collapse.js" type="text/javascript">/**/</script>
    <script src="js/language.js" type="text/javascript">/**/</script>
    <link type="text/css" rel="stylesheet" href="css/maps.css" />
    <?php include("ssi/head.html"); ?>


</head>
<body>
<?php include("ssi/menu.html"); ?>
<main>
    <h1>Semantic modal maps</h1>
    <p class="warning">This is a work in progress.</p>


    <?php include("ssi/instructions.html"); ?>

    <h2 id="potestas">POTESTAS</h2>

    <div class="map">


        <div class="languages">
            Select language:
            <a title="English version" data-idno="en" class="language">EN</a>
            <a title="Latin version" data-idno="la" class="language">LA</a>
        </div>

        <?php include("semantic-maps/legend.svg"); ?>
        <?php include("semantic-maps/potestas.svg"); ?>

    </div>

</main>
<?php include("ssi/footer.html"); ?>
</body>
</html>
