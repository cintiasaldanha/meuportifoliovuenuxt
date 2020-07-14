<template>
  <div class="container">
    <div class="left">
      <h2>
        <NuxtLink  to="/">
          <p>Arquitetura de Sistemas Distribuídos - IEC/PUC - Oferta 13</p>
          <p>Alunos</p> 
        </NuxtLink>
      </h2>
      <ul class="alunos">
        <li v-for="aluno in alunos" :key="aluno.id">
          <NuxtLink :to="'/'+aluno.id">
            {{ aluno.nome }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="right">
      <NuxtChild :key="$route.params.id" />
    </div>
  </div>
</template>

<script>
export default {
  asyncData ({ env }) {
    return { alunos: env.alunos }
  }
}
</script>

<style scoped>

.page-enter-active, .page-leave-active {
  transition: opacity .4s, transform .4s;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  opacity: 1;
}
.page-enter, .page-leave-active {
  opacity: 0.5;
  transform: rotateY(100deg);
}
.container {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  box-sizing: border-box;
}
.left {
  width: 50%;
  position: absolute;
  top: 0;
  left: 0;
}
.right {
  width: 50%;
  position: absolute;
  top: 0;
  right: 0;
}
.alunos {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.alunos li a {
  display: block;
  border: 2px #ddd solid;
  padding: 10px;
  text-align: left;
  color: rgb(50, 148, 155);
  text-decoration: none;
}
.alunos li a:hover {
  color: fuchsia;
}

.tituloCurso{
  color: rgb(50, 148, 155);
}

h2 {
  color: rgb(50, 148, 155);
}


</style>
