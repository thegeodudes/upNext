-- CREATE TABLE "users" (
-- 	"id" serial NOT NULL,
-- 	"password" varchar(255) NOT NULL,
-- 	"username" varchar(255) NOT NULL,
--  "shows_id" int,
-- 	CONSTRAINT "users_pk" PRIMARY KEY ("id")
-- ) WITH (
--   OIDS=FALSE
-- );

-- CREATE TABLE "shows" (
-- 	"id" int NOT NULL,
-- 	"name" varchar(255) NOT NULL,
-- 	"last_air_date" varchar(255),
-- 	"next_episode_to_air" varchar(255),
-- 	"in_production" varchar(255),
-- 	"poster_path" varchar(255),
-- 	"episode_run_time" int,
--  "overview" varchar(255),
--  "tagline" varchar(255),
--  "networks_id" int,
--  "genres_id" int,
-- 	CONSTRAINT "shows_pk" PRIMARY KEY ("id")
-- ) WITH (
--   OIDS=FALSE
-- );

-- CREATE TABLE "genres" (
-- 	"id" int NOT NULL,
-- 	"name" varchar(255) NOT NULL,
-- 	CONSTRAINT "genre_pk" PRIMARY KEY ("id")
-- ) WITH (
--   OIDS=FALSE
-- );

-- CREATE TABLE "networks" (
-- 	"id" int NOT NULL,
-- 	"name" varchar(255) NOT NULL,
-- 	"logo_path" varchar(255),
-- 	CONSTRAINT "networks_pk" PRIMARY KEY ("id")
-- ) WITH (
--   OIDS=FALSE
-- );

-- CREATE TABLE "favorites" (
-- 	"user_id" int NOT NULL,
-- 	"show_id" int NOT NULL,
-- 	CONSTRAINT "favorites_pk" PRIMARY KEY ("user_id","show_id")
-- ) WITH (
--   OIDS=FALSE
-- );

-- ALTER TABLE "shows" ADD CONSTRAINT "shows_fk0" FOREIGN KEY ("networks_id") REFERENCES "networks"("id");
-- ALTER TABLE "shows" ADD CONSTRAINT "shows_fk1" FOREIGN KEY ("genres_id") REFERENCES "genres"("id");
-- ALTER TABLE "users" ADD CONSTRAINT "users_fk0" FOREIGN KEY ("shows_id") REFERENCES "shows"("id");

-- ALTER TABLE "favorites" ADD CONSTRAINT "favorites_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
-- ALTER TABLE "favorites" ADD CONSTRAINT "favorites_fk1" FOREIGN KEY ("show_id") REFERENCES "shows"("id");

-- DROP TABLE IF EXISTS users CASCADE;
-- DROP TABLE IF EXISTS shows CASCADE;
-- DROP TABLE IF EXISTS genres CASCADE;
-- DROP TABLE IF EXISTS networks CASCADE;
-- DROP TABLE IF EXISTS favorites CASCADE;
