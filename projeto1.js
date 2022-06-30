//import java.text.DecimalFormat
function main() {
   input = "readLine()!!"
  var a = input.split(" ")[0].toFloat()
  var b = input.split(" ")[1].toFloat()
  var c = input.split(" ")[2].toFloat()


  var perimetro = a + b + c   
  var area = ((a+b)*c)/2
  
  var dec = DecimalFormat("##.0")
  
  if (a<( b+c ) &&  b<( a+c ) &&  c<( a+b  )){
      var perimetroFormatado = dec.format(perimetro)
      println(String.format("Perimetro = " +perimetroFormatado))
  }else{
     var areaFormatada = dec.format(area)
      println(String.format("Area = "+areaFormatada))
  } 
    
}
alert(perimetro)
alert(perimetroFormatado)