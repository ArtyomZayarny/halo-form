import React,{useState, useEffect} from 'react';


const InputNumber = ({errorPeople:er,handleChange}) => {
    const [error,setError] = useState(false)
    const [errorMsg,setErrorMsg] = useState('');
    const[value,setValue] = useState('');

    useEffect( () => {
        if (er) {
            setError(true);
            setErrorMsg('This field in required')
        }
    },[er])
    
    const handleBlur = () => {
        if (value) {
            return false
        } else {
            setError(true);
            setErrorMsg('This field in required')
        }
    }
    const change = (value) => {

        if (error) {
            setError(false);
            setErrorMsg('')
        }

        setValue(value)
        if (1 <= parseInt(value) && parseInt(value) <= 99) {
            handleChange({name:'people',value:parseInt(value)})
        } else if (value === "") {
            setError(false)
            setErrorMsg('')
        }else {
            setError(true)
            setErrorMsg('Please enter number from 1 to 99')
        }
    }
    return (
        <div className="input-wrap people">
            <label className="required">Number of people</label>
            <input   type="text"
                     name="people"
                     className={ error ? 'error' : ''} 
                     value={value}
                     placeholder="1-99" onChange={ (e) => {change(e.target.value)}}
                     onBlur={()=> {handleBlur()}}
                     />
                    {error && <span className="error-msg">{errorMsg}</span> }
        </div>
    )
}
export default InputNumber