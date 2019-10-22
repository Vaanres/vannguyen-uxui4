<template>
  <div class="section section-dots bg-bottom position-relative"></div>
</template>

<style lang="scss" scoped>
.section {
  &.section-dots {
    height: 50vh;

    @include media-breakpoint-up(md) {
      height: 30vh;
    }
  }
}
</style>
