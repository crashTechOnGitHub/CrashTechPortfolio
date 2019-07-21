<template>
 <transition name="modalT">
  <div  class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          <b>{{selectedTile.title}}</b>

          <button
            type="button"
            class="btn-close"
            @click="close"
          >
            x
          </button>
        </slot>
      </header>
      <section class="alignLeft">
        <slot name="body">
          <ul class="noPaddingAtStart"><b>Technical Stack Covered:</b> <li class="listNoBullet" v-for="tech in selectedTile.techStack" v-bind:key="tech.index">{{tech}}</li>
          </ul>
          <p> <b>Duration:</b> {{selectedTile.duration}}</p>
          <p> <b>Level: </b>{{selectedTile.level}}</p>
          <p> <b>Description:</b> {{selectedTile.description}}</p>
        </slot>
       </section>
       <footer class="modal-footer">
          <slot name="footer">

            <button
              type="button"
              class="btn-green"
              @click="gotoRegister(selectedTile.title,$event)"
            >
              Register!
          </button>
        </slot>
      </footer>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'offeringDetails',
  props: ['selectedTile'],
  data () {
    return {
      'details': [{'title': 'akjd'}, {'title': 'dfjdk'}, {'title': 'fndnfkdnkj'}]
    }
  },

  methods: {
    close () {
      this.$emit('close')
    },
    gotoRegister (title, e) {
      this.$router.push({path: '/forth', query: {title: title}})
    }
  }
}
</script>

<style scoped>

.alignLeft{
  text-align:left;
  padding:1em;
}
.noPaddingAtStart{
  padding-inline-start:0;
}
.listNoBullet{
  list-style: none;
}
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 1s ease;
    }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    transition: all .3s ease;
    max-width:60%
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #7f75a8;
    justify-content: space-between;

  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #9c0e0e;
    background: transparent;
    border: 2px solid;
    border-color: #7f75a8;
  }

  .btn-green {
    color: white;
    background: #7f75a8;
    border: 1px solid #6e6497;
    border-radius: 2px;
  }
  .modalT-enter {
  opacity: 0;
}

.modalT-leave-active {
  opacity: 0;
}

.modalT-enter .modalT-container,
.modalT-leave-active .modalT-container {
  -webkit-transform: scale(1.5);
  transform: scale(1.5);

}
</style>
