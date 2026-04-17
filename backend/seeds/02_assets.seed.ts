import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("brands").insert([
        { id: 1, name: "Lenovo" },
        { id: 2, name: "HP" },
        { id: 3, name: "Dell" },
        { id: 4, name: "Apple" },
        { id: 5, name: "Asus" },
        { id: 6, name: "Acer" },
    ]);

    await knex("resellers").insert([
        { id: 1, name: "Amazon" },
        { id: 2, name: "Temu" },
        { id: 3, name: "AliExpress" },
    ]);

    await knex("device_types").insert([
        { id: 1, name: "Smartphone" },
        { id: 2, name: "Tablet" },
        { id: 3, name: "Laptop" },
        { id: 4, name: "PC" },
        { id: 5, name: "Monitor" },
    ]);

    await knex("device_statuses").insert([
        { id: 1, name: "Available" },
        { id: 2, name: "In Use" },
        { id: 3, name: "Reserved" },
        { id: 4, name: "Under Repair" },
        { id: 5, name: "Stolen" },
        { id: 6, name: "Retired" },
    ]);
    
    await knex("devices").insert([
        {
            id: 1,
            brand_id: 1,
            device_type_id: 2,
            reseller_id: 1,
            device_status_id: 1,
            purchased_at: "2022-03-15",
            model_name: "Dell Latitude 7420",
            serial_number: "SN-DL-001-7420",
            warranty_months: 36,
            lifespan_months: 60,
            price: "1299.99",
        },
        {
            id: 2,
            brand_id: 1,
            device_type_id: 2,
            reseller_id: 1,
            device_status_id: 1,
            purchased_at: "2023-07-10",
            model_name: "HP EliteBook 850 G8",
            serial_number: "SN-HP-002-850G8",
            warranty_months: 24,
            lifespan_months: 60,
            price: "1199.5",
        },
        {
            id: 3,
            brand_id: 2,
            device_type_id: 1,
            reseller_id: 2,
            device_status_id: 2,
            purchased_at: "2021-11-05",
            model_name: "Apple iPhone 13",
            serial_number: "SN-AP-003-IP13",
            warranty_months: 12,
            lifespan_months: 36,
            price: "899.0",
        },
        {
            id: 4,
            brand_id: 3,
            device_type_id: 3,
            reseller_id: 3,
            device_status_id: 4,
            purchased_at: "2020-06-20",
            model_name: "Lenovo ThinkCentre M720",
            serial_number: "SN-LN-004-M720",
            warranty_months: 36,
            lifespan_months: 72,
            price: "749.99",
        },
        {
            id: 5,
            brand_id: 1,
            device_type_id: 2,
            reseller_id: 3,
            device_status_id: 3,
            purchased_at: "2022-01-12",
            model_name: "Dell UltraSharp U2720Q",
            serial_number: "SN-DL-005-U2720Q",
            warranty_months: 24,
            lifespan_months: 60,
            price: "499.99",
        },
        {
            id: 6,
            brand_id: 5,
            device_type_id: 1,
            reseller_id: 1,
            device_status_id: 1,
            purchased_at: "2018-09-30",
            model_name: "Acer Aspire 5",
            serial_number: "SN-AC-006-A515",
            warranty_months: 24,
            lifespan_months: 48,
            price: "649.0",
        },
        {
            id: 7,
            brand_id: 2,
            device_type_id: 3,
            reseller_id: 1,
            device_status_id: 2,
            purchased_at: "2023-02-18",
            model_name: "HP Pro Tablet 608",
            serial_number: "SN-HP-007-T608",
            warranty_months: 12,
            lifespan_months: 36,
            price: "399.99",
        },
    ]);

};
