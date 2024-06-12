# Ejercicio 1: Determinar edad de usuario

En este primer ejercicio vamos a crear un algoritmo para determinar si una usuario puede ingresar a una página web o no. Los requisitos son dos: establecer si el usuario es mayor de edad o es menor de edad. Si el usuario es mayor (>=) de edad puede ingresar a la página web, pero si es menor de edad no puede ingresar. Podemos usar el ejemplo del ejercicio para muchas situaciones, como enlistarse en el ejército, ingresar a una disco, edad autorizada para manejar, etc.

# Estructura del algoritmo

* Fecha de nacimiento: 1994
* Fecha actual: 2024
* Calcular la edad del usuario: El año actual menos la fecha de nacimiento: 2024 - 1994 = 30
* Nombre y apellido: John Doe (dato de salida en el programa)
* Crear una condición: Si John Doe es mayor (>=) o igual que 18 años, entonces puede ingresar a la página web. Si es menor (<) a 18 años no puede ingresar a la página web.

# Creando el programa

## Se usará el software Flowgorithm para crear el diagráma de flujo. Las imágenes estarán disponible en el paso a paso.

* Paso 1: Para comenzar debemos declarar una variable siguiendo la estructura del algoritmo. La variable sera "nacimientoUsuario". Esta variable será declara con el valor Entero (Integer).

![variable](https://thumbs.odycdn.com/7ede637ae02b9da3e37287f2dc91cada.webp)

* Paso 2: Debemos asignarle un valor a la variable "nacimientoUsuario" creada anteriormente con la expresión 1994.

![asignar valor](https://thumbs.odycdn.com/57057d54b1f677add89ff3cfa67cc8f5.webp)

* Paso 3: Declara la variable "añoActual" con el valor Entero (Integer).
* Paso 4: Asigna el valor a la variable "añoActual" con la expresión 2024.
* Paso 5: Declara la variable "edadCarnetLegal" con el valor Entero (Integer).
* Paso 6: Asigna el valor a la variable "edadCarnetLegal" con la expresión 18, que es la edad legal para ingresar.
* Paso 7: Calcular la edad del usuario creando la variable "edadUsuario" con el valor Entero (Integer).
* Paso 8: Asigna el valor a la variable "edadUsuario" con la expresión: añoActual - nacimientoUsuario.

![edadUsuario](https://thumbs.odycdn.com/79bdb0409bf723f8d736fd1020c1bebe.webp)

* Paso 9: Crear una condición para determinar edad del usuario. Esta condición debe ser: edadUsuario >= edadCarnetLegal.

![condición](https://thumbs.odycdn.com/9d00105b0a578d34a3360d3b76cda443.webp)

* Paso 10: Crear una salida en la rama true de la condición con la expresión "John Doe puede entrar en la página web". La expresión debe ser en comillas.

![Salida true](https://thumbs.odycdn.com/d68f2af1cc7dc98d0826b08ef63fecc9.webp)

* Paso 11: Crear una salida en la rama false de la condición con la expresión "John Doe no tiene la edad legal para entrar en la página web". La expresión debe ser en comillas.
* Paso 12: Ejecutar el programa con el botón play del software. Si todo ha salido bien la consola mostrará información en la salida.

!Listo! Automáticamente podrás ver en consola el resultado basado en los datos del algoritmo. Puedes obtener un resultado diferente si cambias los datos de la variable de "nacimientoUsuario" para que el programa cambie la respuesta.

El programa evaluará la condición y determinará si la edad del usuario (nacimientoUsuario) es mayor o igual (>=) que la edad de la variable "edadCarnetLegal", y mostrará en consola si el usuario puede entrar o no en la página web.

![algoritmo](https://thumbs.odycdn.com/22445a638215554acff841b0a3a5e9bc.webp)

# Algunos datos sobre el algoritmo

* Las variables generalmente se escriben con la primera letra en minúscula y la segunda palabra con la letra en mayúscula en casi todos los lenguajes de programación.
* Las variables no tiene espacios entre palabras. Es incorrecto y puede causar un error en el programa.
* Las condicional determinará si el usuario puede entrar o no a la página web. La condición (if) es false o true.
* Si te fijas en el algoritmo, la ruta siempre fue crear una variable y luego asignar un valor, crear una condición para determinar el resultado de esas variables y finalmente obtener un resultado.

> ¿Qué te ha parecido este ejercicio? Puedes jugar con diferentes valores para obtener diferentes resultados. Espero que hayas disfrutado el viaje.