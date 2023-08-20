document.getElementById('main').remove();
// here we grabbed the main element by id
// and removed it using .remove();

const newHeader = document.createElement('h1');
// here we set a newHeader variable to a new
// h1 element in the document

newHeader.id = 'victory';
// now we can refence that newHeader variable
// and assign it an id and more

newHeader.textContent = "YOUR-NAME is the champion";
// since newHeader points to the h1 we created, we can 
// assign textContent to it and more