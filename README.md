# Calculator
Getting Started:
1. Clone the repo: ```git clone https://github.com/rep-ai/Calculator-Test.git```
2. Install the packages: ```npm install``` or ```yarn install```
3. Start React Native: ```react-native run-ios``` or ```react-native run-android```

Making a calculator!
1. Add the "Clear" button and it's functionality. It should reset the calculator.
2. Please fix the StatusBar.

## Folder Structure
[index](index.js)<br />
└ [App](App.js)<br />
&nbsp;&nbsp;&nbsp;&nbsp;│─ [store](src/store.js)<br />
&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;└ [reducer](src/reducer.js)<br />
&nbsp;&nbsp;&nbsp;&nbsp;└&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Calculator](src/index.js)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│─ [actions](src/actions.js)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;│─ [actionTypes](src/actionTypes.js)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;└&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[flowTypes](src/flowTypes.js)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│─ [flowTypes](src/flowTypes.js)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Calculator](src/Calculator.js)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│─ [styles](src/styles.js)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│─ [QuestionComponent](src/QuestionComponent.js)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│─ [AnswerComponent](src/AnswerComponent.js)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ButtonComponent](src/ButtonComponent.js)<br />


## Example
![Example](screenshots/example.jpg?raw=true)
## Animated Example
![AnimatedExample](https://j.gifs.com/YvpRYA.gif)
