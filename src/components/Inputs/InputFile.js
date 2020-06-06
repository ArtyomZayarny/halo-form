import React,{useState} from 'react'


const InputFile = () => {
    const [count,setCount] = useState(0);

    const handleChange = (target) => {
            setCount(target.files.length)
    }

    return (
        <div className="attach">
            <div className="icon">
                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.7 3.725H21.6C22.9236 3.725 24 4.8026 24 6.125V18.125C24 19.4486 22.9236 20.525 21.6 20.525H2.4C1.0764 20.525 0 19.4486 0 18.125V2.525C0 1.2026 1.0764 0.125 2.4 0.125H7.8C8.5512 0.125 9.27 0.4838 9.72 1.085L11.7 3.725ZM2.4 2.525V18.125H21.6012L21.6 6.125H11.7C10.9488 6.125 10.23 5.7662 9.78 5.165L7.8 2.525H2.4ZM11.0571 8.35391H12.9428V11.1825H15.7714V13.0682H12.9428V15.8968H11.0571V13.0682H8.22851V11.1825H11.0571V8.35391Z" fill="#333333"/>
                </svg>
                <span>Add file as attachment</span> 
            </div>
            <input multiple type="file" id="myFile" name="filename" onChange={(e) => {handleChange(e.target)}}/>
            <span className="counter">{count} files attached</span>
        </div>
    )
}
export default InputFile