
import PropTypes from  "prop-types"
const CartItem = ({cartItem, removeFromCart}) => {
  

  return (
    <tr className="cart-item">
    <td></td>
    <td className="cart-image">
        <img src={cartItem.img.singleImage} alt=""/>
        <i className="bi bi-x delete-cart" onClick={()=>removeFromCart(cartItem.id)} data-id="1"></i>
    </td>
    <td>{cartItem.name}</td>
    <td>${cartItem.price.newPrice}</td>
    <td className="product-quantity">1</td>
    <td className="product-subtotal">${cartItem.price.newPrice}</td>
   </tr>
  )
}

export default CartItem

CartItem.propTypes= {
  cartItem: PropTypes.object,
  removeFromCart:PropTypes.func,
}