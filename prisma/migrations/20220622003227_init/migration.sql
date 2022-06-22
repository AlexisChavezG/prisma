/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `MissionCommander` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "MissionCommander" ALTER COLUMN "name" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "MissionCommander_name_key" ON "MissionCommander"("name");
