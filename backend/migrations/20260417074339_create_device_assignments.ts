import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("device_assignments", (table) => {
        table.increments("id").primary();
        table
            .integer("device_id")
            .unsigned()
            .references("id")
            .inTable("devices");
        table
            .integer("employee_id")
            .unsigned()
            .references("id")
            .inTable("employees");
        table
            .integer("department_id")
            .unsigned()
            .references("id")
            .inTable("departments");
        table
            .integer("country_id")
            .unsigned()
            .references("id")
            .inTable("countries");
        table
            .integer("city_id")
            .unsigned()
            .references("id")
            .inTable("cities");
        table.date("assigned_at").notNullable();
        table.date("returned_at");
        table.timestamps(true, true);

        table.index(["assigned_at"], "idx_assigned_at");
        table.index(["returned_at"], "idx_returned_at");
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("device_assignments");
}

