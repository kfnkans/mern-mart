1/26/23  
public 
src >
    assets > data > (products.js serviceData.js) 
    components  
              Footer > Footer.jsx footer.css
              Header > Header.jsx header.css
              Helmet > Helmet.js
              Layout > Layout.jsx 
              UI > Clock.jsx CommonSection.jsx ProductCard.jsx ProductsList.jsx

    custom-hooks useAuth.js
    pages > Cart.jsx Checkout.jsx Home.jsx Login.jsx ProductDetails.jsx Shop.jsx Signup.jsx
    redux > | store.js
          slices >  
          cartSlice.js |
    routers >  ProtectedRoute.js Routers.js
    services > Services.jsx services.css
    styles > cart.css checkout.css clock.css common-section.css home.css login.css product-card.css product-details.css shop.css
    App.css App.js firebase.config.js index.js


npx create-react-app@latest name-of-app 
npm i bootstrap reactstrap framer-motion react-dom react-redux react-router-dom remixicon

Delete all of the files in the src folder except for App.css App.js index.css index.js 
App.js should be this 
import './App.css';

function App() {
  return (
    <h1>Hello World!</h1>
  );
}

export default App; 


index.js 
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


Routers are the 1st file and folder we create after editing out some of the boilerplate stuff (rafce within the Routers.js file)  
Then we create a components folder 
Then a pages folder --> Home.jsx


npm i @reduxjs/toolkit  








index.js  
I mistakenly had App outside of the BrowserRouter
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
); 

{
  <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">} 


  https://fkhadra.github.io/react-toastify/introduction/  



  1/22/23 
  Changed App.css 
    -instead of placing the the padding property in the img, I put it in the section element 

  In Index.js 
    I nested the App/ inside of the Provider element rather than beside it. 
    I made the Toast Container beside the Provider element 



