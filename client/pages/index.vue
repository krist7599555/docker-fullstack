<template>
  <section class="section">
    <div>
      <b-button type="is-success" @click="request">request to /api/user</b-button>
      <h1>RESULT = {{result}}</h1>
    </div>
    <br>
    <div class="columns is-mobile">
      <card title="Free" icon="github-circle">
        Open source on
        <a href="https://github.com/buefy/buefy">GitHub</a>
      </card>

      <card title="Responsive" icon="cellphone-link">
        <b class="has-text-grey">Every</b> component is responsive
      </card>

      <card title="Modern" icon="alert-decagram">
        Built with
        <a href="https://vuejs.org/">Vue.js</a> and
        <a href="http://bulma.io/">Bulma</a>
      </card>

      <card title="Lightweight" icon="arrange-bring-to-front">No other internal dependency</card>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'
import axios from 'axios'
export default {
  name: 'HomePage',

  components: {
    Card
  },
  data() {
    return {
      result: 'empty'
    }
  },
  methods: {
    request() {
      axios
        .get('/api/user')
        .then(res => {
          this.result = res.data
          this.$toast.open('success')
        })
        .catch(err => {
          this.$toast.open(err.message)
          console.error(err)
        })
    }
  }
}
</script>
