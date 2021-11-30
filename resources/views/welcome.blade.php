<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
   <head>
         <meta charset="utf-8">
         <meta name="viewport" content="width=device-width, initial-scale=1">

         <title>Airo+</title>

         <!-- Fonts -->
         <link href="https://fonts.gstatic.com" rel="preconnect">
         <link as="style" href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap"
                  onload="this.onload = null; this.rel='stylesheet'" rel="preload">

         <!-- Styles -->
         <style>
             html, body {
                 font-family: "Fira Sans,sans-serif";
                 margin: 0;
                 height: 100vh;
             }
         </style>
     </head>
     <body>
         <div id="root" data-user="{{ json_encode(auth()->user()) }}">
         </div>
         <script src="<?php echo e(mix('js/app.js')); ?>"></script>
     </body>
</html>
