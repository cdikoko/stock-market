// import {createContext, useState} from "react";
// import {Company} from "../model/Company";
// import Data from "../data/data";
//
// const data = Data
// export const DataContext = createContext(data)
// export const DataProvider = ({children}) => {
//
//     const [getCompanies, setCompanies] = useState(data)
//     console.log("lets now get the companies" , getCompanies)
//     function addCompany(company) {
//         let companies = ([...data, company])
//         console.log("companies", companies)
//         setCompanies(companies)
//         return companies
//     }
//
//     return <DataContext.Provider values={{getCompanies, addCompany}}>{children}</DataContext.Provider>
// }
//
// export default DataProvider