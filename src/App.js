import React, { Component } from "react";
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
        <div className="app">
           <Header />
            <div className="app-body app-body pub">
                <div className="container">
                    {/* Insert here your App Code */}
                </div>
            </div>
            <Footer />
        </div>
    );
  }
}

export default App;
