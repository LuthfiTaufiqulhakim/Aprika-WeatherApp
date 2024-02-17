<template>
    <div class="container p-0">
        <div class="d-flex gap-3">
            <div class="card main-div w-100">
                <div class="p-3">
                    <h2 class="mb-1 day">{{ this.hari }}</h2>
                    <p class="date mb-0">{{ this.tanggal }}</p>
                    <small>{{ this.jam }}</small>
                    <h2 class="place">
                        <i class="fa fa-location">{{ this.kabupaten }} <small>Indonesia</small></i>
                    </h2>
                    <div class="temp">
                        <h1 class="weather-temp">{{ this.temp }}</h1>
                        <h2 class="">{{ this.weather }}</h2>
                    </div>
                </div>
            </div>
            <div class="card card-2 w-100">
                <table class="m-4">
                    <tbody>
                        <tr>
                            <th>Wind</th>
                            <td v-for="wind in wind" :key="wind">{{ wind }}</td>
                        </tr>
                        <tr>
                            <th>Humidity</th>
                            <td>{{ this.humidity }}</td>
                        </tr>
                        <tr>
                            <th>precipitation</th>
                            <td>{{ this.humax }}</td>
                        </tr>
                    </tbody>
                </table>

                <DaysWeather :pass="pass"></DaysWeather>

                <br />
            </div>
        </div>
    </div>
    <div class="footer">Powered by Luthfith & Saiful Islam</div>
</template>

<script>
import DaysWeather from './DaysWeather.vue';
import axios from 'axios';
export default (await import('vue')).defineComponent({
    name: 'myWeather',
    components: {
        DaysWeather
    },
    props: {
        city: String
    },
    data() {
        return {
            pass: Object,
            hari: null,
            tanggal: null,
            jam: null,
            kabupaten: null,
            temp: null,
            weather: null,
            wind: [],
            humidity: null,
            humax: null
        };
    },
    async created() {
        try {
            const res = await axios.get(`https://0wwhsalsx2.execute-api.us-east-1.amazonaws.com/api/v2/regency/${this.city}`).then((e) => {
                return e.data.data;
            });
            this.pass = res;
            let dino = {
                0: 'Minggu',
                1: 'Senin',
                2: 'Selasa',
                3: 'Rabu',
                4: 'Kamis',
                5: 'Jumat',
                6: 'Sabtu'
            };
            let month = {
                1: 'Januari',
                2: 'Februari',
                3: 'Maret',
                4: 'April',
                5: 'Mei',
                6: 'Juni',
                7: 'Juli',
                8: 'Agustus',
                9: 'September',
                10: 'Oktober',
                11: 'November',
                12: 'Desember'
            };
            let d = new Date();
            this.hari = dino[d.getDay()];
            let y = d.getYear();
            let m = d.getMonth();
            let daily = res.humax.times.filter((e) => e.day === String(d.getDate()))[0];
            this.tanggal = `${d.getDate()} ${month[m + 1]} ${y}`;
            this.jam = `${d.getHours()} : ${d.getMinutes()}`;
            this.kabupaten = res.description;
            let t = {
                0: 0,
                6: 1,
                12: 2,
                18: 3,
                24: 4,
                30: 5,
                36: 6
            };
            let now =
                this.jam > 0 && this.jam < 6
                    ? t['0']
                    : this.jam > 6 && this.jam < 12
                    ? t['6']
                    : this.jam > 12 && this.jam < 18
                    ? t['12']
                    : this.jam > 18 && this.jam < 24
                    ? t['18']
                    : this.jam > 24 && this.jam < 30
                    ? t['24']
                    : this.jam > 30 && this.jam < 36
                    ? t['30']
                    : t['36'];
            let hu = res.hu.times[now].value;
            let celcius = res.t.times[now].celcius;
            let fahrenheit = res.t.times[now].fahrenheit;
            console.log(res.ws.times[now]);
            this.temp = `${celcius} | ${fahrenheit}`;
            this.weather = res.weather.times[now].name;
            this.wind.push(`${res.ws.times[now].kt} kt`);
            this.wind.push(`${res.ws.times[now].mph} mph`);
            this.wind.push(`${res.ws.times[now].kph} kph`);
            this.wind.push(`${res.ws.times[now].ms} ms`);
            this.humidity = `${hu} %`;
            this.humax = `${daily.value} %`;
        } catch (e) {
            console.log(e);
        }
    }
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
    background-image: url('../assets/image1.jpg');

    border-radius: 0 75px 0 75px !important;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    filter: grayscale(90%) !important;
    background-size: 150%;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.5);
    background-repeat: no-repeat;
}

h2.place {
    gap: 20px;
}

.card-2 {
    background-color: #1c2524b0 !important;
    backdrop-filter: blur(2px);

    color: #fff !important;
    border-radius: 0 0 0 75px !important;
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
.footer {
    margin: 3%;
    color: #fff;
    text-align: center;
}
</style>
