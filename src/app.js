import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { withAuthenticator } from "aws-amplify-react";
import AdminLayout from "layouts/Admin.jsx";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/admin" render={props => <AdminLayout {...props} />} />
                <Redirect from="/" to="/admin/dashboard" />
            </Switch>
        </BrowserRouter>
    )
}

export default App

/*export default function App() {
    return (
        <AmplifyAuthenticator>
            <div>
                <MainApp />
                <AmplifySignOut />
            </div>
        </AmplifyAuthenticator>
    )
}*/

//export default withAuthenticator(MainApp, true)

