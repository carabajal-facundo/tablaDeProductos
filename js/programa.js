let listaProductos = [
    {
      nombreProducto: "Hidratante facial",
      precio: 3500,
      categoria: "Hidratante",
    },
    { nombreProducto: "Tonico exfoliante", precio: 2350.45, categoria: "Tonico" },
    {
      nombreProducto: "Protector solar factor 50",
      precio: 3300,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Protector solar toque seco factor 50",
      precio: 4100,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Protector solar con color factor 50",
      precio: 3850.5,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Gel de limpieza facial",
      precio: 1740.99,
      categoria: "Limpieza",
    },
    { nombreProducto: "Tonico hidratante", precio: 1250.99, categoria: "Tonico" },
    { nombreProducto: "Sérum hidratante", precio: 4250.99, categoria: "Sérum" },
    {
      nombreProducto: "Exfoliante de azúcar cherry",
      precio: 1200,
      categoria: "Labios",
    },
    {
      nombreProducto: "Pads de hidrogel para contorno de ojos",
      precio: 2800,
      categoria: "Ojos",
    },
    {
      nombreProducto: "Mascarilla facial",
      precio: 3250.99,
      categoria: "Mascaras",
    },
    { nombreProducto: "Sérum facial con PHA", precio: 3200, categoria: "Sérum" },
    { nombreProducto: "Bálsamo labial", precio: 3200, categoria: "Labios" },
    { nombreProducto: "Crema contorno de ojos", precio: 3200, categoria: "Ojos" },
    {
      nombreProducto: "Protector solar en barra",
      precio: 3800,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Mascara de hidratación y reparación",
      precio: 1200,
      categoria: "Mascaras",
    },
    { nombreProducto: "Agua micellar", precio: 2890, categoria: "Limpieza" },
  ];

function crearTabla(array){
    document.write("<table>");
        document.write("<thead>");
            document.write("<tr>");
                document.write("<td>Producto</td>");
                document.write("<td>Categoria</td>");
                document.write("<td>Precio</td>");
            document.write("</tr>");
        document.write("</thead>");
        document.write("<tbody>");
        for(let i=0; i < listaProductos.length; i++){
              document.write("<tr>");
              document.write("<td>"+ array[i].nombreProducto +"</td>");
              document.write("<td>"+ array[i].categoria +"</td>");
              document.write("<td>$ "+ array[i].precio +"</td>");
              document.write("</tr>");
        }
      document.write("</tbody>");
    document.write("</table>");
}

function encontrarProducto(array,nombre){
  let encontrado=false;
  for(let i=0; i<array.length; i++){
    if(array[i].nombreProducto==nombre) encontrado = true;
  }
  if(encontrado) return encontrado;
  else {
    return encontrado;
  }
}

crearTabla(listaProductos);


let protectores = listaProductos.filter(prod => prod.categoria.includes("Protector solar"));
document.write("<br>Tabla con los productos que son 'Protectores solares'<br><br>");
crearTabla(protectores);


let buscarSerum = listaProductos.find(prod => prod.categoria.includes("Sérum"));
document.write("<br>Tabla con el producto de categoria 'Sérum '<br><br>");
document.write("<table>");
  document.write("<thead>");
    document.write("<tr>");
      document.write("<td>Producto</td>");
      document.write("<td>Categoria</td>");
      document.write("<td>Precio</td>");
    document.write("</tr>");
  document.write("</thead>");
  document.write("<tbody>");
    document.write("<tr>");
      document.write("<td>"+ buscarSerum.nombreProducto +"</td>");
        document.write("<td>"+ buscarSerum.categoria +"</td>");
        document.write("<td>$ "+ buscarSerum.precio +"</td>");
      document.write("</tr>");
  document.write("</tbody>");
document.write("</table>");

if(encontrarProducto(listaProductos, 'Bruma')) {
  let products = listaProductos.filter(prod => prod.nombreProducto.includes("Bruma"));
  document.write("<br>Tabla con los productos llamados 'Bruma'<br><br>");
  crearTabla(protectores);
}
else alert("No se encontro el producto");

