import {
    SET_FIRST,
    SET_SECOND,
    SET_THIRD,
    SET_FOURTH
} from './type/mutations'

import {
    FETCH_FIRST,
    FETCH_SECOND,
    FETCH_THIRD,
    FETCH_FOURTH

} from './type/actions'

import {
    ResultService,

} from '../common/service/api.js'



const initialState = {
    first: unlock,
    second: lock,
    third: lock,
    forth: lock

}

const state = { ...initialState }

const mutations = {

    [](state) {
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