import { Component } from "react";
import {connect} from 'react-redux';
import { getGoodFromAllGoods } from "../models/good.helpers";
import { goodsReducer } from "../models/goods";

class GoodPage extends Component {
    constructor(){
        super();
        this.goBack = this.goBack.bind(this);
    }

    goBack(){
        this.props.history.goBack()
    }


    render() {
        // const {all, match} = this.props;
        // const id = Number(match.params.id)
        // const good = all.find(item => item.id === id)
        
        const {good, match} = this.props;
        
        if(!good){
            return this.renderNotFoundError()
        }

        return (
            <div>
                <br/><button onClick={this.goBack}>back</button>
                <h4>Товар #{good.id} {good.title}</h4><br/>
                {/* <h4>Товар #{id} {good.title}</h4><br/> */}
                {/* My count value: {this.props.count}
                <button onClick={this.props.increment}>+1</button>
                <button onClick={this.props.decrement}>-1</button> */}
            </div>
        )
    }
    renderNotFoundError(){
        return (
            <div>Good not found</div>
        )
    }
}







export default connect(
    (state, props) => ({
        good: getGoodFromAllGoods(state, props.match.params.id),
        })
)(GoodPage)