# JSX

JSX는 HTML과 자바스크립트를 조합한 것

```
function Potato() {
  return <h1>I like potato</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Potato />
    </div>
  );
}
```

컴포넌트는 반환할떄, HTML을 반환한다.  
App.js 파일 안에 Potato 컴포넌트를 만들었고, Potato 컴포넌트를 App 컴포넌트 안에서 사용했다.
