const express = require('express');
const db = require('../connection')

const route = express.Router();
// Get all product item

route.get('/product', (req, res) => {
    let sql = "select * from product"
    db.query(sql, (err, row) => {
        if (err) throw err;
        res.send(row)
    })
});

// Get single product item
route.get('/product/:id', (req, res) => {
    let sql = "select * from product where product_id = ?"
    db.query(sql, [req.params.id] ,(err, row) => {
        if (err) throw err;
        res.send(row)
    })
});

// Delete product item
route.delete('/product/:id', (req, res) => {
    let sql = "delete from product where product_id = ?"
    db.query(sql, [req.params.id] ,(err, row) => {
        if (err) throw err;
        res.send("Deleted product Successfully");
        console.log("Product deleted successfully");
    })
});

// Add product item

route.post('/product', (req, res) => {
    let item = req.body;
    console.log(item);
    let sql = "insert into product values(?,?,?,?)";
    db.query(sql, [0,item.name, item.description, item.rate], (err, row) => {
        if(err) throw err;
        res.send("Successfully Added new product");
        console.log(row);
    })
})

// Edit product item
route.put('/product/:id', (req, res) => {
    let item = req.body;
    let sql = "update product set product_name = ?, product_description = ?, rate = ? where product_id = ?";
    db.query(sql, [item.name, item.description, item.rate, req.params.id], (err, row) => {
        if(err) console.log("ERROR");
        res.send("Successfully Edit product item");
        console.log(row);
    })
})


// Customer Route

// get all customers list
route.get('/customer', (req, res) => {
    let sql = "Select * from customer";

    db.query(sql, (err, row) => {
        if(err) throw err;
        res.send(row)
    });
})

// get single customer info
route.get('/customer/:id', (req, res) => {
    let id = req.params.id
    let sql = "select * from customer where customer_id = ? ";
    db.query(sql, [id], (err, row ) => {
        if(err) throw err;
        res.send(row);
    } )
});

// edit customer info
route.put('/customer/:id', (req, res) => {
    let id = req.params.id;
    let user = req.body;
    let sql = "update customer set customer_name = ?, address = ?, phone = ?, email = ? where customer_id = ?";
    db.query(sql, [user.name, user.address, user.phone, user.email, id], (err, row) => {
        if(err) throw err;
        res.send("Edited customer info successfully");
    })
})

// delete customer
route.delete('/customer/:id', (req, res) => {
    let sql = "delete from customer where customer_id = ?";
    db.query(sql, [req.params.id], (err, row) => {
        if(err) throw err;
        res.send("Sucessfully deleted");
    })
})

// add new customer
route.post('/customer', (req, res) => {
    let user = req.body;
    let sql = "insert into customer values(?,?,?,?,?)";
    db.query(sql, [0,user.name, user.address, user.phone, user.email], (err, row) => {
        if(err) throw err;
        res.send("Successfully Added new customer");
    })
})


// Sales Transaction

// Display all transaction

route.get('/transaction', (req, res) => {
    let sql = "select transaction_id, c.customer_id, c.customer_name, p.product_name, p.rate, quantity, (p.rate * quantity) as Total from salestransaction natural join customer as c natural join product as p";   
    db.query(sql, (err, row) => {
        if(err) throw err;
        res.send(row);
    })
});

// Add New Transaction 

route.post('/transaction', (req, res) => {
    let t = req.body;
    let sql = "insert into salestransaction values (?,?,?,?)";
    db.query(sql, [0, t.customer_id, t.product_id, t.quantity ], (err, row) => {
        if(err) throw err;
        res.send(row);
    })
});

// Get single transaction
route.get('/transaction/:id', (req, res) => {
    let t = req.body;
    let sql = "select c.customer_id, p.product_id, c.customer_name, p.product_name, p.rate, quantity, (p.rate * quantity) as Total from salestransaction natural join customer as c natural join product as p where transaction_id = ?";   
    db.query(sql, [req.params.id], (err, row) => {
        if(err) throw err;
        res.send(row);
    })
});

// Edit Transaction
route.put('/transaction/:id', (req, res) => {
    let t = req.body;
    let sql = "update salestransaction set customer_id = ?, product_id = ?, quantity = ? where transaction_id = ? ";
    db.query(sql, [t.customer_id, t.product_id, t.quantity, req.params.id], (err, row) => {
        if(err) throw err;
        res.send("Edidted transaction successfully");
    })
});

// Delete Transaction
route.delete('/transaction/:id' , (req, res) => {
    let sql = "delete from salestransaction where transaction_id = ?";
    db.query(sql, [req.params.id], (err, row) => {
        if(err) throw err;
        res.send("Successfully deleted Transaction");
    });
});

// Generate Invoice
route.get('/generate-invoice/:id', (req, res) => {
    let sql = "select  c.customer_id, c.customer_name,p.product_name, p.product_description, p.rate, quantity, (p.rate * quantity) as Total from salestransaction natural join customer as c natural join product as p where customer_id = ?";
    db.query(sql, [req.params.id], (err, row) => {
        if(err) throw err;
        res.send(row);
    })
})



module.exports = route;