<template>
  <div>
    <!-- <nav
      id="sideNav"
      class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      xstyle="z-index: -1;"
    >
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">Damien Robinson</span>
        <span class="d-none d-lg-block">
          <img
            class="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="img/profile.jpg"
            alt=""
          />
        </span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#experience"
              >Experience</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education"
              >Education</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#interests"
              >Interests</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#awards">Awards</a>
          </li>
        </ul>
      </div>
    </nav> -->

    <div class="container p-0">
      <section
        id="about"
        class="resume-section p-3 p-lg-5 d-flex align-items-center"
      >
        <div class="w-100">
          <h1 class="mb-0">
            Damien
            <span class="text-primary">Robinson</span>
          </h1>
          <div class="subheading mb-5">
            <!-- 3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 · -->
            <a href="mailto:damien.robinson@pocketpasta.com"
              >damien.robinson@pocketpasta.com</a
            >
          </div>
          <p class="lead mb-5">
            I am experienced in leveraging agile frameworks to provide a robust
            synopsis for high level overviews. Iterative approaches to corporate
            strategy foster collaborative thinking to further the overall value
            proposition.
          </p>
          <div class="social-icons">
            <a href="https://github.com/shadow81627">
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <a href="https://www.linkedin.com/in/damien-robinson-788925101">
              <font-awesome-icon :icon="['fab', 'linkedin-in']" />
            </a>
            <a href="https://twitter.com/Shadow81627">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
            <a href="https://www.youtube.com/user/shadow81627">
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </a>
            <a href="https://www.facebook.com/damien.robinson.5036">
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </a>
          </div>
        </div>
      </section>

      <hr class="m-0" />

      <section
        id="experience"
        class="resume-section p-3 p-lg-5 d-flex align-items-center"
      >
        <div class="w-100">
          <h2 class="mb-5">Experience</h2>

          <div
            class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
          >
            <div class="resume-content">
              <h3 class="mb-0">Junior Web Designer</h3>
              <div class="subheading mb-3">XCOM Media</div>
              <p>
                Full stack web developer creating and maintaining email
                subscription forms.
              </p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">March 2018 - Present</span>
            </div>
          </div>

          <div
            class="resume-item d-flex flex-column flex-md-row justify-content-between"
          >
            <div class="resume-content">
              <h3 class="mb-0">Web Designer</h3>
              <div class="subheading mb-3">Griffith University</div>
              <p>
                Web development and software support for Squiz Matrix CMS.
              </p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">July 2017 - December 2017</span>
            </div>
          </div>
        </div>
      </section>

      <hr class="m-0" />

      <section
        id="education"
        class="resume-section p-3 p-lg-5 d-flex align-items-center"
      >
        <div class="w-100">
          <h2 class="mb-5">Education</h2>

          <div
            class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
          >
            <div class="resume-content">
              <h3 class="mb-0">Griffith University</h3>
              <div class="subheading mb-3">
                Bachelor of Applied Infomation Technology
              </div>
              <!-- <div>Computer Science - Web Development Track</div> -->
              <p>GPA: 5.19</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">2015 - 2017</span>
            </div>
          </div>
        </div>
      </section>

      <hr class="m-0" />

      <section
        id="skills"
        class="resume-section p-3 p-lg-5 d-flex align-items-center"
      >
        <div class="w-100">
          <h2 class="mb-5">Skills</h2>

          <div class="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul class="list-inline dev-icons">
            <li class="list-inline-item">
              <font-awesome-icon :icon="['fab', 'html5']" title="html5" />
            </li>
            <li class="list-inline-item">
              <font-awesome-icon :icon="['fab', 'css3-alt']" title="css3" />
            </li>
            <li class="list-inline-item">
              <font-awesome-icon
                :icon="['fab', 'js-square']"
                title="javastipt"
              />
            </li>
            <li class="list-inline-item">
              <font-awesome-icon :icon="['fab', 'vuejs']" title="vue" />
            </li>
            <li class="list-inline-item">
              <font-awesome-icon :icon="['fab', 'node-js']" title="node" />
            </li>
            <li class="list-inline-item">
              <font-awesome-icon :icon="['fab', 'sass']" title="sass" />
            </li>
            <li class="list-inline-item">
              <font-awesome-icon :icon="['fab', 'npm']" title="npm" />
            </li>
            <li class="list-inline-item">
              <font-awesome-icon :icon="['fab', 'python']" title="python" />
            </li>
            <li class="list-inline-item">
              <font-awesome-icon :icon="['fab', 'laravel']" title="laravel" />
            </li>
            <li class="list-inline-item">
              <font-awesome-icon :icon="['fab', 'docker']" title="docker" />
            </li>
            <li class="list-inline-item">
              <font-awesome-icon :icon="['fab', 'aws']" title="aws" />
            </li>
          </ul>

          <div class="subheading mb-3">Workflow</div>
          <ul class="fa-ul mb-0">
            <li>
              <i class="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <!-- <hr class="m-0" />

      <section
        id="interests"
        class="resume-section p-3 p-lg-5 d-flex align-items-center"
      >
        <div class="w-100">
          <h2 class="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the warmer months here in Colorado, I enjoy mountain biking,
            free climbing, and kayaking.
          </p>
          <p class="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section> -->

      <!-- <hr class="m-0" />

      <section
        id="awards"
        class="resume-section p-3 p-lg-5 d-flex align-items-center"
      >
        <div class="w-100">
          <h2 class="mb-5">Awards &amp; Certifications</h2>
          <ul class="fa-ul mb-0">
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              Google Analytics Certified Developer
            </li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              Mobile Web Specialist - Google Certification
            </li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              1<sup>st</sup> Place - University of Colorado Boulder - Emerging
              Tech Competition 2009
            </li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              1<sup>st</sup> Place - University of Colorado Boulder - Adobe
              Creative Jam 2008 (UI Design Category)
            </li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              2<sup>nd</sup> Place - University of Colorado Boulder - Emerging
              Tech Competition 2008
            </li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              1<sup>st</sup> Place - James Buchanan High School - Hackathon 2006
            </li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              3<sup>rd</sup> Place - James Buchanan High School - Hackathon 2005
            </li>
          </ul>
        </div>
      </section> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import '~/assets/css/resume.css';
</style>