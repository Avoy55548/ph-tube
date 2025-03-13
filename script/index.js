function loadCategories(){
    // fetch data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")

    // converted promise to json
    .then((res)=>res.json()

    //sending data to display categories
    .then((data)=>displayCategories(data.categories)));
}


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
loadCategories();