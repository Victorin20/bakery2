
<!DOCTYPE html>
<html>
    <head>
      <link rel="stylesheet" href="assets/css/styles.css">
      <script src="script.js" defer></script>
      <title>Boulangerie V.A.V</title>
    </head>
    <body>
        <main>
            
        <nav class="navbar">
          <a href="index.html" class="navbar-logo">
            <img src="assets/sprites/cake.png" width="128" height="128" alt="logo"></a>
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
        
    </div>

         <div id="image-container">      
        <img src="assets/sprites/printer.jpeg" class="printer"/>
        <img src="assets/sprites/img1.jpeg" class="img1"/>
        <img src="assets/sprites/img2.jpeg" class="img2"/>
        
          </div>

          <p class="text"><strong>Impression de la photo choisie sur une feuille en sucre avec de l'encre alimentaire, impression au millimètre près pour les dimensions données. La qualité de la photo imprimée dépend fortement de la définition de la photo fournie.</strong></p>
          
        </main>
    <?php require "footer.html"?>
    </body>
</html>

