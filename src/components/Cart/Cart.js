import React from 'react';
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Cart = ({cart}) => {
    return (
        <div>
            <h4>Order Summary</h4>

            <p>Selected Items: {cart.length}</p>
            <p>Total Price: $</p>
            <p>Total Shipping Charge: $</p>
            <p>Tax: $</p>

            <h5>Grand Total: $</h5>

            <button>
                <span>Clear Cart</span>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </button>
            <br />
            <button>
                <span>Review Order</span>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Cart;