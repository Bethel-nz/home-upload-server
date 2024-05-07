<script>
	import Upload from '@components/Upload.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Upload files page" />
</svelte:head>

<section class="relative h-full">
	<Upload />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
