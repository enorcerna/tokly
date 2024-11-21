<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLElement> {}
	import { cn } from '@/utils';

	let { class: className, children, ...rest }: Props = $props();
</script>

<div class={cn(' mx-auto  lg:w-3/4', className)} {...rest}>
	{@render children?.()}
</div>
