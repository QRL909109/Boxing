export default {
  methods: {
    handleCheckLogin() {
      this.$store.dispatch('updateUser', {})
    }
  }
}