/*
  Warnings:

  - Added the required column `priority` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('High', 'Medium', 'Low');

-- AlterTable
ALTER TABLE "Todo" ADD COLUMN     "priority" "Priority" NOT NULL;
