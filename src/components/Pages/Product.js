import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MainHeader from "../Header/MainHeader";
import Data from "../Data/Data";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

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
            <Card style={{width: '27rem',height: '32rem' , margin: 'auto', marginTop: '20px'}}>
                <Card.Title style={{textAlign: 'center', fontSize: 'xx large'}}>{product?.title}</Card.Title>
                <Card.Body>
                    <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200} >
                        <TransformComponent>
                    <Card.Img style={{width: '25rem', height: '25rem'}} src={product?.imageUrl} />
                    </TransformComponent>
                    </TransformWrapper>
                  <Card.Text><h5>Price: ${product?.price}</h5></Card.Text>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default Product;