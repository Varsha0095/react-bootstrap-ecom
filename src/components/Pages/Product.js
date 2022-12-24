import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MainHeader from "../Header/MainHeader";
import Data from "../Data/Data";
import classes from '../Pages/Product.module.css';

const Product = (props) => {
    const params = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        getProduct();
    })
    const getProduct = () => {
        const newProduct = Data.find((data) => data.id === params.id);
        console.log(params);
        console.log(newProduct);
        setProduct(newProduct);
    }

    return (
        <React.Fragment>
            <MainHeader />
            <Card style={{width: '27rem',height: '27rem' , margin: 'auto', marginTop: '40px'}}>
                <Card.Title style={{textAlign: 'center', fontSize: 'xx large'}}>{product?.title}</Card.Title>
                <Card.Body>
                    <img alt="product" src={product?.imageUrl} className={classes.productImg} />
                  <Card.Text><h5>Price: ${product?.price}</h5></Card.Text>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default Product;