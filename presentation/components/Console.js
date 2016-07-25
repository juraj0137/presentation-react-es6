import './console.css'
import React from 'react';
import {
    ListItem, List
} from "../../src";

export default class MyConsole extends React.Component {
    render() {
        const rows = this.props.rows.map(row => {
            return (
                <ListItem>{row}</ListItem>
            );
        });

        return (
            <div className="console">
                <List className="console">
                    {rows}
                </List>
            </div>
        )
    }
}
