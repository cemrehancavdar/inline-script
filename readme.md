
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

#### simple on click change text with without any other library
```js
    <h1 id="test" script="this.addEventListener('click', () => this.innerHTML='changed!')">will change</h1>
```
#### change next element with [jquery](https://jquery.com) or [cash](https://github.com/fabiospampinato/cash)
```js
    <h1 script="$(this).on('click', () =>$(this).next().css({'background-color': 'red'}) )">test</h1>
    <span style="height: 100px; width: 100px; background-color: black;">make me red</span>
```

#### sending and handling custom events [jquery](https://jquery.com) or [cash](https://github.com/fabiospampinato/cash)
```js
    <input script="$(this).on('keyup', ()=> $(this).next().trigger('input-changed', [this.value]))">
    <h1 script="$(this).on('input-changed', (ev, data)=> $(this).text(data))">some element</h1>
```

#### handling data-fetching on client:
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
