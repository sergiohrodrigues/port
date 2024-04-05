// import { INotificacao } from '@/interfaces/INotificacao'
import { defineStore } from 'pinia'

interface EstadoUsuario {
    // token: string,
    // carregado: boolean,
    // subtitulo: string,
    darkmode: boolean,
    // notificacoes: INotificacao[]
}

export const usuarioStore = defineStore('usuario', {
    state: (): EstadoUsuario => ({
        // token: '',
        // carregado: false,
        // subtitulo: '',
        darkmode: true,
        // notificacoes: []
    }),
    actions: {
        // DEFINIR_TOKEN(token: string) {
        //     this.token = token
        // },
        // CARREGANDO_ALGO(carregado: boolean) {
        //     this.carregado = carregado
        // },
        // SUBTITULO_PAGINA(subtitulo: string) {
        //     this.subtitulo = subtitulo
        // },
        DARK_MODE(situacao: boolean) {
            this.darkmode = situacao
        }
        // NOTIFICAR(novaNotificacao: INotificacao, tempoEmSegundos = 5) {

        //     if(this.notificacoes.length < 2){
        //         novaNotificacao.id = new Date().getTime()
        //         this.notificacoes.push(novaNotificacao)

        //         setTimeout(() => {
        //             this.notificacoes = this.notificacoes.filter(notificacao => notificacao.id != novaNotificacao.id)
        //         }, tempoEmSegundos * 1000)
        //     }

        // }
    }
})
