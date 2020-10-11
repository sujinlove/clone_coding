# CSS to SCSS

1. scss 사용을 위한 기본 설정 - 스타일링에 필요한 라이브러리 설치

   ```
   npm install node-sass --save
   npm install open-color --save
   npm install sass-loader --save
   npm install classnames --save // OR
   npm install node-sass open-color sass-loader classnames
   ```

2. .css 파일을 .scss파일로 변경

- 변경후 .js 파일내의 import를 모두 변경해준다.

(변경 전)

```
import "./Home.css";
```

(변경 후)

```
import "./Home.scss";
```

3. change css syntax
   ex)

```
.nav {
  z-index: 1;
  position: fixed;
  top: 50px;
  left: 10px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 10px 20px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  a {
    text-decoration: none;
    color: #88b04b;
    text-transform: uppercase;
    font-size: 12px;
    text-align: center;
    font-weight: 600;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}
```
