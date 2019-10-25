<template>
  <section
    class="section section-hero section-dots bg-top section-spacing-x d-flex justify-content-center align-items-sm-center"
  >
    <div class="container">
      <div class="row">
        <div class="col-12 section-hero-content">
          <transition name="slide-up-apple">
            <div
              v-show="show"
              class="text-md-center"
              style="transition-delay: 150ms"
            >
              <p class="text-primary tag-line">I AM A</p>
              <h1 class="title text-light mb-4">Product Designer</h1>
              <h6 class="sub-title text-white-50">
                I combine STRATEGY, TECHNOLOGY and DESIGN to solve problems
              </h6>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: `HomeHero`,
  data() {
    return {
      show: false
    }
  },
  mounted() {
    this.show = true
  }
}
</script>

<style lang="scss" scoped>
.section {
  &-hero {
    min-height: calc(100vh - 60px);
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-image: url('~assets/img/banners/banner.jpg?webp');
    transition: all 1s var(--ease-apple-image);

    @include media-breakpoint-down(xs) {
      background: url('~assets/img/banners/banner-mobile.jpg?webp');

      &-content {
        margin-top: 50%;
      }
    }

    .sub-title {
      line-height: 1.5;
    }
  }
}
</style>
