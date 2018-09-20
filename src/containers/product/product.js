import React, { Component } from 'react';
import '../../css/product.css';

// import { Provider } from 'react-redux';


import Shelf from '../../components/shelf/shelf';
// import Footer from '../components/Footer';
// import FloatCart from './../components/floatCart/FloatCart';

// import store from '../store';
// import Corner from '../components/github/Corner';


class Product extends Component {
  render() {
    return (
       
    //   <Provider store={store}>
        <div className="product">
         <h1>product</h1>
         {/* <FloatCart /> */}
        
           {/* <Corner /> */}
          <main>
            <Shelf />
          </main>
           {/* <Footer /> */}
          {/* <FloatCart />  */}
          
        </div>
    //   </Provider>
    )
  }
}

export default Product;
