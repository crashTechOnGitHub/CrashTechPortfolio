<template>
<div class="main-container"  id="iconContainer">
<div class="fixer-container">
<div v-for="offering in offerDetails" :key="offering.id" v-bind:id="offering.id" class="icon" @click="showModal(offering,$event)">
{{offering.title}}
</div>
</div>
<offeringDetails
      v-show="isModalVisible"
      @close="closeModal"
      v-bind:selectedTile="selectedTile"
    />
</div>
</template>
<script>
import offeringDetails from './offeringDetails.vue'
export default{
  data () {
    return {
      'offerings': ['4-Day CrashTech', 'Frontend Development', 'Middleware Services', 'Backend Development', 'Data Structure &amp; Algorithms', 'MEAN Stack Development', 'Technical Interview Workshop'],

      offerDetails: [{'id': 'offer1', 'title': '4-Day CrashTech', 'techStack': ['Mongo', 'Express', 'Vue', 'Node'], 'level': '5', 'duration': '4 Days', 'description': ' Become a full stack developer in 4 days and host your application on Cloud and let your Parents use it.'},
        {'id': 'offer2', 'title': 'Frontend Development', 'techStack': ['Js', 'CSS', 'HTML', 'Jquery'], 'level': '1', 'duration': '4 Days', 'description': ' Become a full stack developer in 4 days and host your application on Cloud and let your Parents use it.'},
        {'id': 'offer3', 'title': 'Middleware Services', 'techStack': ['Java', 'Spring', 'Node'], 'level': '3', 'duration': '4 Days', 'description': ' Become a full stack developer in 4 days and host your application on Cloud and let your Parents use it.'},
        {'id': 'offer4', 'title': 'Backend Development', 'techStack': ['Rest API', 'Express', 'RabbitMQ'], 'level': '2', 'duration': '4 Days', 'description': ' Become a full stack developer in 4 days and host your application on Cloud and let your Parents use it.'},
        {'id': 'offer5', 'title': 'Data Structure & Algorithms', 'techStack': ['SQL', 'PostgreSQL', 'Mongo', 'Hana'], 'level': '1', 'duration': '4 Days', 'description': ' Become a full stack developer in 4 days and host your application on Cloud and let your Parents use it.'},
        {'id': 'offer6', 'title': 'MEAN Stack Development', 'techStack': ['Mongo', 'Express', 'Angular', 'Node'], 'level': '6', 'duration': '4 Days', 'description': ' Become a full stack developer in 4 days and host your application on Cloud and let your Parents use it.'},
        {'id': 'offer7', 'title': 'Technical Interview Workshop', 'techStack': ['Everything'], 'level': '7', 'duration': '4 Days', 'description': ' Become a full stack developer in 4 days and host your application on Cloud and let your Parents use it.'}
      ],

      selectedTileDetails: {},
      'isModalVisible': false
    }
  },
  components: {
    'offeringDetails': offeringDetails
  },
  methods: {
    showModal (tile, e) {
      this.isModalVisible = true
      console.log(e.currentTarget)
      console.log('\n ' + tile)
      this.selectedTileDetails = tile
    },
    closeModal () {
      this.isModalVisible = false
    }
  },
  computed: {
    selectedTile: function () {
      return this.selectedTileDetails
    }
  }

}
</script>
<style scoped lang="scss">
.main-container {
width:60%;
      float: left;
      position: relative;
      left: 50%;
      margin: 3em auto;
    }
.fixer-container {
      float: left;
      position: relative;
      left: -50%;
    }

.icon{
width: 80px;
    text-align: center;
    /* justify-content: flex-end; */
    height: 80px;
    margin: 2em 2em;
    border-radius: 4em;
    padding: 0.1em;
    float:left;
    background: #fbc7b9;
    font-size:12px;
    animation: 2s ease infinite pulse;
    }
 @keyframes pulse {
  0% {
    background: #fbc7b9;
    transform: scale(1);
  }

  25% {
    background: darken(#fbc7b9, 10%);
    transform: scale(1.15);
  }

  50% {
    background: #fbc7b9;
    transform: scale(1);
  }
}
@for $i from 1 through 9 {
  .icon {
    &:nth-child(#{$i}) {

      // Delay the animation. Delay increases as items loop.
      animation-delay: $i * (2s / 18);
    }
  }
}
.icon:hover
 {
  cursor: pointer;
  animation: 3s ease swell;
 }
 @keyframes swell {
  0% {
    transform: scale(1);
    background: #eee;
  }
  50% {
    transform: scale(1.8);
    background: #fff;
  }
  }
</style>
