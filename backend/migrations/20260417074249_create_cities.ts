import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("cities", (table) => {
        table.increments("id").primary();
        table
            .integer("country_id")
            .unsigned()
            .references("id")
            .inTable("countries")
            .onDelete("CASCADE");
        table.string("name", 25).notNullable();
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("cities");
}

