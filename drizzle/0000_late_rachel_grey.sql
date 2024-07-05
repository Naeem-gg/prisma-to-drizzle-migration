-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "_prisma_migrations" (
	"id" varchar(36) PRIMARY KEY NOT NULL,
	"checksum" varchar(64) NOT NULL,
	"finished_at" timestamp with time zone,
	"migration_name" varchar(255) NOT NULL,
	"logs" text,
	"rolled_back_at" timestamp with time zone,
	"started_at" timestamp with time zone DEFAULT now() NOT NULL,
	"applied_steps_count" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Templates" (
	"tid" text PRIMARY KEY NOT NULL,
	"tnum" integer DEFAULT 1 NOT NULL,
	"name" text NOT NULL,
	"listRobots" jsonb[],
	"listMachines" jsonb[],
	"height" integer NOT NULL,
	"width" integer NOT NULL,
	"length" integer NOT NULL,
	"floorColor" text NOT NULL,
	"wallColor" text NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Verify" (
	"id" text PRIMARY KEY NOT NULL,
	"otp" integer NOT NULL,
	"email" text NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "User" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"name" text NOT NULL,
	"labname" text NOT NULL,
	"password" text NOT NULL,
	"unicode" text NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Design" (
	"designId" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"listRobots" jsonb[],
	"listMachines" jsonb[],
	"listDummy" jsonb[],
	"height" integer NOT NULL,
	"width" integer NOT NULL,
	"length" integer NOT NULL,
	"floorColor" text NOT NULL,
	"wallColor" text NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL,
	"userId" text NOT NULL,
	"count" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Stdesign" (
	"staticId" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"listRobots" jsonb[],
	"listMachines" jsonb[],
	"listDummy" jsonb[],
	"height" integer NOT NULL,
	"width" integer NOT NULL,
	"length" integer NOT NULL,
	"floorColor" text NOT NULL,
	"wallColor" text NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL,
	"designId" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Feedback" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"subject" text NOT NULL,
	"message" text NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL,
	"userId" text NOT NULL,
	"company" text NOT NULL,
	"phone" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Contributors" (
	"cid" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"designId" text NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Design" ADD CONSTRAINT "Design_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Stdesign" ADD CONSTRAINT "Stdesign_designId_fkey" FOREIGN KEY ("designId") REFERENCES "public"."Design"("designId") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Contributors" ADD CONSTRAINT "Contributors_designId_fkey" FOREIGN KEY ("designId") REFERENCES "public"."Design"("designId") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "User_email_key" ON "User" USING btree ("email" text_ops);
*/