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

    <br />
    <br />
    <h1 class="py-5 md:font-black text-4xl">Draggable working</h1>
    <draggable
      v-model="myList"
      group="people"
      class="w-max"
      @start="drag = true"
      @end="drag = false"
    >
      <div
        v-for="element in myList"
        :key="element.id"
        class="py-3 my-2 rounded-lg border-gray-500 border-solid border-2 shadow"
      >
        <font-awesome-icon :icon="element.icon" class="mx-3" />{{
          element.text
        }}
        <font-awesome-icon
          icon="grip-vertical"
          class=" mx-3 float-right cursor-pointer"
        />
      </div>
    </draggable>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import draggable from 'vuedraggable'

export default {
  name: 'HelloWorld',
  components: {
    draggable
  },
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(['channel_list', 'default_icon_list']),

    myList: {
      get() {
        return this.channel_list
      },
      set(value) {
        this.$store.commit('channelmanager/UPDATE_CHANNEL_LIST', value)
      }
    }
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
