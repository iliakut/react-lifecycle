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
    console.log('componentDidMount()');
    /*
    * компонент подключен, DOM уже на странице
    * тут нужно делать запросы на сервер, работу с DOM,
    * записываем setState после получения данных
    */

    this.setRandomTestState();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    /*
    * вызывается сразу после обновления. Не вызывается при первом рендере
    * prevProps - предыдущие пропсы (до обновления)
    * prevState - предыдуший стейт (до обновления)
    */
    console.log('componentDidUpdate()');

    // пример (как watch во Vue), но обычно это делается с пропсами
    if (prevState.test !== this.state.test) {
      console.log('componentDidUpdate() difference of state', prevState.test, this.state.test);
    }
  }

  componentWillUnmount() {
    /*
    * вызывается перед размонтированием компонента
    * используется для очисти таймеров, остановки запросов, отписки от сокетов и т.п.
    */
    console.log('componentWillUnmount()');
  }

  componentDidCatch(error, errorInfo) {
    /*
    * Этот метод жизненного цикла вызывается после возникновения ошибки у компонента-потомка. Он получает два параметра:
    * error — перехваченная ошибка
    * info — объект с ключом componentStack, содержащий информацию о компоненте, в котором произошла ошибка.
    * componentDidCatch() вызывается во время этапа «фиксации»,
    * поэтому здесь можно использовать побочные эффекты. Метод можно использовать для логирования ошибок.
    *
    * В случае ошибки вы можете рендерить запасной интерфейс с помощью componentDidCatch(),
    * вызвав setState. Однако, этот способ скоро будет считаться устаревшим.
    * Используйте static getDerivedStateFromError() для рендера резервного интерфейса.
    */

    // можно создать компоненты обертки HOC для ловли ошибок в нижних компонентах
  }

  setRandomTestState() {
    setTimeout(() => {
      this.setState({
        test: Math.random()
      })
    }, 5000)
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
