import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


/*
* lifecycle
* MOUNTING
* constructor() => render() => componentDidMount()
*
* UPDATES
* New Props || setState() => render() => componentDidUpdate()
*
* UNMOUNTING
* componentWillUnmount()
*
* ERROR
* componentDidCatch()
*/

class App extends Component {
  state = {
    test: 0
  };

  constructor(props) {
    /*
    * тут создан объект (класс) компонента, но он еще не прошел рендер
    */
    console.log('constructor()');
    super(props); // Если это не сделать, this.props не будет определён.
    this.state.test = 1; // Нельзя вызывать setState, вместо этого можно сразу записывать this.state
  }

  componentDidMount() {
    console.log('componentDidMount()')
    /*
    * компонент подключен, DOM уже на странице
    * тут нужно делать запросы на сервер, работу с DOM,
    * записываем setState после получения данных
    */
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    /*
    * вызывается сразу после обновления. Не вызывается при первом рендере
    */
    console.log('componentDidUpdate()');

  }

  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
