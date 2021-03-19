<template>
  <div>
    <div class="font-semibold text-lg inline-block">Channels</div>
    <font-awesome-icon
      icon="ellipsis-h"
      alt="Open the Channel Manager"
      title="Open the Channel Manager"
      class="mx-3 cursor-pointer text-gray-400"
      @click="openChannelmanager()"
    />
    <div v-for="(element, index) in channel_list" :key="index" class=" mx-2">
      <div class=" w-2 py-1 text-center text-gray-600 inline-block">
        <font-awesome-icon :icon="element.icon" class="text-ls " />
      </div>
      <div class=" mx-3 inline-block font-normal text-xs text-gray-600">
        {{ element.text }}
      </div>
    </div>

    <t-modal ref="modal" @before-close="beforeClose"
      ><ChannelManager
        v-if="displayChannelManager"
        @closeModal="closeModal"
        @blockClose="blockClose"
    /></t-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ChannelManager from '@/components/ChannelManager.vue'

export default {
  name: 'MenuBase',
  components: {
    ChannelManager
  },
  data() {
    return {
      hasThingsChanged: false,
      displayChannelManager: false
    }
  },
  computed: {
    ...mapGetters(['channel_list'])
  },
  methods: {
    openChannelmanager() {
      this.displayChannelManager = true
      this.$refs.modal.show()
    },
    closeModal() {
      this.hasThingsChanged = false
      this.displayChannelManager = false
      this.$refs.modal.hide()
    },
    beforeClose({ cancel }) {
      if (this.hasThingsChanged === true) {
        cancel()
      }
    },
    blockClose() {
      this.hasThingsChanged = true
    }
  }
}
</script>

<style></style>
