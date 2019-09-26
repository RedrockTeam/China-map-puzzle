import {


} from './type/mutations'

import {

} from './type/actions'

import {
    ResultService,

} from '../common/service/api.js'

const initialState = {
    questionIndex: 1,



}

const state = { ...initialState }

const mutations = {

    [REDUCE_INDEX](state) {
        state.questionIndex -= 1;
        let index = state.questionIndex;
        let result = state.choosedList[index]
        state.choosedNum = result - 1
    }


}


const actions = {
    async[FETCH_FIRST_ANSWER]({ commit }, params) {

        let { data } = await ResultService.getFirstAnswer(params)
        console.log(data)
        commit(SET_FIRST_ANSWER, data)

    },


}

const getters = {


}



export default {
    state,
    mutations,
    actions,
    getters
}