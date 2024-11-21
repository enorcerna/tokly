import vid from '@/data/vid.json';
import { getVideo } from '@/services/api.js';
export const load = async ({ url }) => {
	const urlQuery = url.searchParams.get('url');
	const video = await getVideo(urlQuery as string);
	if (urlQuery) {
		return {
			vid: video?.data
		};
	} else {
		return {
			vid: vid.data
		};
	}
};
