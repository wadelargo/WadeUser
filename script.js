fetch('https://dummyjson.com/products')
.then((res) => res.json())
.then((data) =>{
  let productsDiv = document.getElementById('products')

  data.products.forEach((product) => {

    let productDiv = document.createElement('div')
    productDiv.className = "product"

    let image = document.createElement('img')
    image.className = "image"
    image.src = product.thumbnail

    let titleA = document.createElement('a')
    titleA.href="user/index.html?productId=" + product.id
    titleA.className = "title"
    titleA.innerText = product.title

    let descriptionDiv = document.createElement('div')
    descriptionDiv.className = "description"
    descriptionDiv.innerText = product.description

    let priceDiv = document.createElement('div')
    priceDiv.className = "price"
    priceDiv.innerText = `$${product.price}`

    productDiv.append(image)

    productDiv.append(titleA)

    // productDiv.append(descriptionDiv)
    
    productDiv.append(priceDiv)   
    
    productsDiv.append(productDiv)


  })

  
})