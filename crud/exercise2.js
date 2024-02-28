function printer_error(s) {
    const validColors = 'abcdefghijklm';
    const errorCount = s.split('').filter(char => !validColors.includes(char)).length;
    const totalLength = s.length;
  
    return ${errorCount}/${totalLength};
  }
  
  
  const string1 = "hhgvhgvhgvhgcfcfgcfc";
  console.log("string1= " + string1);
  console.log( "Printer_error = " + printer_error(string1)); 
  
  const string2 = "hygugjhbgtghghghhj";
  console.log("string2= " + string2);
  console.log("Printer_error = " + printer_error(string2));  
  
  const string3 = "hgftrsdgfhgghhkj";
  console.log("string3= " + string3);
  console.log("Printer_error = " + printer_error(string3));