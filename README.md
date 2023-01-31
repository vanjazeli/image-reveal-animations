# Image Reveal Animations
A small and simple JavaScript library which uses GSAP to create some image reveal animations that trigger on HTML element hover.


## Demo
Check out the demo of this project right [here](https://vanjazeli.github.io/image-reveal-animations/). 


## Usage

### Initialization
 - Make sure to install GSAP library into your current project.
 - Add ira.js file from this repo to your project.
 - Import the Ira class from ira.js file into the file where you would like to initialize an animation.
 - Initialize an animation by passing the element, imageUrl and animationType into the Ira class with `new Ira(element, imageUrl, animationType)`.

### Example
```JavaScript
import Ira from "./ira.js";

const element = document.querySelector(".my-element");
const imageUrl = "./images/my-image.png";
const animationType = "slide"

new Ira(element, imageUrl, animationType);
```

### Arguements
The `Ira(element, imageUrl, animationType)` class takes in three arguements: element, imageUrl and animationType.

| Arguement | Type | Description |
|:----------|:-----|:------------|
| `element` | object | Defines an object from the dom to which we would like to add the desired hover animation. |
| `imageUrl` | string | Defines a path to the image that we would like to display when the desired element gets hovered. |
| `animationType` | string | Defines the name of the animation that we would like to use. |

Animation types that are currently available: 
 - `"boring"`
 - `"fade"`
 - `"unfold"`
 - `"slide"`
 - `"corner"`
 - `"spiral"`

## Credits
 - [DALL·E 2](https://openai.com/dall-e-2/)
 - [Cordrops](https://github.com/codrops)

## Licence
Completely  free for use in all types of commercial or personal projects. Mentions are required when uploading or reposting any of original or modified code from this project.
