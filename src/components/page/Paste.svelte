<script>
	import Icon from '@iconify/svelte';
	import { Button } from '../ui/button';
	import { pasteStore } from '@/stores/download';
	const handlePaste = () => {
		navigator.clipboard.readText().then((value) => {
			if (value.includes('tiktok.com')) {
				pasteStore.set(value);
			}
		});
	};
</script>

<Button variant="secondary" onclick={handlePaste} size="icon">
	<Icon icon="solar:copy-line-duotone" />
</Button>
