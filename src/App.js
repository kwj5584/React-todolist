import React from 'react';
import {createGlobalStyle} from 'styled-components'
import TodoTemplate from './Component/TodoTemplate'
import TodoHead from './Component/TodoHead'
import TodoList from './Component/TodoList'
import TodoCreate from './Component/TodoCreate'
import {TodoProvider} from './TodoContext'

const GlobalStyle = createGlobalStyle`
  body{
    background : #e9ecef;
  }
`;
function App() {
  return (
    <div>
      <TodoProvider>
        <GlobalStyle/>
        <TodoTemplate>
        <TodoHead/>
        <TodoList/>
        <TodoCreate/>
        </TodoTemplate>
      </TodoProvider>
    </div>
  );
}

export default App;
