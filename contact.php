
<!DOCTYPE html>
<html>
    <head>
      <link rel="stylesheet" href="assets/css/contact.css">
      <script src="script.js" defer></script>
      <title>Boulangerie V.A.V</title>
    </head>
    <body>
    <nav class="navbar">
          <a href="index.html" class="navbar-logo">
            <img src="assets/sprites/iphone.png" width="128" height="128" alt="logo"></a>
            <div class="brand-title">Boulangerie de la Mairie V.A.V</div>
            <a href="#" class="toggle-button">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </a>
            <div class="navbar-links">
              <ul>
                <li><a href="index.html">Accueil</a></li>
                <div class="dropdown">
                 
                  <li><a href="#">Gateaux sur commande</a></li>
                  <div class="dropdown-content">
                    <li><a href="gateauChiffre.php">Gateaux chiffre</a></li>
                    <li><a href="gateauBapteme.php">Gateaux bapteme</a></li>
                    <li><a href="gateauAnniversaire.php">Gateaux Anniversaire</a></li>
                    <li><a href="autres.php">Autres Gateaux</a></li>
                  </div>
              </div>
                <li><a href="ImpressionAlimentaire.php">Impression alimentaire</a></li>
                <li><a href="contact.php">Contact</a></li>
                
              </ul>
              
            </div>
          </nav>
      <div id="image-container"></div>

      <div class = "wrapper1">
    <div class=" wrapper">       
        <div class="contact">
            
              <address>
                <h2> <em>06 35 59 21 36</h2>
                <h2> 46 Rue Albert Thomas</h2>
                <h2> 94500 Champigny-sur-Marne</em><h2>
                </address>            
             </div>
        </div> 
        <div>
         
    <?php require "footer.html"?>
    </body>
</html>


