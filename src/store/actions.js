// 引入 mutations_type （引用同一個 key）
import * as types from './mutations_type.js'

export const handleCardClick = ({
    commit,
    state
}, card_id) => {

    // if card is already opend...
    let card = state
        .cards
        .find(i => i.id == card_id)
    if (!card.opened && state.compare_zone.length < 2) {

            commit(types.CARD_OPENED, card_id);
            commit(types.ADD_COMPARE_ZONE, card_id);

            if (state.compare_zone.length == 2) {
                setTimeout(function () {
                    commit(types.COMPARE);
                    commit(types.CLEAR_COMPARE_ZONE);
                }, 2000);
            }
    }
}

export const openAllCards = ({commit}) =>{
    commit(types.OPEN_ALL_CARDS);
}

export const closeAllCards = ({commit}) =>{
    commit(types.CLOSED_ALL_CARDS);
}