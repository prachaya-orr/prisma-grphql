-- CreateTable
CREATE TABLE "prismaUsers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "prismaUsers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prismaCourse" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "duration" TEXT NOT NULL,

    CONSTRAINT "prismaCourse_pkey" PRIMARY KEY ("id")
);
