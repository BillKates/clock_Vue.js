const app = Vue.createApp({
    data() {
      return {
        appName: "My Clock",
        clock: "00:00:00"
      };
    },
    methods: {
      tick() {
        console.log("tick!!");
        const date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
  
        if (h < 10) h = "0" + h;
        if (m < 10) m = "0" + m;
        if (s < 10) s = "0" + s;
  
        this.clock = h + ":" + m + ":" + s;
  
        setTimeout(() => {
          this.tick();
        }, 100);
      }
    },
    created() {
      console.log("created!!");
      this.tick();
    }
  });
  
  app.mount("#app");
  