<template>
  <div>
    PLP: {{ data }},
    <Facet store-key="PLP" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Facet from '../Filter/Facet';

export default {
  computed: {
    ...mapState('PLP', ['data'])
  },
  components: {
    Facet
  }
}
</script>

<style>

</style>