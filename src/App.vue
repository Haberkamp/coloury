<template>
  <div id="app">
    <div class="sticky-footer">
      <TheHeader />
    </div>
    <TheFooter />
  </div>
</template>

<script>
  import TheHeader from './components/TheHeader';
  import TheFooter from './components/TheFooter';

  export default {
    name: 'App',
    components: {
      TheHeader,
      TheFooter
    }
  };
</script>

<style></style>
