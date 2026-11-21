Scenario: Visualizar el catálogo de productos
    Given que el usuario ingresa a la página de productos
    When se carga el catálogo
    Then el sistema debe mostrar los productos disponibles

  Scenario: Buscar un producto existente
    Given que el usuario está en el catálogo
    When escribe "Martillo" en el buscador
    Then el sistema debe mostrar el producto Martillo

  Scenario: Buscar un producto inexistente
    Given que el usuario está en el catálogo
    When escribe "ProductoXYZ" en el buscador
    Then el sistema no debe mostrar productos
    And debe indicar que no se encontraron resultados

  Scenario: Agregar un producto
    Given que el usuario visualiza los productos
    When presiona el botón Agregar del Martillo
    Then el sistema debe confirmar que el producto fue agregado
    And debe actualizar el contador

  Scenario: Navegar desde inicio hasta productos
    Given que el usuario está en la página principal
    When selecciona la opción Productos del menú
    Then el sistema debe abrir la página del catálogo

  Scenario: Intentar agregar un producto no disponible
    Given que el producto no existe en el catálogo
    When el usuario intenta agregarlo
    Then el sistema debe rechazar la operación
    And debe mostrar un mensaje de error