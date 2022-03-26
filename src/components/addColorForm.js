import React, {Component} from 'react';
import PropTypes from 'prop-types';

const AddColorForm = ({onNewColor}) => {
  let _title, _color;
  const submit = e => {
    e.preventDefault();
    onNewColor(_color.value,_title.value);
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

AddColorForm.contextTypes = {
  store: PropTypes.object
}

export default AddColorForm;
