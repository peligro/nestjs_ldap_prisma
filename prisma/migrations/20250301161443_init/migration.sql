-- CreateIndex
CREATE INDEX "estado_nombre_idx" ON "estado"("nombre");

-- CreateIndex
CREATE INDEX "modulo_nombre_idx" ON "modulo"("nombre");

-- CreateIndex
CREATE INDEX "perfil_nombre_idx" ON "perfil"("nombre");

-- CreateIndex
CREATE INDEX "perfil_modulo_modulo_id_idx" ON "perfil_modulo"("modulo_id");

-- CreateIndex
CREATE INDEX "usuario_correo_idx" ON "usuario"("correo");

-- CreateIndex
CREATE INDEX "usuario_estado_id_idx" ON "usuario"("estado_id");

-- CreateIndex
CREATE INDEX "usuario_perfil_id_idx" ON "usuario"("perfil_id");
