import knex from "../config/knex";

const tasks_route = [
  {
    method: "GET",
    path: "/tasks",
    handler: (request, reply) =>
      knex
        .from("tasks")
        .select("oid", "title", "description")
        .then(results => reply.response(results))
        .catch(err => console.log(err))
  },
  {
    method: "POST",
    path: "/tasks",
    handler: (request, reply) => ({
      status: "201",
      data: "Ok"
    })
  }
];

export default tasks_route;
