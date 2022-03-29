<template>
  <div class="main-div">
    <!-- <div class="text-center">
      <div class="bordered-div py-4">front-end development archive</div>
    </div> -->
    <!-- <v-row class="py-10">
      <v-col cols="12" md="6" class="px-5 px-md-10">
        <v-carousel
          show-arrows
          hide-delimiters
          progress-color="#C48F5A"
          height="200"
        >
          <v-carousel-item
            v-for="(rebrandItem, i) in rebrandItems"
            :key="i"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <v-row>
              <v-col cols="6" class="pr-1 pb-0">
                <div class="img-div">
                  <img
                    :src="require(`@/assets/itoll-rebrand/${rebrandItem.img}`)"
                    :alt="alt"
                  />
                </div>
              </v-col>
              <v-col cols="6" class="pl-1 pb-0">
                <div class="img-div">
                  <img
                    :src="require(`@/assets/itoll-rebrand/${rebrandItem.img2}`)"
                    :alt="alt"
                  />
                </div>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
        <v-list two-line color="#E4D9D2">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Adobe Illustrator</v-list-item-title>
              <v-list-item-subtitle>111</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="6" class="px-10"></v-col>
    </v-row> -->
    <div class="text-center">
      <div class="bordered-div py-4">illustration archive</div>
    </div>
    <v-row class="py-10">
      <v-col cols="12" md="6" class="d-flex px-5 px-md-10">
        <p class="align-self-center">
          Some of my original designs and illustrations. All of the elements
          drawn entirely by Adobe Illustrator. These illustrations consist of
          work projects as well as some passion projects.
        </p>
      </v-col>
      <v-col cols="12" md="6" class="px-5 px-md-10">
        <v-card flat width="100%" color="#E4D9D2">
          <v-carousel
            show-arrows
            hide-delimiters
            progress-color="#C48F5A"
            height="280"
          >
            <v-carousel-item
              v-for="(originalItem, i) in originalItems"
              :key="i"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
              <v-sheet height="100%" :color="originalItem.color">
                <img
                  :src="require(`@/assets/illustrations/${originalItem.path}`)"
                  width="100%"
                  height="100%"
                  :alt="originalItem.name"
                />
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
      <v-col cols="12">
        <div class="line-div"></div>
      </v-col>
      <v-col cols="12" md="6" order="1" order-md="0" class="px-5 px-md-10">
        <v-card flat width="100%" color="#E4D9D2">
          <v-carousel
            show-arrows
            hide-delimiters
            progress-color="#C48F5A"
            height="280"
          >
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
              <v-sheet height="100%" :color="item.color">
                <img
                  :src="require(`@/assets/illustrations-2/${item.path}`)"
                  width="100%"
                  height="100%"
                  :alt="item.name"
                />
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" order="0" order-md="1" class="d-flex px-5 px-md-10">
        <p class="align-self-center">
          Set of course projects and tasks to learn and improve my skills. All
          elementes drawn by me using Adobe Illustrator based on other artists
          artworks.
        </p>
      </v-col>
    </v-row>
    <div class="text-center">
      <div class="bordered-div py-4">photoshoped images archive</div>
    </div>
    <v-row class="py-10">
      <v-col cols="12" md="6" class="d-flex px-5 px-md-10">
        <p class="align-self-center">
          As I started learning Adobe Photoshop, I challenged myself with
          different kind of projects in order to improve my skills. Here is some
          of my course tasks that I used variety of tools to create them.
        </p>
      </v-col>
      <v-col cols="12" md="6" class="px-5 px-md-10">
        <v-carousel
          show-arrows
          hide-delimiters
          progress-color="#C48F5A"
          height="200"
        >
          <v-carousel-item
            v-for="(photoshopedItem, i) in photoshopedItems"
            :key="i"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <v-row>
              <v-col cols="6" class="pr-1 pb-0">
                <div class="img-div">
                  <img
                    :src="require(`@/assets/photoshop/${photoshopedItem.img}`)"
                    :alt="photoshopedItem.name"
                  />
                </div>
              </v-col>
              <v-col cols="6" class="pl-1 pb-0">
                <div class="img-div">
                  <img
                    :src="require(`@/assets/photoshop/${photoshopedItem.img2}`)"
                    :alt="photoshopedItem.name2"
                  />
                </div>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      originalItems: [
        {
          path: "parmida.svg",
          name: "parmida-illustration",
          color: "#ADC6B9",
        },
        {
          path: "zeinab.svg",
          name: "zeinab-illustration",
          color: "#DBD4B9",
        },
        {
          path: "shaghayegh.svg",
          name: "shaghayegh-illustration",
          color: "#E5E4DC",
        },
        {
          path: "reza.svg",
          name: "reza-illustration",
        },
        {
          path: "behnam.svg",
          name: "behnam-illustration",
          color: "#BBF9C1",
        },
        {
          path: "popouri.svg",
          name: "popouri-illustration",
          color: "#FCE3EE",
        },
        {
          path: "moein.svg",
          name: "moein-illustration",
        },
        {
          path: "foozhan.svg",
          name: "foozhan-illustration",
        },
        {
          path: "luffy.svg",
          name: "luffy-illustration",
        },
      ],
      items: [
        {
          path: "whale.svg",
          name: "whale-illustration",
          color: "#E4E6E3",
        },
        {
          path: "angel.svg",
          name: "angel-illustration",
          color: "#98D5DE",
        },
        {
          path: "project.svg",
          name: "project-illustration",
        },
        {
          path: "boy.svg",
          name: "boy-illustration",
        },
        {
          path: "man.svg",
          name: "man-illustration",
        },
        {
          path: "bird.svg",
          name: "bird-illustration",
          color: "#DCE6F4",
        },
        {
          path: "coffe-cup.svg",
          name: "coffe-illustration",
          color: "#fff",
        },
        {
          path: "orange-2.svg",
          name: "orange-illustration",
          color: "#F5841F",
        },
        {
          path: "orange-3.svg",
          name: "orange-illustration",
          color: "#F16127",
        },
        {
          path: "eyes.svg",
          name: "eyes-illustration",
          color: "#CBCBCB",
        },
        {
          path: "circle.svg",
          name: "circle-illustration",
          color: "#B3DBF2",
        },
        {
          path: "orange.svg",
          name: "orange-illustration",
          color: "#EACEA7",
        },
        {
          path: "milk.svg",
          name: "milk-illustration",
          color: "#E6E6E6",
        },
        {
          path: "flower.svg",
          name: "flower-illustration",
          color: "#E6E7E8",
        },
      ],
      photoshopedItems: [
        {
          img: "2.jpg",
          img2: "2-edited.png",
          name: "office before",
          name2: "office after",
        },
        {
          img: "3.png",
          img2: "3-edited.png",
          name: "coffeshop before",
          name2: "coffeshop after",
        },
        {
          img: "4.png",
          img2: "4-edited.png",
          name: "street before",
          name2: "street after",
        },
        {
          img: "luffy-poster.png",
          img2: "poster.png",
          name: "luffy poster",
          name2: "music poster",
        },
        {
          img: "horse-duck.png",
          img2: "horse-duck-morph.png",
          name: "horse and duck",
          name2: "horse and duck morph",
        },
        {
          img: "houses.png",
          img2: "house.png",
          name: "dark house",
          name2: "edited house",
        },
      ],
      rebrandItems: [
        {
          img: "home.png",
          img2: "new-home.png",
          alt: "home page",
          step: 1,
        },
        {
          img: "about.png",
          img2: "new-about.png",
          alt: "about us page",
          step: 2,
        },
        {
          img: "factor.png",
          img2: "new-factor.png",
          alt: "factor page",
          step: 3,
        },
        {
          img: "legal.png",
          img2: "new-legal.png",
          alt: "legal page",
          step: 4,
        },
        {
          img: "services.png",
          img2: "new-services.png",
          alt: "car services page",
          step: 5,
        },
        {
          img: "trade.png",
          img2: "new-trade.png",
          alt: "car trade page",
          step: 6,
        },
        {
          img: "contact.png",
          img2: "new-contact.png",
          alt: "contact us page",
          step: 7,
        },
      ],
      step: 1,
    };
  },
};
</script>

<style scoped lang="scss">
.bordered-div {
  font-size: 22px;
  color: var(--primary_promotion);
  border-top: 2px solid rgba(255, 255, 255, 0.9);
  border-bottom: 2px solid rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  border-radius: 4px;
}

.line-div {
  border-top: 2px solid rgba(255, 255, 255, 0.9);
  border-radius: 4px;
}

.img-div {
  width: 100%;
  overflow: hidden;
  img {
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
  }
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}

::v-deep .v-btn--icon.v-size--default .v-icon,
.v-btn--fab.v-size--default .v-icon {
  font-size: 36px;
  padding-top: 7px;
  color: white;
  font-size: 24px !important;
}
</style>