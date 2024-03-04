


async function decrementProductsValidation(products){
    const {ProductService} = require("../../../services")
    const productService = new ProductService()
    const uniqueProducts = removeRepeatedProducts(products)
    const productsInstance = await productService.decrementProductsAmount(uniqueProducts)

    if (!productsInstance.success) return productsInstance

    productsInstance.result.forEach(product => product.save())
    return productsInstance
}


function removeRepeatedProducts(products){
    return products.reduce((accumulator, currentValue) => {
        let productsList = [...accumulator]
      
        let index = productsList.findIndex(value =>       
        value.id===currentValue.id)
        if (index !== -1){
          productsList[index].amount += currentValue.amount
        } else {
          productsList.push(currentValue)
  
        }
      return productsList
    }, [])

}

module.exports = {
    decrementProductsValidation
}