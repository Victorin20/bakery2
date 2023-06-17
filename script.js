const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

var currentPage = window.location.pathname;
let path = "";
switch(currentPage)
{
    case '/projet/gateauChiffre.php':
      var imageFiles = ['20200613_180207.jpg', '20200824_131415.jpg', '20200915_184535.jpg', '20210228_152215.jpg', '20210305_171521.jpg', '20210307_082420.jpg', '20210314_101742.jpg', '20210314_105950.jpg', '20210502_080914.jpg', '20220521_142911.jpg', '20221020_170902.jpg', '20221117_132021.jpg', '20221118_183604.jpg', 
'20221231_161010.jpg', 'FB_IMG_1684401951537.jpg', 'IMG_20191008_175250859.jpg', 'IMG_20191026_120702655.jpg', 'Screenshot_20200907-235959_OK.jpg']
      path = "chiffre/";
      break;

    case '/projet/gateauBapteme.php':
      var imageFiles = ['20200216_125348.jpg', '20201018_081227.jpg', '20201023_085906.jpg', '20201024_120825.jpg', '20210131_085705.jpg', '20220521_124730.jpg', '20220525_160828.jpg', '20220604_161241.jpg', '20220709_133422.jpg', '20220730_122529.jpg', '20221119_160707.jpg', 'IMG_20190428_084729538.jpg', 'IMG_20191013_105203695.jpg']
      path = "bapteme/";
      break;
    
      
      
      case '/projet/gateauAnniversaire.php':
        var imageFiles = ['20200818_210252.jpg', '20201010_150029.jpg', '20201024_163242.jpg', '20210223_132350.jpg', '20210724_175935.jpg', '20210802_180928.jpg', '20210802_180942.jpg', '20210809_152428.jpg', '20220520_191513.jpg', '20220528_114557.jpg', '20220529_164626.jpg', '20220720_120057.jpg', '20220721_181951.jpg', '20221015_175812.jpg', '20221016_111404.jpg', '20221016_111410.jpg', '20221022_111446.jpg', '20221106_114653.jpg', '20221116_171816.jpg', '20221126_100146.jpg', '20221126_170940.jpg', '20221203_154914.jpg', '20221209_090002.jpg', '20221211_103519.jpg', '20221231_121431.jpg', '20230107_140509.jpg', '20230115_083803.jpg', '20230305_144250.jpg', 'FB_IMG_1670953491315.jpg', 'FB_IMG_1684401924215.jpg', 'FB_IMG_1684401970777.jpg', 'FB_IMG_1684402012455.jpg', 'IMG_20191227_160555153.jpg'];
        path ="anniversaire/"
        break;

      case '/projet/autres.php':
        var imageFiles = ['20200723_150810.jpg', '20200723_153604.jpg', '20201010_125243.jpg', '20201010_145233.jpg', '20201011_102918.jpg', '20201016_173036.jpg', '20201025_114908.jpg', '20201123_161116.jpg', '20201231_185633.jpg', '20210306_093300.jpg', '20210314_103446.jpg', '20210730_160416.jpg', '20210804_122357.jpg', '20210808_123530.jpg', '20210808_131032.jpg', '20220513_172112.jpg', '20220612_113842.jpg', '20220612_131039.jpg', '20220617_180049.jpg', '20220702_163146.jpg', '20220702_163846.jpg', '20220703_102228.jpg', '20220721_191040.jpg', '20220810_101905.jpg', '20220917_171605.jpg', '20220924_104005.jpg', '20220930_105928.jpg', '20221015_141553.jpg', '20221104_130802.jpg', '20221112_120445.jpg', '20221127_100007.jpg', '20221127_112046.jpg', '20221127_131245.jpg', 
        '20221210_113942.jpg', '20221211_102313.jpg', '20230114_170841.jpg', '20230221_105133.jpg', '20230304_111209.jpg', 'IMG_20190727_144006668.jpg', 'IMG_20191026_132035425.jpg'];
        path="autres/";
        break;

        case '/projet/':
        var imageFiles = ['20201018_081227.jpg', '20201023_085906.jpg', '20210314_103446.jpg', '20210314_105950.jpg', '20210808_131032.jpg', '20220513_172112.jpg', '20220521_142911.jpg', '20220612_113842.jpg', '20220612_131039.jpg', '20220617_180049.jpg', '20220702_163146.jpg', '20220703_102228.jpg', '20220827_092004.jpg', '20220924_104005.jpg', '20221016_111410.jpg', '20221115_132529.jpg', '20221116_171816.jpg', '20221117_132021.jpg', '20221126_100146.jpg', '20221127_112046.jpg', '20221127_131245.jpg', '20221211_112310.jpg', '20230107_113806.jpg', '20230114_170841.jpg', '20230305_144250.jpg', 'FB_IMG_1684401979327.jpg', 'FB_IMG_1684401992686.jpg', 'IMG_20190727_144006668.jpg', 'IMG_20191026_132035425.jpg', 'IMG_20191227_160555153.jpg'];
        path = "accueil/";
        break;

        case '/projet/index.html':
          var imageFiles = ['20201018_081227.jpg', '20201023_085906.jpg', '20210314_103446.jpg', '20210314_105950.jpg', '20210808_131032.jpg', '20220513_172112.jpg', '20220521_142911.jpg', '20220612_113842.jpg', '20220612_131039.jpg', '20220617_180049.jpg', '20220702_163146.jpg', '20220703_102228.jpg', '20220827_092004.jpg', '20220924_104005.jpg', '20221016_111410.jpg', '20221115_132529.jpg', '20221116_171816.jpg', '20221117_132021.jpg', '20221126_100146.jpg', '20221127_112046.jpg', '20221127_131245.jpg', '20221211_112310.jpg', '20230107_113806.jpg', '20230114_170841.jpg', '20230305_144250.jpg', 'FB_IMG_1684401979327.jpg', 'FB_IMG_1684401992686.jpg', 'IMG_20190727_144006668.jpg', 'IMG_20191026_132035425.jpg', 'IMG_20191227_160555153.jpg'];
          path = "accueil/";
          break;
          
        default:
        var imageFiles = [];
        break;
}
// Reference to the image container element
var imageContainer = document.getElementById('image-container');

  // Loop through the image files and create <img> elements
  imageFiles.forEach(function(image) {
    var img = document.createElement('img');
    img.src = 'assets/photos/'+ path + image;
    img.className = 'image-item';
    
    // Append the <img> element to the image container
  imageContainer.appendChild(img);
});

  