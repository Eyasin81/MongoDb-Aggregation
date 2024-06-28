// find one Data
db.getCollection("class").findOne({
   "city" : "dhaka"
  })
  // find all Data
  db.getCollection("class").find({})
  //find all Data Alternator Methods
  db.class.aggregate([]) 