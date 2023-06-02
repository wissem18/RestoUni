import React from 'react'
import axios from 'axios'
function VoteForm(props) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [options, setOptions] = React.useState(['']);

    const handleAddOption = () => {
        setOptions([...options, '']);
    };
    const handleClearOptions = () => {
        setOptions(['']);
    };
    const handleOptionChange = (index, e) => {
        const updatedOptions = [...options];
        updatedOptions[index] = e.target.value;
        setOptions(updatedOptions);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const formData = {
                'name': name,
                'description': description,
              };

            const response = await axios.post('http://localhost:3006/vote/eeb2ec84-d8fe-4505-9184-39c6e91ff092',formData,{headers:{'Content-Type':'application/json' },});
            const id=await response.data.id;
            console.log(id);
            for (const option of options) {
            await axios.post(
              `http://localhost:3006/option/${id}`,
          
              { description: option },
              {
                headers: { 'Content-Type': 'application/json' },
              }
            );
          }
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  return (
      <form className="form-Menu">
          <label className="lb" for="Name">Name</label>
          <input name="Name" id="Name" type="text" className="infos"  value={name}
        onChange={(e) => setName(e.target.value)}/>

          <label for="Descr" className="lb">Description</label>
          <input name="Descr" id="Descr" type="text" className="infos" value={description}
        onChange={(e) => setDescription(e.target.value)} />

          {options.map((option, index) => (
              <>                    
                  <label for="Option" className="lb">Option{index}</label>
                  <  input  name={`options[${index}]`}
            id={`Option${index}`}
            type="text"
            className="infos"
            value={option}
            onChange={(e) => handleOptionChange(index, e)} required/>
               </>
    
          ))}
        <div className='option-btns'>
              <button className='btn btnOption' type="submit" onClick={handleAddOption}>Add Option</button>
              <button className='btn btnOption' type="submit" onClick={handleClearOptions}>Clear Option </button> 
        </div>
          <button className='btn btnSend' type="submit" onClick={handleSubmit}>Send</button>
          <button className='btn btnClear' type="reset" onClick={props.hide}>Hide </button>
      </form>
  )
}

export default VoteForm
