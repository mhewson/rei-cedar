<template>
  <div>
    <h3>Menu List</h3>

    <cdr-list
      modifier="menu"
      data-backstop="cdr-list--menu"
    >
      <li><a href="/">List menu</a></li>
      <li><a href="/">List menu</a></li>
    </cdr-list>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'MenuList',
  components: Components,
};
</script>

<style>

</style>
