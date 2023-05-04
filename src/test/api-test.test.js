import supertest from "supertest";
import { expect } from "chai";
import config from "../../config.js";

const request = supertest(`http://localhost:${config.yargs.port}`);

let testID;
let testIDfalse = "64066de3d632e602f5670444";
let exampleProduct = [
  {
    name: "Desafio 19",
    price: 100,
    thumbnail: "url-imagen",
  },
  {
    name: "Desafio 19",
    price: 123,
  },
  {
    name: "Desafio 19 Actualizado",
    price: 200,
    thumbnail: "url-imagen-actualizada",
  },
];

describe("Test API REST FULL", () => {
  describe("GET /api/products", () => {
    it("La peticion deberia retornar status 200 y retornar todos los productos", async () => {
      let res = await request.get("/api/products");
      expect(res.status).to.equal(200);
    });
  });

  describe("POST /api/products", () => {
    it("Parametros correctos: Retorna status 201 y guarda el producto", async () => {
      let res = await request.post("/api/products").send(exampleProduct[0]);
      expect(res.status).to.equal(201);
      const resBody = res.body;
      expect(resBody).to.include.keys("name", "price", "thumbnail", "_id");
      testID = res.body._id;
    });
    it("Parametros incorrectos/faltantes: Retorna status 400 y mensaje de error", async () => {
      let res = await request.post("/api/products").send(exampleProduct[1]);
      expect(res.status).to.equal(400);
      expect(res.body).to.include.keys("message");
    });
  });

  describe("GET-BY-ID /api/products/:id", () => {
    it("Envio de ID Valido: Retorna status 200 y retorna el producto", async () => {
      let res = await request.get(`/api/products/${testID}`);
      expect(res.status).to.equal(200);
    });
    it("Envio de ID Invalido: Retorna status 400 y mensaje de error", async () => {
      let res = await request.get(`/api/products/${testIDfalse}`);
      expect(res.status).to.equal(400);
      expect(res.body).to.include.keys("message");
    });
  });

  describe("PUT /api/products/:id", () => {
    it("Envio de ID Valido: Retornar status 200 y retornar el producto modificado", async () => {
      let res = await request.put(`/api/products/${testID}`).send(exampleProduct[2]);
      expect(res.status).to.equal(200);
    });
    it("Envio de ID Invalido o no encuentra el producto: Retornar status 204 y mensaje de error", async () => {
      let res = await request.put(`/api/products/${testIDfalse}`).send(exampleProduct[1]);
      expect(res.status).to.equal(204);
    });
  });

  describe("DELETE /api/products/:id", () => {
    it("Envio de ID Valido: Retornar status 200 y haber eliminado el producto", async () => {
      let res = await request.delete(`/api/products/${testID}`);
      expect(res.status).to.equal(200);
    });
    it("Envio de ID Invalido o no existe el producto: Retorna status 204 y mensaje de error", async () => {
      let res = await request.delete(`/api/products/${testIDfalse}`);
      expect(res.status).to.equal(204);
    });
  });
});
