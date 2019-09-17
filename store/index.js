export const state = () => ({
  prevRoute: '',
  nextRoute: '',
})

export const mutations = {
  UPDATE_VISIT(state, path) {
    state.prevRoute = state.nextRoute
    state.nextRoute = path
  }
}
