# Callate

En cuanto empecé el podcast sabía que el blog era otro recurso que quería añadir. Sin embargo, **no quería recurrir a WordPress** como siempre y quería experimentar desarrollando el blog por mí mismo, desde cero.

Hace tiempo que he visto que los **generadores estáticos** están de moda (véase [Jekyll](https://jekyllrb.com/) o [Hugo](https://gohugo.io/)). Los he probado alguna que otra vez para alguna prueba, pero las escasas plantillas que me gustaban no me lo ponían fácil.

Entonces, descubrí las webs estáticas con frameworks como [Next.js](https://nextjs.org/) para React o [Nuxt.js](https://nuxtjs.org/) para Vue. Siempre he sido muy fan de [Vue.js](https://vuejs.org/), me parece divertido y me gusta lo fácil que es programar con este framework. Así que me decidí a usar Nuxt.js puesto que Jekyll o Hugo no me convencían, así podría diseñar con más libertad el blog.

El último apartado que me llamaba la ateción era **[Typescript](https://www.typescriptlang.org/)**. Nunca he sido muy fan de **Javascript** por muchas razones, pero de las principales es que sea un **lenguaje no tipado**. Así que cuando escucuhé hablar sobre Typescript no dudé ni un segundo en lanzarme a la piscina. Cabe recalcar que la compatibilidad no es perfecta, para ello, tendremos que esperar a **Vue 3** que saldrá en su versión estable a principios de 2020. Sin embargo, no he tenido problemas muy graves; a último remedio podía escribir algún código en Javascript, pero solo tuve que hacerlo en una ocasión.

## Por qué una web estática
Quería una web estática por varias razones:

- La **velocidad de carga** es notablemente superior, mejorando la experiencia de usuario
- Para mejorar el **SEO**, pues los motores de búsqueda rankean mejor las páginas más rápidas. Además del problema que suponen las apps dinámicas para el SEO y generar las etiquetas `head`
- El **hosting es muy barato** gracias a que no necesitamos muchos recursis ni ningún renderizado del lado del servidor como PHP, Python o Ruby. Son simples archivos HTML.
- Por **puro experimento personal y profesional** y probar tecnologías nuevas

También quería mencionar que he probado finalmene **[TailwindCSS](https://tailwindcss.com/)** y estoy muy contento con el resultado. Nada como dejar atrás Bootstrap y poder crear realmente nuestras propias webs gracias a helpers y utilidades para los torpes de CSS como yo 🤷🏻‍.

## Cómo funciona una web estática
Una web estática básicamente son **varios archivos HTML** como las antiguas páginas allá por principios del 2000 o finales del 1900. 

El framework se encarga de **"compilar" nuestro código en muchos archivos HTML y assets estáticos** (imágenes, CSS, etc). Deberemos utilizar el framework para decirle a éste qué páginas debe generar dependiendo del contenido que tengamos que mostrar.

Yo decidí utilizar un **CMS headless**. Estos CMS's, a diferencia de WordPress nos permite gestionar contenido como entradas, formularios, medios, etc sin darnos un diseño para mostrarlo. Es decir, nos aportará **un dashboard igual que WordPress** y, en lugar de una web pública, nos aportará una **API** para poder obtener dicha información en nuestro framework Nuxt.js.

Por tanto, le diremos al framework que obtenga todos los artículos y que genere una página HTML por cada artículo.

Además de las páginas "estáticas" que no dependen del contenido dinámico que escribamos en nuestro CMS. Como puede ser la página de inicio o la de contacto.

## Cuáles son los inconvenientes
El principal inconveniente que he encontrado desarrollando este sencillo blog estático ha sido el tener que **generar la web cada vez que se actualice el contenido del CMS**.

Para que nos entendamos, si yo creo este artículo y compilo la web, se generarán unos archivos que tendré que subir al hosting por FTP.

¿Pero qué pasa si cambio un artículo o una imagen? ¿O añado un nuevo artículo?

Pues, efectivamente, **tendré que compilar y subir los nuevos archivos por FTP**.

Lo bueno es que los CMS headless tienen unos **web hooks** para avisar cuando se ha actualizado el contenido y así poder compilar y subir automáticamente la web gracias a hostings como Netlify.

En mi caso ya tenía un hosting clásico contratado; así que he tenido que hacerlo a mano las primeras veces mientras creo un script en Python para descargar el contenido de git, compilar, y subir por FTP los archivos HTML automáticamente cuando reciba el hook del CMS.

## Conclusión
He disfrutado mucho desarrollando este blog, el cual me ha llevado uno o dos fines de semana. Aún tengo mucho que experimentar para tener una conclusión sólida, pero sin duda me gusta mucho la idea de ahorrar en hosting y que la web sea tan rápida.

Aún queda mucho por mejorar el blog, pues solo es la primera versión. Os iré contando qué tal 😊

En definitiva, **volveré a usar Nuxt.js** para otros proyectos webs, sin duda.