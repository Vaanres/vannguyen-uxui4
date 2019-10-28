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
  components: { HomeHero, HomeWork, HomeIntro, Dots },
  head() {
    return {
      title: 'My Work',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My current work'
        }
      ]
    }
  }
}
</script>
<style lang="scss"></style>
