export const searchImages=async(query)=>{
    const response=await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=DQSLq295Az_rIHHjz5MtT7xNjdZTBzDEa6IZZTKfXt0`);
    const data=await response.json()
    console.log(data);
    console.log("guide for book mark= after clicking bookmark button you can see at the end of images will be appeared as bookmarked kindly scroll down ok!")
    return data.results
}