const itemDecoratorArray = async (item) =>{
  
    const mappedItem = item.map((data)=>{
  
      return {
        id_item : data.id,
        name_item: data.name_item,
        category_id: data.category_id,
        category_name: data.category.category_name,
        Description: data.item_description,
        price: data.price,
        quantity: data.quantity
      }
    })
    return await Promise.all(mappedItem)
  }

  const itemDecoratorObject = (item) =>{
  
    const mappedItem = {
        id_item : item.id,
        name_item: item.name_item,
        category_id: item.category_id,
        category_name: item.category.category_name,
        Description: item.item_description,
        price: item.price,
        quantity: item.quantity
      }
    return mappedItem
  }
  
  module.exports = {
    itemDecoratorArray,
    itemDecoratorObject
  }