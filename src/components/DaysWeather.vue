<template>
  <div class="days-tab text-center">
    <div class="loading">Loading...</div>
    <ul class="p-0">
      <li class="li_active">
        <div class="class py-3" id="icon1"><span></span></div>
        <div class="class py-3">day</div>
        <div class="class py-3">12oc</div>
      </li>
      <li class="li_active">
        <div class="class py-3" id="icon2"><span></span></div>
        <div class="class py-3">day</div>
        <div class="class py-3">12oc</div>
      </li>
      <li class="li_active">
        <div class="class py-3" id="icon3"><span></span></div>
        <div class="class py-3">day</div>
        <div class="class py-3">12oc</div>
      </li>
      <li class="li_active">
        <div class="class py-3" id="icon4"><span></span></div>
        <div class="class py-3">day</div>
        <div class="class py-3">12oc</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default (await import("vue")).defineComponent({
    name: "App",
  });
</script>

<style>
  .days-tab {
    width: 90%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 20px !important;
    width: 90%;
    margin: auto;
  }
  .Loading {
    color: #fff;
  }

  ul {
    margin: 0;
  }
  li {
    display: inline-block;
    list-style: none;
    height: 100%;
    width: 20%;
    max-width: 21%;
    /* font-size: 1vw; */
    line-height: 1.2;
  }

  span {
    display: block;
    margin-bottom: 5px;
    font: 100% sans-serif;
    height: 35px;
  }
  .li_active {
    background-color: #3f6145;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    margin: 0.5rem;
    color: #fff;
    /* font-weight: 600; */
  }
  .li_active > #icon1 {
    background-image: url("../assets/icon1.png");
    background-size: contain;
margin: 5px;
    background-position: center;
    background-repeat: no-repeat;
  }
  .li_active > #icon2 {
    background-image: url("../assets/icon2.png");
    background-size: contain;
    margin: 5px;

    background-position: center;

    background-repeat: no-repeat;
  }
  .li_active > #icon3 {
    background-image: url("../assets/icon3.png");
    background-size: contain;
    margin: 5px;

    background-position: center;
    background-repeat: no-repeat;
  }
  .li_active > #icon4 {
    background-image: url("../assets/icon4.png");
    background-size: contain;
    margin: 5px;

    background-position: center;
    background-repeat: no-repeat;
  }
/* 
  .li_active:hover {
    transform: scale(1.2);
    transition: transform 0.1s ease;
  } */

  .li_active_temp {
    display: inline-block;
    background-color: #222831;
    color: #ffffff;
    
    border-radius: 10px;
  }
</style>
