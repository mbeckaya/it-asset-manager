import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("devices", (table) => {
        table.increments("id").primary();
        table
            .integer("brand_id")
            .unsigned()
            .references("id")
            .inTable("brands");
        table
            .integer("device_type_id")
            .unsigned()
            .references("id")
            .inTable("device_types");
        table
            .integer("reseller_id")
            .unsigned()
            .references("id")
            .inTable("resellers");
        table
            .integer("device_status_id")
            .unsigned()
            .references("id")
            .inTable("device_statuses");
        table.date("purchased_at").notNullable();
        table.string("model_name", 100).notNullable();
        table.string("serial_number", 100).notNullable();
        table.smallint("warranty_months");
        table.smallint("lifespan_months");
        table.timestamps(true, true);

        table.index(["purchased_at"], "idx_purchased_at");
        table.index(["model_name"], "idx_model_name");
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("devices");
}

