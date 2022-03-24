import React, {useEffect} from 'react'
import './admin.css'

import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import adminApi from 'api/adminApi'


const AdminHome = React.lazy(() => import('./Home/Home'))
const AdminOder = React.lazy(() => import('./Order/Order'))
const AdminProduct = React.lazy(() => import('./Product/Product'))
const AdminReport = React.lazy(() => import('./Report/Report'))
const AdminAccount = React.lazy(() => import('./Account/Account'))

export default function Admin() {

    useEffect(() => {
        async function check() {
            try {
                const res = await adminApi.check();
            } catch {
                window.location.href = "/home";
            }
        }

        check();
    }, [])

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Redirect exact from="/admin" to="/admin/dashboard"></Redirect>

                    <Route path="/admin/dashboard" component={AdminHome}></Route>
                    <Route path="/admin/account" component={AdminAccount}></Route>
                    <Route path="/admin/order" component={AdminOder}></Route>
                    <Route path="/admin/product" component={AdminProduct}></Route>
                    <Route path="/admin/report" component={AdminReport}></Route>

                </Switch>
            </BrowserRouter>
        </>
    )
}
