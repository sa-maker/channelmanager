<template>
  <div class="hello">
    <h1 class="py-2 px-3 font-bold text-gray-600 text-lg">Channel Manager</h1>
    <draggable
      v-model="myList"
      class="w-full px-3"
      @start="drag = true"
      @end="drag = false"
    >
      <div
        slot="header"
        class="py-1 border-gray-200 rounded-full border-solid border-2 "
      >
        <font-awesome-icon
          icon="search"
          alt="Drag the channel up or don to change the order"
          title="Drag the channel up or don to change the order"
          class="mx-3  cursor-pointer text-gray-400"
        />
        <input
          v-model="addField"
          placeholder="Add channels"
          class="w-4/5"
          @keyup.enter="handelTextAdd"
        />
      </div>
      <div v-for="(element, index) in myList" :key="index" class="py-3 my-2 ">
        <font-awesome-icon
          icon="grip-vertical"
          alt="Drag the channel up or don to change the order"
          title="Drag the channel up or don to change the order"
          class="mx-3 cursor-pointer text-gray-400"
        />
        <div
          class=" w-8 py-1 text-center bg-gray-300 rounded text-gray-600 inline-block"
        >
          <font-awesome-icon :icon="element.icon" class="text-xl " />
        </div>
        <div class=" mx-3 inline-block font-semibold text-gray-600">
          {{ element.text }}
        </div>
        <a
          @click="handleRemove(index)"
          class=" float-right py-2 px-7 font-bold cursor-pointer hover:text-gray-600 text-gray-400 text-sm align-text-bottom "
          >Remove</a
        >
      </div>
      <div
        slot="footer"
        class=" text-right border-t-2 border-gray-200 my-4 py-4"
      >
        <button
          @click="handelCancel()"
          class="mx-4 py-1 px-8 border-gray-200 rounded-full border-solid border-2"
        >
          Cancel
        </button>
        <button
          @click="handelApply()"
          class=" py-1 px-8 rounded-full bg-gray-900 text-white "
        >
          Apply
        </button>
      </div>
    </draggable>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import draggable from 'vuedraggable'

export default {
  name: 'ChannelManager',
  components: {
    draggable
  },
  props: {},
  data() {
    return {
      myList: [],
      addField: ''
    }
  },
  computed: {
    ...mapGetters(['channel_list', 'default_icon_list'])
  },
  beforeMount() {
    console.log('beforeMount')
    // this.myList = this.channel_list
  },
  methods: {
    handelTextAdd() {
      this.myList.push({ text: this.addField, icon: this.generateIcon() })
      this.addField = ''
      this.blockClose()
    },
    handleRemove(index) {
      if (confirm('Are you sure you want to remove this channel?') == true) {
        this.myList.splice(index, 1)
        this.blockClose()
      }
    },
    generateIcon() {
      return this.default_icon_list[
        Math.floor(Math.random() * this.default_icon_list.length)
      ]
    },
    handelApply() {
      console.log('handelApply')
      this.$store.commit('channelmanager/UPDATE_CHANNEL_LIST', this.myList)
      this.$emit('closeModal')
    },
    handelCancel() {
      this.$emit('closeModal')
    },
    blockClose() {
      this.$emit('blockClose')
    }
  }
}
</script>

<style scoped></style>
