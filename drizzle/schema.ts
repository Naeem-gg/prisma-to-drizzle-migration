import { pgTable, varchar, timestamp, text, integer, uniqueIndex, json,uuid } from "drizzle-orm/pg-core"



export const _prisma_migrations = pgTable("_prisma_migrations", {
	id: varchar("id", { length: 36 }).primaryKey().notNull(),
	checksum: varchar("checksum", { length: 64 }).notNull(),
	finished_at: timestamp("finished_at", { withTimezone: true, mode: 'string' }),
	migration_name: varchar("migration_name", { length: 255 }).notNull(),
	logs: text("logs"),
	rolled_back_at: timestamp("rolled_back_at", { withTimezone: true, mode: 'string' }),
	started_at: timestamp("started_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	applied_steps_count: integer("applied_steps_count").default(0).notNull(),
});

export const Templates = pgTable("Templates", {
	tid: text("tid").primaryKey().notNull(),
	tnum: integer("tnum").default(1).notNull(),
	name: text("name").notNull(),
	// TODO: failed to parse database type 'jsonb[]'
	listRobots: json("listRobots").array(),
	// TODO: failed to parse database type 'jsonb[]'
	listMachines: json("listMachines").array(),
	height: integer("height").notNull(),
	width: integer("width").notNull(),
	length: integer("length").notNull(),
	floorColor: text("floorColor").notNull(),
	wallColor: text("wallColor").notNull(),
	createdAt: timestamp("createdAt", { precision: 3, mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updatedAt", { precision: 3, mode: 'string' }).notNull(),
});

export const Verify = pgTable("Verify", {
	id: text("id").primaryKey().notNull(),
	otp: integer("otp").notNull(),
	email: text("email").notNull(),
	createdAt: timestamp("createdAt", { precision: 3, mode: 'string' }).defaultNow().notNull(),
});

export const User = pgTable("User", {
	id: uuid("id").primaryKey().defaultRandom(),
	email: text("email").notNull(),
	name: text("name").notNull(),
	labname: text("labname").notNull(),
	password: text("password").notNull(),
	unicode: text("unicode").notNull(),
	createdAt: timestamp("createdAt", { precision: 3, mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp('updatedAt', { mode: 'date', precision: 3 }).$onUpdate(() => new Date()),
},
(table) => {
	return {
		email_key: uniqueIndex("User_email_key").using("btree", table.email),
	}
});

export const Design = pgTable("Design", {
	designId: text("designId").primaryKey().notNull(),
	name: text("name").notNull(),
	// TODO: failed to parse database type 'jsonb[]'
	listRobots: json("listRobots").array(),
	// TODO: failed to parse database type 'jsonb[]'
	listMachines: json("listMachines").array(),
	// TODO: failed to parse database type 'jsonb[]'
	listDummy: json("listDummy").array(),
	height: integer("height").notNull(),
	width: integer("width").notNull(),
	length: integer("length").notNull(),
	floorColor: text("floorColor").notNull(),
	wallColor: text("wallColor").notNull(),
	createdAt: timestamp("createdAt", { precision: 3, mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updatedAt", { precision: 3, mode: 'string' }).notNull(),
	userId: text("userId").notNull().references(() => User.id, { onDelete: "restrict", onUpdate: "cascade" } ),
	count: integer("count").default(0).notNull(),
});

export const Stdesign = pgTable("Stdesign", {
	staticId: text("staticId").primaryKey().notNull(),
	name: text("name").notNull(),
	// TODO: failed to parse database type 'jsonb[]'
	listRobots: json("listRobots").array(),
	// TODO: failed to parse database type 'jsonb[]'
	listMachines: json("listMachines").array(),
	// TODO: failed to parse database type 'jsonb[]'
	listDummy: json("listDummy").array(),
	height: integer("height").notNull(),
	width: integer("width").notNull(),
	length: integer("length").notNull(),
	floorColor: text("floorColor").notNull(),
	wallColor: text("wallColor").notNull(),
	createdAt: timestamp("createdAt", { precision: 3, mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updatedAt", { precision: 3, mode: 'string' }).notNull(),
	designId: text("designId").notNull().references(() => Design.designId, { onDelete: "restrict", onUpdate: "cascade" } ),
});

export const Feedback = pgTable("Feedback", {
	id: text("id").primaryKey().notNull(),
	name: text("name").notNull(),
	subject: text("subject").notNull(),
	message: text("message").notNull(),
	createdAt: timestamp("createdAt", { precision: 3, mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updatedAt", { precision: 3, mode: 'string' }).notNull(),
	userId: text("userId").notNull().references(() => User.id, { onDelete: "restrict", onUpdate: "cascade" } ),
	company: text("company").notNull(),
	phone: text("phone").notNull(),
});

export const Contributors = pgTable("Contributors", {
	cid: text("cid").primaryKey().notNull(),
	name: text("name").notNull(),
	email: text("email").notNull(),
	designId: text("designId").notNull().references(() => Design.designId, { onDelete: "restrict", onUpdate: "cascade" } ),
	createdAt: timestamp("createdAt", { precision: 3, mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updatedAt", { precision: 3, mode: 'string' }).notNull(),
});