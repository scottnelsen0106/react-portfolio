import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../HomePage/HomePage';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
    </Switch>
)

export default Main;