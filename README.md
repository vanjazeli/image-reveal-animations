# Image Reveal Animations
A small and simple JavaScript library which uses GSAP to create some image reveal animations that trigger on HTML element hover.

## Demo
Check out the demo of this project right [here](https://vanjazeli.github.io/image-reveal-animations/). 

## Usage
Make sure to install GSAP library into your current project.
Import the Ira class from ira.js file into the file where you would like to initialize the animations.

```JavaScript
import Ira from "./ira.js";

const element = document.querySelector(".my-element");
const imageUrl = "./images/my-image.png";
const animationType = "slide"

new Ira(element, imageUrl, animationType);
```

The `Ira(element, imageUrl, animationType)` class takes in three arguements: element, imageUrl and animationType.

`element` type: object

Defines an object from the dom to which we would like to add the desired hover animation.

`imageUrl` type: string

Defines a path to the image that we would like to display when the desired element gets hovered.

`animationType` type: string

Defines the name of the animation that we would like to use.
Currently available animation names are: `"boring"`, `"fade"`, `"unfold"`, `"slide"`, `"corner"` and `"spiral"`.

## Credits
 - [DALL·E 2](https://openai.com/dall-e-2/) Images
 - [Cordrops](https://github.com/codrops) Idea
 
## Licence
Absolutely free for all types of commercial or personal projects.
