import React from 'react';
import './bestsellers.css';
import { Row, Col } from 'react-grid-system';

function BestSellers({products}){
    console.log("proooducts", products)
    return (
        <>

                <Row className='best_seller_producs'>
                    <Col className='best_seller_product' sm={3}>
                    <a href="/">
                        <div className="product_image">
                            <img src={require("../Assets/Images/tshirt1.jfif")} alt="" />
                        </div>
                        
                        <div className="product_price">
                            100$
                        </div>
                        <div className="product_info">
                            Smartfon Xiaomi Redmi 10C 4GB/128GB Ocean Blue
                        </div>
                    </a>
                    </Col>
                    <Col className='best_seller_product' sm={3}>
                    <a href="/">
                        <div className="product_image">
                            <img src={require("../Assets/Images/tshirt1.jfif")} alt="" />
                        </div>
                        
                        <div className="product_price">
                            100$
                        </div>
                        <div className="product_info">
                            Smartfon Xiaomi Redmi 10C 4GB/128GB Ocean Blue
                        </div>
                    </a>
                    </Col>
                    <Col className='best_seller_product' sm={3}>
                    <a href="/">
                        <div className="product_image">
                            <img src={require("../Assets/Images/tshirt1.jfif")} alt="" />
                        </div>
                        
                        <div className="product_price">
                            100$
                        </div>
                        <div className="product_info">
                            Smartfon Xiaomi Redmi 10C 4GB/128GB Ocean Blue
                        </div>
                    </a>
                    </Col>
                    <Col className='best_seller_product' sm={3}>
                    <a href="/">
                        <div className="product_image">
                            <img src={require("../Assets/Images/tshirt1.jfif")} alt="" />
                        </div>
                        
                        <div className="product_price">
                            500$
                        </div>
                        <div className="product_info">
                            Smartfon Xiaomi Redmi 10C 4GB/128GB Ocean Blue
                        </div>
                    </a>
                    </Col>

                    <Col className='best_seller_product' sm={3}>
                    <a href="/">
                        <div className="product_image">
                            <img src={require("../Assets/Images/tshirt1.jfif")} alt="" />
                        </div>
                        
                        <div className="product_price">
                            100$
                        </div>
                        <div className="product_info">
                            Smartfon Xiaomi Redmi 10C 4GB/128GB Ocean Blue
                        </div>
                    </a>
                    </Col>
                    <Col className='best_seller_product' sm={3}>
                    <a href="/">
                        <div className="product_image">
                            <img src={require("../Assets/Images/tshirt1.jfif")} alt="" />
                        </div> 
                        
                        <div className="product_price">
                            100$
                        </div>
                        <div className="product_info">
                            Smartfon Xiaomi Redmi 10C 4GB/128GB Ocean Blue
                        </div>
                    </a>
                    </Col>
                    <Col className='best_seller_product' sm={3}>
                    <a href="/">
                        <div className="product_image">
                            <img src={require("../Assets/Images/tshirt1.jfif")} alt="" />
                        </div>
                        
                        <div className="product_price">
                            100$
                        </div>
                        <div className="product_info">
                            Smartfon Xiaomi Redmi 10C 4GB/128GB Ocean Blue
                        </div>
                    </a>
                    </Col>
                    <Col className='best_seller_product' sm={3}>
                    <a href="/">
                        <div className="product_image">
                            <img src={require("../Assets/Images/tshirt1.jfif")} alt="" />
                        </div>
                        
                        <div className="product_price">
                            500$
                        </div>
                        <div className="product_info">
                            Smartfon Xiaomi Redmi 10C 4GB/128GB Ocean Blue
                        </div>
                    </a>
                    </Col>
                </Row>



            <div className='container best_seller_products'>

                {/* {products.map(product=>product.sale >= 40 ? <img alt='' src={require(`../Assets/Images/${product.img}`)} /> : '')} */}
            </div>
        </>
    )
}

export default BestSellers