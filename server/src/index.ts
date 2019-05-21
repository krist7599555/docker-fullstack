import * as Koa from "koa";
import * as Router from "koa-router";

const app = new Koa();
const router = new Router();
router
  .use("*", (ctx, next) => {
    console.log("CALL");
    return next();
  })
  .get("/", ctx => (ctx.body = "goto /api"))
  .get("/api", ctx => (ctx.body = "API try /api/user & /api/user/id"))
  .get("/api/user", ctx => (ctx.body = ["12345", "2345", "2345", "s"]))
  .get("/api/user/:id", ctx => (ctx.body = { name: ctx.params.id, age: 20, gender: "female" }));

app.use(router.routes()).use(router.allowedMethods());

const PORT = +(process.env.PORT || 3000);
console.log("PORT =", PORT);
app.listen(PORT, () => {
  console.log(`http://0.0.0.0:${PORT}`);
});
