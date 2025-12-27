import './style.css'
import Typewriter from './Typewriter.ts'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { v4 as uuidv4 } from "uuid";

console.log(`Hi Ya, Faddah! Here's a Random ID String for you: ${uuidv4()}`);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>
        <a href="https://vite.dev" target="_blank">
            <img src="${viteLogo}" class="logo" alt="Vite logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
            <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
        </a>
        <h1>Vite + TypeScript</h1>
        <div class="card">
            <button id="counter" type="button"></button>
        </div>
        <p class="read-the-docs">
        Click on the Vite and TypeScript logos to learn more
        </p>
    </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)


const typewriter: Typewriter = new Typewriter(document.querySelector('.whitespace') as HTMLDivElement, 
    { 
        loop: true, 
        typingSpeed: 50, 
        deletingSpeed: 50
    });

typewriter
    .typeString('\tWhere do I start?')
    .pauseFor(1000)
    .typeString('\n\n\tfunctio')
    .deleteChars(7)
    .typeString('const temp')
    .pauseFor(150)
    .deleteAll(25)
    .typeString('\n\n\tWhy is this so hard?')
    .pauseFor(1000)
    .typeString('\n\n\tDoes everyone struggle this much?')
    .pauseFor(1000)
    .typeString('\n\n\tThere has to be an easier way!')
    .pauseFor(1000)
    .deleteAll(25)
    .start()

