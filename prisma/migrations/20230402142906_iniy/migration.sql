-- CreateTable
CREATE TABLE "prismaUsers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "prismaUsers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prismaCourses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "duration" TEXT NOT NULL,

    CONSTRAINT "prismaCourses_pkey" PRIMARY KEY ("id")
);
