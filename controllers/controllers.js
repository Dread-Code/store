const controller ={};

// controller.list = (req, res) => {
//     res.send('Hola')
//   }
controller.listProducts = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM PRODUCTS', (err, products) => {
     if (err) {
      res.json(err);
     }else{
     res.json(products)
     }
    });
  });
};


controller.listUsers = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM USERS', (err, users) => {
     if (err) {
      res.json(err);
     }else{
     res.json(users)
     }
    });
  });
};




controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO PRODUCTS set ?', data, (err, products) => {
      console.log(products)
      res.send('works');
    })
  })
};




module.exports = controller;