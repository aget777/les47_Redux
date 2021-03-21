import { Component } from "react";
import{ connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import GoodPage from "./GoodPage";
import {getAllGoods} from '../models/good.helpers'
import {goodPath} from '../paths'

class GoodListPage extends Component {
    render() {
        const list = this.props.list

        return (
            <div>
                <h2>List of Goods</h2>
                <ul>
                    {list.map(item => (
                        <li key={item.id}>
                            <Link to={goodPath(item.id)}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
                {/* <h4>Good</h4>
                <Switch>
                    <Route path="/good/:id" component={GoodPage} />
                </Switch> */}
            </div>
        )
    }
}


export default connect(
    state=>({
        list: getAllGoods(state),
    })
)(GoodListPage);