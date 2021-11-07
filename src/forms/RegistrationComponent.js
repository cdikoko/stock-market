import "../styling/Registration.css"
import {useState} from "react";
import {Company} from "../model/Company";
//this is going to be a controlled component - we are going to have react manage the form data
function RegistrationComponent() {

    //this is how we manage the state
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [exchange, setExchange] = useState("")

    function getNewCompany(employees){
        return new Company(name, exchange, employees, price)
    }
    //the form will have events that need to be managed as well for example on change will call setName etc

    //event handlers in a functional component need to be a function
    //ES6 class component - just handlerName but you need to bind it if using this.handlerName in onSubmit
    function handleSubmit(e) {
        e.preventDefault()
        let temp = JSON.parse(localStorage.getItem("data"))
        temp.push(getNewCompany(1))
        console.log(temp)
        localStorage.setItem("data", JSON.stringify(temp))
    }

    return (<div className={"registration-form"}>
        <form onSubmit={handleSubmit}>
            <div className={"registration-form-fields"}>
                <label>name</label>
                <input onChange={v => setName(v.target.value)} type={"text"} value={name}/>
                <label>exchange</label>
                <input onChange={v => setExchange(v.target.value)} type={"text"} value={exchange}/>
                <label>price</label>
                <input onChange={v => setPrice(v.target.value)} type={"text"} value={price}/>
            </div>
            <input type={"submit"}  />
        </form>
    </div>)


}


export default RegistrationComponent