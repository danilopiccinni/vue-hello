const { createApp } = Vue

createApp({
  data() {
    return {
      title: 'Questo è il titolo della pagina',
      imageLink : 'https://picsum.photos/seed/picsum/1000/500',
    }
  },

  methods: {
    getLinkImg() {
        return  this.imageLink
    }
  }
  
}).mount('#app')

