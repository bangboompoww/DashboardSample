import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
// import Amplify from 'aws-amplify';
// import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
// import { withAuthenticator } from "aws-amplify-react";
// import awsconfig from './aws-exports';
import AdminLayout from "layouts/Admin.jsx";
// Amplify.configure(awsconfig);

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/admin" render={props => <AdminLayout {...props} />} />
                <Redirect from="/" to="/admin/dashboard" />
            </Switch>
        </BrowserRouter>
    )
}

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

