<template>
  <main class="error-page">
    <section
      class="section section-spacing-x d-flex justify-content-center align-items-center h-100"
    >
      <div class="container text-white-50">
        <div class="row">
          <div class="col-12">
            <transition name="slide-up-apple">
              <div v-show="show">
                <h1 v-if="error.statusCode === 404" class="text-light">
                  Page not found
                </h1>
                <h1 v-else>An error occurred</h1>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      default: ''
    }
  },
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
main {
  &.error-page {
    height: calc(100vh - calc(61px + 125px));
  }
}
</style>
