I have an image shortcode like so

```js
module.exports = (id, alt = 'Missing alt text') => {
  return ` <img class="lazyload"
  data-src="${baseUrl}/c_scale,w_1366,f_auto/${id}.jpg"
  data-srcset="${baseUrl}/c_scale,w_640,f_auto/${id}.jpg 640w, 
  ${baseUrl}/c_scale,w_1366,f_auto/${id}.jpg 1366w, 
  ${baseUrl}/f_auto/${id}.jpg 2732w" />
  `
}
```

I register it in config and proceed to write some markdown like so

```md
For instance, on the planet Earth, man had always assumed that he was more intelligent than dolphins because he had achieved so much — the wheel, New York, wars and so on — whilst all the dolphins had ever done was muck about in the water having a good time. But conversely, the dolphins had always believed that they were far more intelligent than man — for precisely the same reasons.

{% image "my-cool-image" "a wonderful picture" %}

“It seemed to me,” said Wonko the Sane, “that any civilization that had so far lost its head as to need to include a set of detailed instructions for use in a packet of toothpicks, was no longer a civilization in which I could live and stay sane.”
```

I expect the output to be

```html
<p>for instance...</p>
<img ...FUN_RESPONSIVE MARKUP />
<p>"It seemed to me...</p>
```

but what I get is

```html
<p>for instance...</p>
<!-- lol your layout is broken now -->
<p><img ...FUN_RESPONSIVE MARKUP /></p>
<p>"It seemed to me...</p>
```

so my solution is

```js
module.exports = (id, alt = 'Missing alt text') => {
  return `<figure><img class="lazyload"
  data-src="${baseUrl}/c_scale,w_1366,f_auto/${id}.jpg"
  data-srcset="${baseUrl}/c_scale,w_640,f_auto/${id}.jpg 640w, 
  ${baseUrl}/c_scale,w_1366,f_auto/${id}.jpg 1366w, 
  ${baseUrl}/f_auto/${id}.jpg 2732w" /></figure>
  `
}
```
