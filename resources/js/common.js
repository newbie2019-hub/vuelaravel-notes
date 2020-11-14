export default {
  data() {
    return {

    }
  },
  methods: {
    async callApi(method, url, data) {
      try {
        return await axios({
          method: method,
          url: url,
          data: data
        });
      } catch (e) {
        return e.response
      }
    },
    success(msg) {
      Vue.$toast.success(msg)
    },
    error(msg) {
      Vue.$toast.error(msg)
    },
    warning(msg) {
      Vue.$toast.warning(msg)
    },
    info(msg) {
      Vue.$toast.info(msg)
    },
  }
}