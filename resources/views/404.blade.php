<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
   <head>
         <meta charset="utf-8">
         <meta name="viewport" content="width=device-width, initial-scale=1">

         <title>Airo+</title>

         <!-- Fonts -->
         <link href="https://fonts.gstatic.com" rel="preconnect">
         <link as="style" href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
                  onload="this.onload = null; this.rel='stylesheet'" rel="preload">

         <!-- Styles -->
         <style>
             html, body {
                 font-family: 'Roboto', sans-serif;
                 margin: 0;
                 height: 100vh;
             }
         </style>
     </head>
     <body>
         <div id="e404">
         </div>
         <script src="<?php echo e(mix('js/app.js')); ?>"></script>
     </body>
</html>
