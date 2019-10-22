<template>
  <section>
    <div class="work">
      <home-work-item
        v-for="(item, index) in works"
        :id="index"
        :key="index"
        :item="item"
      />
    </div>
  </section>
</template>

<script>
import HomeWorkItem from '~/components/HomeWorkItem'
import ProjectJSON from '~/static/data/projects.json'

export default {
  name: `HomeWork`,
  components: { HomeWorkItem },
  props: {
    itemQuantity: {
      type: Number,
      default: 8
    }
  },
  data() {
    return {
      projects: ProjectJSON.projects
    }
  },
  created() {
    this.works = this.projects.slice(0, this.itemQuantity)
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
            const item = document.querySelector(`#${entry.target.id} .card`)
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

      document.querySelectorAll('.work-item').forEach((item) => {
        io.observe(item)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@supports (display: grid) {
  .work {
    display: grid;
    position: relative;
    @include media-breakpoint-up(sm) {
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
  }
}
</style>
