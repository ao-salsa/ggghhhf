const Fastify = require("fastify");
const server = Fastify();

server.register(require("@fastify/http-proxy"), {
	upstream: "https://193.233.203.165",
	prefix: "/",
	http2: false,
});

server.listen({ host: "0.0.0.0", port: 8000 }, () => {
	console.log("listening on port 8000");
});
