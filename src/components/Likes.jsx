import { Component } from "react";

class Likes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contadorLikes: 0
        }
    }

    subirLikes = () => {
        this.setState({
          contadorLikes: 1
        });
    }

    render() {
        return (
          <div>
            <h2>Likes: {this.state.contadorLikes}</h2>
            <button onClick={this.subirLikes}>Darle a Like</button>
          </div>
        )
    }
}

export default Likes;