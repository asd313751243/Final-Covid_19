import React, {Component} from 'react';

class Form extends Component{

    constructor(){
        super();
        this.state={
            Confimed: 0,
            Deaths: 0,
            Items: []
        }
    }

    componentDidMount(){
        this.GetItems();
    }

    GetItems = () =>{
        fetch("https://covid19.mathdro.id/api/confirmed")
        .then(res => res.json())
        .then(data =>{
            this.setState({Items:data})
        })
    }

    render(){
        console.log(this.state.Items)
        return(
            <div>
                map
            </div>

        )
    }
}

export default Form;