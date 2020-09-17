import React from 'react';
import './Description.css';

class Description extends React.Component<{content: string, width: string}, {}> {
    render() {
        return (
            <p className="Description" style={{width: this.props.width}}>
                {this.props.content}
            </p>
        )
    }
}
    

export default Description;