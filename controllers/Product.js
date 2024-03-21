import { getProducts, getProductsById, insertProduct, updateProductById, deleteProductById } from "../models/productModel";

export const showProduct = (req, res) =>{
  getProducts((err, results) => {
    if(err){
      res.send(err);
    }else{
      res.json(results)
    }
  });
}

export const showProductById = (req,res) =>{
  getProductsById(req.params.id, (err, results) =>{
    if(err){
      res.send(err);
    }else{
      res.json(results)
    }
  });
};

export const createProduct = (req,res) =>{
  const data = req.body;
  insertProduct(data, (err, results) =>{
    if(err){
      res.send(err);
    }else{
      res.json(results)
    }
  });
};

export const updateProduct = (req,res) =>{
  const data = req.body;
  const id = req.params.id;
  updateProductById(data, id, (err, results) =>{
    if(err){
      res.send(err);
    }else{
      res.json(results)
    }
  });
};

export const deleteProduct = (req,res) =>{
  const id = req.params.id;
  deleteProduct(id, (err, results) =>{
    if(err){
      res.send(err);
    }else{
      res.json(results)
    }
  });
};