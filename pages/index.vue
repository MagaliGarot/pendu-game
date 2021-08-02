<template>
  <div class="container">
    <div>
      <Game />
    </div>
  </div>
</template>

<script>
import Game from "@/components/Game.vue";
import Nav from "@/components/Nav.vue";

export default {
  components: {
    Game,
    Nav,
  },
/*   layout: 'default' */
}
</script>