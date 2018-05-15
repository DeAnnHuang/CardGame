import * as types from './mutations_type.js'

// state
export const state = {
    image_root: 'https://picsum.photos/300/300?image=',
    cards: [
        {
            id: 1,
            imgName: '1084',
            opened: false
        }, {
            id: 2,
            imgName: '1084',
            opened: false
        }, {
            id: 3,
            imgName: '345',
            opened: false
        }, {
            id: 4,
            imgName: '345',
            opened: false
        }, {
            id: 5,
            imgName: '579',
            opened: false
        }, {
            id: 6,
            imgName: '579',
            opened: false
        }, {
            id: 7,
            imgName: '991',
            opened: false
        }, {
            id: 8,
            imgName: '991',
            opened: false
        }, {
            id: 9,
            imgName: '995',
            opened: false
        }, {
            id: 10,
            imgName: '995',
            opened: false
        }, {
            id: 11,
            imgName: '95',
            opened: false
        }, {
            id: 12,
            imgName: '46',
            opened: false
        }, {
            id: 13,
            imgName: '68',
            opened: false
        }, {
            id: 14,
            imgName: '1083',
            opened: false
        }, {
            id: 15,
            imgName: '1023',
            opened: false
        }, {
            id: 16,
            imgName: '987',
            opened: false
        }
    ]
}

// mutations
export const mutations = {
    // action 發出 commit 會對應到 mutation 使用的是 Object key 方式
    [types.TOGGLE_OPENED](state, card_id) {
        // 在 mutation 改變 state（只有 mutation 可以改變！）
        let card = state.cards.find((item)=> item.id == card_id);
        // console.log(card);
        card.opened = !card.opened;
    },
}