<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" class="align-center-div">
        <div class="bordered-div">
          <span>HELLO!</span>
          <p class="name-title">I'm Shaghayegh Davoodi</p>
          <p>
            Self-motivated and creative Front-end developer/Product
            designer. My favorite types of styles are minimal ,simple and
            user-friendly. My skill set lies in the intersection of elegant
            design ideas and implementing my thoughts.
            <br>
            Within the last two years, I
            fully developed and redesigned projects for striving car service provider companies.
          </p>
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        class="text-center text-md-right"
      >
        <img
          src="@/assets/shaghayegh.svg"
          class="illustration"
          alt="shaghayegh"
        />
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
@media only screen and (max-width: 600px) {
  .body {
    height: auto;
  }
  .illustration {
    width: 70% !important;
    float: none !important;
    margin: 0 auto;
  }
}

.name-title {
  font-size: 26px;
  color: var(--primary_promotion) !important;
  padding-top: 6px;
}

.illustration {
  width: 80%;
  overflow: hidden;
  box-sizing: border-box;
  opacity: 86%;
}

.align-center-div {
  display: flex;
  align-items: center;
}

.bordered-div{
  border: 2px solid rgba(255, 255, 255, 0.9);
  padding: 20px 40px;
  border-radius: 2px;
}
</style>