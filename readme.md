
# inline-script

inline-script  is so small library just like <code>[onevent](https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers#using_onevent_properties)</code> properties. it is just <code>script</code> attribute with <code>this</code> represents the element itself like <code>this</code> to <code>onclick</code>. So you can wrap <code>$(this)</code> with jquery, jquery-like library or whatever and use it for all your needs.

inline-script is second stepping to complete hypermedia api's to have "islands of interacivity". We could also call this hypermedia friendly scripting. 

There are already solutions to this _[hyperscript](https://hyperscript.org/)_ and _[hx-on](https://htmx.org/attributes/hx-on/)_ by [htmx](https://htmx.org/), _[surreal](https://github.com/gnat/surreal)_ by [gnat](https://github.com/gnat) and also _[alpine.js](https://alpinejs.dev/)_ by [calebporzio](https://calebporzio.com/) and more. They are all **_great_**. They all have some level of unique styles to do dom manipulations. 


## Usage 


```js
<script src="https://www.unpkg.com/inline-script"></script>
```
inline-script can be used by cdn or by downloading. 
### Samples 

#### simple on click change text
```js
    <h1 id="test" script="this.addEventListener('click', () => this.innerHTML='changed!')">will change</h1>
```

#### Handling data-fetching on client:
```js
// with getWeatherOf defined in <script>
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
