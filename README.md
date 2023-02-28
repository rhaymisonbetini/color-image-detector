# COLOR IMAGE DETECTOR

This javascript library was developed to extract the color palette of a provided image. <br/> 
This feature is used in several systems such as Instagram (in the story part) or even Spotify <br/> 
for background colors of some playlist <br/> 

*Only for JPG, JPEG and PNG files

### INSTALL

Run the command below in your npm.

```
npm install color-image-detector

```

After this process you must import your library in the javascript file that you will use it. <br/>

```javascript
import ColorDetector from "color-image-detector";
```

or

```javascript
const ColorDetector = require("color-image-detector");
```

Once this procedure is done, in your html you will have to include a canvas tag as well as an img <br/>
tag as an ID that will be used by the library.

```html
<div class="hello">
    <input type="file" id="img" />
    <input type="button"  value="Load imagem"  @click="loadColors" />
    <canvas id="canvas"></canvas>
</div>
```
In this example the event will be called when the button "Load image" is activated after <br/> 
the image is loaded in the input.

### Triggering the Color Recognizer
Using the model above, we will activate our library with the "loadColors" method <br/>

* First we create a new instance of our detector class.
* Then we call the asynchronous method "detectColorPalete" and pass the id of the HTML TAG corresponding to our image

```javascript
  async loadColors() {
      let colordetector = new ColorDetector();
      let pallets = await colordetector.detectColorPalete("img");
    },
```
The return of our library will be an object with two arrays: One of primary colors from most present to least present.
And an array of secondary colors following the same order

### return from detectColorPalete
```json
{
    "mainColors": [
        "#D7D5DA",
        "#C2B4AB",
        "#9BA2AD",
        "#AF955B",
        "#888E9A",
        "#75766C",
        "#6B564B",
        "#624728",
        "#3F403B",
        "#27282A",
        "#29261E",
        "#222010",
        "#141A1C",
        "#0C1412",
        "#0D0F0E",
        "#060C0A"
    ],
    "complementaryColor": [
        "#DAD5D5",
        "#ABB9C2",
        "#ADA29B",
        "#5B76AF",
        "#9A8E88",
        "#6D6C76",
        "#4B606B",
        "#284362",
        "#3C3B40",
        "#2A2827",
        "#1E2129",
        "#101222",
        "#1C1A14",
        "#140C0E",
        "#0F0D0E",
        "#0C0608"
    ]
}
```


