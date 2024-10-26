<script lang="ts">
  import '@unocss/reset/tailwind.css';
  import 'virtual:uno.css';

  let { children } = $props();
</script>

{@render children()}
