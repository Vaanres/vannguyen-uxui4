<template>
  <footer class="footer container py-3 small">
    <div class="row">
      <div class="col-12 col-md-6 mb-2 mb-md-0">
        <div class="d-flex">
          <nuxt-link class="v-link" to="/">My Work</nuxt-link>
          <nuxt-link class="v-link" to="/about">About Me</nuxt-link>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="d-flex justify-content-md-end">
          <a
            v-for="(item, index) in socialLinks"
            :id="index"
            :key="index"
            class="v-link d-flex align-items-center"
            target="_blank"
            :href="item.link"
            rel="noopener"
            :title="item.tooltip"
            >{{ item.title }}</a
          >
        </div>
      </div>
      <div class="col-12">
        <hr class="bg-dark" />
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-12 col-md-6 text-white-50">
        Copyright © 2019 Van Nguyen. All rights reserved.
      </div>
      <div class="col-12 col-md-6">
        <div class="d-flex justify-content-md-end">
          <a
            v-for="(item, index) in contactLinks"
            :id="index"
            :key="index"
            class="v-link d-flex align-items-center"
            target="_blank"
            :href="item.link"
            rel="noopener"
            :title="item.tooltip"
          >
            <i class="material-icons md-16 mr-1">{{ item.icon }}</i>
            {{ item.title }}
          </a>
        </div>
      </div>
    </div>
    <div class="row pb-5 pb-sm-0"></div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      socialLinks: [
        {
          title: 'Behance',
          link: 'https://www.behance.net/Vaanres',
          tooltip: 'See my work on Behance.com'
        },
        {
          title: 'Dribbble',
          link: 'https://dribbble.com/Vaanres',
          tooltip: 'See my work on Dribbble.com'
        },
        {
          title: 'LinkedIn',
          link: 'https://www.linkedin.com/in/nguyen-le-van/',
          tooltip: 'View my profile'
        }
      ],
      contactLinks: [
        {
          title: 'Vaanres@gmail.com',
          link: 'mailto:vaanres@gmail.com',
          tooltip: 'Send an email to me',
          icon: 'mail_outline'
        },
        {
          title: '+84 866 485 946',
          link: 'tel:+84866485946',
          tooltip: 'Call me',
          icon: 'call'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.footer {
  .v-link ~ .v-link {
    margin-left: 1rem;
  }
}
</style>
