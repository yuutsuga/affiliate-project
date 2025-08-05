-- CreateTable
CREATE TABLE "public"."LinkAfiliado" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "urlDestino" TEXT NOT NULL,
    "afiliadoId" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LinkAfiliado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Clique" (
    "id" TEXT NOT NULL,
    "linkId" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "userAgent" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Clique_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LinkAfiliado_codigo_key" ON "public"."LinkAfiliado"("codigo");

-- AddForeignKey
ALTER TABLE "public"."LinkAfiliado" ADD CONSTRAINT "LinkAfiliado_afiliadoId_fkey" FOREIGN KEY ("afiliadoId") REFERENCES "public"."Afiliado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Clique" ADD CONSTRAINT "Clique_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "public"."LinkAfiliado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
