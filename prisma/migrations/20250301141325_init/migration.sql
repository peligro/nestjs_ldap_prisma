-- CreateTable
CREATE TABLE "estado" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "estado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "modulo" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "modulo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "perfil" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "perfil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "perfil_modulo" (
    "id" SERIAL NOT NULL,
    "modulo_id" INTEGER NOT NULL,
    "perfil_id" INTEGER NOT NULL,

    CONSTRAINT "perfil_modulo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "correo" TEXT NOT NULL,
    "estado_id" INTEGER NOT NULL,
    "perfil_id" INTEGER NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "perfil_modulo" ADD CONSTRAINT "perfil_modulo_modulo_id_fkey" FOREIGN KEY ("modulo_id") REFERENCES "modulo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "perfil_modulo" ADD CONSTRAINT "perfil_modulo_perfil_id_fkey" FOREIGN KEY ("perfil_id") REFERENCES "perfil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_perfil_id_fkey" FOREIGN KEY ("perfil_id") REFERENCES "perfil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
