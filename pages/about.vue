<template>
  <main>
    <section
      class="section section-spacing-x section-dots bg-top intro d-flex justify-content-center align-items-sm-center"
    >
      <div class="container text-white-50">
        <div class="row">
          <div class="col-12 col-md-8 intro-content">
            <transition name="slide-up-apple">
              <div v-show="show" style="transition-delay: 150ms">
                <p class="intro__tagline tag-line text-primary">
                  Product Designer
                </p>
                <h1 class="intro__title mb-5 text-light">Van Nguyen</h1>
                <p class="intro__subtitle">
                  Living in Ho Chi Minh City. I have the passion for creating
                  beautiful and usability UI, taking it from conception to real
                  application.
                </p>
                <p class="intro__subtitle">
                  I always get excited when learning new things, updating myself
                  with the latest development technology and catching the new
                  UI/UX trend to bring a breath of fresh air my projects.
                </p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-spacing experience">
      <div class="container text-white-50">
        <div class="row">
          <div class="col-12">
            <h2 class="text-light section-title">My Experience</h2>

            <section class="row experience-item">
              <div class="col-12 col-md-4 mb-3 mb-sm-0 experience-item__comp">
                <b-img-lazy
                  fluid
                  src="/img/comp/logo_company_vietlinkads_darkmode.svg"
                  alt="Vielink"
                  class="mb-3"
                />
                <p class="text-white-50">
                  <small>May 2018 – Present</small>
                </p>
              </div>
              <div class="col-12 col-md-8">
                <h5 class="mb-3 text-light">UX/UI Design Lead</h5>
                <ul class="list-unstyled">
                  <li>
                    Lead a team to maintain the internal style guide and
                    implement new design patterns in our products on web and
                    mobile.
                  </li>
                  <li>
                    Lead the team creating and implementing a design system for
                    the companyIdentify design problems and find out solutions.
                  </li>
                  <li>
                    Create wireframes mockups and prototypes that lead to
                    intuitive user experiences for most products of the company,
                    oversee products specs and host design review meeting with
                    stakeholders.
                  </li>
                  <li>
                    Work directly with PM and GM and collaborate closely with
                    our development team.
                  </li>
                </ul>
              </div>
            </section>
            <section class="row experience-item">
              <div class="col-12 col-md-4 mb-3 mb-sm-0 experience-item__comp">
                <b-img-lazy
                  fluid
                  src="/img/comp/logo_company_ivivu.svg"
                  alt="Vielink"
                  class="mb-3"
                />
                <p class="text-white-50">
                  <small>Jun 2015 – April 2018</small>
                </p>
              </div>
              <div class="col-12 col-md-8">
                <h5 class="mb-3 text-light">UX/UI Team Lead</h5>
                <ul class="list-unstyled">
                  <li>
                    Responsible for new look and feel on front-end/back-end
                    pages of iVIVU. From concepts on paper to Sketch App,
                    designs and HTML/CSS/JS implementation.
                  </li>
                  <li>
                    Helped to increase conversion rate (overall pages).
                    Optimized usability and loading speed on most important
                    pages.
                  </li>
                  <li>
                    Responsible for building conversation flows for a chatbot in
                    Facebook Messenger and built web & mobile design for chatbot
                    App.
                  </li>
                  <li>
                    Responsible for managing a team to develop products and
                    services
                  </li>
                </ul>
              </div>
            </section>
            <section class="row experience-item">
              <div class="col-12 col-md-4 mb-3 mb-sm-0 experience-item__comp">
                <b-img-lazy
                  fluid
                  src="/img/comp/logo_company_buffalotours.svg"
                  alt="Vielink"
                  class="mb-3"
                />
                <p class="text-white-50">
                  <small>Aug 2013 – Jun 2015</small>
                </p>
              </div>
              <div class="col-12 col-md-8">
                <h5 class="mb-3 text-light">UX/UI Design & Development</h5>
                <ul class="list-unstyled">
                  <li>
                    Maintained and developed front-end Victoria Hotels website.
                    Analyzed and improved UI/Page speed of Buffalo Tours
                    website.
                  </li>
                  <li>
                    Responsible for backend app/website UX / UI. Designed and
                    built responsive, usability pages based on Twitter
                    Bootstrap. Created email templates based on Foundation.
                  </li>
                  <li>
                    Tasked to Design and Develop Company's Internal and External
                    Website.
                  </li>
                </ul>
              </div>
            </section>
            <section class="row experience-item">
              <div class="col-12 col-md-4 mb-3 mb-sm-0 experience-item__comp">
                <p class="text-white-50">
                  <small>Aug 2011 – Aug 2013</small>
                </p>
              </div>
              <div class="col-12 col-md-8">
                <h5 class="mb-3 text-light">Front-end Developer</h5>
                <ul class="list-unstyled">
                  <li>
                    Worked with Orange HRM to build front-end customized module.
                    Built Joomla templates for my team.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
    <Dots />
  </main>
</template>

<script>
import Dots from '~/components/Dots'

export default {
  name: `About`,
  components: { Dots },
  head() {
    return {
      title: 'About me',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'About me'
        }
      ]
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
<style lang="scss">
.intro {
  min-height: calc(100vh - 60px);
  position: relative;

  &__subtitle {
    font-weight: 500;
    line-height: 1.5;
    font-size: 1.3rem;
  }

  @include media-breakpoint-down(xs) {
    &-content {
      margin-top: 50%;
    }
  }
}

.experience {
  &-item {
    &__comp {
      img {
        width: 33%;
      }
    }

    ul {
      li ~ li {
        margin-top: 0.5rem;
      }
    }
  }

  &-item ~ &-item {
    margin-top: 4rem;
  }
}
</style>
