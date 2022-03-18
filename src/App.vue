<template>
  <v-app>
    <v-content>
      <div class="body">
        <v-container>
          <v-row>
            <v-col cols="12" md="10" offset-md="1">
              <div>
                <v-tabs
                  v-model="tab"
                  background-color="transparent"
                  color="transparent"
                  active-class="font-weight-bold"
                  class="mx-0"
                  grow
                >
                  <v-tab href="#tab-1" @click="progressValue = 33.33">
                    <span class="px-md-8 my-0 tab-titles" style="font-size:14px !important">about me</span>
                  </v-tab>

                  <v-tab href="#tab-2" @click="progressValue = 66.66">
                    <span class="px-md-8 my-0 tab-titles" style="font-size:14px !important">résumé</span>
                  </v-tab>

                  <v-tab href="#tab-3" @click="progressValue = 100">
                    <span class="px-md-8 my-0 tab-titles" style="font-size:14px !important">projects</span>
                  </v-tab>
                </v-tabs>
              </div>

              <div>
                <v-tabs-items
                  v-model="tab"
                  class="px-md-2 py-md-6 rounded"
                  style="background-color:transparent"
                >
                  <v-tab-item
                    transition="slide-x-reverse-transition"
                    id="tab-1"
                  >
                    <aboutme-page />
                  </v-tab-item>

                  <v-tab-item
                    transition="slide-x-reverse-transition"
                    id="tab-2"
                  >
                    <resume-page />
                  </v-tab-item>

                  <v-tab-item
                    transition="slide-x-reverse-transition"
                    id="tab-3"
                  >
                    <projects-page />
                  </v-tab-item>
                </v-tabs-items>
              </div>
            </v-col>
            <v-col cols="12" md="4" offset-md="4" class="py-0 text-center">
              <div>
                <v-progress-linear
                  v-model="progressValue"
                  rounded
                  height="10"
                  color="#C48F5A"
                ></v-progress-linear>
                <!-- <a class="effect effect-1" href="#tab-2">about me</a> -->
                <a class="effect effect-1" href="#tab-2">see résumé</a>
                <!-- <a class="effect effect-1" href="#tab-2">projects</a> -->
              </div>
            </v-col>
          </v-row>
        </v-container>
        <main-footer />
      </div>
    </v-content>
  </v-app>
</template>

<script>
import MainFooter from "./components/MainFooter";
import AboutmePage from "./components/AboutmePage";
import ResumePage from "./components/ResumePage";
import ProjectsPage from "./components/ProjectsPage";

export default {
  name: "App",

  components: {
    MainFooter,
    AboutmePage,
    ResumePage,
    ProjectsPage
  },

  data() {
    return {
      tab: 1,
      progressValue: 33.33,
    };
  },
};
</script>

<style scoped lang="scss">
.tab-titles {
  color: var(--primary) !important;
}

.body {
  background-color: var(--background);
  background-image: url(~/src/assets/pattern-2.svg);
  background-size: cover;
  margin: 0 auto;
  min-height: 100vh;
}

::v-deep .v-tabs-slider-wrapper,
.v-window__container,
.v-progress-linear,
.v-item-group {
  transition: 0.7s ease-out !important;
}

.effect {
  text-align: center;
  display: inline-block;
  position: relative;
  color: (--primary);
  text-transform: capitalize;
  font: {
    size: 16px;
  }
  padding: 20px 0px;
  width: 150px;
  overflow: hidden;
}

/* effect-1 styles */

.effect.effect-1 {
  transition: 0.5s ease-out;

  &:before {
    content: "→";
    font-size: 16px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    top: 0;
    opacity: 0;
    height: 100%;
    width: 40px;
    transition: 0.5s ease-out;
  }

  &:hover {
    text-indent: -20px;

    &:before {
      opacity: 1;
      text-indent: 0px;
    }
  }
}

::v-deep .v-tab:before {
  background-color: transparent;
}

</style>
