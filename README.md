Este repositorio de MiCD, contiene el proyecto Backend Web, trabajado con Nest en su versión 11. y optimizado para el Sistema Gestor de Bases de datos PostgreSQL

<hr/>
## 1. Requisitos previos

- Tener instalado Node.js (versión recomendada: 20.x o superior).

- Tener instalado NEST CLI globalmente:
<hr/>
## 2. Librerías utilizadas
<ul>
<li>
- Nest config:<br/>
<code>npm i --save @nestjs/config</code>
</li>
<li>
- ldapts:<br/>
<code>npm install --save ldapts</code>
</li>
<li>
    - Prisma ORM:
    <ul>
        <li><code>npm install prisma --save-dev</code></li>
        <li><code>npx prisma init</code></li>
        <li>Para ejecutar las migraciones
    <code> npx prisma migrate dev --name init</code></li>
    </ul>
</li>
 <li>
- Nest validaciones:<br/>
<code>npm i --save class-validator class-transformer</code>
</li>
 <li>
- Nest swagger:<br/>
<code>npm install --save @nestjs/swagger</code>
</li>

</ul>

<hr/>
## 3. Documentación APIs a través de Swagger:<br/>
<ul>
    <li><a href="http://localhost:{PUERTO}/documentacion#/">/documentacion#/</a></li>
</ul>