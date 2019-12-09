<template>
  <layout-default class="landing-page" id="landing-page">
    <template slot="root-content">
      <div class="landing">
        <div class="hero" scroll-reveal>
          <b-container class="lcontainer lcontainer--hero">
            <div
              class="parallax-element parallax-element--fast hero__background"
              data-parallax-factor="0.12"
            ></div>
            <div class="parallax-element parallax-element--fast" data-parallax-factor="-0.03">
              <div class="hero__quote">
                <h2
                  scroll-reveal-child
                  scroll-reveal-up
                  scroll-reveal-opacity
                  data-reveal-delay="200"
                >
                  <img class="header__logo" src="../images/logomark.png" alt="I25S Logo" />
                  <br />
                  <span class="hero__quote-accent">&nbsp;I25S</span>
                </h2>
              </div>
              <div
                class="hero__details"
                scroll-reveal-child
                scroll-reveal-down
                scroll-reveal-opacity
                data-reveal-delay="400"
              >
                <p
                  class="parallax-element parallax-element--fast"
                  data-parallax-factor="-0.02"
                >I25S ApS offers Management and IT consulting services to some of the largest enterprises in Denmark. Our consultants assist with services such as IT Management Consulting, IT Strategy, Systems- and Partner Tendering, GDPR, Enterprise Architecture and Infrastructure and Application Transitions.</p>

                <div
                  class="hero__buttons mt-5 parallax-element parallax-element--fast"
                  data-parallax-factor="0.02"
                ></div>
              </div>
            </div>
            <div
              class="hero__button-wrapper hero__button-wrapper--learn-more"
              scroll-reveal-child
              scroll-reveal-up
              scroll-reveal-opacity
              data-reveal-delay="850"
            >
              <download-brand-button
                bottom
                href="#starter-section"
                v-scroll-to="{
                        el: '#starter-section',
                        duration: 1000,
                        offset: 0,
                      }"
              >Learn More</download-brand-button>
            </div>
          </b-container>
        </div>

        <div class="lcontainer-wrapper" id="starter-section">
          <b-container class="lcontainer lcontainer--bulletpoints">
            <div class="feature-cards" scroll-reveal data-reveal-delay="200">
              <a
                v-scroll-to="{
                        el: '#consulting-section',
                        duration: 1000,
                        offset: 0,
                      }"
                class="feature-card feature-card--c1"
                scroll-reveal-child
                scroll-reveal-left
                scroll-reveal-opacity
                data-reveal-delay="100"
              >
                <div class="feature-card__internal">
                  <img data-src="/idea.svg" loading="lazy" class="lazy" />
                  <h4>Consulting</h4>
                  <p>Our consultants assist with services such as IT Management Consulting, IT Strategy, Systems- and Partner Tendering, GDPR, Enterprise Architecture and Infrastructure and Application Transitions.</p>
                  <p class="feature-card__read-more">Read more</p>
                </div>
              </a>
              <a
                v-scroll-to="{
                        el: '#engagement-section',
                        duration: 1000,
                        offset: 0,
                      }"
                class="feature-card feature-card--c1"
                scroll-reveal-child
                scroll-reveal-left
                scroll-reveal-opacity
                data-reveal-delay="200"
              >
                <div class="feature-card__internal">
                  <img data-src="/emails.svg" loading="lazy" class="lazy" />
                  <h4>Engagement</h4>
                  <p>Digital strategy development on senior management level​. Public speaking to various sized audiences​. Compere and conference planning​. Technology lectures.</p>
                  <p class="feature-card__read-more">Read more</p>
                </div>
              </a>
              <a
                v-scroll-to="{
                        el: '#development-section',
                        duration: 1000,
                        offset: 0,
                      }"
                class="feature-card feature-card--c2"
                scroll-reveal-child
                scroll-reveal-left
                scroll-reveal-opacity
                data-reveal-delay="300"
              >
                <div class="feature-card__internal">
                  <img data-src="/maintenance.svg" loading="lazy" class="lazy" />
                  <h4>Systems Development</h4>
                  <p>i25s has a fine track record of delivering turn-key solutions where customer value is the main measure. We offer full-stack services and are used to work on highly complex and highly integrated enterprise solutions where up-time and performance are a given.</p>
                  <p class="feature-card__read-more">Read more</p>
                </div>
              </a>
            </div>
          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--grey" id="consulting-section">
          <b-container class="lcontainer lcontainer--team">
            <div class="lcontainer__headline" scroll-reveal>
              <h2 scroll-reveal-child scroll-reveal-up scroll-reveal-opacity data-reveal-delay="0">
                <span class="lcontainer__headline__number">1.</span>Consulting
              </h2>
              <p
                scroll-reveal-child
                scroll-reveal-down
                scroll-reveal-opacity
                data-reveal-delay="100"
              >i25s ApS offers Management and IT consulting services to some of the largest enterprises in Denmark. Our consultants assist with services such as IT Management Consulting, IT Strategy, Systems- and Partner Tendering, GDPR, Enterprise Architecture and Infrastructure and Application Transitions. <b>Recent undertakings:​</b></p>
            </div>
             <ul class="lcontainer__promo-list" 
             scroll-reveal
                scroll-reveal-up
                scroll-reveal-opacity
                data-reveal-delay="100">
              <li>M&A assistance (IT) to C20 company with DKK 8 billion+ deal​</li>
              <li>Part of transition planning and execution ​​</li>
              <li>Architect on DKK 400 million+ public tender for outsourcing partner​</li>
              <li>Lead architect role on enterprise MS Azure based SAAS solution​</li>
              <li>Strategic workshops and education on blockchain for top five Danish lawyer firm</li>
            </ul>
          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--white" id="engagement-section">
          <b-container class="lcontainer lcontainer--team">
            <div class="lcontainer__headline" scroll-reveal>
              <h2 scroll-reveal-child scroll-reveal-up scroll-reveal-opacity data-reveal-delay="0">
                <span class="lcontainer__headline__number">2.</span>Engagement
              </h2>
              <p
                scroll-reveal-child
                scroll-reveal-down
                scroll-reveal-opacity
                data-reveal-delay="100"
              >i25s consultants are experienced in​:</p>
            </div>
            <ul class="lcontainer__promo-list"
            
               scroll-reveal
                scroll-reveal-up
                scroll-reveal-opacity
                data-reveal-delay="100">
              <li>Digital strategy development on senior management level​</li>
              <li>Public speaking to various sized audiences​</li>
              <li>Compere and conference planning​</li>
              <li>Technology lectures</li>
            </ul>
          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--dark">
          <b-container class="lcontainer lcontainer--bluebg lcontainer--strip">
            <div class="lcontainer__illustrations" scroll-reveal data-reveal-delay="100"></div>
            <div scroll-reveal data-reveal-delay="100">
              <p
                scroll-reveal-child
                scroll-reveal-down
                scroll-reveal-opacity
                data-reveal-delay="100"
              >
                Reach out on
                <a href="mailto:info@i25s.com ">info@i25s.com</a> or
                <a href="tel:+4527831111">+45 27 83 11 11</a> to see if we can help with your needs.​
              </p>
              <div
                scroll-reveal-child
                scroll-reveal-down
                scroll-reveal-opacity
                data-reveal-delay="350"
                class="mt-4"
              ></div>
            </div>
          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--grey" id="development-section">
          <b-container class="lcontainer lcontainer--team">
            <div class="lcontainer__headline" scroll-reveal>
              <h2 scroll-reveal-child scroll-reveal-up scroll-reveal-opacity data-reveal-delay="0">
                <span class="lcontainer__headline__number">3.</span>Systems Development​
              </h2>
              <p
                scroll-reveal-child
                scroll-reveal-down
                scroll-reveal-opacity
                data-reveal-delay="100"
              >i25s has a fine track record of delivering turn-key solutions where customer value is the main measure. We offer full-stack services and are used to work on highly complex and highly integrated enterprise solutions where up-time and performance are a given. The most recent projects have been on both MS Azure and Amazon services, with integrations to both third-party and on-prem systems. Examples are:</p>
            </div>
            <ul class="lcontainer__promo-list"
            
               scroll-reveal
                scroll-reveal-up
                scroll-reveal-opacity
                data-reveal-delay="100">
              <li>Personnel overview for on-location technicians with Operator Console and cross-platform technician solution, building on server-less MS Azure services, legacy communication technology and full integration to on-prem Active Directory for major Danish Grid Operator​</li>

              <li>Android and iOS based application integrated to back-end solution that provides bot-based communication services and more, currently under development and at the Alpha stage​</li>

              <li>Internal development of a Distributed Database system that allows for robust and secure data handling across multiple nodes being based on patent pending inhouse inventions</li>
            </ul>
          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--white">
          <b-container class="lcontainer lcontainer--team">
            <div class="lcontainer__headline" scroll-reveal>
              <h2 scroll-reveal-child scroll-reveal-up scroll-reveal-opacity data-reveal-delay="0">
                <span class="lcontainer__headline__number">4.</span> About
              </h2>
              <p
                scroll-reveal-child
                scroll-reveal-down
                scroll-reveal-opacity
                data-reveal-delay="100"
              >
                i25s ApS was founded in 2018, is headquartered in Hilleroed in the Greater Copenhagen area in Denmark. ​
                ​
                <br />
                <br />We work by utilizing the skills and network of our experienced founders to set the right team and deliver on any challenges that may come our way.
              </p>
            </div>
            <div class="team-table" scroll-reveal scroll-reveal-opacity>
              <b-row>
                <b-col cols="12" md="6" xl="6">
                  <div
                    scroll-reveal-child
                    scroll-reveal-left
                    scroll-reveal-opacity
                    data-reveal-delay="300"
                  >
                    <a class="team-table__card">
                      <div class="team-table__card-bio">
                        <div class="team-table__card-header-row">
                          <img loading="lazy" class="lazy" data-src="/team/ts.jpg" />
                          <div class="team-table__card-header">
                            <h5>
                              Theis Simonsen
                              <br />
                              <span
                                class="team-table__card-position"
                              >Experienced strategist, developer, lecturer and executive. Prior to i25s, Theis served as a senior consultant at KPMG and an external lecturer at Copenhagen Business School. M.S. in Information Technology from I.T. University of Copenhagen.</span>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </b-col>
                <b-col cols="12" md="6" xl="6">
                  <div
                    scroll-reveal-child
                    scroll-reveal-left
                    scroll-reveal-opacity
                    data-reveal-delay="400"
                  >
                    <a class="team-table__card">
                      <div class="team-table__card-bio">
                        <div class="team-table__card-header-row">
                          <img loading="lazy" class="lazy" data-src="/team/cr.jpg" />
                          <div class="team-table__card-header">
                            <h5>
                              Carsten Bleser Rasmussen
                              <br />
                              <span class="team-table__card-position">
                                20 years+ of experience in low-level programming and ASIC design, being a co-founder and CTO at Polaric Semiconductor, specializing in design and engineering of NFC and Bluetooth microchips and leading an international team of over 15 engineers and chip designers. Prior to Polaric, he designed ASIC chips for Nokia.​
                                ​
                                M.S. in Electromagnetic Field Theory from the Technical University of Denmark.
                              </span>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </b-col>
                <b-col cols="12" md="6" xl="6">
                  <div
                    scroll-reveal-child
                    scroll-reveal-left
                    scroll-reveal-opacity
                    data-reveal-delay="500"
                  >
                    <a class="team-table__card">
                      <div class="team-table__card-bio">
                        <div class="team-table__card-header-row">
                          <img loading="lazy" class="lazy" data-src="/team/kv.jpg" />
                          <div class="team-table__card-header">
                            <h5>
                              Kristian Vestergaard
                              <br />
                              <span
                                class="team-table__card-position"
                              >20+ years of experience as a business and enterprise architect. Leader experiences from various positions, last as a Director of Digital Architecture at GN Audio A/S, where he also served on the Board of Directors.​</span>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </b-col>

                <b-col cols="12" md="6" xl="6">
                  <div
                    scroll-reveal-child
                    scroll-reveal-left
                    scroll-reveal-opacity
                    data-reveal-delay="600"
                  >
                    <a class="team-table__card">
                      <div class="team-table__card-bio">
                        <div class="team-table__card-header-row">
                          <img loading="lazy" class="lazy" data-src="/team/ta.jpg" />
                          <div class="team-table__card-header">
                            <h5>
                              Tobias Ambs-Thomsen
                              <br />
                              <span class="team-table__card-position">
                                Experienced in visual communication and marketing in a variety of roles in advertising agencies and large internationals, including creative lead, and marketing director over the past 20+ years. Lately Global Marketing Director at ACT.Global. ​
                                ​
                                Graphical communication from Danish School of Media and Journalism.
                              </span>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-container>
        </div>

        <div class="lcontainer-wrapper lcontainer-wrapper--dark">
          <b-container class="lcontainer lcontainer--bluebg lcontainer--strip">
            <div class="lcontainer__illustrations" scroll-reveal data-reveal-delay="100"></div>
            <div scroll-reveal data-reveal-delay="100">
              <p
                scroll-reveal-child
                scroll-reveal-down
                scroll-reveal-opacity
                data-reveal-delay="100"
              >
                Reach out on
                <a href="mailto:info@i25s.com ">info@i25s.com</a> or
                <a href="tel:+4527831111">+45 27 83 11 11</a> to learn if we have what you need for your next development project.​
              </p>
              <div
                scroll-reveal-child
                scroll-reveal-down
                scroll-reveal-opacity
                data-reveal-delay="350"
                class="mt-4"
              ></div>
            </div>
          </b-container>
        </div>
      </div>
    </template>
  </layout-default>
</template>

<script>
import LayoutDefault from "@theme/components/LayoutDefault";
import BrandButton from "@theme/components/BrandButton";
import SocialButtons from "@theme/components/SocialButtons";
import DownloadBrandButton from "@theme/components/DownloadBrandButton";
import * as throttle from "lodash.throttle";
import { isMobile } from "../util";

export default {
  data() {
    return {
      parallaxElements: [],
      revealElements: [],
      layoutElement: undefined
    };
  },
  components: {
    LayoutDefault,
    BrandButton,
    DownloadBrandButton,
    SocialButtons
  },
  mounted() {
    this.layoutElement = document.getElementById("landing-page");
    this.revealElements = Array.from(
      document.querySelectorAll("[scroll-reveal]")
    );

    if (!isMobile()) {
      window.addEventListener("scroll", this.throttleReveal);
      this.handleReveal();
    } else {
      this.handleRevealAll();
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.throttleReveal);
  },
  methods: {
    throttleReveal: throttle(function() {
      this.handleReveal();
    }, 200),
    handleRevealAll() {
      for (let i = 0; i < this.revealElements.length; i++) {
        let element = this.revealElements[i];
        let childReveals = element.querySelectorAll("[scroll-reveal-child]");

        element.classList.add("fast-reveal");
        element.classList.add("scroll-reveal--revealed");

        for (let i = 0; i < childReveals.length; i++) {
          childReveals[i].classList.add("fast-reveal");
          childReveals[i].classList.add("scroll-reveal--revealed");
        }
      }
    },
    handleReveal() {
      let scrollY = window.scrollY;
      scrollY += window.innerHeight - 150;
      let revealedSome = false;

      for (let i = 0; i < this.revealElements.length; i++) {
        let element = this.revealElements[i];
        let elOffset = this.offset(element.parentElement);

        if (elOffset < scrollY) {
          if (!element.dataset.scrollRevealed) {
            let childReveals = element.querySelectorAll(
              "[scroll-reveal-child]"
            );

            if (element.dataset.revealDelay) {
              setTimeout(() => {
                element.classList.add("scroll-reveal--revealed");

                for (let i = 0; i < childReveals.length; i++) {
                  if (childReveals[i].dataset.revealDelay) {
                    setTimeout(() => {
                      childReveals[i].classList.add("scroll-reveal--revealed");
                    }, parseInt(childReveals[i].dataset.revealDelay));
                  } else {
                    childReveals[i].classList.add("scroll-reveal--revealed");
                  }
                }
              }, parseInt(element.dataset.revealDelay));
            } else {
              element.classList.add("scroll-reveal--revealed");

              for (let i = 0; i < childReveals.length; i++) {
                if (childReveals[i].dataset.revealDelay) {
                  setTimeout(() => {
                    childReveals[i].classList.add("scroll-reveal--revealed");
                  }, parseInt(childReveals[i].dataset.revealDelay));
                } else {
                  childReveals[i].classList.add("scroll-reveal--revealed");
                }
              }
            }
            element.dataset.scrollRevealed = true;
            revealedSome = true;
          }
        }
      }

      if (revealedSome) {
        this.revealElements = this.revealElements.filter(
          element => !element.dataset.scrollRevealed
        );
      }
    },
    offset(el) {
      var rect = el.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return rect.top + scrollTop;
    }
  }
};
</script>


<style src="../styles/landing.scss" lang="scss"></style>
