export function formatTime(seconds: number): string {
	const minutes = Math.floor(seconds / 60);
	const sec = Math.floor(seconds % 60);
	const paddedSeconds = sec.toString().padStart(2, '0');
	return `${minutes}:${paddedSeconds}`;
}
