import * as types from './mutations_type.js'

// state
export const state = {
    image_root: 'https://picsum.photos/200/200?image=',
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
    ],
    compare_zone: [],
    right_set: 0
}

// mutations
export const mutations = {
    [types.CARD_OPENED](state, card_id) {
        let card = state
            .cards
            .find((item) => item.id == card_id);

        card.opened = true;
    },
    [types.ADD_COMPARE_ZONE](state, card_id) {
        let card = state
            .cards
            .find((item) => item.id == card_id);

        state
            .compare_zone
            .push(card);
    },
    [types.COMPARE](state) {
        var a = state.compare_zone[0].imgName;
        var b = state.compare_zone[1].imgName;

        if (a !== b) {
            state
                .compare_zone
                .forEach(element => {
                    let Id = element.id;
                    let card = state
                        .cards
                        .find((i) => {
                            return i.id == Id
                        })
                    card.opened = false
                });
        }else{
            state.right_set++;
        }
    },
    [types.CLEAR_COMPARE_ZONE](state) {
        state.compare_zone = [];
    },
    [types.OPEN_ALL_CARDS](state) {
        state
            .cards
            .forEach((item) => {
                item.opened = true
            })
    },
    [types.CLOSED_ALL_CARDS](state) {
        state
            .cards
            .forEach((item) => {
                item.opened = false
            })
    },

}