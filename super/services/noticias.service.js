import { api } from './config'

export default {
    retornarNoticias() {            
        return api.get('/news')
        // return request({
        //     url: '/news',
        //     method: 'get',
        // })
    },

    retornarServico() { //ok            
        //return api.get('/atendente/retornarServicos/'+id)
        // return request({
        //     url: '/atendente/retornarServicos/',
        //     method: 'get'
        // })
    },
}