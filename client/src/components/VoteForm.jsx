import React from 'react'

function VoteForm(props) {
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
  return (
      <form className="form-Menu">
          <label className="lb" for="Name">Name</label>
          <input name="Name" id="Name" type="text" className="infos" />

          <label for="Descr" className="lb">Description</label>
          <input name="Descr" id="Descr" type="text" className="infos" />

          {options.map((option, index) => (
              <>                    
                  <label for="Option" className="lb">Option{index}</label>
                  <input name="data" id="Option" type="text" className="infos" onChange={(e) => handleOptionChange(index, e)} required />
               </>
    
          ))}
        <div className='option-btns'>
              <button className='btn btnOption' type="submit" onClick={handleAddOption}>Add Option</button>
              <button className='btn btnOption' type="submit" onClick={handleClearOptions}>Clear Option </button> 
        </div>
          <button className='btn btnSend' type="submit">Send</button>
          <button className='btn btnClear' type="reset" onClick={props.hide}>Hide </button>
      </form>
  )
}

export default VoteForm
