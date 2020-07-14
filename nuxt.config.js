module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt - Portifólio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Exercício 2 - AFE - Arquitetura de Front Ends' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
    env: {
      alunos: [
        { id: 1, nome: 'Cintia Saldanha', habilidades: 'CSM® | CSPO® | Especialista em Desenvolvimento de Aplicações para Dispositivos Móveis' , experiencia: 'Banco Mercantil do Brasil - Desde Junho 2011 - Responsável pelo desenvolvimento da solução Mobile Banking', lnkLinkedin:'https://www.linkedin.com/in/cintia-saldanha-057b1a3b//'},
        { id: 2, nome: 'Rubens Agnelo', habilidades: 'Especialista em Desenvolvimento de Aplicações para Dispositivos Móveis', experiencia:'Banco Mercantil do Brasil - Desde Junho 2010 - Responsável pelo desenvolvimento da solução Mobile Banking',lnkLinkedin:'https://br.linkedin.com/in/rubensagnelo'}
      ]
    },
    generate: {
      routes: [
        '/1',
        '/2'
      ]
    }
  }
  


