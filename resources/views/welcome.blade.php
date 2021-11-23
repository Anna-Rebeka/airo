<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
   <head>
         <meta charset="utf-8">
         <meta name="viewport" content="width=device-width, initial-scale=1">

         <title>Airo Plus</title>

         <!-- Fonts -->
         <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">

         <!-- Styles -->
         <style>
             html, body {
                 background-color: #fff;
                 color: #636b6f;
                 font-family: 'Nunito', sans-serif;
                 font-weight: 200;
                 height: 100vh;
                 margin: 0;
             }
         </style>
     </head>
     <body>
         <div id="root" data-user="{{ auth()->user() }}">
             
         </div>
         <script src="<?php echo e(mix('js/app.js')); ?>"></script>
     </body>
</html>
