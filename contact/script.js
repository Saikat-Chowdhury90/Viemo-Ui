const backgroundImages = [
    './content/first.jpg',
    './content/second.jpg',
    './content/third.jpg',
    './content/fourth.jpg',
    './content/fifth.jpg',
    './content/sixth.jpg',
    
];



let currentIndex = 0;

function changeBackgroundImage() {
    const leftImage = document.querySelector('.left-image');
    const rightImage = document.querySelector('.right-image');

    leftImage.style.transform = 'translateY(-100%)';
    rightImage.style.transform = 'translateY(100%)';

    setTimeout(() => {
        leftImage.style.backgroundImage = `url('${backgroundImages[currentIndex]}')`;
        rightImage.style.backgroundImage = `url('${backgroundImages[currentIndex]}')`;

        leftImage.style.transform = 'translateY(0%)';
        rightImage.style.transform = 'translateY(0%)';
    }, 400); 

    currentIndex = (currentIndex + 1) % backgroundImages.length;
}


changeBackgroundImage();


setInterval(changeBackgroundImage, 5000);

