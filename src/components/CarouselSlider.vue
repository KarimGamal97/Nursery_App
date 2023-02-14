<template>
  <div>
    <header>
      <div class="box">
        <div class="text">
          <h2>Test Rouecers</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            perspiciatis facilis excepturi!
          </p>
          <div class="more-details">
            <button class="btn btn-primary mt-4">Show More..</button>
          </div>
        </div>
      </div>
      <div class="layout"></div>
    </header>
  </div>
</template>

<script>
export default {
  name: "CarouselSlider",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
header {
  background-image: url("../assets/masonry4.jpg");
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .box {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text {
    display: flex;
    flex-direction: column;
    z-index: 222222222222222222222;
    position: relative;
    color: #fff;
    margin: auto;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .layout {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
}
</style>
