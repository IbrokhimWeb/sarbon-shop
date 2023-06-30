<template>
    <div class="ps-block--countdown-deal">
        <figure :style="{backgroundColor: color}">
            <figcaption>{{ ended ? 'Ended!' : 'Ends in:' }} </figcaption>
            <ul class="ps-countdown" v-show="!ended">
                <li>
                    <span>{{ days }}</span>
                </li>
                <li>
                    <span>{{ hours }}</span>
                </li>
                <li>
                    <span>{{ minutes }}</span>
                </li>
                <li>
                    <span>{{ seconds }}</span>
                </li>
            </ul>
        </figure>
    </div>
</template>
<script>
    export default {
        props: {
            tillEpoch: {default: 0, type: Number},
            color: {default: '#f14705', type: String},
        },
        data() {
            return {
                days: '00',
                hours: '00',
                minutes: '00',
                seconds: '00',
                ended: false,
            }
        },
        mounted() {
            let x = setInterval(() => {
                let now = new Date().getTime();
                let distance = this.tillEpoch - now;
                if (distance > 0) {
                    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    this.days = this.days < 10 ? '0' + this.days : this.days;
                    this.hours = this.hours < 10 ? '0' + this.hours : this.hours;
                    this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
                    this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
                }
                else {
                    clearInterval(x);
                    this.ended = true;
                }
            }, 1000);
        }
    };
</script>
