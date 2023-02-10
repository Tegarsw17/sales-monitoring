const itemDecorator = async (item) =>{
  
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
  
  module.exports = {
    itemDecorator,
  }