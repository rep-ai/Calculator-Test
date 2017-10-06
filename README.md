# Calculator
Getting Started:
1. Clone the repo: ```git clone https://github.com/rep-ai/Calculator-Test.git```
2. Install the packages: ```npm install``` or ```yarn install```
3. Start React Native: ```react-native run-ios``` or ```react-native run-android```

Making a calculator!
1. Add the "Clear" button and it's functionality. It should reset the calculator.
2. Please fix the StatusBar.
└── 

## Folder Structure


<dl>
    <dd>
        <a href="/index.js">index</a>
        <dl>
            <dd>
                <a href="/App.js">└── App</a>
                <dl>
                    <dd>
                        <a href="/store.js">│── store</a>
                        <dl>
                            <dd><a href="/reducer.js">│── reducer</a></dd>
                        </dl>
                    </dd>
                    <dd>
                        <a href="/Calculator.js">│── Calculator</a>
                        <dl>
                            <dd><a href="/actions.js">│── actions</a></dd>
                        </dl>
                    </dd>
                </dl>
            </dd>
        </dl>
    </dd>
</dl>


&nbsp;&nbsp;&nbsp;&nbsp;│── [store](src/store.js)
<br />
└── [App](App.js)
    │── [store](src/store.js)
    │   └── [reducer](src/reducer.js)
    └── [Calculator](src/index.js)
        │── [actions](src/actions.js)
        │   │── [actionTypes](src/actionTypes.js)
        │   └── [flowTypes](src/flowTypes.js)
        │── [flowTypes](src/flowTypes.js)
        └── [Calculator](src/Calculator.js)
            │── [styles](src/styles.js)
            │── [QuestionComponent](src/QuestionComponent.js)
            │── [AnswerComponent](src/AnswerComponent.js)
            └── [ButtonComponent](src/ButtonComponent.js)


## Example
![Example](screenshots/example.jpg?raw=true)
## Animated Example
![AnimatedExample](https://j.gifs.com/YvpRYA.gif)
