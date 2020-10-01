# Component

- App.js로 컴포넌트 정의 알아보기

```
function App() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}
```

App()함수가 정의되어있고, 이 함수가 HTML을 반환하고 있다.  
이것이 App 컴포넌트를 정의한 것이다. App() 함수가 반환한 HTML이 리액트 앱 화면에 그려지는 것이다.

- index.js 파일로 컴포넌트의 사용 알아보기

```
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

App 컴포넌트를 임포트 하여 사용하고 있다.  
<App />을 ReactDOM.render() 함수의 첫 번째 인자로 전달하면, App 컴포넌트가 반환하는 것들을 화면에 그릴 수 있다.  
App 컴포넌트가 그려질 위치는 ReactDOM.render()의 두 번째 인자로 전달하면 된다.  
index.js의 소스 내용을 그대로 해석하면, App 컴포넌트는 아이디가 root인 엘리번트에 그려질 것 정도로 이해할 수 있다.  
아이디가 root인 엘리먼트는 index.html에 있다.
