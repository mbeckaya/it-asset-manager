import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("countries").insert([
        { id: 1, name: "Germany" },
        { id: 2, name: "USA" },
    ]);

    await knex("cities").insert([
        { id: 1, country_id: 1, name: "Hamburg" },
        { id: 2, country_id: 1, name: "Berlin" },
        { id: 3, country_id: 2, name: "New York" },
    ]);

    await knex("departments").insert([
        { id: 1, name: "Sales" },
        { id: 2, name: "HR" },
        { id: 3, name: "Marketing" },
        { id: 4, name: "IT" },
        { id: 5, name: "Customer Service" },
    ]);
};