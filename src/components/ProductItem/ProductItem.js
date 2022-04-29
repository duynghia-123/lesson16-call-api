import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductItem extends Component {
  onDelete = (id) => {
    // cách 1: gọi hàm từ component cha (App) để gọi hàm onDeleteProduct từ props của App để gọi hàm xóa sản phẩm từ API (API.js) và gọi lại hàm renderProductList để render lại danh sách sản phẩm sau khi xóa sản phẩm render lại danh sách sản phẩm 
    
    if (confirm("Bạn chắc chắn muốn xóa ?")) { //eslint-disable-line
      this.props.onDelete(id);
    }

    // cách 2: gọi hàm từ component cha (App) để gọi hàm onDeleteProduct từ props của App để gọi hàm xóa sản phẩm từ API (API.js) và gọi lại hàm renderProductList để render lại danh sách sản phẩm sau khi xóa sản phẩm render lại danh sách sản phẩm

    // if (window.confirm("Bạn chắc chắn muốn xóa ?")) {
    //   this.props.onDelete(id);
    // }
  };

  render() {
    var { product, index } = this.props;
    var statusName = product.status ? "Còn Hàng" : "Hết Hàng";
    var statusClass = product.status ? "warning" : "default";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`label label-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <Link
            to={`/product/${product.id}/edit`}
            className="btn btn-success mr-10"
          >
            Sửa
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.onDelete(product.id)}
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
