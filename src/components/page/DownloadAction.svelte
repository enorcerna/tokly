<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Button } from '../ui/button';
	import { toast } from 'svelte-sonner';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { downloadVideo } from '@/services/api';
	let disabled = $state(false);
	interface Props extends HTMLButtonAttributes {
		link?: string;
		idVideo?: string;
	}

	let { link, idVideo }: Props = $props();
	const handleClik = async () => {
		if (link && idVideo) {
			disabled = true;
			await downloadVideo(link, idVideo as string);
			setTimeout(() => {
				disabled = false;
				toast.success('Descargado');
			}, 1000);
		}
	};
</script>

<Button
	class="lgw-full fixed bottom-3 flex w-4/5 items-center justify-center gap-1 bg-green-600 hover:bg-green-700 lg:static  lg:w-full "
	size="lg"
	onclick={handleClik}
	{disabled}
>
	{#if disabled}
		<Icon icon="eos-icons:loading" />
	{:else}
		<Icon icon="solar:download-line-duotone" />
	{/if}
	Descargar
</Button>
