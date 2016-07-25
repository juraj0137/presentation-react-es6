import React from "react";

export default class List extends React.Component {

    render() {
        return (
            <ul>
                {
                    this.props.items.map((item, i) => {
                        return (<li key={i}>{item}</li>);
                    })
                }
            </ul>
        );
    }

}