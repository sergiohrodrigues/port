// import { INotificacao } from '@/interfaces/INotificacao'
import { defineStore } from 'pinia'

interface EstadoUsuario {
    // token: string,
    // carregado: boolean,
    // subtitulo: string,
    produtoSelecionado: boolean,
    // notificacoes: INotificacao[]
}

export const usuarioStore = defineStore('usuario', {
    state: (): EstadoUsuario => ({
        // token: '',
        // carregado: false,
        // subtitulo: '',
        produtoSelecionado: false,
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
        PRODUTO_SELECIONADO(situacao: boolean) {
            this.produtoSelecionado = situacao
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
