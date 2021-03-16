<template>
  <div class="hello">
    <h1 class="py-5 md:font-black text-4xl">
      Tailwind working
    </h1>
    <button
      class="rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-red-500 hover:bg-red-600 md:text-lg xl:text-base text-white font-semibold leading-tight shadow-md"
      @click="handelTextAdd('t1')"
    >
      Click me!
    </button>
    <!-- <br />
    <button class="button">
      Or maybe click ME!
    </button> -->
    <br />
    <h1 class="py-5 md:font-black text-4xl">Font Awesome working</h1>
    <font-awesome-icon icon="random" /><br />
    <font-awesome-icon icon="grip-vertical" />
    <font-awesome-icon :icon="['fab', 'whatsapp']" />

    <br /><br />
    <h1 class="py-5 md:font-black text-4xl">Vuex working</h1>
    <div v-for="(item, index) in channel_list" :key="index">
      <font-awesome-icon :icon="item.icon" /> {{ item.text }} {{ item.icon }}
    </div>
    <br />
    {{ channel_list }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(['channel_list', 'default_icon_list'])
  },
  methods: {
    handelTextAdd(new_name) {
      this.$store.commit('channelmanager/ADD_TO_CHANNEL_LIST', {
        pos: 1,
        text: new_name,
        icon: this.generateIcon()
      })
    },
    generateIcon() {
      return this.default_icon_list[
        Math.floor(Math.random() * this.default_icon_list.length)
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1 {
  @apply md:py-5 md:font-black md:text-8xl md:text-lg xl:text-base;
} */
/* .button {
  @apply rounded-lg bg-red-600 px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 hover:bg-red-400 md:text-lg xl:text-base text-white font-semibold leading-tight shadow-md;
} */
</style>
