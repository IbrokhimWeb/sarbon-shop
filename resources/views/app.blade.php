<!DOCTYPE html>
<html class="h-100">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="{{ asset('css/app.css') }}" rel="stylesheet" />
    <title>Waremarket</title>
    @inertiaHead
</head>
<body class="overflow-hidden h-100">
    <div id="website-loader-wrapper">
        <div id="website-loader" class="w-100 h-100 d-flex align-items-center justify-content-center flex-column">
            <img alt="Waremarket" height="40" src="images/logo.png">
            <div class="lds-dual-ring mt-5"></div>
        </div>
    </div>
    @routes
    @inertia
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/manifest.js') }}"></script>
    <script src="{{ asset('js/vendor.js') }}"></script>
</body>
</html>
