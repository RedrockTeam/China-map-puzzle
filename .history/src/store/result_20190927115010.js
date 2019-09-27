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
    first_flag: 'unlock',
    second_flag: 'success',
    third_flag: 'unlock',
    forth_flag: 'unlock'

}

const state = { ...initialState }

const mutations = {

    [SET_FIRST](state) {
        state.first_flag = 'success',
            state.second_flag = 'unlock',
            console.log('yiguan')

    },
    [SET_SECOND](state) {
        state.second_flag = 'success',
            state.third_flag = 'unlock'
        console.log('erguan')

    },
    [SET_THIRD](state) {
        state.third_flag = 'success',
            state.forth_flag = 'unlock'
        console.log('sanguan')

    },
    [SET_FOURTH](state) {
        state.forth_flag = 'success'
        console.log('forthguan')
    }
}






const getters = {


}



export default {
    state,
    mutations,
    getters
}