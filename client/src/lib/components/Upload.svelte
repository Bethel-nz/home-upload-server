<script lang="ts">
	// @ts-nocheck
	import axios from 'axios';
	let isUploaded = false;
	let filename = '';
	let stat = {
		message: '',
		status: null
	};

	$: formData = new FormData();
	async function handleSubmit(event) {
		const file = formData.get('file');
		if (!file) return;
		(stat.status = false), (stat.message = 'No file selected.');

		const uploadData = new FormData();
		uploadData.append('file', file);
		uploadData.append('filename', file.name!);
		await axios
			.post('http://localhost:5273/api/v1/files/upload-file', uploadData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
			.then((e) => {
				(stat.message = 'File Successfully Uploaded'), (stat.status = true);
				isUploaded = true;
			})
			.catch((e) => {
				(stat.message = 'Oops!, an error ccured'), (stat.status = false);
			});
	}
</script>

<form class="absolute flex gap-2 bg-white bottom-8" on:submit|preventDefault={handleSubmit}>
	<label
		for="file"
		class="flex items-center h-24 px-4 py-2 text-black border-2 rounded shadow-sm cursor-pointer w-96"
	>
		{#if !filename && isUploaded}
			Choose File
		{:else}
			<span>{filename}</span>
		{/if}
		<input
			type="file"
			id="file"
			name="file"
			multiple
			hidden
			on:change={(event) => {
				const file = event.target.files[0];
				if (file) {
					filename = file.name;
					formData.append('file', file);
				}
			}}
		/>
	</label>

	<button
		disabled={!formData}
		class="flex h-12 px-4 space-x-2 font-bold text-white bg-purple-700 border-4 border-purple-500 rounded-md shadow-md cursor-pointer size-8 w-fit place-items-center"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
			/>
		</svg>
	</button>
</form>
