import React, {useState,useEffect}  from 'react'

const BusinessInput = ({errorBusiness:er,handleChange}) => {
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
        handleChange({name:'business',value:value})
       
    }

    return (
        <div className="input-wrap business">
            <label className="required">Business area</label>
            <input    name="business"
                     className={ error ? 'error' : ''} 
                     value={value}
                     placeholder="Design, Marketing, Development, etc." 
                     onChange={ (e) => {change(e.target.value)}}
                     onBlur={()=> {handleBlur()}}
            />
            {error && <span className="error-msg">{errorMsg}</span> }
        </div>

    )
}
export default BusinessInput;