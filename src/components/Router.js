import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import App from "../App";
import Meal from "./Meal";

const Router = ()=>(
   <BrowserRouter>
       <Switch>
           <Route path ="/" exact>
               <App/>
           </Route>
           <Route path ="/meal/:id">
               <Meal/>
           </Route>
       </Switch>
   </BrowserRouter>
)
export default Router