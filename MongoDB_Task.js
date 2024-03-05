db.product.find().pretty();

db.product.find({$and:[{product_price:{$gt:400}},{product_price:{$lt:800}}]}).pretty()

db.product.find({product_price:{$not:{$gt:400,$lt:600}}}).pretty();

db.product.find({product_price:{$gt:500}}).limit(4).pretty()

db.product.find({},{product_name:1,product_material:1}).pretty()

db.product.findOne({id:"10"})

db.product.find({},{_id:0, product_name:1,product_material:1}).pretty()

db.product.find({product_material:"Soft"}).pretty()

db.product.find({"product_color":"indigo","product_price":492})

db.product.deleteMany({ "price": { "$in": db.products.aggregate([ { "$group": { "_id": "$product_price", "count": { "$sum": 1 } } },{ "$match": { "count": { "$gt": 1 } } }]).toArray().map(function(doc) { return doc._id; })}});
