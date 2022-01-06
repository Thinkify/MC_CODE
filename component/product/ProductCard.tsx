import React from 'react';
import Button from '../common/Button';
const ProductCard = ({ values }) => {
    return <>
        <div className="d-flex align-items justify-content-center border-1 m-3" key={values}>
            <div className="card-container">
                <div className="product-card-header">
                    <div className="product-image">
                        <img src="https://wabisabiproject.com/wp-content/uploads/woocommerce-placeholder.png" />
                    </div>
                    <div className="title-container">
                        <div className="title clr-grey">
                            <span>Product Name</span>
                        </div>
                        {/* <div className="quantity">
                            <div className="clr-grey" style={{marginBottom:"10px"}}>Quantity:0</div>
                            <span className="quantity-btn bg-red">+</span>
                            <span className="quantity-btn bg-green">-</span>
                        </div> */}
                    </div>
                    <div className="product-card-footer">
                        <div className="product-buttons d-flex">
                            <Button text="Add to cart" primary={true} customClass="m-4" />
                            <Button text="Buy Now" primary={true} customClass="m-4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ProductCard