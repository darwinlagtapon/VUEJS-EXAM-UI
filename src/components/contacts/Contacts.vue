<template src="./Contacts.html"></template>

<script>

export default {

  name: 'Home',

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
        })
    }

  }
}

</script>

<style src="./Contacts.css"></style>
