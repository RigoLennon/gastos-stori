import React from 'react'
export default class Collapsible extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(e){
        this.setState({open: !this.state.open})
    }

    render() {
        return (
        <div>
            <div onClick={(e)=>this.togglePanel(e)} className="header">
                hola
            </div>
            {this.state.open ? 
            (
                <div className="content">
                    child
                </div>
            ) 
            : 
            null
            }
        </div>
        );
    }
    }