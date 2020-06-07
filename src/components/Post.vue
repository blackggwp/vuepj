<template>
  <div class="post">
    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="content">
      <h2>{{ post.time }}</h2>
      <p>{{ post.chartName }}</p>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          this.post = data
          return data
        }).catch((err) => console.log(err))
    }
  }
}
</script>
