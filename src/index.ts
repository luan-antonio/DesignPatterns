import { Database } from "./creational/singleton/db/database";
console.log("CREATIONAL");
console.log("----------");
console.log("\n");
const db1 = Database.instance;
const db2 = Database.instance;

console.log("db1 and db2 should be equal");
console.log("db1 === db2", db1 === db2);

db1.addUser({ name: "Luan", age: 25 });
db1.addUser({ name: "Renata", age: 22 });
db2.showUsers();

console.log("\n");
console.log("----------");
console.log("CREATIONAL");
