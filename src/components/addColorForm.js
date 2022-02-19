import React, {Component} from 'react';

const logColor = (title,color) => console.log(`New Color: ${title} ${color}`)

const AddColorForm = ({onNewColor=f=>f}) => {
  let _title, _color;
  const submit = e => {
    e.preventDefault();
    onNewColor(_title.value,_color.value);
    _title.value = '';
    _color.value = '#000000'
    _title.focus();
  }
  return(
    <form onSubmit={submit}>
    <input type="text" ref={input => _title = input} placeholder="color title..." required/>
    <input type="color" ref={input => _color = input} required/>
    <button>ADD</button>
    </form>
  )
}

export default AddColorForm;