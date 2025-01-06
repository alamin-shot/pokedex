function extractNumberFromUrl(str) {
	let match = str.match(/(\d+)(?=\/?$)/);
	return match ? match[0] : null;
}

export default extractNumberFromUrl;
