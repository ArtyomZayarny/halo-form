import React, {useState, useEffect} from 'react'

const TextArea = ({errorDescription:er,handleChange}) => {
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
        handleChange({name:'description',value:value})
    }

    return (
        <div className="input-wrap description">
            <label className="required">Description</label>
            <textarea name="description"
                     className={ error ? 'error' : ''} 
                     value={value}
                     placeholder="Type text" 
                     onChange={ (e) => {change(e.target.value)}} 
                     onBlur={()=> {handleBlur()}}
            />
            {error && <span className="error-msg">{errorMsg}</span> }
        </div>
    )
}
export default TextArea