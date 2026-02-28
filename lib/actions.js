// Example usage in lib/actions.js
export async function addProduct(formData) {
  await connectDB();
  
  const data = {
    name: formData.get('name'),
    description: formData.get('description'),
    price: Number(formData.get('price')),
    discountPrice: Number(formData.get('discountPrice')) || 0,
    category: formData.get('category'),
  };

  await Product.create(data);
}