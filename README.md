# Datwit multi-region site

Right now we got 2 regions US or EU, the `global/` folder is a static page 
to allow selection between regions

## Folder structure

- `arch/` contiene el código de la infraestructura para la solución
- `us/` nextjs app para la región de US
- `eu/` nextjs app para la región de Europa
- `global` página de entrada para seleccionar la región


## Desarrollo

Refierase al README de cada uno de los componentes: `us/README.md`, `eu/README.md` o `arch/README.md`

Este proyecto tiene dos ambientes `Dev` (desarrollo) y `Prod` (producción). Que se pueden mirar como un juego de 3 sitios web diferentes para cada ambiete, por ejemplo para desarrollo:

- development.datwit.com (global)
- us-dev.datwit.com (copia de desarrollo para us)
- eu-dev.datwit.com (copia de desarrollo para eu)

Que corresponden al ambiente `Dev`, para el caso de producción se tienen:

- datwit.com (global)
- us.datwit.com (región US)
- eu.datwit.com (región EU)

## Despliegues

El despliegue a cada ambiente se realiza por tags de git, para desarrollo los tags deben prefijarse por `dev-` y para producción con `prod-`.

Cuando se empuje al repositorio un nuevo `tag` prefijado por alguno de estos nombres se dispara el despliegue al ambiente correspondiente:

**NOTA**: Para cada ambiente solo debe estar corriendo uno los workflows.

Por ejemplo:

``` shell
git tag dev-landing-0.0.1
git push --tags
```

Dispara el despliegue de la version 0.0.1 para el ambiente `Dev`
