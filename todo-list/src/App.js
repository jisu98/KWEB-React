import React, { useState } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

const App = () => {
  const [id, setId] = useState(2);
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([
    { id: 0, text: '숨 쉬기', checked: false }, 
    { id: 1, text: '집에 가기', checked: true}
  ]);

  const handleChange = (e) => {
    setInput(e.target.value); // input 의 다음 바뀔 값
    
  };

  const handleCreate = () => {
      setInput('');
      setTodos(todos.concat({
        id: id,
        text: input,
        checked: false
      }));
      setId(id + 1);
  };

  const handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      handleCreate();
    }
  };

  const handleToggle = (id) => {
    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    setTodos(nextTodos);
  };

  const handleRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <TodoListTemplate form={
      <Form
        value={input}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        onCreate={handleCreate}
      />
    }>
      <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
    </TodoListTemplate>
  );
};

export default App;