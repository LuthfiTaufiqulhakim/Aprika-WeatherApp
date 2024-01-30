<template>
  <div class="container p-0">
    <div class="d-flex gap-3">
      <div class="card main-div w-100">
        <div class="p-3">
          <h2 class="mb-1 day">Jumat</h2>
          <p class="date mb-0">date</p>
          <small> time</small>
          <h2 class="place">
            <i class="fa fa-location">Kediri <small>Indonesia</small></i>
          </h2>
          <div class="temp">
            <h1 class="weather-temp">19&deg;</h1>
            <h2 class="">Gerimis</h2>
          </div>
        </div>
      </div>
      <div class="card card-2 w-100">
        <table class="m-4">
          <tbody>
            <tr>
              <th>Wind</th>
              <td>Km/h</td>
            </tr>
            <tr>
              <th>Humidity</th>
              <td>100</td>
            </tr>
            <tr>
              <th>precipitation</th>
              <td>100</td>
            </tr>
          </tbody>
        </table>

        <DaysWeather></DaysWeather>

        <br>
      </div>
    </div>
    

  </div>
</template>

<script>
  import DaysWeather from "./DaysWeather.vue";

  export default (await import("vue")).defineComponent({
    name: "myWeather",
    components: {
      DaysWeather,
      
      
    },
  });
</script>

<style>
  body {
    background-color: #343d4b;
  }

  .weather-temp {
    margin: 0;
    font-weight: 700;
    font-size: 4em;
  }

  h2.mb-1.day {
    font-size: 3rem;
    font-weight: 400;
  }
  .main-div {
    border-radius: 20px !important;
    color: #ffffff !important;
    background-image: url("../assets/image1.jpg");
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.5);
    background-repeat: no-repeat;
  }

  h2.place {
    gap: 20px;
  }



  .card-2 {
    background-color: #3a5a40 !important;
    border-radius: 20px !important;
    color: #fff !important;
  }

  /* h2,
  p{
    padding: 0 25px 0;
  }*/

  .card-details {
    margin-left: 19px;
  }

  .h2_left {
    position: absolute;
    bottom: 25px;
    left: 16px;
    font-size: 3vw;
    line-height: 1.2;
  }
  .change-btn {
    background-image: linear-gradient(to right, #588157, #3a5a40);
  }
  .change-btn:active {
    transform: translateY(4px);
  }
   
</style>
