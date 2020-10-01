# props

props 란?  
: 컴포넌트에서 컴포넌트로 전달하는 데이터이다.  
함수의 매개변수 처럼, props를 사용하면 컴포넌트를 효율적으로 재사용할 수 있다.

props를 이용하며 Food 컴포넌트에 데이터를 보내는 방법

```
function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Food fav="kimchi" sometimes={true}/>
    </div>
  );
}
```

props의 이름은 fav이고, fav에 "kimchi"라는 값을 담아 Food컴포넌트에 보낸다.  
props에는 boolean,숫자,배열과 같은 다양한 형태의 데이터를 담을 수 있다.  
주의할 점은 props에 있는 데이터는 문자열인 경우를 제외하고 모두 중괄호로 값을 감싸야한다.
