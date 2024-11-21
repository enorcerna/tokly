<script lang="ts">
	import ResponsiveContainer from '@/components/global/ResponsiveContainer.svelte';
	import { cn } from '@/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLElement> {}

	let { class: className, children, ...rest }: Props = $props();
</script>

<header class={cn('sticky top-2 z-20 mx-2 mt-2 h-14 lg:mx-0', className)} {...rest}>
	<ResponsiveContainer
		class="shadow-lgbg-background/10 flex h-full items-center justify-between rounded-full px-4 py-2 backdrop-blur-lg"
	>
		{@render children?.()}
	</ResponsiveContainer>
</header>
