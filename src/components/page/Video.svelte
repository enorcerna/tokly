<script lang="ts">
	import type { HTMLVideoAttributes } from 'svelte/elements';
	import { URL_BASE } from '@/constants/main';
	import { formatTime } from '@/utils/formater';
	import SoundAnimate from '../header/SoundAnimate.svelte';
	interface Props extends HTMLVideoAttributes {}
	// binds
	let paused = $state(true);
	let time = $state(0);
	let duration = $state(0);
	//props
	let { src, poster, ...rest }: Props = $props();
	// actions
	const handleClik = () => {
		paused = paused ? false : true;
	};
</script>

<div class="group relative flex flex-col items-center justify-center">
	{#if duration}
		<span class="absolute top-3 appearance-none">{formatTime(duration)} / {formatTime(time)}</span>
	{/if}
	<!-- svelte-ignore element_invalid_self_closing_tag -->
	<!-- svelte-ignore a11y_media_has_caption -->
	<video
		src={URL_BASE + src}
		poster={URL_BASE + poster}
		class="aspect-[9/16] w-72 rounded-lg bg-card shadow-background"
		{...rest}
		bind:paused
		bind:currentTime={time}
		bind:duration
		controls={false}
		onmouseup={handleClik}
	/>
	{#if paused === false}
		<SoundAnimate class="absolute text-white" />
	{/if}
	<track kind="captions" />
</div>
