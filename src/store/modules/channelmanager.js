const state = {
  channel_list: [
    {pos: 1, text: 'Team@trengo.com', icon: ['fas', 'envelope']},
    {pos: 2, text: 'Call Center', icon: ['fas', 'phone-alt']},
    {pos: 3, text: 'Whatsapp Bussiness', icon: ['fab','whatsapp'] },
    {pos: 4, text: '(test) development Calafornia', icon: ['fas', 'envelope']},
    {pos: 5, text: 'Whatsapp Bussiness Iceland', icon: ['fab','whatsapp']},
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
  }
}

export default {
  namespaced: true,
  state,
  mutations
  // actions //API calls
}