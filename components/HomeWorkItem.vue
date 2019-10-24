<template>
  <div :id="workItemId" class="work-item embed-responsive" :class="aspectRatio">
    <div class="embed-responsive-item">
      <div class="card position-relative h-100">
        <a
          :id="item.id"
          class="card-content d-block h-100 text-decoration-none"
          target="_blank"
          rel="noreferrer"
          :href="item.url"
        >
          <div
            class="card-text position-absolute d-flex flex-column justify-content-between p-5 h-100"
          >
            <div class="d-flex"></div>
            <div class="d-flex">
              <h3 class="text-light m-0">{{ item.name }}</h3>
            </div>

            <div class="d-flex">
              <p class="text-white-50 m-0">
                <small>{{ item.fields.join(' • ') }}</small>
              </p>
            </div>
          </div>

          <div
            class="card-play position-absolute d-flex w-100 h-100 justify-content-center align-items-center"
          >
            <div class="d-inline-flex p-3 rounded-circle card-play__icon">
              <i class="material-icons md-48 text-light">arrow_forward</i>
            </div>
          </div>
          <div
            v-lazy:background-image="imagePath"
            class="card-image position-absolute"
          ></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `HomeWorkItem`,
  props: {
    id: {
      type: Number,
      default: 0
    },
    aspectRatio: {
      type: String,
      default: 'embed-responsive-4by3'
    },
    item: {
      type: Object,
      default() {}
    }
  },
  data() {
    return {
      styleObject: {
        backgroundImage: `url('${this.item.covers['404']}')`
      }
    }
  },
  computed: {
    workItemId() {
      return `work-item-${this.id}`
    },
    imagePath() {
      return `img/work/${this.id}.png`
      // return this.item.covers['808']
    }
  },
  mounted() {
    if (this.isMobile()) {
      this.watchIntersection()
    }
  },
  methods: {
    watchIntersection() {
      // const _this = this
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const item = document.querySelector(`#${this.workItemId} .card`)
            if (entry.isIntersecting) {
              item.classList.add('reveal')
            } else {
              item.classList.remove('reveal')
            }
          }
        },
        {
          rootMargin: '0px',
          threshold: 1
        }
      )

      io.observe(document.getElementById(this.workItemId))
    }
  }
}
</script>

<style lang="scss" scoped>
.work-item {
  // desktop variables

  --card-image-opacity: 0.3;
  --card-image-scale: 1;
  --card-image-height: 70%;
  --card-image-width: 70%;
  --card-image-position-top: 15%;
  --card-image-position-left: 15%;
  --card-play-opacity: 0;
  --card-play-translate-x: -2rem;
  --card-text-opacity: 1;
  --card-text-translate-x: 0;

  @include media-breakpoint-down(sm) {
    // mobile variables
    --card-text-opacity: 1;
    --card-image-opacity: 0;
    --card-image-height: 100%;
    --card-image-width: 100%;
    --card-image-position-top: 0;
    --card-image-position-left: 0;
    --card-image-scale: 1;
    --card-play-opacity: 0;
    --card-play-translate-x: -1rem;

    & ~ .work-item {
      border-top: 1px solid var(--dark);
    }
  }

  .card {
    &-content {
      box-sizing: border-box;
      overflow: hidden;
      z-index: 1;
      @include positioning(0, 0, 0, 0);
    }

    &-text {
      @include positioning(0, 0, 0, 0);
      z-index: 2;
      opacity: var(--card-text-opacity);
      transform: translateX(var(--card-text-translate-x));
      transition: all 0.3s ease-in;
    }

    &-image {
      --img-cover-bottom: 0;

      position: relative;
      z-index: 1;
      height: var(--card-image-height);
      width: var(--card-image-width);
      top: var(--card-image-position-top);
      left: var(--card-image-position-left);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: top center;
      opacity: var(--card-image-opacity);
      transform: scale(var(--card-image-scale));
      transition: all 0.3s ease-out, transform 15s var(--ease-apple-image);

      &::after {
        @include positioning(0, 0, 0, 0);
        position: absolute;
        content: '';
        background: black;
        z-index: 1;
        transition: all 0.5s var(--ease-primary);
        bottom: var(--img-cover-bottom);
      }

      &[lazy='loaded'] {
        &::after {
          --img-cover-bottom: 100%;
        }
      }
    }

    &-play {
      z-index: 3;
      opacity: var(--card-play-opacity);
      transform: translate(var(--card-play-translate-x));
      transition: all 0.3s ease-out;
      transition-delay: 0.2s;

      .rounded-circle {
        backdrop-filter: saturate(180%) blur(10px);
      }

      &__icon {
        z-index: 3;
        background: transparentize($color: black, $amount: 0.5);
      }
    }

    &.reveal {
      --card-image-opacity: 1;
      --card-image-scale: 1.1;
      --card-text-opacity: 0;
      --card-play-opacity: 1;
      --card-play-translate-x: 0;
    }

    @include media-breakpoint-up(sm) {
      &:hover {
        --card-text-opacity: 0;
        --card-image-opacity: 1;
        --card-image-scale: 1.1;
        --card-play-opacity: 1;
        --card-play-translate-x: 0;
        --card-image-position-top: 0;
        --card-image-position-left: 0%;
        --card-image-height: 100%;
        --card-image-width: 100%;
        --card-text-translate-x: 2rem;
      }
    }
  }
}
</style>
