<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        Meu Portifólio
      </h1>
      <div>
        <img class="img-perfil" src="..\static\Perfil.png"  alt="Perfil" /> 
      </div>      
      <div class="links">
        <a
          href="https://www.linkedin.com/in/cintia-saldanha-057b1a3b//"
          target="_blank"
          class="button--green">Cintia Saldanha</a>
        <a
          href="https://github.com/cintiasaldanha/meuportifolionuxt"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
      <div>
        <p>CSM® | CSPO® | Especialista em Desenvolvimento de Aplicações para Dispositivos Móveis</p>
        <p>Pós-Graduação em Desenvolvimento de Aplicações para Dispositivos Móveis - PUC/MG - 2016 – 2017</p>
        <p>Bacharel em Ciência da Computação - UFMG - 1994 – 1997</p>
      </div>
      <h2 class="subtitle">
        Experiências e Habilidades
      </h2>
      <div class="div-habilidades">        
        <p>Empresa: Banco Mercantil do Brasil</p>
        <p>Cargo: Analista de Sistemas Sênior</p>
        <p>Jun. de 2011 – o momento</p>
        <p>Atividades:</p>
        <p>- Responsável pelo desenvolvimento e manutenção do Mobile Banking – app e serviços que compõem a solução do Banco Mercantil para dispositivos móveis: levantamento e especificação de requisitos com adoção de práticas ágeis / proposição e definição de arquitetura de projetos, com experiência em padrões SOA, APIs Restfull, Azure Cloud Services, .Net e Java.</p>
        <p>- Atuação na solução Internet Banking: levantamento e especificação de requisitos /proposição e definição de arquitetura em ambiente compostos por componentes .Net e Java / testes funcionais.</p>
        <p>- Atuação em desenvolvimento de funcionalidades que compõem sistemas de automação bancária: rede de agências e redes parceiras de autoatendimento.</p>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 32px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

