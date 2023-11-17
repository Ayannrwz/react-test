import {Component} from "react";
import dog from './dog.jpg';


class Dog extends Component {
    render() {
        return (
            <div>
                <h1>Dog!</h1>
                <img src={dog} alt="dog" />
            </div>
        )
    }
}

export default Dog;
