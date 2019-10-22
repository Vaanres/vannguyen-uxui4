<template>
  <main>
    <HomeHero />
    <HomeIntro />
    <HomeWork />
    <Dots />
  </main>
</template>

<script>
import HomeHero from '~/components/HomeHero'
import HomeWork from '~/components/HomeWork'
import HomeIntro from '~/components/HomeIntro'
import Dots from '~/components/Dots'

export default {
  components: { HomeHero, HomeWork, HomeIntro, Dots }
}
</script>
<style lang="scss"></style>
