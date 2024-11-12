import React, { useState } from "react";
export default function Form8() {
  const [formdata, setFromdata] = useState({});
  const [array, setArray] = useState([]);
  const [edit,setEdit]=useState(false);
  const newchage = (i) => {
    setFromdata(() => ({ ...formdata, [i.target.id]: i.target.value }));
  };
  const arraydata = (i) => {
    i.preventDefault();
    if(edit){
      setArray(array.map((val)=>val.product===formdata.product?formdata:val))
      setEdit(false)
    }else{
      setArray([...array, formdata]);
    }
    setFromdata({
        product:"",
        quantity:"",
        price:"",
    });
    console.log(array);
}
function handleDelete(model) {
    setArray(array.filter((item) => item.product !== model));
  }
  function handleEdit(model) {
    setFromdata(array.filter((item) => item.product === model)[0]);
    setEdit(true)
  }
  return(
    <>
    <form onSubmit={arraydata}>
                <label htmlFor="Product">Product:</label>
                <input type="text" id="Product" value={formdata.product} onChange={newchage} />

                <label htmlFor="Quantity">Quantity:</label>
                <input type="text" id="Quantity" value={formdata.quantity} onChange={newchage} />

                <label htmlFor="Price">Price:</label>
                <input type="text" id="Price" value={formdata.price} onChange={newchage} />

                <button type="submit">Add Item</button>
            </form>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {array.map((item, index) => (
                        <tr key={index}>
                            <td>{item.Product}</td>
                            <td>{item.Quantity}</td>
                            <td>{item.Price}</td>
                            <td>
                                <a className="btn btn-danger" onClick={()=>handleDelete(item.Product)}>Delete</a>
                                <a className="ms-2 btn btn-warning"onClick={()=>handleEdit(item.Product)}>Edit</a>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
    </>
  )
}