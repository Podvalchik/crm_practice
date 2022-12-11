import React from "react";
import './RowTable.scss'
const RowTable = (props) => {
    return (
            <tbody>
            <tr>
                <th>{props.name}</th>
                <th>{props.date}</th>
                <th>{props.topic}</th>
            </tr>
            </tbody>

    );
};

export default RowTable;
