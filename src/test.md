---
layout: post
title: Rebuilding this site without React
meta: May 11, 2018
id: test-post
---

# This is the level 1 heading

For instance, on the planet Earth, man had always assumed that he was more intelligent than dolphins because he had achieved so much — the wheel, New York, wars and so on — whilst all the dolphins had ever done was muck about in the water having a good time. But conversely, the dolphins had always believed that they were far more intelligent than man — for precisely the same reasons.

## This is the level 2 heading

“It seemed to me,” said Wonko the Sane, “that any civilization that had so far lost its head as to need to include a set of detailed instructions for use in a packet of toothpicks, was no longer a civilization in which I could live and stay sane.”

### This is the leve 3 heading

below this is an image shorcode
{% image "see-touch-story" "a wonderful picture" %}

```js
letterspace = string => {
  return (
    string
      // split the string into words
      .split(' ')

      // for each word split the word into chars
      // then join them on a non-breaking space
      .map(w => w.split('').join('\xa0'))

      // take those spaced words and join them into a sentence
      // using a non-breaking plus and breaking space
      .join('\xa0 ')

      // then transform them to upper-case characters
      .toUpperCase()
  )
}
```
