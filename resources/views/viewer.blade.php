<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Campus 360</title>

    @vite(['resources/js/viewer.js'])

    <style>
        html, body {
            margin: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        #viewer {
            width: 100%;
            height: 100vh;
        }
    </style>
</head>
<body>

    <div id="viewer"></div>

</body>
</html>