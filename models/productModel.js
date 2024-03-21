import db from '../config/database';

export const getProducts = (result) => {
  db.query("SELECT * FROM product", (err, results) =>{
    if(err){
      console.error(err);
      result(err, null);
    }else{
      result(null, results);
    }
  })
};

export const getProductsById = (id, result) =>{
  db.query("SELECT * FROM product WHERE product_id = ?", [id], (err, results) =>{
    if(err){
      console.error(err);
      result(err, null);
    }else{
      result(null, results[0]);
    }
  })
};

export const insertProduct = (data, result) => {
  db.query("INSERT INTO products SET ?", [data], (err, results) =>{
    if(err){
      console.error(err);
      result(err, null);
    }else{
      result(null, results);
    }
  })
};

export const updateProductById = (data, id, result) =>{
  db.query
}