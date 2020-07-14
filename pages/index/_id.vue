<template>
  <div class="aluno">
    <h1>#{{ id }}</h1>
    <h2>{{ nome }}</h2>
    <h3>{{ habilidades }}</h3>
    <h4>{{ experiencia }}</h4> 
    <div class="links">
       <a :href= lnkLinkedin target="blank" class="button--green">LinkedIn</a>
    </div>
  </div>
</template>

<script>
export default {
  validate ({ params }) {
    return !isNaN(+params.id)
  },
  asyncData ({ params, env, error }) {
    const aluno = env.alunos.find(aluno => String(aluno.id) === params.id)
    if (!aluno) {
      return error({ message: 'Aluno não encontrado', statusCode: 404 })
    }
    return aluno
  },
  head () {
    return {
      title: this.nome
    }
  }
}
</script>

<style scoped>
.aluno {
  text-align: center;
  margin-top: 100px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 12pt;
  color: rgb(159, 120, 196);
}

.div-imagem-perfil{
  text-align:center;
}

.img-perfil{
  width:100px;
}

</style>

