export function getGoodFromAllGoods(state, id){
    const all = getAllGoods(state);
    return all.find(item => item.id === Number(id))
}


export function getAllGoods(state){
    return state.goods.items;
}