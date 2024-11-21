import { URL_BASE } from '@/constants/main';
import type { TypesVideo } from '@/types/video';

async function getVideo(link: string) {
	try {
		const resp = await fetch('https://www.tikwm.com/api/', {
			method: 'POST',
			body: JSON.stringify({
				url: link,
				count: 12,
				cursor: 0,
				web: 1,
				hd: 1
			})
		});
		return (await resp.json()) as TypesVideo;
	} catch (error) {
		new Error('Failed fetch:' + error);
	}
}
async function downloadVideo(url: string, id: string) {
	try {
		// Realizar la solicitud del archivo
		const response = await fetch(URL_BASE + url);

		// Validar el estado de la respuesta
		if (!response.ok) {
			throw new Error(`Error al descargar: ${response.status} - ${response.statusText}`);
		}
		// Verificar el tipo de contenido recibido
		const contentType = response.headers.get('content-type');
		if (!contentType || !contentType.includes('video/mp4')) {
			throw new Error(`El archivo descargado no es un video MP4. Tipo recibido: ${contentType}`);
		}

		// Convertir la respuesta a Blob
		const videoBlob = await response.blob();

		// Crear un enlace para descargar el archivo
		const downloadLink = document.createElement('a');
		downloadLink.href = URL.createObjectURL(videoBlob);
		downloadLink.download = `tokly-${id}.mp4`;

		// Añadir el enlace al DOM, hacer clic en él y eliminarlo después
		document.body.appendChild(downloadLink);
		downloadLink.click();
		downloadLink.remove();

		// Limpiar el objeto URL creado
		URL.revokeObjectURL(downloadLink.href);

		console.log('Descarga completada con éxito.');
	} catch (error) {
		console.error('Error durante la descarga:', error);
	}
}

export { getVideo, downloadVideo };
