function loadCategories(){
    // fetch data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")

    // converted promise to json
    .then((res)=>res.json()

    //sending data to display categories
    .then((data)=>displayCategories(data.categories)));
}


//display function
function displayCategories(categories){
 //get the container
    const categoryContainer= document.getElementById("category-container");

 //loop operation on Array of object

    for(let cat of categories)
    {

      // Create Element
        const categoryDiv=document.createElement("div");
        categoryDiv.innerHTML=`
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `
        //Append the element

        categoryContainer.append(categoryDiv);
    }


}





function loadVideos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
}

const displayVideos=(videos) =>{
    const videoContainer= document.getElementById("video-container");

    for(video of videos){
        
        // create element
        const videoCard = document.createElement("div");
        videoCard.innerHTML=`
        <div class="card bg-base-100  shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video
        .title
    }</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        `
        // append 
        videoContainer.append(videoCard);
    }
}


loadCategories();
loadVideos();