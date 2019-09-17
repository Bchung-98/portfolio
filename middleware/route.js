export default ({ store, route }) => {
  store.commit('UPDATE_VISIT', route.name)
}
