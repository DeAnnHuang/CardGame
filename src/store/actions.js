// 引入 mutations_type （引用同一個 key）
import * as types from './mutations_type.js'

export const ToggleOpened = ({ commit }, card_id) => {
//   console.log('Toggle Opend');
  commit(types.TOGGLE_OPENED, card_id);
}
