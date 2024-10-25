// main file code
const symbol = document.querySelector(".container i");
const images = document.querySelectorAll('.image-container img');

images.forEach((img) => {
    img.addEventListener("mouseover" , () => {
        img.classList.add("hover-main")
    });
        img.addEventListener("mouseout" , () => {
            img.classList.remove("hover-main")
    });

    img.addEventListener("click" , () => {
    if (img.id === "AI") {
      window.location.href = "AI-image.html";
    } else if (img.id === "nature") {
        window.location.href = "nature-image.html";
    }   else if (img.id === "bird") {
        window.location.href = "bird-image.html";
    }   else if (img.id === "animal") {
        window.location.href = "animal-image.html";
    }   else if (img.id === "doll") {
        window.location.href = "doll-image.html";
    }   else if (img.id === "flower") {
        window.location.href = "flower-image.html";
    }
});
});

symbol.addEventListener("click" , () => {
    window.location.href = "index.html";
});

// internal file code
const InnerImages = document.querySelectorAll('.inner-image-container img');
InnerImages.forEach((img) => {
    img.addEventListener("mouseover" , () => {
        img.classList.add("hover-inner")
    });
        img.addEventListener("mouseout" , () => {
            img.classList.remove("hover-inner")
    });
});