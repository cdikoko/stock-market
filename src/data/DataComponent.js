import {React, useState} from 'react'
import '../styling/Table.css'

export function DataComponent() {

    const companiesList = JSON.parse(window.localStorage.getItem("data")).sort((a, b) => {
        if (a.exchange < b.exchange) return -1
        if (a.exchange > b.exchange) return 1
        return 0
    })
    const [companies, setCompanies] = useState(companiesList)

    const headers = ['Name', 'Stock Price', 'Number of Empoyees', 'Stock Exchange']

    function handleClick(e) {
        if(e.target.parentElement){
            console.log(e.target.id)
            let elementById = document.getElementById(e.target.id);
            console.log("element", elementById)
            elementById.style.backgroundColor = "red"
        }
    }

    const renderData = (key, idx) => {
        return (
            <tr id={key.name} key={idx} onClick={(e) => handleClick(e)}>
                <td id={key.name}>{key.name}</td>
                <td id={key.name}>{key.stock_price}</td>
                <td id={key.name}>{key.employees}</td>
                <td id={key.name}>{key.exchange}</td>
            </tr>
        )
    }

    function save(e) {
        e.preventDefault()
        console.log("we here")
        let newCompanies = companies.filter(item => {
            if(document.getElementById(item.name).style.backgroundColor === "red"){
                document.getElementById(item.name).style = undefined
                return false;
            }
            return true;
        } )
        setCompanies(newCompanies)
        localStorage.setItem("data", JSON.stringify(companies))
        console.log(newCompanies)
    }

    return (
    <div id="Table">
        <table>
            <thead>
            <tr id="Headers">
                {headers.map((item, idx) => <th key={idx}>{item}</th>)}
            </tr>
            </thead>
            <tbody>
            {companies.map(renderData)}
            </tbody>
        </table>
        <form onSubmit={(e) => save(e)}>
            <button>Save</button>
        </form>
    </div>)

}


export default DataComponent;