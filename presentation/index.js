import './components/console.css'
import React from "react";

import {
    Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
    Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle,
    TableHeaderItem, TableItem, TableRow, Table, Text
} from "../src";

import MyConsole from './components/Console';

import preloader from "../src/utils/preloader";

import createTheme from "../src/themes/default";

import Interactive from "../assets/interactive";

require("normalize.css");
require("../src/themes/default/index.css");

const images = {
    thisIsJs: require("../assets/js1.jpg"),
    compatibility: require("../assets/compatibility.png"),
};

const code = {
    let1: require("raw!../assets/es6/let1.example"),
    let2: require("raw!../assets/es6/let2.example"),
    const1: require("raw!../assets/es6/const1.example"),
    arrowFunc: require("raw!../assets/es6/arrowFunc.example"),
    arrowFunc2: require("raw!../assets/es6/arrowFunc2.example"),
    class1: require("raw!../assets/es6/class1.example"),
    class2: require("raw!../assets/es6/class2.example"),
    class3: require("raw!../assets/es6/class3.example"),
    class4: require("raw!../assets/es6/class4.example"),
    class5: require("raw!../assets/es6/class5.example"),
    extend: require("raw!../assets/es6/extend.example"),
    defaultParams1: require("raw!../assets/es6/defaultParam1.example"),
    defaultParams2: require("raw!../assets/es6/defaultParam2.example"),
    defaultParams3: require("raw!../assets/es6/defaultParam3.example"),
    destructing1: require("raw!../assets/es6/destructing1.example"),
    destructing2: require("raw!../assets/es6/destructing2.example"),
    promise1: require("raw!../assets/es6/promise1.example"),
    promise2: require("raw!../assets/es6/promise2.example"),
    packagejson: require("raw!../assets/es6/packagejson.example"),
    webpackconfig: require("raw!../assets/es6/webpackconfig.example"),
    imports: require("raw!../assets/es6/imports.example"),
    react1: require("raw!../assets/es6/react1.example"),
    reactJsx: require("raw!../assets/es6/reactJsx.example"),
    react2: require("raw!../assets/es6/react2.example"),
    react3: require("raw!../assets/es6/react3.example"),
    reactCounter1: require("raw!../assets/es6/reactCounter1.example"),
    reactLifecycle: require("raw!../assets/es6/reactLifecycle.example"),
    reactLifecycle2: require("raw!../assets/es6/reactLifecycle2.example"),
    reactLifecycle3: require("raw!../assets/es6/reactLifecycle3.example"),
    reactLifecycle4: require("raw!../assets/es6/reactLifecycle4.example"),
    reactEx1: require("raw!../assets/es6/reactEx1.example"),
    reactEx2: require("raw!../assets/es6/reactEx2.example"),
    entryPoint: require("raw!../assets/es6/entryPoint.example"),
}

preloader(images);

const theme = createTheme({
    primary: "#679def"
});

import Example from '../assets/react/FilteredList';

export default class Presentation extends React.Component {

    render() {

        // <Slide>
        //     <Image src={images.thisIsJs}/>
        // </Slide>
        return (
            <Spectacle theme={theme}>
                <Deck transition={["slide"]} transitionDuration={500} progress="bar" bgColor="primary"
                      textColor="white">
                    <Slide>
                        <Heading textSize={'3em'} caps lineHeight={3}>Úvod do ECMAScript 6</Heading>
                        <Heading textSize={'1em'} lineHeight={2}>Juraj Kubala <br/>@:&nbsp;&nbsp;juraj.alabuk@gmail.com</Heading>
                    </Slide>
                    <Slide>
                        <Heading size={1} caps lineHeight={1}>Kto je to ten Ekmaskript?</Heading>
                    </Slide>
                    <Slide>
                        <List>
                            <ListItem>špecifikácia jazyka</ListItem>
                            <ListItem>release jún 2015</ListItem>
                            <ListItem>ES6 = ES2015 = ECMAScript 6 = ECMAScript 2015</ListItem>
                            <ListItem>spätná kompatibilita s ES5</ListItem>
                            <ListItem>riešenia pre modulárne aplikácie</ListItem>
                            <ListItem>množstvo nových features</ListItem>
                        </List>
                    </Slide>
                    <Slide>
                        <Heading caps style={{marginBottom: '0.5em'}}>Features</Heading>
                        <Layout>
                            <Fill>
                                <List>
                                    <ListItem>Arrow function</ListItem>
                                    <ListItem>Classes</ListItem>
                                    <ListItem>Modules</ListItem>
                                    <ListItem>Block scope</ListItem>
                                    <ListItem>Default params</ListItem>
                                    <ListItem>Rest params</ListItem>
                                </List>
                            </Fill>
                            <Fill>
                                <List>
                                    <ListItem>Spread operator</ListItem>
                                    <ListItem>Destructiong</ListItem>
                                    <ListItem>Promise</ListItem>
                                    <ListItem>Map</ListItem>
                                    <ListItem>Set</ListItem>
                                    <ListItem>...</ListItem>
                                </List>
                            </Fill>
                        </Layout>
                    </Slide>
                    <Slide>
                        <Heading caps style={{marginBottom: '0.5em'}} textSize={'2em'}>LET</Heading>
                        <Layout>
                            <Fill style={{padding: '20px'}}>
                                <Appear>
                                    <CodePane lang="javascript" source={code.let1} textSize={20}/>
                                </Appear>
                                <Appear>
                                    <CodePane lang="javascript" source={'> kvak\n> kvak'} textSize={20}/>
                                </Appear>
                            </Fill>
                            <Fill style={{padding: '20px'}}>
                                <Appear>
                                    <CodePane lang="javascript" source={code.let2} textSize={20}/>
                                </Appear>
                                <Appear>
                                    <CodePane lang="javascript" source={'> kvak\n> foo'} textSize={20}/>
                                </Appear>
                            </Fill>
                        </Layout>
                        <Layout>
                            <Fill style={{padding: '20px'}}>
                                <Appear>
                                    <Text bold textSize={'1em'}>ES5 má iba function scope</Text>
                                </Appear>
                            </Fill>
                            <Fill style={{padding: '20px'}}>
                                <Appear>
                                    <Text bold textSize={'1em'}>Pri použití let sa vytvára block scope</Text>
                                </Appear>
                            </Fill>
                        </Layout>
                    </Slide>
                    <Slide>
                        <Heading caps style={{marginBottom: '0.5em'}} textSize={'2em'}>CONST</Heading>
                        <Appear>
                            <CodePane lang="javascript" source={'const PI = 3.1415'} textSize={'0.8em'}/>
                        </Appear>
                        <Appear>
                            <List>
                                <ListItem bold textSize={'1.2em'}>immutable hodnota</ListItem>
                                <ListItem bold textSize={'1.2em'}>NIE immutable object !!!</ListItem>
                            </List>
                        </Appear>
                    </Slide>
                    <Slide>
                        <CodePane lang="javascript" source={code.const1} textSize={'0.8em'}/>
                    </Slide>
                    <Slide>
                        <Heading caps textSize={'2em'} style={{marginBottom: '0.5em'}}>Arrow function</Heading>
                        <CodePane lang="javascript"
                                  source={'// ES5\nvar spocitaj = function(a, b) {\n  return a + b;\n}'}
                                  textSize={'0.7em'}/>
                        <Appear>
                            <CodePane lang="javascript"
                                      source={'// ES6 arrow function\nlet spocitaj = (a, b) => {\n  return a + b;\n}'}
                                      textSize={'0.7em'}/>
                        </Appear>
                        <Appear>
                            <CodePane lang="javascript" source={'let spocitaj = (a, b) => a + b;'} textSize={'0.7em'}/>
                        </Appear>
                        <Appear>
                            <CodePane lang="javascript" source={'let parne = [1,2,3,4].filter(x => x % 2 === 0);'}
                                      textSize={'0.7em'}/>
                        </Appear>
                        <Appear>
                            <CodePane lang="javascript" source={'let dvojnasobky = [1,2,3,4].map(x => x*2);'}
                                      textSize={'0.7em'}/>
                        </Appear>
                    </Slide>
                    <Slide>
                        <Heading caps textSize={'2em'} style={{marginBottom: '0.5em'}}>Arrow hell !!</Heading>
                        <Appear>
                            <CodePane textSize={'0.6em'} lang="javascript" source={'const injectMiddleware = deps => ({ dispatch, getState }) => next => action =>\n' +
                             '  next(typeof action === "function" \n' +
                              '       ? action({ ...deps, dispatch, getState })\n' +
                               '       : action\n' +
                                '  );'}/>
                        </Appear>
                    </Slide>
                    <Slide>
                        <Heading caps textSize={'2em'} style={{marginBottom: '0.5em'}}>Arrow function</Heading>
                        <Layout>
                            <Fill>
                                <Appear>
                                    <CodePane textSize={'0.6em'} lang="javascript" source={code.arrowFunc}/>
                                </Appear>
                            </Fill>
                            <Fill>
                                <Appear>
                                    <CodePane textSize={'0.6em'} lang="javascript" source={code.arrowFunc2}/>
                                </Appear>
                            </Fill>
                        </Layout>
                    </Slide>
                    <Slide>
                        <Heading caps textSize={'2em'} style={{marginBottom: '0.5em'}}>Template string</Heading>
                        <CodePane textSize={'0.6em'} lang="javascript" source={'let name = "Juraj";'}/>
                        <Appear>
                            <CodePane textSize={'0.6em'} lang="javascript"
                                      source={'//old school\nconsole.log("Hello, I\'m " + name + ".");'}/>
                        </Appear>
                        <Appear>
                            <CodePane textSize={'0.6em'} lang="javascript"
                                      source={'//ES6\nconsole.log(`Hello, I\'m ${name}.`);'}/>
                        </Appear>
                    </Slide>
                    <Slide>
                        <Heading caps textSize={'2em'} style={{marginBottom: '0.5em'}}>"Triedy" v ES5</Heading>
                        <CodePane textSize={'0.6em'} lang="javascript" source={code.class1}/>
                        <Appear>
                            <CodePane textSize={'0.6em'} lang="javascript"
                                      source={'> Hello world, I\'m Fero'}/>
                        </Appear>
                    </Slide>
                    <Slide>
                        <Heading caps textSize={'2em'} style={{marginBottom: '0.5em'}}>Dedenie v ES5 1/2</Heading>
                        <CodePane textSize={'0.6em'} lang="javascript" source={code.extend}/>
                    </Slide>
                    <Slide>
                        <Heading caps textSize={'2em'} style={{marginBottom: '0.5em'}}>Dedenie v ES5 2/2</Heading>
                        <CodePane textSize={'0.6em'} lang="javascript" source={code.class2}/>
                    </Slide>
                    <Slide>
                        <Heading caps textSize={'2em'} style={{marginBottom: '0.5em'}}>Triedy v ES6</Heading>
                        <CodePane textSize={'0.6em'} lang="javascript" source={code.class3}/>
                        <Appear>
                            <CodePane textSize={'0.6em'} lang="javascript"
                                      source={'> Hello world, I\'m Fero'}/>
                        </Appear>
                    </Slide>
                    <Slide>
                        <Heading caps textSize={'2em'} style={{marginBottom: '0.5em'}}>Triedy v ES6</Heading>
                        <CodePane textSize={'0.6em'} lang="javascript" source={code.class4}/>
                        <Appear>
                            <CodePane textSize={'0.6em'} lang="javascript"
                                      source={'> Hello world, I\'m Fero\n> I know Javascript'}/>
                        </Appear>
                    </Slide>
                    <Slide>
                        <Heading caps textSize={'2em'} style={{marginBottom: '0.5em'}}>Getters/Setters</Heading>
                        <CodePane textSize={'0.6em'} lang="javascript" source={code.class5}/>
                    </Slide>
                    <Slide>
                        <Heading caps textSize={'2em'} style={{marginBottom: '0.5em'}}>Modules</Heading>
                        <CodePane textSize={'0.6em'} lang="javascript"
                                  source={'//  lib/math.js\nexport function sum (x, y) { return x + y }\nexport const pi = 3.141593'}/>
                        <Appear>
                            <CodePane textSize={'0.6em'} lang="javascript"
                                      source={'//  app1.js\nimport * as math from "lib/math"\nconsole.log("2π = " + math.sum(math.pi, math.pi))'}/>
                        </Appear>
                        <Appear>
                            <CodePane textSize={'0.6em'} lang="javascript"
                                      source={'//  app2.js\nimport { sum, pi } from "lib/math"\nconsole.log("2π = " + sum(pi, pi))'}/>
                        </Appear>
                    </Slide>
                    <Slide>
                        <Heading caps textSize={'2em'} style={{marginBottom: '0.5em'}}>Modules 2.</Heading>
                        <CodePane textSize={'0.6em'} lang="javascript"
                                  source={'//  lib/myLib.js\nexport default class MySuperLongNameClass{\n   ...\n}'}/>
                        <Appear>
                            <CodePane textSize={'0.6em'} lang="javascript"
                                      source={'//  app1.js\nimport ShortName from "lib/myLib"\n\nlet myClass = new ShortName();'}/>
                        </Appear>
                    </Slide>
                    <Slide>
                        <Heading caps textSize={'2em'} style={{marginBottom: '0.5em'}}>Default params 1.</Heading>
                        <CodePane textSize={'0.6em'} lang="javascript" source={code.defaultParams1}/>
                        <Appear>
                            <CodePane textSize={'0.6em'} lang="javascript"
                                      source={'> 3\n> 2'}/>
                        </Appear>
                    </Slide>
                    <Slide>
                        <Heading caps textSize={'2em'} style={{marginBottom: '0.5em'}}>Default params 2.</Heading>
                        <CodePane textSize={'0.6em'} lang="javascript" source={code.defaultParams2}/>
                        <Appear>
                            <CodePane textSize={'0.6em'} lang="javascript"
                                      source={'> 3\n> 1'}/>
                        </Appear>
                    </Slide>
                    <Slide>
                        <Heading caps textSize={'2em'} style={{marginBottom: '0.5em'}}>Default params 3.</Heading>
                        <CodePane textSize={'0.6em'} lang="javascript" source={code.defaultParams3}/>
                        <Appear>
                            <CodePane textSize={'0.6em'} lang="javascript"
                                      source={'> 3\n> 1'}/>
                        </Appear>
                    </Slide>
                    <Slide>
                        <Heading caps textSize={'2em'} style={{marginBottom: '0.5em'}}>Destructuring</Heading>
                        <Layout>
                            <Fill>
                                <CodePane textSize={'0.5em'} lang="javascript" source={code.destructing1}/>
                            </Fill>
                            <Appear>
                                <Fill>
                                    <CodePane textSize={'0.5em'} lang="javascript" source={code.destructing2}/>
                                </Fill>
                            </Appear>
                        </Layout>
                    </Slide>
                    <Slide>
                        <Heading caps textSize={'2em'} style={{marginBottom: '0.5em'}}>Promise</Heading>
                        <CodePane textSize={'0.6em'} lang="javascript" source={code.promise1}/>
                    </Slide>
                    <Slide>
                        <Heading caps textSize={'2em'} style={{marginBottom: '0.5em'}}>Promise 2.</Heading>
                        <CodePane textSize={'0.6em'} lang="javascript" source={code.promise2}/>
                    </Slide>
                    <Slide>
                        <Heading size={1} caps lineHeight={1}>Pekné však?</Heading>
                    </Slide>
                    <Slide>
                        <Image src={images.compatibility} style={{width: '90%'}}/>
                    </Slide>
                    <Slide>
                        <Heading size={1} caps lineHeight={1}>Riešnie?</Heading>
                    </Slide>
                    <Slide>
                        <Heading textSize={'2em'} caps lineHeight={1}>Transpilovať, kompilovať, bundlovať, ...</Heading>
                    </Slide>
                    <Slide>
                        <List>
                            <ListItem><b>webpack</b> - bundlovací nástroj</ListItem>
                            <ListItem><b>babel</b> - transpiler - prekladá ES6 do ES5</ListItem>
                            <ListItem><b>npm</b> - node package manager</ListItem>
                        </List>
                    </Slide>
                    <Slide>
                        <Heading textSize={'2em'} caps lineHeight={1}><b>npm</b> - node package manager</Heading>

                        <List>
                            <ListItem>správca závislostí</ListItem>
                            <ListItem>konfigurácia cez <b>package.json</b></ListItem>
                            <ListItem><b>npmjs.com</b></ListItem>
                            <ListItem>knižnice sa sťahujú do <b>node_modules</b></ListItem>
                        </List>
                        <CodePane textSize={'0.6em'} lang="javascript"
                                  source={'\nnpm init\nnpm install\nnpm install package_name [--save] [--save-dev] [-g]\nnpm update'}/>

                    </Slide>
                    <Slide>
                        <Heading textSize={'2em'} caps lineHeight={1}><b>npm</b> - node package manager</Heading>
                        <CodePane textSize={'0.6em'} lang="json" source={code.packagejson}/>
                    </Slide>
                    <Slide>
                        <Heading textSize={'2em'} caps lineHeight={1}><b>npm.i.etech.sk</b></Heading>

                        <List>
                            <ListItem>projekt <b>rslib/js_components</b></ListItem>
                        </List>
                        <CodePane style={{marginBottom: '15px'}} textSize={'0.6em'} lang="json"
                                  source={'npm set registry http://npm.i.etech.sk'}/>
                        <Appear>
                            <CodePane textSize={'0.6em'} lang="json"
                                      source={'//package.json\n{\n   "name": "rs-widget-questionnaire",\n   "version": "1.2.7",\n   ...\n}'}/>
                        </Appear>
                        <Appear>
                            <CodePane textSize={'0.6em'} lang="json" source={'-- zmena kodu'}/>
                        </Appear>
                        <Appear>
                            <CodePane textSize={'0.6em'} lang="json" source={'"version": "1.2.8" -- povysenie verzie balicka'}/>
                        </Appear>
                        <Appear>
                            <CodePane textSize={'0.6em'} lang="json" source={'commit + push origin master'}/>
                        </Appear>
                        <Appear>
                            <CodePane textSize={'0.6em'} lang="json" source={'npm update'}/>
                        </Appear>
                    </Slide>
                    <Slide>
                        <Heading textSize={'2em'} caps lineHeight={1}><b>webpack</b></Heading>
                        <List>
                            <ListItem>bundlovací nástroj</ListItem>
                            <ListItem>konfigurácia cez <b>webpack.config.js</b></ListItem>
                        </List>
                        <CodePane textSize={'0.6em'} lang="json"
                                  source={'npm install webpack -g\n\nwebpack [--watch] [--progress]'}/>
                    </Slide>
                    <Slide>
                        <Heading textSize={'1em'} caps lineHeight={2}>webpack.config.js</Heading>
                        <CodePane textSize={'0.5em'} lang="javascript" source={code.webpackconfig}/>
                    </Slide>
                    <Slide>
                        <Heading textSize={'2em'} caps lineHeight={2}>import štýlov</Heading>
                        <CodePane textSize={'0.6em'} lang="javascript" source={code.imports}/>
                    </Slide>
                    <Slide>
                        <Heading textSize={'2em'} caps lineHeight={2}>entry point</Heading>
                        <CodePane textSize={'0.6em'} lang="javascript" source={code.entryPoint}/>
                    </Slide>
                    <Slide>
                        <Heading textSize={'2em'} caps lineHeight={2}>Ďakujem za pozornosť</Heading>
                        <Heading textSize={'2em'} caps lineHeight={2}>:)</Heading>
                    </Slide>
                    <Slide>
                        <Heading textSize={'3em'} lineHeight={3}>{`<React />`}</Heading>
                        <Heading textSize={'1em'} lineHeight={2}>Juraj Kubala <br/>@:&nbsp;&nbsp;juraj.alabuk@gmail.com</Heading>
                    </Slide>
                    <Slide>
                        <List>
                            <ListItem>nie framework, just <b>"V"</b> in MVC</ListItem>
                            <ListItem>lib na vytvaranie UI</ListItem>
                            <ListItem>velký hráči - FB, New York Times, Instagram, ...</ListItem>
                            <ListItem><b>Virtual DOM</b></ListItem>
                        </List>
                    </Slide>
                    <Slide>
                        <Heading textSize={'1,5em'} caps lineHeight={2}>Všetko je komponenta</Heading>
                        <CodePane textSize={'0.8em'} lang="javascript" source={code.react1}/>
                    </Slide>
                    <Slide>
                        <Heading textSize={'1,5em'} caps lineHeight={2}>WTF ?</Heading>
                        <CodePane textSize={'0.8em'} lang="javascript" source={code.reactJsx}/>
                        <Appear>
                            <Heading textSize={'1,5em'} caps lineHeight={2.5}>JSX = JS + XML</Heading>
                        </Appear>
                        <Appear>
                            <List>
                                    <ListItem>class => <b>className</b></ListItem>
                                    <ListItem>for => <b>htmlFor</b></ListItem>
                                    <ListItem><b>{`<Komponenta></Komponenta>`}</b></ListItem>
                                    <ListItem><b>{`<div></div>`}</b></ListItem>
                            </List>
                        </Appear>
                    </Slide>
                    <Slide>
                        <Heading textSize={'1,5em'} caps lineHeight={2}>Vstupný bod</Heading>
                        <CodePane textSize={'0.8em'} lang="javascript" source={code.react2}/>
                    </Slide>
                    <Slide>
                        <CodePane textSize={'0.8em'} lang="javascript" source={code.react1}/>
                    </Slide>
                    <Slide>
                        <Heading textSize={'1,5em'} lineHeight={2}>Props</Heading>
                        <CodePane textSize={'0.8em'} lang="javascript" source={code.react3}/>
                    </Slide>
                    <Slide>
                        <Heading textSize={'1,5em'} lineHeight={2}>State</Heading>
                        <CodePane textSize={'0.7em'} lang="javascript" source={code.reactCounter1}/>
                    </Slide>
                    <Slide>
                        <Heading textSize={'1,5em'} lineHeight={2}>LIFECYCLE METHODS</Heading>
                        <CodePane textSize={'0.7em'} lang="json" source={` > Initial render\n > Props changed\n > State changed\n > Component unmount`}/>
                    </Slide>
                    <Slide>
                        <Heading textSize={'1em'} lineHeight={2}>Initial render</Heading>
                        <CodePane textSize={'0.7em'} lang="javascript" source={code.reactLifecycle}/>
                    </Slide>
                    <Slide>
                        <Heading textSize={'1em'} lineHeight={2}>Props changed</Heading>
                        <CodePane textSize={'0.7em'} lang="javascript" source={code.reactLifecycle2}/>
                    </Slide>
                    <Slide>
                        <Heading textSize={'1em'} lineHeight={2}>State changed</Heading>
                        <CodePane textSize={'0.7em'} lang="javascript" source={code.reactLifecycle3}/>
                    </Slide>
                    <Slide>
                        <Heading textSize={'1em'} lineHeight={2}>Component unmount</Heading>
                        <CodePane textSize={'0.7em'} lang="javascript" source={code.reactLifecycle4}/>
                    </Slide>
                    <Slide>
                        <Heading textSize={'3em'} lineHeight={2}>Príklad</Heading>
                        <Example />
                    </Slide>
                    <Slide>
                        <CodePane textSize={'0.7em'} lang="javascript" source={code.reactEx1}/>
                    </Slide>
                    <Slide align="center flex-start">
                        <CodePane textSize={'0.47em'} lang="javascript" source={code.reactEx2}/>
                    </Slide>
                    <Slide align="center flex-start">
                        <Example />
                    </Slide>
                    <Slide>
                        <Heading textSize={'2em'} caps lineHeight={2}>Ďakujem za pozornosť 2.0</Heading>
                        <Heading textSize={'2em'} caps lineHeight={2}>:)</Heading>
                    </Slide>
                </Deck>
            </Spectacle>
        );
                        // <Comment />
    }
}
