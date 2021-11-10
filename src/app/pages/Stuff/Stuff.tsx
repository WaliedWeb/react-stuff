import React from "react"
import { useParams } from 'react-router-dom';

function Stuff(): JSX.Element {
    const params = useParams();
    return <h2>{params.stuff}</h2>;
}

export default Stuff;