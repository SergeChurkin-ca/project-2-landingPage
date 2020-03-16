function uploadImage() {
    const imageUrl = document.querySelector('#myFile').value;

    const uploadButton = document.querySelector('#submit');
    const msg = document.querySelector('#message')

    uploadButton.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(imageUrl)

        msg.innerHTML = `${imageUrl}`
    })
}
uploadImage();