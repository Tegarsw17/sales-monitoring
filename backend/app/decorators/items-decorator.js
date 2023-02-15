

const itemDecoratorArray = async (item) =>{
  
    const mappedItem = item.map((data)=>{
  
      return {
        id_item : data.id,
        name_item: data.name_item,
        category_id: data.category_id,
        category_name: data.category.category_name,
        description: data.item_description,
        price: data.price,
        quantity: data.quantity,
        images: data.image_items.map((image) => {
          return {
            image_id: image.id,
            url: image.url
          }
          
        })
      }
    })
    return await Promise.all(mappedItem)
  }

  const itemDecoratorObject = (item) =>{
    
    const mappingImage = item.image_items.map((image) => {
      return {
        image_id: image.id,
        url: image.url
      }
    })

    const mappedItem = {
        id_item : item.id,
        name_item: item.name_item,
        category_id: item.category_id,
        category_name: item.category.category_name,
        Description: item.item_description,
        price: item.price,
        quantity: item.quantity,
        images: mappingImage
      }
    return mappedItem
  }
  
  module.exports = {
    itemDecoratorArray,
    itemDecoratorObject
  }