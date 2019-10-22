<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
    <div class="is-mobile d-block d-sm-none"></div>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: { Header, Footer }
}
</script>
<style lang="scss"></style>
