import React from "react";

const DetailShoe = ({ detail }) => {
  const { name, price, description, quantity } = detail;

  return (
    <div>
      <h2>Detail</h2>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Stock</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
              <td>{price}</td>
              <td>{description}</td>
              <td>{quantity}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailShoe;