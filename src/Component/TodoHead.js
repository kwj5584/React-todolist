import React from 'react';
import styled from 'styled-components';
import {useTodoState} from '../TodoContext'

const TodoHeadBlock = styled.div`
    padding: 48px 32px 32px 24px;
    border-bottom : 1px solid #e9ecef;
    h1 {
        margin:0;
        font-size:36px;
        color:#343a40;
    }
    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
    `;
function TodoHead(){
    const week = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth()+1;
    let date = today.getDate();
    let day = today.getDay();

    const todos = useTodoState();
    const undoneTasks = todos.filter(todo=> !todo.done)

    return(
        <TodoHeadBlock>
            <h1>{year}년 {month}월 {date}일</h1>
            <div className='day'>{week[day]}</div>
            <div className='tasks-left'>할 일 {undoneTasks.length}개 남음</div>
        </TodoHeadBlock>
    )
}

export default TodoHead;