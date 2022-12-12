import React from 'react';

class TextBox extends React.Component { 
    constructor(props) {
        super(props);

        this.autoSize = this.autoSize.bind(this);
    }

    autoSize(event) {
        const box = event.target;
        const fontSize = parseFloat(window.getComputedStyle(box).fontSize);
        box.style.height = 'auto';
        var newHeight = (box.scrollHeight < (this.props.max + 1) * fontSize ? box.scrollHeight : (1 + this.props.max) * fontSize);
        box.style.height = newHeight.toString() + 'px';
    };
    
    render() {
        return (
            <textarea placeholder={this.props.placeholder} onChange={this.autoSize} rows={this.props.min} className={this.props.className}></textarea>
        )
    }
}

export default TextBox;