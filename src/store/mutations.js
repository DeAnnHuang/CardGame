import * as types from './mutations_type.js'

// state
export const state = {
    cards: [
        {
            id: 1,
            imgName: '7',
            opened: false
        }, {
            id: 2,
            imgName: '7',
            opened: false
        }, {
            id: 3,
            imgName: '9',
            opened: false
        }, {
            id: 4,
            imgName: '9',
            opened: false
        }, {
            id: 5,
            imgName: '10',
            opened: false
        }, {
            id: 6,
            imgName: '10',
            opened: false
        }, {
            id: 7,
            imgName: '11',
            opened: false
        }, {
            id: 8,
            imgName: '11',
            opened: false
        }, {
            id: 9,
            imgName: '12',
            opened: false
        }, {
            id: 10,
            imgName: '12',
            opened: false
        }, {
            id: 11,
            imgName: '8',
            opened: false
        }, {
            id: 12,
            imgName: '2',
            opened: false
        }, {
            id: 13,
            imgName: '3',
            opened: false
        }, {
            id: 14,
            imgName: '4',
            opened: false
        }, {
            id: 15,
            imgName: '5',
            opened: false
        }, {
            id: 16,
            imgName: '6',
            opened: false
        }
    ],
    compare_zone: [],
    right_set: 0,
    mapCardQuestion:[
        {
            imgName: '7',
            question: '1'
        },
        {
            imgName: '9',
            question: '3'
        },
        {
            imgName: '10',
            question: '5'
        },
        {
            imgName: '11',
            question: '2'
        },
        {
            imgName: '12',
            question: '4'
        },
    ],
    msg:'Start!'
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
            var qObj = state.mapCardQuestion.find(item =>item.imgName == a);
            state.msg = `Bingo! Please answer Q${qObj.question}`
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
    [types.UPDATE_MSG](state,msg) {
        state.msg = msg
    },

}