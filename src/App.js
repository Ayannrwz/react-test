import logo from './logo.svg';
import './App.css';
import {choice} from './fruits/helpers';
import {remove} from './fruits/helpers';
import fruits from './fruits/fruits';
import Dog from './dog/dog';
import Game from './game-state/Games';
import RollDie from './dice/RollDice';

function App() {
    // let fruit = choice(fruits);

    // console.log(`I'd like one ${fruit}, please`);
    // console.log(`Here you go: ${fruit}`);
    // console.log(`Delicious! May I have another?`);

    // let remaining = remove(fruit, fruits);

    // console.log(`I'm sorry, we're all out. We have ${
    //     remaining.length
    // } left.`);

    return (
        <div className="App">
            {/* <Game /> */}
            <RollDie />
        </div>
    );
}

export default App;
