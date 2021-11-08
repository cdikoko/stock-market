import NavbarComponent from "../nav/NavbarComponent";
import { Route, Switch } from "react-router-dom";
import CompanyComponent from "../components/CompanyComponent";
import { DataComponent } from "../data/DataComponent";
import RegistrationComponent from "../forms/RegistrationComponent";
import React from "react";
import DeleteComponent from "../forms/DeleteComponent";

function RouterComponent() {
    return (
        <div>
            <NavbarComponent />
            <Switch>
                <Route exact path="/company">{CompanyComponent}</Route>
                <Route exact path="/company/view" component={DataComponent} />
                <Route exact path="/company/register" component={RegistrationComponent} />
                <Route exact path="/company/delete" component={DeleteComponent} />
            </Switch>
        </div>
    )

}

export default RouterComponent