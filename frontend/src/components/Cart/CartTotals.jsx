import { useContext, useState } from "react";
import { CartContext } from "../../context/CardProvider";

const CartTotals = () => {
  const {cartItems}  =useContext(CartContext)
  const [fastCargoChecked,setFastCargoChecked]=useState(false)
  //burada quantity yani sepete o üründen kaç tane varsa onunla çarpacağız
  const cartItemTotals = cartItems.map((item) => {
 const itemTotal = (item.price.newPrice)*(item.quantity); 
 return itemTotal;
  });
  //reduce: toplama
  var total=0;
  const subTotals = cartItemTotals.reduce((previousValue,currentValue) => {
    return (previousValue+currentValue)},0);
    //hızlı kargo olursa 
  if(fastCargoChecked){total=subTotals+15}
  else{total=subTotals}
   
  
  
  return (
    <div className="cart-totals">
      <h2>Cart totals</h2>
      <table>
        <tbody>
          <tr className="cart-subtotal">
            <th>Subtotal</th>
            <td>
              <span id="subtotal">${subTotals.toFixed(2)}</span>
            </td>
          </tr>
          <tr>
            <th>Shipping</th>
            <td>
              <ul>
                <li>
                  <label>
                    Fast Cargo: $15.00
                    <input type="checkbox" id="fast-cargo" checked={fastCargoChecked}  onChange={()=>setFastCargoChecked(!fastCargoChecked)}/>
                  </label>
                </li>
                <li>
                  <a href="#">Change Address</a>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>Total</th>
            <td>
              <strong id="cart-total">${total.toFixed(2)}</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="checkout">
        <button className="btn btn-lg">Proceed to checkout</button>
      </div>
    </div>
  );
};

export default CartTotals;
