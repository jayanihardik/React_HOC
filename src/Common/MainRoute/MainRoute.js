import React from 'react'
import { Switch, Route } from "react-router-dom";
import Container from '@material-ui/core/Container';

import Counter from '../../Components/Counter'
import NavBar from '../../Common/Navbar'

const MainRoute = () => {
    return (
        <>
            <NavBar />
            <Container maxWidth="lg" className="margin-30">
                <Switch>
                    <Route exact path="/" component={Counter} />
                    <Route exact path="/Counter" component={Counter} />
                </Switch>
            </Container>
        </>
    )
}

export default MainRoute
