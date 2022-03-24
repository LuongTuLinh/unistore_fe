import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import NotFound from 'components/NotFound/NotFound'
import Header from "components/Header/Header"
import Footer from "components/Footer/Footer"

import HomePage from "pages/Home/Home"
import ProductPage from 'pages/Products/Products'
import BlogPage from 'pages/Blog/Blog'
import LoginPage from 'pages/Login/Login'
import SignupPage from 'pages/Signup/Signup'
import DetailsPage from 'pages/Details/Details'
import CartPage from 'pages/Cart/Cart'
import CheckoutPage from 'pages/Checkout/Checkout'

import 'assets/styles/style.css';
import './App.css';

// Lazy load - Code spliting
// const Home = React.lazy(() => import('./pages/Home/Home'))
// const Blog = React.lazy(() => import('./pages/Blog/Blog'))
// const Gallery = React.lazy(() => import('./pages/Gallery/Gallery'))
// const Login = React.lazy(() => import('./pages/Login/Login'))
// const Signup = React.lazy(() => import('./pages/Signup/Signup'))
// const Products = React.lazy(() => import('./pages/Products/Products'))
// const Details = React.lazy(() => import('./pages/Details/Details'))
// const Cart = React.lazy(() => import('./pages/Cart/Cart'))

//ADMIN
// const AdminHome = React.lazy(() => import('./pages/Admin/Home/Home'))
// const AdminOder = React.lazy(() => import('./pages/Admin/Order/Order'))
// const AdminProduct = React.lazy(() => import('./pages/Admin/Product/Product'))
// const AdminReport = React.lazy(() => import('./pages/Admin/Report/Report'))
// const AdminAccount = React.lazy(() => import('./pages/Admin/Account/Account'))

const Admin = React.lazy(() => import('./pages/Admin/Admin'))


export default function App() {
	return (
		<div>

   
			<Suspense fallback={<div></div>}>
				<BrowserRouter>
          {/* <Header /> */}

          <Switch>
            {/* <Route path="/home" component={Headerr}></Route> */}
            <Redirect exact from="/" to="/home"></Redirect>

            {/* Client */}
            <Route path="/home">
              <Header/>
              <HomePage/>
              <Footer />
            </Route>
            <Route path="/catalog" >
              <Header/>
              <ProductPage/>
              <Footer />
            </Route>
            <Route path="/blog" >
              <Header/>
              <BlogPage/>
              <Footer />
            </Route>
            <Route path="/gallery" >
              <Header/>
              <NotFound/>
              <Footer />
            </Route>
            <Route path="/login" >
              <Header/>
              <LoginPage/>
              <Footer />
            </Route>
            <Route path="/signup" >
              <Header/>
              <SignupPage/>
              <Footer />
            </Route>
            <Route path="/details" >
              <Header/>
              <DetailsPage/>
              <Footer />
            </Route>
            <Route path="/cart" >
              <Header/>
              <CartPage/>
              <Footer />
            </Route>
            <Route path="/checkout" >
              <Header/>
              <CheckoutPage/>
              <Footer />
            </Route>

            {/* Admin */}
            {/* <Redirect exact from="/admin" to="/admin-dashboard"></Redirect> */}

            <Route path="/admin" component={Admin}></Route>
            {/* <Route path="/admin-dashboard" component={AdminHome}></Route>
            <Route path="/admin-account" component={AdminAccount}></Route>
            <Route path="/admin-oder" component={AdminOder}></Route>
            <Route path="/admin-product" component={AdminProduct}></Route>
            <Route path="/admin-report" component={AdminReport}></Route> */}

            {/* Not found */}
            <Route component={NotFound}>
              <Header/>
              <NotFound/>
              <Footer />
            </Route>
          </Switch>

          {/* <Footer /> */}
				</BrowserRouter>
			</Suspense>
		</div>
	)
}
