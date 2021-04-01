import './App.scss';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth} from './firebase';

import {
    Home,
    MyOrders,
    Profile,
    Bags,
    BagDetails,
    News,
    NewsDetail,
    Collection,
    CollectionDetail,
    OurStory,
    Contact,
    DesignDetails,
    DesignYourOwn,
    DesignCustomize,
    Cart,
    Checkout,
    LoginModal,
    SignupModal,
} from './components/index';
import { Footer, Header } from './layouts';


function App() {
    const [use] = useAuthState(auth);
   
    return (
        <Router>
            {!use ? (
                <LoginModal />
            ) : ( 
                <>
              
                <Header />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/design-your-own" component={DesignYourOwn} exact={true} />
                <Route path="/design-your-own/:bagName/details" component={DesignDetails} />
                <Route path="/design-your-own/:bagName/customize" component={DesignCustomize} />
                <Route path="/my-orders" component={MyOrders} exact={true} />
                <Route path="/bags" component={Bags} exact={true} />
                <Route path="/bags/:bagName/details" component={BagDetails} />
                <Route path="/profile" component={Profile} />
                <Route path="/news" component={News} exact={true} />
                <Route path="/news/:newsId/details" component={NewsDetail} />
                <Route path="/collections" component={Collection} exact={true} />
                <Route path="/collections/:collectionId/details" component={CollectionDetail} />
                <Route path="/our-story" component={OurStory} />
                <Route path="/contact-us" component={Contact} exact={true} />
                <Route path="/cart" component={Cart} />
                <Route path="/checkout" component={Checkout} exact={true} />
                <Route path="/Signup" component={SignupModal} exact={true} />
            </Switch>
            <Footer/>   
                </>
            )}
           
        </Router>
       
    );
}

export default App;
