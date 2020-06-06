import React, {useState} from 'react'
import '../index.css'
import InputFile from './Inputs/InputFile'
import InputNumber from './Inputs/IputNumber'
import InputText from './Inputs/InputText';
import TextArea from './Inputs/TextArea'
import BusinessInput from './Inputs/BusinessInput';


export default function Form () {
    const [company,setCompany] = useState('');
    const [people,setPeople] = useState('')
    const [business,setBusiness] = useState('')
    const [description,setDescription] = useState('');
    const [errorPeople,setErrorPeople] = useState(false) 
    const [errorBusiness,setErrorBusiness] = useState(false) 
    const [errorDescription,setErrorDescription] = useState(false);


    const handleSubmit = (e) => {
       e.preventDefault();
       const serializeData = {}
       if (people === '') {
            setErrorPeople(true)
       }
       if (business === '') {
        setErrorBusiness(true)
            }
       if (description === '') {
        setErrorDescription(true)
        }

        if (people && business && description) {
            serializeData.company = company;
            serializeData.people = people;
            serializeData.business = business;
            serializeData.description = description;
            console.log(serializeData)
        }
    }

    const handleChange = ({name,value}) => {
       switch (name) {
           case 'company':
               setCompany(value);
               break;
               case 'people':
                   setPeople(value)
               break;
               case 'business':
                   setBusiness(value)
               break;
               case 'description':
                   setDescription(value)
               break;
               default:return false

       }
    }

    return (
        <>
    
        <h1>Your first Project</h1>
        <ul>
            <li><span>1</span></li>
            <li><span>2</span></li>
            <li><span className='active'>3</span></li>
        </ul>
        <form onSubmit={(e) => {handleSubmit(e)}}>
            <InputText handleChange={handleChange}/>
            <InputNumber handleChange={handleChange} errorPeople={errorPeople}/>
            <BusinessInput handleChange={handleChange} errorBusiness={errorBusiness}/>
            <TextArea handleChange={handleChange} errorDescription={errorDescription}/>
            <InputFile handleChange={handleChange}/>
            <div className="btn-area">
                <button >Submit</button>
            </div>
        </form>
        </>
    )
}