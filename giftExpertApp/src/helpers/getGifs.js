export const getGifs = async (search) => {
    const url = `https://api.giphy.com/v1/stickers/search?api_key=YoWhyDP3JXkXtYmRsuae7fOWXz5RD1Y3&q=${search}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(g => ({
        id: g.id,
        title: g.title,
        url: g.images.downsized_medium.url,
    }));
    return gifs;
};