<script lang="ts">
	import Icon from '@iconify/svelte';
	import { resetMode, setMode } from 'mode-watcher';
	import * as DropdownMenu from '@/components/ui/dropdown-menu/index';
	import { buttonVariants } from '@/components/ui/button/index';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class={buttonVariants({ variant: 'outline', size: 'icon' })}>
		<Icon
			class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			icon="solar:sun-broken"
		/>
		<Icon
			class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			icon="solar:moon-sleep-broken"
		/>
		<span class="sr-only">Toggle theme</span>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
		<DropdownMenu.Item onclick={() => setMode('light')}>Claro</DropdownMenu.Item>
		<DropdownMenu.Item onclick={() => setMode('dark')}>Oscuro</DropdownMenu.Item>
		<DropdownMenu.Item onclick={() => resetMode()}>System</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
