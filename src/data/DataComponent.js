import { React, useState } from 'react'
import { readFromCache, writeToCache } from '../common/cache'
import '../styling/Table.css'
import { Table, Button } from 'react-bootstrap'

export function DataComponent() {

    const companiesList = readFromCache('data').sort((a, b) => {
        if (a.exchange < b.exchange) return -1
        if (a.exchange > b.exchange) return 1
        return 0
    })
    const [companies, setCompanies] = useState(companiesList)

    const headers = ['Name', 'Stock Price', 'Number of Empoyees', 'Stock Exchange']

    function handleClick(e) {
        if (e.target.parentElement) {
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

    //delete selected item
    function deleteItem() {
        console.log("we here")
        let newCompanies = companies.filter(item => {
            if (document.getElementById(item.name).style.backgroundColor === "red") {
                document.getElementById(item.name).style = undefined
                return false;
            }
            return true;
        })
        writeToCache('data', newCompanies)
        setCompanies(newCompanies)
    }

    return (
        <div className="table-wrapper">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr id="Headers">
                        {headers.map((item, idx) => <th key={idx}>{item}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {companies.map(renderData)}
                </tbody>
            </Table>
            <Button onClick={() => deleteItem()}>
                Delete
            </Button>
        </div>
    )

}


export default DataComponent;