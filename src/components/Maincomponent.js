import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null,
        };
    }

    onDishSelect(dishId) {
        this.renderDish(this.props.dishes[this.props.selectedDish])
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                />
            );
        }
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Header />
                <Switch>

                    <Route path='/home' component={HomePage} />

                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />

                    <Redirect to="/home" />

                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;