export async function getCatImages(limit = 10) {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`, {
        headers: {
            'x-api-key': process.env.CAT_API_KEY
        }
    });
    const data = await response.json();
    return data;
}