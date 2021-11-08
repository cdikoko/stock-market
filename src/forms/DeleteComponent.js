import { React, useState } from 'react'
import '../styling/Delete.css'
import DataComponent from "../data/DataComponent";
import { useHistory } from "react-router-dom";
import { readFromCache, writeToCache } from '../common/cache';

function DeleteComponent() {
    const [company, setCompany] = useState("")

    const history = useHistory()

    function remove(company) {
        let arr = readFromCache('data')
        arr = arr.filter(c => {
            console.log(c)
            console.log(company)
            return c.name !== company
        })
        console.log(arr)
        writeToCache('data', arr)
    }

    function handleSubmit(e) {
        console.log(e)
        e.preventDefault()
        remove(company)
        console.log("Company has been removed successfully i think", readFromCache('data'))
        // history.push('/')
    }

    return (    
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="delete-company-div">
                    <label className="delete-company-label">Enter company name: </label>
                    <input type="text" onChange={(e) => setCompany(e.target.value)} />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <DataComponent />
        </div>
    )
}

export default DeleteComponent