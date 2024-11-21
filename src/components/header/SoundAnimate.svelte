<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<SVGSVGElement> {}
	import { cn } from '@/utils';

	let { class: className, children, ...rest }: Props = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="32"
	height="32"
	viewBox="0 0 14 14"
	class={cn(className)}
	{...rest}
>
	<path
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M5.7 2.5v7"
	/>
	<path
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M3.1 5v4"
	/>
	<path
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M11.3 2.5v7"
	/>
	<path
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M8.3 5v4"
	/>
</svg>

<style>
	/* Animación de onda de sonido */
	@keyframes soundwave {
		0%,
		100% {
			transform: scaleY(1);
			opacity: 0.8;
		}
		50% {
			transform: scaleY(2);
			opacity: 1;
		}
	}

	svg path {
		transform-origin: center; /* Anclar para la escala */
		animation: soundwave 0.6s infinite ease-in-out;
	}

	/* Efecto en cada línea para que varíen */
	svg path:nth-child(1) {
		animation-delay: 0s;
	}
	svg path:nth-child(2) {
		animation-delay: 0.1s;
	}
	svg path:nth-child(3) {
		animation-delay: 0.2s;
	}
	svg path:nth-child(4) {
		animation-delay: 0.3s;
	}
	svg path:nth-child(5) {
		animation-delay: 0.4s;
	}
	svg path:nth-child(6) {
		animation-delay: 0.5s;
	}
</style>
