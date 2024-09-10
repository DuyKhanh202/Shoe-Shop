import React from "react";

const Cart = ({ cart, handleRemove }) => {
  return (
    <div className="col-6">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Total</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>
                <button className="btn btn-warning">-</button>
                <strong className="mx-3">{item.soLuong}</strong>
                <button className="btn btn-success">+</button>
              </td>
              <td>
                <img style={{ width: 50 }} src={item.image} alt="" />
              </td>
              <td>{item.price * item.soLuong}</td>
              <td>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="btn btn-dark"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {cart.length === 0 && (
        <h3 className="text-center">No items to display</h3>
      )}
    </div>
  );
};

export default Cart;
