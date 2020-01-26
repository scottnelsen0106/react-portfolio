import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../HomePage/HomePage';
import Projects from '../Projects/Projects';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/projects" component={Projects} />
        
    </Switch>
)

export default Main;