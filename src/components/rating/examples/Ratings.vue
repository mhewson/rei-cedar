<template>
  <div>
    <h2>Ratings</h2>

    <cdr-rating
      rating="0"
      count="10"
      modifier="large"
    />
    <cdr-rating
      rating="3"
      count="100"
      modifier="large"
      compact
    />

    <cdr-rating
      rating="1.2"
      count="77"
    />
    <cdr-rating
      rating="4.8"
      count="4561"
      compact
    />

    <cdr-rating
      rating="2"
      count="9"
      modifier="small"
    />
    <cdr-rating
      rating="3.444412321"
      count="615"
      modifier="small"
      compact
    />
  </div>
</template>

<script>
import CdrRating from '../CdrRating';

export default {
  name: 'Rating',
  components: { CdrRating },
};
</script>

<style>

</style>
