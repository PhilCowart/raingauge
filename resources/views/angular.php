<!DOCTYPE html>

<html lang="en" ng-app='rainGauge'  ng-controller='ApplicationCtrl'>

    <head>
          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name='viewport' content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
          <title>Rain Gauge</title>
          <meta name="description" content="">
          <meta name="viewport" content="width=device-width">
          <link rel="stylesheet" href="style.css">

          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
          <base href="/"></base>
    </head>

     <body>
          <main>
              <h1>{{ dj }}</h1>
              <div ng-view></div>
          </main>

          <script src='bower-components.js'></script>
          <script src='raingauge.js'></script>

     </body>
</html>
