import "./App.css"
import Header from './components/common/heading/Header'
import { BrowserRouter as Router, Switch, Route , } from "react-router-dom"
import About from "./components/about/About"
import Home from "./components/home/hero/Home"
import ServicesHome from "./components/allServices/ServicesHome.jsx";
import Team from "./components/common/Team/Team.jsx"
import Blog from "./components/Blog/Blog.jsx"
import Testimonal from "./components/home/testimonal/Testimonal.jsx"
import Pricing from "./components/pricing/Pricing.jsx"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/footer.jsx"
import Login from "./components/logo/login.jsx"
import CVUploadForm from "./components/cv-upload/CVUploadForm.jsx"
import RegistrationForm from "./components/registration/RegistrationForm.jsx"
import JobDescriptionForm from "./components/JobForm/JobDescriptionForm.jsx"
import FinancialOffer from "./components/FinancialOffer/FinancialOffer.jsx"



function App()  {
  return (
  <>
 
    <Router>
       <Header/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/Services' exact component={ServicesHome}/>
        <Route path='/team' exact component={Team}/>
        <Route exact path='/Blog' component={Blog} />
        <Route path="/testimonal" element={Testimonal} />
        <Route exact path='/pricing' component={Pricing} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/cv-upload' component={CVUploadForm} />
        <Route exact path='/logo' component={Login} />
        <Route exact path='/registration' component={RegistrationForm} />
        <Route exact path='/JobForm' component={JobDescriptionForm} />
        <Route exact path='/FinancialOffer' component={FinancialOffer} />
      </Switch>
      <Footer/>
    </Router>
  </>
  )
}

export default App;