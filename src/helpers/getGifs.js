export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=JkQjY2gIMjJNXZTYq5oxaBoOr7aDZn1Y&q=${ category }&limit=10`;
    // const url = `https://api.giphy.com/v1/gifs/search?q=${category.trim()}&limit=10&api_key=JkQjY2gIMjJNXZTYq5oxaBoOr7aDZn1Y`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}