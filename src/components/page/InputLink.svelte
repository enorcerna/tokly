<script>
	import { pasteStore } from '@/stores/download';
	import { Input } from '../ui/input';
	let link = $state('');
	$effect(() => {
		pasteStore.subscribe((v) => {
			link = v;
		});
	});
</script>

<Input class="" placeholder="Pega tu enlace ..." bind:value={link} />
