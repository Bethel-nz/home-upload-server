<script>
	import './styles.css';
</script>

<div class="flex h-dvh items-center flex-col border-2">
	<h1>Upload files</h1>
	<main class="h-screen w-full items-center mx-auto flex border-2 borde-red justify-center">
		<slot />
	</main>

	<footer class="flex mx-auto w-full my-4 justify-center self-end">
		<p class="flex gap-2 items-center">
			made with <img
				src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beating%20Heart.png"
				alt="Beating Heart"
				width="25"
				height="25"
			/>
			by
			<a aria-label="my-profile" class="font-semibold" href="https://github.com/Bethel-nz"
				>Bethel-nz</a
			>
		</p>
	</footer>
</div>

<style>
</style>
