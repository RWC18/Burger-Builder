import React, {Component} from  'react';
import Aux from  '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class  Layout  extends Component {
    state ={
        showSideDrawer: false
    };

    SideDrawerClosedhandler = () => {
        this.setState({showSideDrawer: false})
    };

    SideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    };

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler}/>
                <SideDrawer closed={this.SideDrawerClosedhandler} open={this.state.showSideDrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;