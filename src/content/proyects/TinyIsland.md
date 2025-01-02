---
title: 'Tiny Island'
description: 'Proyecto 3d demo'
order: '5'
heroImage: '/images/proyects/tiny-island/tiny-island-min.jpg'
pills: [
    "csharp",
    "dotnet",
    "gdscript",
    "glsl",
    "gdengine",
    "game"
]
links: {
    "Probar": "https://cyberthrob.itch.io/tiny-island"
}
---

<h1 class="font-bold text-center text-2xl md:text-4xl">Descripción</h1>

--------------------------------------------------------------

Un pequeño proyecto desarrollado en godot engine. Puedes pasear por una pequeña isla, disfrutar el paisaje, sumergirte en el agua, etc.

**Player:** Para el player utilice una maquínas de estados finitos a base de delagados con una arquitectura propia para evitar la explosión de estados, SOLID y el patrón Observador. Además añadí algunas características en las físicas del personaje que godot no trae por defecto, tal es el caso de subir escalones.

**Olas:** Para generar las olas en el agua utilice una textura normal y un panner. 

**Distorsión:** La distorsión utiliza una textura de pantalla y el mismo mapa normal de las olas. Color: Para darle color al agua utilice un degradado y el buffer de profundidad para simular la profundidad. Normalmente se hace utilizando el la coordenadas z pero en este caso utilice las coordenas y.

**Caustics:** Los efectos cáusticos utilizan una textura a la cual le aplico un efecto de aberración cromática y un panner para darle movimiento. El efecto caustico se realiza en el espacio del mundo que es obtenido también utilizando el buffer de profundidad.

**Underwater:** utiliza una mascara obtenida con el plano de recorte ya que la malla del agua es un plano y no estoy generando olas atravez del vértice, el buffer de profundidad para el efecto de niebla una textura de pantalla para la Distorsión y la misma técnica que se realiza en el plano de agua para los efectos cáusticos.

<h1 class="font-bold text-center text-2xl md:text-4xl">Videos</h1>

--------------------------------------------------------------

<div class="flex justify-center">
    <iframe class="w-full aspect-video" src="https://www.youtube.com/embed/iMjEbnWJT1o?si=9OsKc3nwTIrjYLI_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<h1 class="font-bold text-center text-2xl md:text-4xl">Imágenes</h1>

--------------------------------------------------------------

![Imagen 1](/images/proyects/tiny-island/ti1.jpg)

![Imagen 2](/images/proyects/tiny-island/ti2.jpg)

![Imagen 3](/images/proyects/tiny-island/ti3.jpg)