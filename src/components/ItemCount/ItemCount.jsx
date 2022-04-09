import { Component } from "react";
import './itemCount.css';

class ItemCount extends Component{
    constructor(props){
        super(props);
        this.state = { count: 0 };
    }
    componentDidMount(){
        setTimeout(()=>{
            console.log('El componente se ha montado despues de 3 seg')
        }, 3000)
    }
    componentDidUpdate(){
        console.log('Se ha re-renderizado el componente')
    }
    

    render(){
        return(
            <div className="d-flex justify-content-center flex-column align-items-center">
                <button className="btn btn-primary" onClick={()=> this.setState({count: this.state.count + 1})}> + </button>
                <p className="count">You clicked {this.state.count} times!</p>
                <button className="btn btn-primary" onClick={()=> this.setState({count: this.state.count - 1})}> - </button>
            </div>
        )
    }
}
export default ItemCount;
