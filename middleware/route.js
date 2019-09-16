export default ({store, route}) => {
    store.commit('UPDATE_VISIT', route.name)
    console.log(route.name)
}