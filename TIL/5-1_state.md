# state란?

state는 동적데이터를 다룰 때 사용한다.  
동적 데이터란 말 그대로 변경될 가능성이 있는 데이터이다.  
props는 이런 데이터를 다루지 못하기 때문에, state를 사용해야한다.  
state는 클래스형 컴포넌트에서만 사용할 수 있는 개념이다.

# 클래스형 컴포넌트

```
class App extends React.Component {
  render() {
    return (
        // JSX
    );
  }
}
```

클래스형 컴포넌트는 반드시 리액트가 제공하는 Component 클래스를 상속받아야 한다.  
리액트가 제공하는 Component 클래스를 상속받으면, React.Component 클래스의 기능들이 추가된다.

지금의 App 컴포넌트는 클래스여서(= 함수가 아니여서) return 문을 사용할 수 없고, 그래서 함수형태의 App컴포넌트처럼 JSX 실행를 반환할 수가 없다.  
그래서 JSX를 반환하기 위해 render() 함수를 사용한다.

리액트는 클래스형 컴포넌트의 render()함수를 자동으로 실행시켜준다.  
render() 함수는 직접 실행하지 않아도 실행되는 함수이다.

# state

```
class App extends React.Component {

  state = {

  };

  render() {
    return (
        // JSX
    );
  }
}
```

state는 객체 형태의 데이터이다.  
state를 사용하려면 반드시 1) 클래스 컴포넌트 안에서, 2) 소문자를 이용하여 state라고 적으면 된다.

# setState

```
class App extends React.Component {

  state = {

  };

  add = () => {
      this.state.count = 1; // 이렇게 state를 직접 변경할 수 없다.
  }

  render() {
    return (
        // JSX
    );
  }
}
```

리액트는 위의 소스코드처럼 state를 직접 변경하는 코드를 허용하지 않는다.

원래 리액트는 state가 변경되면 render() 함수를 다시 실행하여 변경된 state를 화면에 출력한다.  
그런데 state를 직접 변경하는 경우에는 render() 함수를 다시 실행하지 않는다.  
따라서 setState()를 사용하여 간접적으로 state를 변경해주어야한다.

```
class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({
      // current에 현재 state가 넘어온다.
      count: current.count + 1 // 그 state의 count에 1을 더한다.
    }));
  };

  minus = () => {
    this.setState(current => ({
      count: current.count - 1
    }));
  };

  render() {
    return (
      <div>
        <h1>This number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
```

리액트는 setState() 함수의 호출을 감시한다. setState() 함수가 동작하면, state가 새로운 값으로 바뀌고, render() 함수를 동작시켜서 화면을 업데이트 한다.  
setState() 함수가 실행될때, 리액트는 이전의 state와 새로운 state를 비교하여, 바뀐 데이터만 업데이트한다.  
변경 대상이 아닌 키와 키값은 그대로 유지된다.  
따라서 화면은 바뀌었지만 새로고침은 일어나지 않는다. 이것이 리액트가 화면구성이 빠른 이유이다.
