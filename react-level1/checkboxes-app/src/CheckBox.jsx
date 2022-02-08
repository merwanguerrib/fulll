import React from 'react'

function CheckBox(props) {
  return (
    <div>
      <label>{props.name}</label>
      <input
        type="checkbox"
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        checked={props.isChecked} ></input>
    </div>
  )
}


export default CheckBox
