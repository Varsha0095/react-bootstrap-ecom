import { Button } from "react-bootstrap";

const SeeCartButton = props => {
    return (
        <Button variant="warning" onClick={props.onShow}>See Cart</Button>
    )
};

export default SeeCartButton;