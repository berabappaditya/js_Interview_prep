// { $match: { status: "active" } }
//$group: Groups documents by a specified key and applies aggregations (e.g., sum, avg, count).

// { 
//     $group: { 
//       _id: "$category", 
//       totalSales: { $sum: "$amount" },
//       avgSales: { $avg: "$amount" }
//     } 
//   }


 // $project: Shapes the document by including or excluding fields.

 // { $project: { name: 1, total: { $multiply: ["$quantity", "$price"] } } }

 // $sort: Sorts documents by a specified field, ascending or descending.

 // { $sort: { createdAt: -1 } }

 // $limit: Limits the number of documents returned.
 // { $limit: 10 }

 // $skip: Skips a specified number of documents.
 // { $skip: 5 }

 // $lookup: Performs a left outer join with another collection.
//  {
//     $lookup: {
//       from: "orders",
//       localField: "customerId",
//       foreignField: "_id",
//       as: "orderDetails"
//     }
//   }


// $unwind: Deconstructs an array field, creating a separate document for each element in the array.