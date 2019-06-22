import React, { useState, useRef, useCallback } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

const App = () => {
  const id = useRef(2);
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([
    { id: 0, text: '숨 쉬기', checked: false }, 
    { id: 1, text: '집에 가기', checked: true}
  ]);

  const handleChange = useCallback((e) => {
    console.log('change');
    setInput(e.target.value); // input 의 다음 바뀔 값
  }, []);

  const handleCreate = useCallback(() => {
    console.log('create');
      setInput('');
      setTodos(todos.concat({
        id: id.current++,
        text: input,
        checked: false
      }));
  }, [input]);

  const handleKeyPress = (e) => {
    console.log('keypress');
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      handleCreate();
    }
  };

  const handleToggle = useCallback((id) => {
    setTodos(todos => todos.map(todo => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
  }, [todos]);

  const handleRemove = useCallback((id) => {
    console.log('remove');
    setTodos(todos.filter(todo => todo.id !== id));
  }, [todos]);

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