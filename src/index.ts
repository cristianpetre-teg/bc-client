import { api } from "./api.js";

const data = await api.getUserSegments("ef8bd142-8c17-4ef8-9e96-bc2b4a0e69a1");

// work with `data`
console.log("Segments:", JSON.stringify(data, null, 2));
