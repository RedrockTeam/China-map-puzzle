import {
    APOST_GRADE,
    ACHECK_RANK

} from './type/actions'

import {
    ApiService,

} from '../common/service/api.js'
import {
    POST_GRADE
} from './type/mutations'

const mutations = {
    [POST_GRADE](state,time){
        
    }
}
const actions = {
    async [APOST_GRADE](context, time) {
        let m = ApiService.post('/success', time)
        context.commit([POST_GRADE])
    },
    async [APOST_GRADE](context, time) {
        let m = ApiService.post('/success', time)
        context.commit([POST_GRADE])
    }
}
export default {
    mutations,
    actions,
}