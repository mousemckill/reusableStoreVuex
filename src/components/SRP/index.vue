<template>
  <div>
    SRP: {{ data }}
    <Facet store-key="SRP" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Facet from '../Filter/Facet';

export default {
  computed: {
    ...mapState('SRP', ['data'])
  },
  components: {
    Facet
  }
}
</script>

<style>

</style>