const state = {
  channel_list: [
    { text: 'Team@trengo.com', icon: ['fas', 'envelope']},
    { text: 'Call Center', icon: ['fas', 'phone-alt']},
    { text: 'Whatsapp Bussiness', icon: ['fab','whatsapp'] },
    { text: '(test) development Calafornia', icon: ['fas', 'envelope']},
    { text: 'Whatsapp Bussiness Iceland', icon: ['fab','whatsapp']},
  ],
  default_icon_list:[
    ['fas', 'envelope'],
    ['fas', 'phone-alt'],
    ['fab', 'whatsapp'],
    ['fab', 'amazon'],
    ['fab', 'app-store'],
    ['fab', 'git'],
    ['fab', 'github'],
    ['fab', 'trello']

  ]
}

const mutations = {
  // HIT: state=>{
  //   console.log("HIT", state )
  // },
  ADD_TO_CHANNEL_LIST:(state, new_channel) =>{
    state.channel_list.push(new_channel)
  },
  UPDATE_CHANNEL_LIST:(state, new_list)=>{
    state.channel_list = new_list
  }
}

export default {
  namespaced: true,
  state,
  mutations
  // actions //API calls
}