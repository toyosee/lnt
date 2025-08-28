fetch('./housingData.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Access your property listings here
    data.forEach(property => {
      console.log(property.imageUrl); // Use image URL in your app
    });
  })
    .catch(error => console.error('Error loading JSON:', error));
  
