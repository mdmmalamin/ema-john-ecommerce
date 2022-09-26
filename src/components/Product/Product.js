import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = props => {
    const {name, seller, price, ratings, img} = props.product;
    // const {handlerAddToCart} = props;
    // console.log(props);
    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className='product-info'>
                    <p className='product-name'>{name}</p>
                    <p className='price'>Price: ${price}</p>
                
                    <p><small>Manufacturer: {seller}</small></p>
                    <p><small>Rating: {ratings} start</small></p>
            </div>
            <button onClick={() => props.handlerAddToCart(props.product)} className='btn-cart'>
                <span>Add to Cart</span>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;