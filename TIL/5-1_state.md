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
