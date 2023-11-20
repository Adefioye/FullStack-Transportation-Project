-- CreateTable
CREATE TABLE "event" (
    "id" SERIAL NOT NULL,
    "legmode" VARCHAR(255),
    "departureid" VARCHAR(255),
    "purpose" VARCHAR(255),
    "vehicleid" VARCHAR(255),
    "atstop" VARCHAR(255),
    "x" VARCHAR(255),
    "amount" VARCHAR(255),
    "transactionpartner" VARCHAR(255),
    "version" VARCHAR(255),
    "relativeposition" VARCHAR(255),
    "dvrpvehicle" VARCHAR(255),
    "y" VARCHAR(255),
    "type" VARCHAR(255),
    "person" VARCHAR(255),
    "time" VARCHAR(255),
    "transitrouteid" VARCHAR(255),
    "delay" VARCHAR(255),
    "destinationstop" VARCHAR(255),
    "driverid" VARCHAR(255),
    "link" VARCHAR(255),
    "dvrpmode" VARCHAR(255),
    "transitlineid" VARCHAR(255),
    "mode" VARCHAR(255),
    "facility" VARCHAR(255),
    "distance" VARCHAR(255),
    "agent" VARCHAR(255),
    "networkmode" VARCHAR(255),
    "acttype" VARCHAR(255),
    "tasktype" VARCHAR(255),
    "request" VARCHAR(255),
    "vehicle" VARCHAR(255),
    "taskindex" VARCHAR(255),

    CONSTRAINT "event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "link" (
    "link_id" VARCHAR(255),
    "from_node" VARCHAR(255),
    "to_node" VARCHAR(255),
    "link_length" VARCHAR(255),
    "freespeed" VARCHAR(255),
    "capacity" VARCHAR(255),
    "permlanes" VARCHAR(255),
    "oneway" VARCHAR(255),
    "modes" VARCHAR(255),
    "id" SERIAL NOT NULL,

    CONSTRAINT "link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "node" (
    "node_id" VARCHAR(255),
    "x" VARCHAR(255),
    "y" VARCHAR(255),
    "id" SERIAL NOT NULL,

    CONSTRAINT "node_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "link_link_id_key" ON "link"("link_id");

-- CreateIndex
CREATE UNIQUE INDEX "node_node_id_key" ON "node"("node_id");

-- AddForeignKey
ALTER TABLE "link" ADD CONSTRAINT "link_from_node_fkey" FOREIGN KEY ("from_node") REFERENCES "node"("node_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "link" ADD CONSTRAINT "link_to_node_fkey" FOREIGN KEY ("to_node") REFERENCES "node"("node_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

