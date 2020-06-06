import React from 'react';


const InputText = ({handleChange}) => {
    return (
        <div className="input-wrap company">
            <label>Your company name</label>
            <input type="text" name="company" placeholder="Type text" onChange={(e)=> {handleChange(e.target)}}/>
        </div>
    )
}
export default InputText