import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color: string;
  size?: string;
}

interface AppState {
  counter: number;
}

class App extends React.Component<AppProps> {
  state = {
    counter: 0,
  };

  count = (operation: boolean): void => {
    this.setState((currState: AppState) => ({
      counter: currState.counter + (operation ? 1 : -1),
    }));
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.count(true);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.count(false);
          }}
        >
          Decrement
        </button>
        {this.state.counter}
      </div>
    );
  }
}

ReactDOM.render(<App color='red' />, document.getElementById('root'));
