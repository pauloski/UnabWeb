# 💻 Proyecto Colaborativo de Diseño Web - Primer Año

¡Bienvenidos al repositorio central del proyecto de **Diseño Web**!

Este proyecto agrupa el trabajo de todos los grupos, quienes desarrollarán páginas web de manera autónoma utilizando **HTML, CSS y JavaScript**. La colaboración se gestiona a través de **GitHub**, y el despliegue de producción se realiza mediante **Cloudflare Pages**.

🔗 **Enlace Principal del Proyecto:** [https://unabweb.pages.dev/](https://unabweb.pages.dev/)

---

## 🛠️ Tecnologías Utilizadas

Este proyecto se basa en las siguientes tecnologías fundamentales:

* **HTML5:** Estructura del contenido.
* **CSS3:** Estilos y diseño visual.
* **JavaScript (ES6+):** Funcionalidad e interactividad.
* **Git & GitHub:** Control de versiones y colaboración.
* **Cloudflare Pages:** Despliegue continuo (CI/CD) y hosting.

---

## 📂 Estructura del Repositorio (`Repository Structure`)

La estructura está diseñada para **permitir autonomía y separación de trabajo entre grupos**, manteniendo un `root` para el home del proyecto y carpetas específicas para cada sección y grupo.

```
root/
│
├── index.html                         # Página principal del proyecto
├── readme.md                          # Documentación del repositorio
│
├── css/                               # Estilos globales del proyecto
│   └── style.css                      # Estilos principales
│
├── js/                                # Scripts globales del proyecto
│   └── script.js                      # Scripts principales
│
├── img/                               # Imágenes asociadas al index
│   └── ...                            # Archivos de imagen
│
├── s1_g1/                             # Sección 1 - Grupo 1
│   ├── home.html                      # Página de inicio del grupo
│   ├── profile1.html                  # Perfil 1 del grupo
│   ├── css/
│   │   ├── home.css                   # Estilos para home
│   │   └── profile1.css               # Estilos para profile1
│   ├── js/
│   │   ├── home.js                    # Scripts para home
│   │   └── profile1.js                # Scripts para profile1
│   └── img/
│       └── profile1/                  # Imágenes asociadas a profile1
│           └── ...
│
├── s1_g2/                             # Sección 1 - Grupo 2
│
├── s1_g3/                             # Sección 1 - Grupo 3
│
├── s1_g4/                             # Sección 1 - Grupo 4
│
├── s2_g1/                             # Sección 2 - Grupo 1
│
├── s2_g2/                             # Sección 2 - Grupo 2
│
└── s2_g3/                             # Sección 2 - Grupo 3
```

> 💡 **Nota Importante:** Cada grupo debe replicar la misma estructura de archivos (`html`, `css`, `js`, `img/`) dentro de su carpeta asignada (`sX_gY/`) para trabajar sobre sus archivos `home.html` y `profileN.html` con sus propios recursos.

---

## 🌿 Estructura de Ramas

Para gestionar el flujo de colaboración y producción, utilizamos las siguientes ramas principales:

* **`main`**: **Rama de Producción.** Conectada directamente al despliegue en Cloudflare (sitio público).
* **`dev`**: **Rama de Integración.** Se utiliza para consolidar el trabajo de todos los grupos antes de pasarlo a `main`.

### Ramas por Grupo

Cada grupo trabajará en su propia rama, la cual debe tener el mismo nombre que su carpeta:

| Rama | Grupo | Enlace Home (Cloudflare) |
| :--- | :--- | :--- |
| `s1_g1` | **Equipo Los Nugu 🐙** | [unabweb.pages.dev/s1_g1/home](https://unabweb.pages.dev/s1_g1/home) |
| `s1_g2` | **Equipo Dinamita 💥** | [unabweb.pages.dev/s1_g2/home](https://unabweb.pages.dev/s1_g2/home) |
| `s1_g3` | **₍^. .^₎Ⳋ** | [unabweb.pages.dev/s1_g3/home](https://unabweb.pages.dev/s1_g3/home)  |
| `s1_g4` | **Equipo Masturblero 🎲** | [unabweb.pages.dev/s1_g4/home](https://unabweb.pages.dev/s1_g4/home) |
| `s2_g1` | **Equipo Cinnamonroll 🍥** | [unabweb.pages.dev/s2_g1/home](https://unabweb.pages.dev/s2_g1/home) |
| `s2_g2` | **Equipo Home 🌸** | [unabweb.pages.dev/s2_g2/home](https://unabweb.pages.dev/s2_g2/home) |
| `s2_g3` | **Equipo 50/50 ⚖️** | [unabweb.pages.dev/s2_g3/home](https://unabweb.pages.dev/s2_g3/home) |

---

## 🚀 Cómo Contribuir: Flujo de Trabajo Simple

Dado que estamos enfocados en el diseño y el despliegue rápido, utilizaremos la interfaz web de GitHub para subir y editar archivos, sin necesidad de usar la consola.

### 1. Seleccionar tu Rama de Trabajo

**Es vital que SIEMPRE trabajes en la rama de tu grupo (`sX_gY`).**

1.  Ve a la página principal de este repositorio en GitHub.
2.  Busca el desplegable de ramas (generalmente dice `main` o `dev`).
3.  **Selecciona la rama que corresponde a tu grupo** (ej: `s1_g1`).

### 2. Subir o Editar Archivos

Todo el trabajo de tu grupo debe ir dentro de la carpeta asignada (ej: `s1_g1/`).

#### A. Para Subir Archivos Nuevos (o Carpetas Enteras)

1.  En la página de tu rama de grupo (`sX_gY`), navega hasta tu carpeta (ej: `s1_g1/`).
2.  Haz clic en el botón **`Add file`** y selecciona **`Upload files`**.
3.  Arrastra y suelta (o selecciona) todos los archivos y carpetas que quieras subir (HTML, CSS, imágenes).
4.  En el campo "Commit changes", escribe un **mensaje descriptivo** (ej: "Agrega estructura inicial de home y profile1").
5.  Asegúrate de que la opción "Commit directly to the `sX_gY` branch" esté seleccionada.
6.  Haz clic en el botón **`Commit changes`**.

#### B. Para Editar Archivos Existentes

1.  Navega hasta el archivo que deseas editar (ej: `s1_g1/css/home.css`).
2.  Haz clic en el icono del **lápiz** (Editar este archivo) en la parte superior derecha.
3.  Realiza tus cambios.
4.  En el campo "Commit changes", escribe un **mensaje descriptivo** (ej: "Actualiza colores de fondo en home.css").
5.  Asegúrate de que la opción "Commit directly to the `sX_gY` branch" esté seleccionada.
6.  Haz clic en el botón **`Commit changes`**.

### 3. Integrar tu Trabajo a DEV: Crear un Pull Request (PR)

Una vez que tu grupo haya terminado una etapa de trabajo y desees que sea revisada y unida con otros grupos:

1.  Ve a la pestaña **`Pull requests`**.
2.  Haz clic en el botón **`New pull request`**.
3.  En la configuración de ramas:
    * **Base:** Selecciona la rama **`dev`** (es la rama de integración).
    * **Compare:** Selecciona la rama de **tu grupo** (ej: `s1_g1`).
4.  Agrega un **título claro** al PR (ej: "Integración - Versión inicial de Home y Perfiles").
5.  Agrega una **descripción** de los cambios.
6.  Haz clic en **`Create pull request`**.

> **⚠️ ¡Advertencia!** Nunca intentes hacer un Pull Request desde la rama de tu grupo a la rama `main`. Tu docente se encargará de integrar los cambios de `dev` a `main` cuando sea oportuno.



## 🤝 Equipos y Enlaces de Interés

A continuación se detallan los grupos activos con sus enlaces de gestión (Trello) y los perfiles de sus integrantes.

### 🐙 Los Nugu — `s1_g1`

* **Home:** [https://unabweb.pages.dev/s1_g1/home](https://unabweb.pages.dev/s1_g1/home)
* **Trello:** [https://trello.com/b/vfx3cjDZ/los-nugu](https://trello.com/b/vfx3cjDZ/los-nugu)
* **Integrantes:**
    * Marco Torres – [Profile 1](https://unabweb.pages.dev/s1_g1/profile1)
    * Constanza Barrales – [Profile 2](https://unabweb.pages.dev/s1_g1/profile2)
    * Valentina Muñoz – [Profile 3](https://unabweb.pages.dev/s1_g1/profile3)
    * Darin Piñol – [Profile 4](https://unabweb.pages.dev/s1_g1/profile4)

### 💥 Equipo Dinamita — `s1_g2`

* **Home:** [https://unabweb.pages.dev/s1_g2/home](https://unabweb.pages.dev/s1_g2/home)
* **Trello:** [https://trello.com/b/z05U6Mxt/equipo-dinamita](https://trello.com/b/z05U6Mxt/equipo-dinamita)
* **Integrantes:**
    * Pedro Martens – [Profile 1](https://unabweb.pages.dev/s1_g2/profile1)
    * Javiera Nuñez – [Profile 2](https://unabweb.pages.dev/s1_g2/profile2)
    * Annyelit Calderón – [Profile 3](https://unabweb.pages.dev/s1_g2/profile3)
    * Antonia Zúñiga – [Profile 4](https://unabweb.pages.dev/s1_g2/profile4)
    * Kimmberlly Coronado – [Profile 5](https://unabweb.pages.dev/s1_g2/profile5)
    * Almendra Plaza – [Profile 6](https://unabweb.pages.dev/s1_g2/profile6)


### ₍^. .^₎Ⳋ — `s1_g3`

* **Home:** [https://unabweb.pages.dev/s1_g2/home](https://unabweb.pages.dev/s1_g2/home)
* **Trello:** [https://trello.com/b/OzAcFQG5/%E2%82%8D-%E2%82%8E%E2%B3%8B] (https://trello.com/b/OzAcFQG5/%E2%82%8D-%E2%82%8E%E2%B3%8B)
* **Integrantes:**
    * nombre – [Profile 1](https://unabweb.pages.dev/s1_g3/profile1)
    * nombre – [Profile 2](https://unabweb.pages.dev/s1_g3/profile2)
    * nombre – [Profile 3](https://unabweb.pages.dev/s1_g3/profile3)
    * nombre – [Profile 4](https://unabweb.pages.dev/s1_g3/profile4)
    * nombre – [Profile 5](https://unabweb.pages.dev/s1_g3/profile5)
    * nombre – [Profile 6](https://unabweb.pages.dev/s1_g3/profile6)



### 🎲 Masturblero — `s1_g4`

* **Home:** [https://unabweb.pages.dev/s1_g4/home](https://unabweb.pages.dev/s1_g4/home)
* **Trello:** [https://trello.com/b/dcwHHCtn/...](https://trello.com/b/dcwHHCtn/masturblero-%E0%AD%AD-%CB%9A-%E1%B5%8E%E1%B5%8E)
* **Integrantes:**
    * Florencia Rebolledo – [Profile 1](https://unabweb.pages.dev/s1_g4/profile1)
    * Valentina Farías – [Profile 2](https://unabweb.pages.dev/s1_g4/profile2)
    * Victoria Pérez – [Profile 3](https://unabweb.pages.dev/s1_g4/profile3)
    * Martina Flores – [Profile 4](https://unabweb.pages.dev/s1_g4/profile4)
    * Antonia López – [Profile 5](https://unabweb.pages.dev/s1_g4/profile5)

### 🍥 Cinnamonroll — `s2_g1`

* **Home:** [https://unabweb.pages.dev/s2_g1/home](https://unabweb.pages.dev/s2_g1/home)
* **Trello:** [https://trello.com/b/nJ9qQgW5/home-cinnamoroll](https://trello.com/b/nJ9qQgW5/home-cinnamoroll)
* **Integrantes:**
    * Paula Prieto – [Profile 1](https://unabweb.pages.dev/s2_g1/profile1)
    * Susana Alvear – [Profile 2](https://unabweb.pages.dev/s2_g1/profile2)
    * Valentina Torres – [Profile 3](https://unabweb.pages.dev/s2_g1/profile3)
    * Sofía Santibañez – [Profile 4](https://unabweb.pages.dev/s2_g1/profile4)
    * (vacante) – [Profile 5](https://unabweb.pages.dev/s2_g1/profile5)

### 🌸 Home ꉂ(˵˃ ᗜ ˂˵) ⋆˚꩜.ᐟ — `s2_g2`

* **Home:** [https://unabweb.pages.dev/s2_g2/home](https://unabweb.pages.dev/s2_g2/home)
* **Trello:** [https://trello.com/b/U1wDpA3Y/...](https://trello.com/b/U1wDpA3Y/home-ꉂ˵˃-ᗜ-˂˵-⋆˚꩜ᐟ)
* **Integrantes:**
    * Cristóbal Millache – [Profile 1](https://unabweb.pages.dev/s2_g2/profile1)
    * Belén Arias – [Profile 2](https://unabweb.pages.dev/s2_g2/profile2)
    * Paola Polanco – [Profile 3](https://unabweb.pages.dev/s2_g2/profile3)
    * Belén Pareja – [Profile 4](https://unabweb.pages.dev/s2_g2/profile4)
    * Irati Azkarate – [Profile 5](https://unabweb.pages.dev/s2_g2/profile5)
    * Antonia Lee – [Profile 6](https://unabweb.pages.dev/s2_g2/profile6)
    * Matilde Rojas – [Profile 7](https://unabweb.pages.dev/s2_g2/profile7)

### ⚖️ 50/50 — `s2_g3`

* **Home:** [https://unabweb.pages.dev/s2_g3/home](https://unabweb.pages.dev/s2_g3/home)
* **Trello:** [https://trello.com/b/gF2Zkr6J/5050](https://trello.com/b/gF2Zkr6J/5050)
* **Integrantes:**
    * Anais Castillo – [Profile 1](https://unabweb.pages.dev/s2_g3/profile1)
    * Anasol González – [Profile 2](https://unabweb.pages.dev/s2_g3/profile2)
    * Sebastián Gutiérrez – [Profile 3](https://unabweb.pages.dev/s2_g3/profile3)
    * Dante Trujillo – [Profile 4](https://unabweb.pages.dev/s2_g3/profile4)
    * Catalina Fuentes – [Profile 5](https://unabweb.pages.dev/s2_g3/profile5)
    * Gaspar Miño – [Profile 6](https://unabweb.pages.dev/s2_g3/profile6)
    * Benjamín Maturana – [Profile 7](https://unabweb.pages.dev/s2_g3/profile7)