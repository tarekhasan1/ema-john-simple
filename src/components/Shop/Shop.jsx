import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import '../Cart/Cart'
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../../public/fakedb';

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
       const newCart = [...cart, product];
       setCart(newCart);
       addToDb(product.id);
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
        <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Shop;