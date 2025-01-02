---
title: 'Time Of Day'
description: 'Time Of Day para Godot Engine.'
order: '6'
heroImage: '/images/proyects/time-of-day/time-of-day-min.jpg'
pills: [
    "gdscript",
    "glsl",
    "gdengine",
    "plugin"
]
links: {
    "Repo": "https://github.com/7jcdev/time-of-day"
}
---

<h1 class="font-bold text-center text-2xl md:text-4xl">Descripción</h1>

--------------------------------------------------------------

Plugin de cielo en tiempo real y tiempo para Godot Engine.

Para la dispersión del cielo actualmente utilizo un modelo basado en los papers de ATI Preetham and Hoffman, además del sol incluye dispersión de Mie para la luna y dispersión simplificada de Rayleigh para la noche.

El disco del sol utiliza un spot simple y una simplificación de la fase Mie. Para dibujar la luna utilizo Raytrace y una textura panorámica de la luna.

Las nubes son una simplificación de nubes hechas con raymach basadas en las nubes de Horizon Zero Dawn.

El plugin también tiene un sistema de calendario gregoriano, sincronización con el dispositivo y las posiciones del sol y la luna realistas basadas en cálculos astronómicos.

Para la versión 2.0 hay planeadas muchas mejoras.

<h1 class="font-bold text-center text-2xl md:text-4xl">Videos</h1>

--------------------------------------------------------------
<div class="flex justify-center">
    <iframe class="w-full xl:h-[630px] aspect-video" src="https://www.youtube.com/embed/1e6I5w-OkbI?si=2CWBAZ7CzpN-XKPV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<h1 class="font-bold text-center text-2xl md:text-4xl">Imágenes</h1>

--------------------------------------------------------------

![Imagen 1](/images/proyects/time-of-day/time-of-day.jpg)
