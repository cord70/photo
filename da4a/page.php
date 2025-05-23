<?php
// выделяем $name из имени файла
	$filename = $_SERVER['SCRIPT_NAME'];			// например "/da4a/pond.html"
	$tmp= substr($filename, 0, strrpos($filename, '.'));	// "/da4a/pond"
	$name= substr($tmp, strrpos($tmp, '/')+1);		// "pond"

   	$filelist = glob($name . '*.{jpg,gif}', GLOB_BRACE);	// "pond*.jpg" "day*.gif"
	$maxIndex = count($filelist)-1;				// например 15

// индексы предыдущего текущего и следующего рисунков
	$currentIndex = $_SERVER['QUERY_STRING'];				// например 3
	if ($currentIndex == "") { $currentIndex = $maxIndex; }		
	elseif (!is_numeric($currentIndex)) { $currentIndex = 0; }		// abc -> 0
	elseif ($currentIndex < 0) { $currentIndex = 0; }			// -3 -> 0
	elseif ($currentIndex > $maxIndex) { $currentIndex = $maxIndex; }	// +9999999 -> 15	 

	sort($filelist); // не обязательно, glob сортирует по умолчанию
	$currentPhoto = $filelist[$currentIndex];
	$prevIndex = $currentIndex - 1;
	$nextIndex = $currentIndex + 1;

// переход назад 
	$arrowLeft = '../images/arrow-left-64.png';
	if ($prevIndex < 0) { $arrowLeft = '../images/transparent-64.gif' ; $prevIndex = 0 ; }

// переход вперед 
	$arrowRight = '../images/arrow-right-64.png';
	if ($nextIndex > $maxIndex) { $arrowRight = '../images/transparent-64.gif' ; $nextIndex = $maxIndex; }

 ?>
<!DOCTYPE html>
<html lang="ru">
  <head> 
    <meta name="robots" content="noindex, nofollow">
    <meta charset="utf-8">
    <meta name=viewport content="width = device-width, initial-scale = 1">
    <title> <?php echo $name ?> </title>
    <link rel="stylesheet" href="../images/main.css"> 
  </head>

  <body>
    <div class="left"> 
      <a href="<?php echo $currentPhoto ?>">
        <img src="<?php echo $currentPhoto ?>" width="800" height="auto"
          title="<?php echo $currentPhoto ?>">
      </a><p class="center sel"> <?php echo $currentPhoto ?> </p>
    </div>

    <div class="left"> 
      <a id="prev" href="<?php echo $filename . '?' . $prevIndex ?>">
        <img src="<?php echo $arrowLeft ?>" 
          title="<?php echo $filelist[$prevIndex] ?>">
      </a>
    </div>

    <div class="left"> 
      <a id="next" href="<?php echo $filename . '?' . $nextIndex ?>">
        <img src="<?php echo $arrowRight ?>" 
          title="<?php echo $filelist[$nextIndex] ?>">
      </a>
    </div>

    <div class="left"> 
      <a href="da4a.html">
        <img src="../images/house-64.png" title="da4a">
      </a>
    </div>

    <script> document.onkeydown = function(e) {
      var key = e.which || e.keyCode || 0;
      if (key==0) switch(e.key) { 
        case "Left", "ArrowLeft": key=37; break;
        case "Right", "ArrowRight": key=39; break; }
      switch(key) {
        case 37: window.location.href = document.getElementById("prev").href; break;
        case 39: window.location.href = document.getElementById("next").href; break; } 
    } </script>
 
  </body>
</html>

