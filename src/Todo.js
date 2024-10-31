import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Todo = ({data, todoUpdate, deleleTodo,updateTodo})=>{
  const [mode,setMode] = useState('read');
  const [isChecked, setIsChecked] = useState(false);
  const [text, setText] = useState(data.text);

  let className = '';
  let formClass = 'visually-hidden';
  const handleCheckboxClick = (e)=>{
    let value = !isChecked;
    setIsChecked(value);
    checkUpdate(data.id,value)
    todoUpdate(data.id, value)
  }
  if(isChecked){
    className = 'checked';
  }

  if(mode === 'edit'){
    className += 'visually-hidden'
    formClass = '';
  }

  let todoDelete = ()=>{
    deleleTodo(data.id);
  }
  let changeMode = ()=>{
    setText('edit');
  }
  let changeText = (value)=>{
    setText(value);
  }
  let todoUpdate = ()=>{
    updateTodo(data.id,text);
    setMode('read');
  }


  let updateTodo = ()=>{

  }

  return(
    <div>
      <Form.Check type="checkbox" id={data.id}>

        <Form.Check.Input type="checkbox" onClick={handleCheckboxClick} />
        <Form.Check.Label className={className} >{data.text}</Form.Check.Label>
        <Form className="d-flex gap-1" onSubmit={(e)=>{
          changeText(e.target.value);
        }}>
      <Form.Group className={formClass}>
        <Form.Control type="text" value={text} onChange={(e)=>{
          changeText(e.taget.value);
        }}/>
      </Form.Group>        
      <Button variant="primary" size="sm" onClick={changeMode}>입력</Button>
      <Button variant="primary" size="sm" onClick={changeMode}>취소</Button>
      </Form>
        <Button variant="secondary" size="sm" onClick={changeMode}>수정</Button>
        <Button variant="danger" size="sm" onClick={todoDelete}>삭제</Button>
      </Form.Check>   
             
    </div>
  )
}
export default Todo;