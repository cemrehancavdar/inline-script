
# inline-script

```js
<tag script="this.someCode()"></tag>
```

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
<h1 script="this.addEventListener('click', () => this.innerHTML='changed!')">will change</h1>
```
#### change next element with [jquery](https://jquery.com) or [cash](https://github.com/fabiospampinato/cash)
```js
    <button script="$(this).on('click', () =>$(this).next().css({'background-color': 'red'}) )">make it red to see</button>
    <span style="height: 100px; width: 100px; background-color: black;">hello there</span>
```

#### sending and handling custom events [jquery](https://jquery.com) or [cash](https://github.com/fabiospampinato/cash)
```js
    <input script="$(this).on('keyup', ()=> $(this).next().trigger('input-changed', [this.value]))">
    <h1 script="$(this).on('input-changed', (ev, data)=> $(this).text(data))"> </h1>
```

#### handling data-fetching on client [jquery](https://jquery.com):
```js
    <article style="width: 500px;" script="$.when(getWeatherOf([39.9, 32.8])).done(data => {
        $(this).find('h3').text('🌤   '+ data.current_weather.temperature + '°C');
        $(this).find('h4').text('🌬️   '+data.current_weather.windspeed + ' Wind Speed')
    })">
        <header><h1>Weather</h1></header>
        <main>
            <h3></h3>
            <h4></h4>
        </main>
        <footer> Open-Meteo Weather API | Free Weather Forecast API for non-commercial use </footer>
      </article>
```
helper function in script
```html
    <script>
        async function getWeatherOf(coordinates) {
            const [latitude, longitude] = coordinates;
            const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

            try {
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(`Failed to fetch data from Open-Meteo API: ${response.status}`);
                }
                console.log(response)
                const data = await response.json();
                console.log(data)
                return data // You can process and display the data as needed
            } catch (error) {
                console.error(`Error fetching data from Open-Meteo API: ${error.message}`);
            }
        }
    </script>
```

##  More context on hypermedia friendly scripting and inline-script

You could easily solve most of your needs with other hypermedia friendly libraries:
[hyperscript](https://hyperscript.org/): solves everything but with it's Hypercard-like syntax. It has some awesome features, with my personal favorite being its asynchronous transparency."
[hx-on](https://htmx.org/attributes/hx-on/): solves most of need for inline-script with two main difference. 1) hx-on is bound to htmx as expected 2) inline-script has no assumption about your code or when to work, without any event it could just work on load.
[surreal](https://github.com/gnat/surreal): is the library is most alike to inline-script. it bind element to me() (and more) to script but have more jquery-like functions to handle more. inline-script is just binding element to <code>this</code> without more functionality.
[alpine.js](https://alpinejs.dev/): is the reactive one, it is like vue, react or svelte but its code resides in html. It is more unique then others and has great api. 
[native-dom-functions](https://www.w3schools.com/jsref/dom_obj_event.asp): is the one you need, if all you want it basic events and nothing more. 

### inline-script works great with

The touchstone of web development: [jquery](https://jquery.com/) or lightweight alternatives of it: [cash](https://github.com/fabiospampinato/cash), [umbrella](https://umbrellajs.com/)

You can use inline-script with whatever you want, especialy even your custom tool never saw sunlight 🤓

## one more thing
```js
<h1 inline-script="this.textContent='wow, script tag changed to something else 😱'"></h1>
<script>
    window.inlineScriptSelector = "inline-script"
</script>
```
By any chance you might want to change script attribute to something else so you can use window.inlineScriptSelector and set it your choice of words.
The main reason we have this is by any chance inline-script and hyperscript mixed together, even tough hyperscript uses <code> _ </code> attribute to work, it also uses <code> script </code> and <code> data-script </code> 

## Size


| Size               | inline-script |
| ------------------ | -----------   |
| Unminified         | **1.4 KB**    |
| Minified           | **470 B**     |
| Minified & Gzipped | **330 B**     |
