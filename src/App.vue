<template>
    <div class="app">
        <div class="header container h-100 p-5">
            <div class="sun" id="sun">
                <h1 class="mb-5">Aprika Weatherapp</h1>
                <img src="../src/assets/sun.gif" width="80" height="80" alt="sun gif" />
            </div>
            <div class="justify-content-center btn-search h-100">
                <div class="searchbar w-50 mx-2">
                    <input type="text" class="input form-control" v-model="city" placeholder="Enter a city" @keyup.enter="searchWeather" />
                </div>
                <button class="btn-search btn btn-primary" @click="searchWeather">Search <i class="fas fa-Search"></i></button>
            </div>
        </div>

        <Weather :city="city" v-if="showWeather"></Weather>
    </div>
</template>

<script>
import Weather from './components/Weather.vue';
export default (await import('vue')).defineComponent({
    name: 'App',
    components: {
        Weather
    },
    data() {
        return {
            city: '',
            showWeather: false
        };
    },
    // methods: {
    //   async searchWeather() {
    //     try {
    //       this.showWeather = false;
    //       await this.$nextTick()
    //       this.showWeather = true;
    //     } catch (error) {
    //       console.error("Error fetching weather data:", error);
    //     }
    //   },
    // },
    methods: {
        async searchWeather() {
            try {
                if (!this.city) {
                    // Jika nilai city kosong, tampilkan pesan error
                    alert('Please enter a city name');
                    return;
                }

                this.showWeather = false;
                await this.$nextTick();
                this.showWeather = true;
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }
    }
});
</script>

<style>
/* body {
      background-color: #a3b18a !important;
    } */
body {
    background-image: url(..//src/assets/background.jpg) !important;
}
.header {
    background-color: #1c2524b0;
    backdrop-filter: blur(2px);
    border-radius: 30px 120px 0 0;
    color: azure;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-top: 5rem;
    margin-bottom: 1rem;
}

#sun {
    display: flex;
    gap: 65%;
}

.btn-search {
    background-color: #1c252400 !important;
    display: flex;
}

.btn-search:active {
    transform: translateY(4px);
}
</style>
