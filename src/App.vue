<template>
  <div
    id="app"
    class="cdr-container-fluid"
  >
    <h1>Cedar Proving grounds</h1>
    <anchors
      class="cpg-section"
      data-backstop="anchors"
    />
    <buttons
      class="cpg-section"
      data-backstop="buttons"
    />
    <cards class="cpg-section"/>
    <!-- <card-content class="cpg-section"></card-content> -->
    <activity class="cpg-section"/>
    <checkboxes
      class="cpg-section"
      data-backstop="checkboxes"
    />
    <grid class="cpg-section"/>
    <texts class="cpg-section"/>
    <icons
      class="cpg-section"
      data-backstop="icons"
    />
    <images class="cpg-section"/>
    <searchbox
      class="cpg-section"
      data-backstop="search"
    />
    <inputs
      class="cpg-section"
      data-backstop="inputs"
    />
    <lists
      class="cpg-section"
      data-backstop="lists"
    />
    <mediaObject class="cpg-section"/>
    <mountains class="cpg-section"/>
    <radios
      class="cpg-section"
      data-backstop="radios"
    />
    <quote-example
      class="cpg-section"
      data-backstop="quote"
    />
    <ratings
      class="cpg-section"
      data-backstop="ratings"
    />
    <selects
      class="cpg-section"
      data-backstop="selects"
    />
    <utilities class="cpg-section"/>

    <caption-example
      class="cpg-section"
      data-backstop="caption"
    />

  </div>
</template>

<script>
import examples from 'componentsdir/examples';
import compexamples from 'compositionsdir/examples';

const all = Object.assign({}, examples, compexamples);

export default {
  name: 'App',
  components: all,
};
</script>

<style scoped>
  .cpg-section {
    margin: 16px 0;
  }
</style>
