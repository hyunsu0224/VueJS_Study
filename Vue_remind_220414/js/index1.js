const Counter = {
    data() {
        return {
            counter : 0
        }
    }
}

Vue.createApp(Counter).mount('#counter')



const AttributeBinding = {
    data () {
        return {
            message : '이 페이지는 다음 시간에 열렸습니다.' + new Date().toLocaleString()
        }
    }
}

Vue.createApp(AttributeBinding).mount('#bind-attribute')

const bind_attribute = {
    data () {
        return {
            message : 'now time' + new Date().toLocaleString()
        }
    }
}

Vue.createApp(bind_attribute).mount('#bind-attribute_remind');

const count_number = {
    data () {
        return {
            counter : 0
        }
    },
    mounted() {
        setInterval(() => {
            this.counter++
        }, 10000)
    },
    methods : {
        clearInterval()
    }
}
Vue.createApp(count_number).mount('#count_num');


new Vue({
    el: '#app',
    // =======================
    data: {
      title: 'Timer',
      timer: null,
      totalTime: (1 * 60),
      resetButton: false,
    },
    // =======================
    methods: {
      startTimer: function() {
        this.timer = setInterval(() => this.countdown(), 1000);
        this.resetButton = true;
      },
      stopTimer: function() {
        clearInterval(this.timer);
        this.timer = nullthis.resetButton = true;
      },
      resetTimer: function() {
        this.totalTime = (1 * 60);
        clearInterval(this.timer);
        this.timer = null;
        this.resetButton = false;
      },
      padTime: function(time) {
        return (time < 10 ? '0' : '') + time;
      },
      countdown: function() {
        if(this.totalTime >= 1) {
          this.totalTime--;
        } else {
          this.totalTime = 0;
          this.resetTimer;
        }
      }
    },
    // =======================
    computed: {
      minutes: function() {
        const minutes = Math.floor(this.totalTime / 60);
        return this.padTime(minutes);
      },
      seconds: function() {
        const seconds = this.totalTime - (this.minutes * 60);
        return this.padTime(seconds);
      }
    }
  });