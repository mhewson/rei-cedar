<template>
  <div>
    <h3>Image modifiers</h3>
    <cdr-row
      cols="2"
      cols-md="4"
    >
      <cdr-col>
        <div>
          <p>Responsive</p>
          <cdr-img
            ratio="4-3"
            modifier="responsive"
            alt="ratio responsive"
            src="http://placehold.it/200x200"
          />
          <cdr-img
            modifier="responsive"
            alt="standard responsive"
            src="http://placehold.it/200x200"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>Rounded</p>
          <cdr-img
            ratio="4-3"
            modifier="rounded"
            alt="ratio rounded"
            src="http://placehold.it/200x200"
          />
          <cdr-img
            modifier="rounded"
            alt="landscape rounded"
            src="http://placehold.it/350x150"
          />
          <cdr-img
            modifier="rounded"
            alt="square rounded"
            src="http://placehold.it/200x200"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>circle</p>
          <cdr-img
            ratio="4-3"
            modifier="circle"
            alt="ratio circle"
            src="http://placehold.it/200x200"
          />
          <cdr-img
            modifier="circle"
            alt="landscape circle"
            src="http://placehold.it/350x150"
          />
          <cdr-img
            modifier="circle"
            alt="square circle"
            src="http://placehold.it/200x200"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <p>thumbnail</p>
          <cdr-img
            ratio="4-3"
            modifier="thumbnail"
            alt="ratio thumbnail"
            src="http://placehold.it/200x200"
          />
          <cdr-img
            modifier="thumbnail"
            alt="landscape thumbnail"
            src="http://placehold.it/350x150"
          />
          <cdr-img
            modifier="thumbnail"
            alt="square thumbnail"
            src="http://placehold.it/200x200"
          />
        </div>
      </cdr-col>
    </cdr-row>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'Mods',
  components: Components,
};
</script>


<style scoped>
  .cdr-media-frame {
    background-color: lightblue;
  }
</style>
