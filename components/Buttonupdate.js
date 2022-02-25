import Link from 'next/link';
import React from "react";
import Form from "react-bootstrap/Form";


function Buttonupdate(props) {


    return (

        <div className="myWidget" >
            <h1 id={props.id}>{props.name}</h1>
            <div className="widgetContent">

            <h6>All over web</h6>

            <Form.Check
                type="switch"
                id="custom-switch"
                className="form-check-switch "
                name="showQuantity"
                defaultChecked
            />
            </div>

            <Link href={`/button/${props.id}`} key={props.id} >
                <a> <button type="button" className="btn create-btn shadow-none buttonupdate">
                    Edit
                </button></a>
            </Link>
        </div>

    );
}

export default Buttonupdate;
