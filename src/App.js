import React from 'react';
import './App.css';

import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from './Counter';
import Container from './Container';

function App() {
  let name = 'taegyun'
  const number = 6
  const counterProps = {
    a :1,
    b :2,
    c :3,
    d:4,
    e:5,
    initialValue:5
  }
  return (
    <Container>
      <div className="App">
        <MyHeader />
        <Counter {...counterProps}/>
      </div>
    </Container>
    
  );
}
// jsx의 특징
/* 
  self closing tag
  <image />
*/
/*
  위에서 return 문안에 div가 최상위 태그이다.
  div를 쓰기 싫으면 div 대신 react.fragment를 사용하면 된다. or 빈태그
*/
export default App;
