<template>
    <div class="days-tab text-center">
        <div class="loading" v-if="loading">Loading...</div>
        <ul class="p-0">
            <li class="li_active">
                <div class="class py-3" :id="`${this.ico[0]}`"><span></span></div>
                <div class="class py-3">{{ this.hour[0] }}</div>
                <div class="class py-3">{{ this.temp[0] }}</div>
                <div class="class py-3">{{ this.desc[0] }}</div>
            </li>
            <li class="li_active">
                <div class="class py-3" :id="`${this.ico[1]}`"><span></span></div>
                <div class="class py-3">{{ this.hour[1] }}</div>
                <div class="class py-3">{{ this.temp[1] }}</div>
                <div class="class py-3">{{ this.desc[1] }}</div>
            </li>
            <li class="li_active">
                <div class="class py-3" :id="`${this.ico[2]}`"><span></span></div>
                <div class="class py-3">{{ this.hour[2] }}</div>
                <div class="class py-3">{{ this.temp[2] }}</div>
                <div class="class py-3">{{ this.desc[2] }}</div>
            </li>
            <li class="li_active">
                <div class="class py-3" :id="`${this.ico[3]}`"><span></span></div>
                <div class="class py-3">{{ this.hour[3] }}</div>
                <div class="class py-3">{{ this.temp[3] }}</div>
                <div class="class py-3">{{ this.desc[3] }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default (await import('vue')).defineComponent({
    name: 'App',
    props: {
        pass: Object
    },
    data() {
        return {
            desc: [],
            hour: [],
            ico: [],
            temp: [],
            loading: true
        };
    },
    async mounted() {
        try {
            let ld = await this.pass;
            console.log(ld);
            // while (!ld) {
            //     this.loading = true;
            // }
            this.loading = false;
            let d = new Date();
            console.log('loading', this.loading);
            let tim = this.pass.t.times;
            tim.forEach((e) => {
                if (e.datetime === String(d.getDate())) {
                    this.temp.push(e.celcius);
                }
            });
            let de = this.pass.weather.times.filter((e) => e.datetime === String(d.getDate()));
            let dic = {
                0: '00:00',
                1: '06:00',
                2: '12:00',
                3: '18:00'
            };
            let dicI = {
                Cerah: 'icon1',
                'Cerah Berawan': 'icon2',
                Berawan: 'icon2',
                'Hujan Ringan': 'icon3',
                'Hujan Lebat': 'icon4'
            };
            de.forEach((e, i) => {
                this.desc.push(e.name);
                this.hour.push(dic[i]);
                console.log(e.name);
                this.ico.push(dicI[e.name] ? dicI[e.name] : 'icon2');
            });
        } catch (e) {
            console.log(e);
        }
        // console.log(this.ico[0])
    }
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
    background-image: url('../assets/icon1.png');
    background-size: contain;
    margin: 5px;
    background-position: center;
    background-repeat: no-repeat;
}
.li_active > #icon2 {
    background-image: url('../assets/icon2.png');
    background-size: contain;
    margin: 5px;

    background-position: center;

    background-repeat: no-repeat;
}
.li_active > #icon3 {
    background-image: url('../assets/icon3.png');
    background-size: contain;
    margin: 5px;

    background-position: center;
    background-repeat: no-repeat;
}
.li_active > #icon4 {
    background-image: url('../assets/icon4.png');
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
