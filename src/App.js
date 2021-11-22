// import logo from './logo.svg';
import './App.css';
import Hader from './components/Hader/Hader';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import SingleTest from './components/ServiceCard/SingleTest/SingleTest';
import Login from './components/Login/Login';
import AuthProvider from './components/context/AuthProvider';
// import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/AboutUs/Contact/Contact';
import Services from './components/AboutUs/Services/Services';
import Faq from './components/Faq/Faq';
import Privet from './components/PrivetRoute/Privet';
import PageNotFound from './components/PageNotFound/PageNotFound';
// import PrivetRoute from './components/PrivetRoute/PrivetRoute';

function App() {
  return (
    <div className="App">

     <AuthProvider>
     <BrowserRouter>
     <Hader></Hader>
     <Switch>   
      <Route exact path='/home'>
        <Home></Home>
      </Route>
      <Route exact path='/'>
        <Home></Home>
      </Route>
      <Privet exact path='/singletest:ids'>
        <SingleTest></SingleTest>
      </Privet>
      <Privet exact path='/singletest'>
        <SingleTest></SingleTest>
      </Privet>
      <Route exact path='/login'>
        <Login></Login>
      </Route>
      <Route exact path='/contact'>
      <Contact></Contact>
      </Route>
      <Privet exact path='/services'>
      <Services></Services>
      </Privet>
      <Route exact path='/faq'>
      <Faq></Faq>
      </Route>
      <Privet path='/aboutus'>
        <AboutUs></AboutUs>
      </Privet>
      <Route exact path='*'>
       <PageNotFound></PageNotFound>
      </Route>
      
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>


    </div>
  );
}

export default App;
