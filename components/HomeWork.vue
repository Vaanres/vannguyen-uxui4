<template>
  <section>
    <div class="work">
      <home-work-item
        v-for="item in works"
        :id="item.id"
        :key="item.id"
        :item="item"
        :aspect-ratio="aspectRatio"
      />
    </div>
  </section>
</template>

<script>
import $ from 'jquery'
import HomeWorkItem from '~/components/HomeWorkItem'
import ProjectJSON from '~/static/data/projects.json'

export default {
  name: `HomeWork`,
  components: { HomeWorkItem },
  props: {
    itemQuantity: {
      type: Number,
      default: 12
    }
  },
  data() {
    return {
      aspectRatio: 'embed-responsive-4by3',
      projects: ProjectJSON.projects,
      works: []
    }
  },
  created() {
    this.works = this.projects.slice(0, this.itemQuantity)
  },
  mounted() {
    // getData()
    if (this.isMobile()) {
      this.aspectRatio = 'embed-responsive-1by1'
    }
  },
  methods: {
    watchIntersection() {
      // Deprecated. Use IntersectionObserver inside child element.

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
    },
    getData() {
      // Deprecated
      const _this = this

      $.ajax({
        url:
          'https://www.behance.net/v2/users/Vaanres/projects?api_key=A3XrFvC6jnX6dLGSipermgOApEKZ6AU6',
        type: 'GET',
        async: true,
        crossDomain: true,
        dataType: 'jsonp',
        xhrFields: {
          withCredentials: true
        },
        success(data) {
          _this.works = data.projects.slice(0, _this.itemQuantity)
        },
        error() {}
      })
    }
  }
}
</script>

<style lang="scss">
@supports (display: grid) {
  .work {
    display: grid;
    position: relative;
    grid-template-columns: repeat(1, 1fr);

    @include media-breakpoint-up(xl) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1920px) {
      grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
    }
  }
}
</style>
