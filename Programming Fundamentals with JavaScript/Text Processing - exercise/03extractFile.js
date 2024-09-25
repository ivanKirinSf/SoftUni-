function extractFile(str){

    let arr = str.split("\\");

    let name = arr.pop();

    let fileName = "";

    let fileExtension = "";

    let arrName = name.split(".");



    if(arrName.length <= 2 && arrName.length > 0){

        fileName = arrName.shift();
        
        fileExtension = arrName.shift();

        console.log(`File name: ${fileName}`);

        console.log(`File extension: ${fileExtension}`);
       
    }else{

        fileExtension = arrName.pop();

        arrName.join(".")

        fileName = arrName;

        console.log(`File name: ${fileName.join(".")}`);

        console.log(`File extension: ${fileExtension}`);
    }

}

extractFile('C:\\Internal\\training-internal\\Template.pptx')
