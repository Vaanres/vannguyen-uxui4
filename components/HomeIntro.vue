<template>
  <section
    class="section section-intro section-spacing d-flex justify-content-center align-items-center"
    :class="{ reveal: show }"
  >
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 offset-md-2">
          <transition name="slide-up-apple">
            <div v-show="show" class="text-md-center">
              <h6 class="text-white mb-0">
                I've helped companies solve business problems with Designs. I'm
                a bridge between Developers, Designers and Business to connect
                everyone, everything together.
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
  name: `HomeIntro`,
  data() {
    return {
      show: true
    }
  },
  mounted() {
    this.show = false
    this.watchIntersection()
  },
  methods: {
    watchIntersection() {
      const target = document.querySelector('.section-intro')
      const _this = this
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting && !_this.show) {
              _this.show = true
            }
          }
        },
        {
          rootMargin: '0px',
          threshold: 1
        }
      )

      io.observe(target)
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  &-intro {
    --section-reveal-bg-right: 100%;

    position: relative;

    h6 {
      font-weight: 500;
      line-height: 1.5;
    }

    .container {
      z-index: 2;
    }

    &::before {
      z-index: 0;
      position: absolute;
      content: '';
      top: 0;
      bottom: 0;
      right: var(--section-reveal-bg-right);
      left: 0;
      background: $primary;
      transition: all 0.6s var(--ease-primary);
    }

    &.reveal {
      --section-reveal-bg-right: 0%;
    }
  }
}
</style>
