<template src="./ContactList.html"></template>

<script>

export default {

  name: 'ContactList',

  data () {
    return {
      contacts: {},
      formData: []
    }
  },

  created () {
  },

  mounted () {
    this.getContacts()
  },

  methods: {

    getContacts () {
      var url = '/contacts'
      this.$http.get(url)
        .then(response => {
          this.contacts = response.data.data
          console.log('this.contacts', this.contacts)
        })
    }

  }
}

</script>

<style src="./ContactList.css"></style>
