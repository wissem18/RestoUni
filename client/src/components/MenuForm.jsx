import React from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import '../styles/MenuForm.css'
import Layout from "./Layout";
function MenuForm(props) {
  return (
      <form className="form-Menu">
          <label className="lb" for="Entry">Entry</label>
          <input name="Entry" id="Entry" type="text" className="infos"/>

          <label for="Main" className="lb">Main course</label>
          <input name="Main" id="Main" type="text" className="infos"/>

          <label for="Dessert" className="lb">Dessert</label>
          <input name="data" id="Dessert" type="text" className="infos"/>
      <label for="data" class="lb">Day</label>
          <input name="data" id="data" type="date" className="infos" />

      <button className='btn btnSend' type="submit">Send</button>
          <button className='btn btnClear' type="reset" onClick={props.hide}>Hide </button>
    </form>
  )
}

export default MenuForm
