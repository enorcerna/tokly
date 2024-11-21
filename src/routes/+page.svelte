<script>
	import DownloadAction from '@/components/page/DownloadAction.svelte';
	import GetVideo from '@/components/page/GetVideo.svelte';
	import InputLink from '@/components/page/InputLink.svelte';
	import Paste from '@/components/page/Paste.svelte';
	import Video from '@/components/page/Video.svelte';
	import * as Avatar from '@/components/ui/avatar';
	import * as Card from '@/components/ui/card';
	import { URL_BASE } from '@/constants/main';
	let { data } = $props();
</script>

<section class="my-5">
	<h1 class=" flex gap-2 text-center text-2xl font-bold">
		Descarga <div class="relative">
			Videos <span
				class="absolute
		 -top-2 left-11 text-sm font-light italic text-muted-foreground">tiktok</span
			>
		</div>
		facil
	</h1>
</section>
<section
	class="mx-auto mb-3 flex w-full flex-col items-center justify-center gap-2 p-2 lg:w-3/5 lg:flex-row"
>
	<InputLink />
	<div class="flex items-center justify-center gap-2">
		<Paste />
		<GetVideo />
	</div>
</section>
<section class="mx-auto flex flex-col gap-4 lg:w-3/4 lg:flex-row">
	<Video src={data.vid?.play} poster={data.vid?.cover} />
	<Card.Root class="flex flex-col gap-3 lg:w-2/4">
		<Card.Header class="flex flex-col items-center gap-2">
			<Avatar.Root>
				<Avatar.Image src={`${URL_BASE}${data.vid?.author.avatar}`} alt="@shadcn" />
				<Avatar.Fallback>CN</Avatar.Fallback>
			</Avatar.Root>
			<div class="flex flex-col">
				<span class="">{data.vid?.author.nickname}</span>
				<span class="text-sm text-muted-foreground">@{data.vid?.author.unique_id}</span>
			</div>
		</Card.Header>
		<Card.Content>
			<h2 class="text-wrap font-body text-sm font-light text-muted-foreground">
				{data.vid?.title}
			</h2>
		</Card.Content>
		<Card.Footer>
			<DownloadAction link={data.vid?.play} idVideo={data.vid?.id} />
		</Card.Footer>
	</Card.Root>
</section>
