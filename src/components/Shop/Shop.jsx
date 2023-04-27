import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import '../Cart/Cart'
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../Utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

   /*  // useEffect(() =>{
    //     const storedCart = getShoppingCart();
    //     //step 1(get id)
    //     for(const id in storedCart){
    //         // step 2(get the product by using id)
    //         const addedProduct = products.find(product => product.id === id);
    //         console.log(addedProduct);
    //         // step 3(get quantity of product)
    //         const quantity = storedCart[id];
    //         addedProduct.quantity = quantity;
    //         console.log(addedProduct);
    //     }
    // },[products]); */

    useEffect(() =>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
            // console.log('added product', addedProduct);
        }
        setCart(savedCart);
    },[products]);

    const handleAddToCart = (product) => {
        let newCart = [];
    //    const newCart = [...cart, product];
       //if product doesn't exists in the cart, then set the quantity =1
       //if exists update quantity by 1
       const exists = cart.find(pd => pd.id ===product.id);
       if(!exists){
        product.quantity = 1;
        newCart = [...cart, product];
       }
       else{
        exists.quantity = exists.quantity + 1;
        const remaining = cart.filter(pd => pd.id !== product.id);
        newCart = [...remaining, exists];
       }
       setCart(newCart);
       addToDb(product.id);
    }

    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }


    return (
        <div className='shop-container'>
        <div className="product-container">
        {
           products.map(product => <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
            ></Product>)
        }
        </div>
        <div className="cart-container">
        <Cart cart={cart}
        handleClearCart={handleClearCart}
        >
        <Link to="/order">
        <button className='proceed-btn'>Review Order</button>
        </Link>
        </Cart>
        </div>
        </div>
    );
};

export default Shop;