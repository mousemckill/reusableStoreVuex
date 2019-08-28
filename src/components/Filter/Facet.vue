<template>
  <div>Facet <input type="text" :value="filter" @input="handleInput" /></div>
</template>

<script>
import get from 'lodash/get';

export default {
  props: ['storeKey'],
  computed: {
    filter () {
      return get(this.$store.getters, `${this.storeKey}/getFilter`)
    }
  },
  methods: {
    setFilter (value) {
      return this.$store.dispatch(`${this.storeKey.replace('.', '/')}/setFilter`, value)
    },
    handleInput (e) {
      const { value } = e.target

      this.setFilter(value)
    }
  }
}
</script>

<style>
</style>