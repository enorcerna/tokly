<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import ResponsiveContainer from '@/components/global/ResponsiveContainer.svelte';
	import '@/styles/app.css';
	import HeaderLayout from '@/layouts/HeaderLayout.svelte';
	import Dark from '@/components/header/Dark.svelte';
	import Logo from '@/components/header/Logo.svelte';
	import Fonts from '@/components/global/Fonts.svelte';
	import TitleName from '@/components/seo/TitleName.svelte';
	import { Toaster } from '@/components/ui/sonner';
	let { children } = $props();
</script>

<TitleName />
<Fonts />
<ModeWatcher />
<HeaderLayout>
	<Logo />

	<Dark />
</HeaderLayout>
<ResponsiveContainer
	class="mx-3 flex min-h-screen flex-col items-center justify-center lg:mx-auto lg:p-4"
>
	{@render children()}
</ResponsiveContainer>
<Toaster class="" position="top-center" />
