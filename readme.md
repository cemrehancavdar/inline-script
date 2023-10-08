
# inline-script

inline-script is so small library let's use write your javascript code inline with script="" attribute. It's has no opinion to how to utilize your code with whatever dom manipulation tool (jquery, cash etc.)

inline-script is second stepping to complete hypermedia api's to have "islands of interacivity". We could also call this hypermedia friendly scripting. 

There are already solutions to this _[hyperscript](https://hyperscript.org/)_ and _[hx-on](https://htmx.org/attributes/hx-on/)_ by [htmx](https://htmx.org/), _[surreal](https://github.com/gnat/surreal)_ by [gnat](https://github.com/gnat) and also _[alpine.js](https://alpinejs.dev/)_ by [calebporzio](https://calebporzio.com/) and more. They are **_great_**. They all have their unique styles to do dom manipulations. 

inline-script is just like <code>onclick</code>, </code>obdblclick</code> events. it is just script attribute with <code>this</code> represents the element itself like <code>this</code> to <code>onclick</code>. So you can wrap <code>$(this)</code> with jquery, jquery-like library or whatever and use it for all your needs. 

## Usage 
```js
<script src="https://www.unpkg.com/inline-script"></script>
```
inline-script can be used by cdn or by downloading. 
```js
<h1 script="getWeatherOf([39.9, 32.8]).then(data => this.textContent =data.current_weather.temperature + '°C')"></h1>
```

##  Glossary
WIP 


## Size

| Size               | inline-script |
| ------------------ | -----------   |
| Unminified         | **1.4 KB**    |
| Minified           | **470 B**     |
| Minified & Gzipped | **330 B**     |
