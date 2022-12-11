import React from "react";
import './Applications.scss'
import RowTable from "../row_table/RowTable";
const Applications_table = (props) => {
    let table = props.data.applications_table.map(
        obj => <RowTable name = {obj.name} date = {obj.date} topic = {obj.topic} />);
    return (

        <div className = 'header-name'>
            <p>Входящие заявки</p>
            <table className = 'table' >
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Дата</th>
                        <th>Тема заявки</th>
                    </tr>
                </thead>
                {table}
            </table>
        </div>

    );
};

export default Applications_table;
