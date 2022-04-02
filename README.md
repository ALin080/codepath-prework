# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Angela Lin**

Time spent: **8** hours spent in total (3 for required functionality, 5 for additional and drawing icons)

Link to project: (https://glitch.com/edit/#!/colorful-maize-hound?path=README.md%3A1%3A0)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Webpage shows the current number of lives which is updated when lives are lost
- [X] An alert message pops up when a life is lost
- [X] Game button appearance switches between two images when clicked and unclicked.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://media.giphy.com/media/aVEDv5zaETWXgouOTX/giphy.gif)
![](https://media.giphy.com/media/0l7eKPnUI05xx8Jrpg/giphy.gif)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- [Note frequencies](https://pages.mtu.edu/~suits/notefreqs.html)
- [Using Math.random](https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random)
- [Using setTimeout](https://www.w3schools.com/jsref/met_win_settimeout.asp)
- [Using alert with a variable value](https://stackoverflow.com/questions/2983288/alert-a-variable-value)
- [Using onmousedown](https://www.w3schools.com/jsref/event_onmousedown.asp)
- Asked friends to playtest the game and offer suggestions

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
words
My biggest challenge while creating this game was designing and implementing a feature that would make my game version unique. The first part of this challenge was brainstorming ideas and the second part was finding a way to transform my idea into code. While brainstorming, I tried a few different versions of the game that had different images on the buttons, and eventually I decided on using hand-drawn fruit icons. My initial version just had a fruit image appear when clicked, but when talking about this game with a friend, I was given the idea of actually using two images per button: one for a whole fruit, and another icon that represents the fruit being sliced when the user clicked it. 
After coming up with my idea, I made a pseudocode outline of my logic thought process which was inspired by how we implemented the “Start” and “Stop” button. I similarly used the html event “onclick” to switch between the two images. However, when I tested this I quickly realized that there was an issue since the image did not go away when the user released the button. I searched for guidance online and discovered the “onmousedown” event which achieved my goal. Next, I had trouble with making the two images appear and disappear during the correct conditions, and I faced a bug where sometimes both the whole and cut images would be shown. I tried to add the images to the “hidden” class in the html file, but then I realized that it would be more clear to write separate functions to address this issue: appear() and disappear(). I rewrote my pseudocode outline to make sure I had a defined plan and called my new functions inside my button elements. During this whole process I had to do a lot of testing and debugging, and I found the console debugging feature to be very useful. I also found some helpful resources online that explained different functions and provided examples of their usage. 
Overall, overcoming this challenge taught me the importance of collaboration and exchanging ideas with other people. It also taught me how to research solutions for my errors, and it gave me experience with debugging and testing code. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
I’m curious about how web development testing is done. During this small project, I was mostly the only person who was running the game to make the features work as expected, but it is likely that only having one person test the program would result in uncaught errors. For example, maybe some features that work on one device would have errors when tested on a different device for various reasons. For large-scale projects, how is testing done and how do web developers determine when a project is “finished” or good enough to be published.
Another question I have is about collaboration between multiple web developers. I know that Github is widely used when multiple people are contributing to one project, but I am curious about what happens when different people make different changes, and how final decisions are made about what to keep. What does the workflow look like during a web development project? 


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
With a few more hours, my main focus of the project would be to introduce customizability to the game so that players would be able to tailor the game to their preferences. 
I would add a difficulty options such as allowing the player to select how many buttons there are (eg. 4, 5, 6) and allowing players to select a game speed (eg. normal, fast, extra fast). These changes would require more buttons in the HTML and adding CSS rules for them. Additionally, the variables in the script file would need to reference the user’s decision. Currently, the game does not take in any user input, so I would have to research how to design a website that is more interactive with the user. Additionally, I would consider adding the option for different game themes such as fruits, simple, animals, plants, etc. 
On the testing side of web development, I would ask more friends I know to test the game and offer feedback and suggestions. Since I found collaboration so valuable when coming up with the button design, I think my project could be further improved with more ideas from a diverse group of people. 




## Interview Recording URL Link

[My 5-minute Interview Recording](https://berkeley.zoom.us/rec/share/CnRL6qj-h-qfc1Fm_SJKgOSC9aSfi6LB0svKTg4xAxjuqgJ-NAUX3zFv8aCOvhc.8nXl5A5hS_GyqoD2?startTime=1648872881000)


## License

    Copyright [Angela Lin]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
