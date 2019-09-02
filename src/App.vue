<template>
  <div id="app">
    <div>
      A: {{ getA }}
    </div>
    <div>
      B: {{ getAB }}
    </div>
    <div>
      C: {{ c }}
    </div>
    <div>
      D: {{ getA.d }}
    </div>
    <div>
      AB2: {{ ab2 }}
    </div>
    <button @click="mutateC(x++)">Mutate</button>
    <button @click="mutateD(y++)">MutateD</button>
    <button @click="mutateD2(z++)">MutateD2</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'

let temp;

export default {
  name: 'app',
  data() {
    return {
      x: 1,
      y: 1,
      z: 1
    }
  },
  computed: {
    ...mapState({c : 'c', d: 'a/d' }),
    ...mapGetters(['getA', 'getAB', 'getAB2']),
    ab2 () {
      return this.getAB2(this.y)
    }
  },
  methods: {
    ...mapMutations(['mutateC', 'mutateD', 'mutateD2'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
