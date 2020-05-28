import React from 'react';
import "@tencent/tea-component/lib/tea.css";
import './css/component.css'
import Button from './ui/Button'
import Form from './ui/Form'

function App() {
  const option = [
    { label: '姓名', type: 'input' },
    { label: '年龄', type: 'input' },
    { label: '婚否', type: 'radio', group: [
      { value: 'yes', text: '是' }, 
      { value: 'no', text: '否' },
    ] },
    { label: '籍贯', type: 'select', group: [
      { value: 'sichuan', text: '四川' }, 
      { value: 'beijing', text: '北京' }, 
      { value: 'shanghai', text: '上海' }, 
      { value: 'xianggang', text: '香港' }
    ] },
  ]


return (
  <div className="App">
    <div>
      Button:
     </div>
    <br />
    <Button type='primary' text="这里显示文字" onClick={() => { console.log(12321331) }} />
    <br />
    <hr />
    <Form option={option} size='m' />
  </div>
);
}

export default App;
