import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import loader from '@ibsheet/loader';

interface Props {}

loader.config({
  registry: [{
    name: 'ibsheet',
    baseUrl: 'assets/ibsheet'
  }]
})
const App = ({  }: Props) => {
  // 페이지 종료 시 로더 제거
  useEffect (() => {
    return (
      loader.unload()
    )
  }, []);

  return (
    <>
      <h1>IBSheet Loader Samples</h1>
    </>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));
