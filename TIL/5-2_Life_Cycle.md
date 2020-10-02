# Life Cycle

## Constructor

```
constructor(props){
    super(props);
    console.log("constructor");
}
```

생성자 메소드로, 컴포넌트가 처음 만들어질때 실행된다.

## componentWillMount

```
componentWillMount(){
    console.log("componentWillMount");
}
```

컴포넌트가 DOM 위에 만들어지기 전에 실행된다.

## render

컴포넌트 렌더링을 담당한다.

## componentDidMount

```
componentDidMount(){
    console.log("componentDidMount");
}
```

컴포넌트가 생성되고, 첫 렌더링을 마치면 실행되는 메소드이다.

## componentDidUpdate

```
componentDidUpdate() {
    console.log("I just upated");
}
```

컴포넌트가 리렌더링을 마친 후 실행된다.

## componentWillUnmount

```
componentWillUnmount() {
   console.log("Goodbye, cruel world");
}
```

컴포넌트가 DOM에서 사라진 후 실행되는 메소드다.
