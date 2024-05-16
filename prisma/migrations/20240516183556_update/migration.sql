/*
  Warnings:

  - You are about to drop the column `name` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `OrderItem` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "name",
DROP COLUMN "price";

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");
