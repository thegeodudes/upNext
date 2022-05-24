-- CREATE TABLE "users" (
-- 	"id" varchar(255) NOT NULL,
-- 	"password" varchar(255) NOT NULL,
-- 	"username" varchar(255) NOT NULL,
--   "shows_id" serial,
-- 	CONSTRAINT "users_pk" PRIMARY KEY ("id")
-- ) WITH (
--   OIDS=FALSE
-- );

-- CREATE TABLE "shows" (
-- 	"id" serial NOT NULL,
-- 	"name" varchar(255) NOT NULL,
-- 	"last_air_date" varchar(255),
-- 	"next_episode_to_air" varchar(255),
-- 	"in_production" varchar(255),
-- 	"poster_path" varchar(255),
-- 	"episode_run_time" serial,
--   "networks_id" serial,
--   "genres_id" serial,
-- 	CONSTRAINT "shows_pk" PRIMARY KEY ("id")
-- ) WITH (
--   OIDS=FALSE
-- );

-- CREATE TABLE "genres" (
-- 	"id" serial NOT NULL,
-- 	"name" varchar(255) NOT NULL,
-- 	CONSTRAINT "genre_pk" PRIMARY KEY ("id")
-- ) WITH (
--   OIDS=FALSE
-- );

-- CREATE TABLE "networks" (
-- 	"id" serial NOT NULL,
-- 	"name" varchar(255) NOT NULL,
-- 	"logo_path" varchar(255),
-- 	CONSTRAINT "networks_pk" PRIMARY KEY ("id")
-- ) WITH (
--   OIDS=FALSE
-- );


-- ALTER TABLE "shows" ADD CONSTRAINT "shows_fk0" FOREIGN KEY ("networks_id") REFERENCES "networks"("id");
-- ALTER TABLE "shows" ADD CONSTRAINT "shows_fk1" FOREIGN KEY ("genres_id") REFERENCES "genres"("id");
-- ALTER TABLE "users" ADD CONSTRAINT "users_fk0" FOREIGN KEY ("shows_id") REFERENCES "shows"("id");

