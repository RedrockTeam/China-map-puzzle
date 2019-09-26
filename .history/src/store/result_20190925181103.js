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

    [SET_FIRST](state) {
        state.first = success,
            state.second = unlock,
            console.log('ok')

    },
    [SET_SECOND](state) {
        state.second = success,
            state.third = unlock

    },
    [SET_THIRD](state) {
        state.third = success,
            state.forth = unlock

    },
    [SET_FOURTH](state) {
        state.forth = success


    }


}






const getters = {


}



export default {
    state,
    mutations,
    actions,
    getters
}