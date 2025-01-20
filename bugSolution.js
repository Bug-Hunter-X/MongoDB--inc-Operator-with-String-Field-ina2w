```javascript
// Correct use of $inc operator, ensuring the 'age' field is a number
db.collection.updateOne({ name: "John" }, { $inc: { age: 1 } });

//Ensure the field is defined as a Number when creating the collection 
db.createCollection('collection', { validator: { $jsonSchema: { type: "object", properties: { age: { type: "number" } } } } });
```