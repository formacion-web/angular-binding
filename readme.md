# Interpolación y Binding

Ejercicios para practicar con la interpolación y el binding de propiedades y eventos en Angular.

## Iteración 1
Crea un nuevo proyecto  angular-binding. Con 3 componentes:
- home: tendra un enlace a cada uno de los otros dos componentes
- interpolacion: donde se resolverán los ejercicios de interpolación
- binding: donde se resolverán los ejercicios de binding.
_tip_: has de implementar routing.

## Ejercicios Interpolación

1. A partir de un objeto user{name: 'John', surname: 'Smith' address: '13 Pine Street'}
   
   Imprime en un objeto lista:
  - El valor de direccion es: <<--->>
  - User name: name + surname

2. Da el resultado de: 
  "La suma de 2 y 2 es ??" evaluando una expresión con {{}}

3. Evalúa la función duplicarTexto('hola mundo') con {{}}

4. - Usando el operador de navegación segura (?.)
  "Genera el mensaje la propiedad persona2 no existe" evaluando la propiedad persona2.edad

5. Concatena los strings evaluando un método que concatene `name` y `surname`


6. Genera el contenido de un input a partir del contenido de un párrafo con {{}}

## Ejercicios de Binding de eventos + propiedades

1. Crea un selector para seleccionar entre dos imagenes. La imagen seleccionada se debe mostrar debajo del selector.

2. Captura el texto escrito en un input y muéstralo en un párrafo
