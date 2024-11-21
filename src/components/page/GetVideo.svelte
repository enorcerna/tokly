<script>
	import { goto } from '$app/navigation';
	import { pasteStore } from '@/stores/download';
	import { Button } from '../ui/button';
	import Icon from '@iconify/svelte';
	const handleGetVideo = () => {
		if ($pasteStore.includes('tiktok.com')) {
			goto(`?url=${$pasteStore}`);
		}
	};
</script>

<Button onclick={handleGetVideo} size="lg">
	<Icon icon="solar:clapperboard-play-line-duotone" />
	Obtener
</Button>
