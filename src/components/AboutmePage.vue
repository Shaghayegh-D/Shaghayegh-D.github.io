<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" class="align-center-div">
        <div class="bordered-div px-10">
          <span>HELLO!</span>
          <p class="name-title">I'm Shaghayegh Davoodi</p>
          <p>
            Self-motivated and creative Front-end Developer with a deep passion for Product
            Design.
            During my experience as a front-end developer, I was involved in designing web pages and landings as well,
            I became more enthusiastic towards user experiences and their journeys.
            My main interest is designing and building minimal and User-centered marketing landings to promote products.
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
    width: 100% !important;
    float: none !important;
    margin: 0 auto;
  }

  .bordered-div{
    border: none !important;
    padding: 16px !important;
}
}

.name-title {
  font-size: 28px;
  color: var(--primary_promotion) !important;
  padding-top: 6px;
}

.illustration {
  width: 90%;
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
  padding: 20px 0;
  border-radius: 2px;
}
</style>