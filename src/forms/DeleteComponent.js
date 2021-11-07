import {React, useState} from 'react'
import '../styling/Delete.css'
import DataComponent from "../data/DataComponent";
import {Link} from "react-router-dom";

function DeleteComponent() {
    const [company, setCompany] = useState("")

    function remove(company) {
        let arr = []
        arr = JSON.parse(localStorage.getItem("data"))
        arr.filter(c => c.name !== company)
        alert("updating local storage")
        localStorage.setItem("data", JSON.stringify(arr))
    }

    function handleSubmit(e) {
        remove(company)
        console.log("Company has been removed successfully i think", localStorage.getItem("data"))
    }

    function handleChange(e){
        setCompany(e.target.value)
    }

    return (
        <div>
            <form onSubmit={(e
            ) => handleSubmit(e)}>
                <div className={"delete-company-div"}>
                    <label className={"delete-company-label"}>Enter company name: </label>
                    <input type={"text"} onChange={(e) => handleChange(e)}/>
                    <Link to={"/"}>
                        <input type={"submit"} value={"Submit"}/>
                    </Link>
                </div>
            </form>
            <DataComponent/>
        </div>
    )
}

export default DeleteComponent