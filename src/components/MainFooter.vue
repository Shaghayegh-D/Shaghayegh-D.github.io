<template>
  <v-container>
    <div class="bordered-div pt-3 mx-md-4">
      <v-row>
        <v-col
          cols="12"
          md="4"
          order="1"
          order-md="0"
          class="text-center text-md-left"
        >
          <span> © 2022 by Shaghayegh Davoodi, All rights reserved. </span>
        </v-col>
        <v-col cols="12" md="4" offset-md="4" order="0" order-md="1">
          <v-row>
            <v-col cols="6" md="5" offset-md="1" class="d-flex">
              <span class="footer-titles mr-4">
                <img src="@/assets/icons/line.svg" alt="line" width="1px" />
                write:
              </span>
              <a href="mailto:davoodi.shaghayegh.98@gmail.com" class="align-self-center">
                <img
                  src="@/assets/icons/email.svg"
                  alt="email"
                  width="18px"
                  class="socialmedia-icons"
                />
              </a>
            </v-col>
            <v-col cols="6" md="5" class="d-flex">
              <span class="footer-titles mr-4">
                <img src="@/assets/icons/line.svg" alt="line" width="1px" />
                visit:
              </span>
              <a href="https://www.linkedin.com/in/shaghayegh-davoodi/" target="_blank" class="align-self-center">
                <img
                  src="@/assets/icons/linkedin.svg"
                  alt="linkedin"
                  width="18px"
                  class="socialmedia-icons"
                />
              </a>
              <a href="https://dribbble.com/Shaghayegh-Davoodi" target="_blank" class="align-self-center">
                <img
                  src="@/assets/icons/dribbble.svg"
                  alt="dribbble"
                  width="18px"
                  class="socialmedia-icons"
                />
              </a>
              <a href="https://github.com/Shaghayegh-D" target="_blank" class="align-self-center">
                <img
                  src="@/assets/icons/github.svg"
                  alt="github"
                  width="18px"
                  class="socialmedia-icons"
                />
              </a>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>

<style scoped lang="scss">
* {
  font-size: 12px;
}
.footer-titles {
  color: var(--primary) !important;
  font-size: 14px !important;
  font-weight: bold;
}
.socialmedia-icons {
  margin-right: 10px;
  margin-top: 2px;
}

.bordered-div{
  border-top: 1px solid rgba(255, 255, 255, 0.9);
}
</style>
