<template>
  <header class="container header">
    <b-navbar type="dark" class="px-0">
      <b-navbar-brand to="/">
        <img
          class="header__logo d-inline-block align-top"
          src="/logo.svg"
          alt="Van Nguyen - Product Designer"
        />
        <h6 class="d-inline-block mb-0 ml-3">Van N.</h6>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            v-for="(item, index) in links"
            :id="index"
            :key="index"
            :to="item.link"
            class="header__link"
            >{{ item.title }}</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      links: [
        {
          title: 'My Work',
          link: '/'
        },
        {
          title: 'About Me',
          link: '/about'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.header {
  &__logo {
    width: 36px;
    height: 36px;
  }

  .nav-item {
    & ~ .nav-item {
      margin-left: 2rem;
    }
  }
}
</style>
