;(function(){

  if(lyteDomObj){

    lyteDomObj.prototype.cropper = function(aR){

      /*
        * Cropper image details variables
      */
      var imageTag = this[0],imageTagDets;
      var naturalAR = 1;
      var cropperDiv = this[0].parentElement;
      var cropMove,cropStart,cropEnd,imageMove,imageZoom,imageRotate;
      var retValue = {};
      var aspectRatio;

      /*
        *Aspect ratio assignment and callback definitions
      */
      if(!(aR === "" || aR === undefined)){
        if(aR.cropMove){
          cropMove = aR.cropMove;
        } else {
          cropMove = function(){};
        }
        if(aR.cropStart){
          cropStart = aR.cropStart;
          console.log(aR.cropStart);
        } else {
          cropStart = function(){};
        }
        if(aR.cropEnd){
          cropEnd = aR.cropEnd;
        } else {
          cropEnd = function(){};
        }
        if(aR.imageMove){
          imageMove = aR.imageMove;
        } else {
          imageMove = function(){};
        }
        if(aR.imageZoom){
          imageZoom = aR.imageZoom;
        } else {
          imageZoom = function(){};
        }
        if(aR.imageRotate){
          imageRotate = aR.imageRotate;
        } else {
          imageRotate = function(){};
        }
      } else {
        cropMove = function(){};
        cropStart = function(){};
        cropEnd = function(){};
        imageMove = function(){};
        imageZoom = function(){};
        imageRotate = function(){};
      }

      if(aR === "" || aR === undefined){
        aspectRatio = "1:1";
      } else {
        aspectRatio = aR.aspectRatio;
      }

      /*
        *Crop Area contruction variables
      */

      var cropArea , box , fixedDiv , opacityDiv , cropper , displayArea , displayImageDiv;
      var topEdge , bottomEdge , rightEdge , leftEdge , topLeftCorner , topRightCorner , bottomRightCorner , bottomLeftCorner , divImage;
      var mainImage , fixedImage , divImageImg , displayImage;
      var cropVerGrid1,cropVerGrid2,cropVerGrid3,cropHorGrid1,cropHorGrid2,cropHorGrid3;
      var cropperParent;
      var modalDets;
      var topSpan , bottomSpan , leftSpan , rightSpan;
      var inpImage;
      var data;
      var initialTransX = 0, initialTransY = 0;

      modalDets = imageTag.parentElement.getBoundingClientRect();

      /*
        * Taking image details on Load
      */

      // imageTag.addEventListener('load' , loadCropper);
      if(cropperDiv.querySelectorAll('.lyteCropArea').length !==0 ){
        var element = cropperDiv.querySelectorAll('.lyteCropArea')[0];
        cropperDiv.removeChild(element);
        imageTag.style.display = "block";
        imageTagDets = imageTag.getBoundingClientRect();
        imageTag.style.display = "none";
        cropperFun();
      }

      if((imageTag.complete)&&(cropperDiv.querySelectorAll('.lyteCropArea').length ===0)){
        imageTagDets = imageTag.getBoundingClientRect();
        imageTag.style.display = "none";
        cropperFun();
      }
      imageTag.addEventListener('load' , loadCropper);

      function loadCropper(){
        if((imageTag.complete)&&(cropperDiv.querySelectorAll('.lyteCropArea').length ===0)){
          imageTagDets = imageTag.getBoundingClientRect();
          imageTag.style.display = "none";
          cropperFun();
        }
        imageTag.removeEventListener('load' , loadCropper);
      }

      /*
        * Main cropper generating function definition
      */

      function cropperFun(){

        naturalAR = imageTag.naturalWidth / imageTag.naturalHeight;

        /*
          * Creating required elements for cropper
        */
        (function(){

            cropperParent     = imageTag.parentElement;
            cropArea          = document.createElement("DIV");
            displayArea       = document.createElement("DIV");
            mainImage         = document.createElement("IMG");
            box               = document.createElement("DIV");
            fixedDiv          = document.createElement("DIV");
            fixedImage        = document.createElement("IMG");
            opacityDiv        = document.createElement("DIV");
            cropper           = document.createElement("DIV");
            cropVerGrid1      = document.createElement("SPAN");
            cropVerGrid2      = document.createElement("SPAN");
            cropVerGrid3      = document.createElement("SPAN");
            cropHorGrid1      = document.createElement("SPAN");
            cropHorGrid2      = document.createElement("SPAN");
            cropHorGrid3      = document.createElement("SPAN");
            topEdge           = document.createElement("DIV");
            topSpan           = document.createElement("SPAN");
            bottomEdge        = document.createElement("DIV");
            bottomSpan        = document.createElement("SPAN");
            leftEdge          = document.createElement("DIV");
            leftSpan          = document.createElement("SPAN");
            rightEdge         = document.createElement("DIV");
            rightSpan         = document.createElement("SPAN");
            topRightCorner    = document.createElement("DIV");
            topLeftCorner     = document.createElement("DIV");
            bottomLeftCorner  = document.createElement("DIV");
            bottomRightCorner = document.createElement("DIV");
            divImage          = document.createElement("DIV");
            divImageImg       = document.createElement("IMG");
            displayImageDiv   = document.createElement("DIV");
            displayImage      = document.createElement("IMG");


            cropperParent.appendChild(cropArea);
            displayArea.appendChild(displayImageDiv);
            displayImageDiv.appendChild(displayImage);
            cropArea.appendChild(box);
            box.appendChild(fixedDiv);
            fixedDiv.appendChild(fixedImage);
            box.appendChild(opacityDiv);
            box.appendChild(cropper);
            cropper.appendChild(cropVerGrid1);
            cropper.appendChild(cropVerGrid2);
            cropper.appendChild(cropVerGrid3);
            cropper.appendChild(cropHorGrid1);
            cropper.appendChild(cropHorGrid2);
            cropper.appendChild(cropHorGrid3);
            cropper.appendChild(topEdge);
            topEdge.appendChild(topSpan);
            cropper.appendChild(bottomEdge);
            bottomEdge.appendChild(bottomSpan);
            cropper.appendChild(rightEdge);
            rightEdge.appendChild(rightSpan);
            cropper.appendChild(leftEdge);
            leftEdge.appendChild(leftSpan);
            cropper.appendChild(topRightCorner);
            cropper.appendChild(bottomRightCorner);
            cropper.appendChild(topLeftCorner);
            cropper.appendChild(bottomLeftCorner);
            cropper.appendChild(divImage);
            divImage.appendChild(divImageImg);

        /*
          * Defining classes for the cropper elements
        */

        (function(){
            cropArea.setAttribute("class" , "lyteCropArea");
            displayArea.setAttribute("class" , "lyteCropDisplayArea");
            displayImageDiv.setAttribute("class" , "lyteCropDisplayImageDiv");
            displayImage.setAttribute("class" , "lyteCropDisplayImage");
            mainImage.setAttribute("class" , "lyteCropMainImage");
            box.setAttribute("class" , "lyteCropBox");
            fixedDiv.setAttribute("class" , "lyteCropFixedDiv");
            fixedImage.setAttribute("class" , "lyteCropFixedImage");
            opacityDiv.setAttribute("class" , "lyteCropOpacityDiv");
            cropper.setAttribute("class" , "lyteCropCropper");
            cropVerGrid1.setAttribute("class" , "lytecropVerGrid1");
            cropVerGrid2.setAttribute("class" , "lytecropVerGrid2");
            cropVerGrid3.setAttribute("class" , "lytecropVerGrid3");
            cropHorGrid1.setAttribute("class" , "lytecropHorGrid1");
            cropHorGrid2.setAttribute("class" , "lytecropHorGrid2");
            cropHorGrid3.setAttribute("class" , "lytecropHorGrid3");
            topEdge.setAttribute("class" , "lyteCropTopEdge");
            topSpan.setAttribute("class" , "lyteCropTopSpan");
            bottomEdge.setAttribute("class" , "lyteCropBottomEdge");
            bottomSpan.setAttribute("class" , "lyteCropBottomSpan");
            leftEdge.setAttribute("class" , "lyteCropLeftEdge");
            leftSpan.setAttribute("class" , "lyteCropLeftSpan");
            rightEdge.setAttribute("class" , "lyteCropRightEdge");
            rightSpan.setAttribute("class" , "lyteCropRightSpan");
            topRightCorner.setAttribute("class" , "lyteCropTopRightCorner");
            topLeftCorner.setAttribute("class" , "lyteCropTopLeftCorner");
            bottomRightCorner.setAttribute("class" , "lyteCropBottomRightCorner");
            bottomLeftCorner.setAttribute("class" , "lyteCropBottomLeftCorner");
            divImage.setAttribute("class" , "lyteCropDivImage");
            divImageImg.setAttribute("class" , "lyteCropDivImageImg");
          })();


          var imageHeight = imageTagDets.height , imageWidth = imageTagDets.width;
          var initialCropperHeight,initialCropperWidth,fixedImageHeight,fixedImageWidth;
          var aspectDiff , diffHeight , diffWidth , leastHeight , leastWidth;

          /*
            * Aspect Ratio definition
          */

          fixedImage.src = mainImage.src = divImageImg.src = displayImage.src = imageTag.src;




          (function(){

            var imageHeight = imageTagDets.height;
            var imageWidth = imageTagDets.width;

            if(aspectRatio === '1:1'){

              aspectDiff = 1/1;
              diffHeight = 1;
              diffWidth = 1;
              leastWidth = leastHeight = 50;

              if(imageHeight < imageWidth){

                initialCropperWidth = initialCropperHeight = imageHeight * 0.8;

              } else if(imageHeight > imageWidth){

                initialCropperWidth = initialCropperHeight = imageWidth * 0.8;

              } else if(imageHeight === imageWidth){

                initialCropperWidth = imageWidth * 0.8;
                initialCropperHeight = imageHeight * 0.8;

              }

            } else if(aspectRatio === '2:3'){

              aspectDiff = 2/3;
              // diffHeight = 3;
              // diffWidth = 2;

              leastWidth = (70*aspectDiff);
              leastHeight = 70;

              if(imageHeight < imageWidth){

                initialCropperHeight = imageHeight * 0.8;
                initialCropperWidth =  (imageHeight * 0.8)*(2/3);

              } else if(imageHeight > imageWidth){

                initialCropperHeight = imageWidth * 0.8;
                initialCropperWidth = (imageWidth * 0.8)*(2/3);

              } else if(imageHeight === imageWidth){

                initialCropperWidth = imageWidth * 0.8;
                initialCropperHeight = imageHeight * 0.8;

              }

            } else if(aspectRatio === '4:3'){

              aspectDiff = 4/3;
              diffHeight = 3;
              diffWidth = 4;

              leastWidth = 70;
              leastHeight = (70/aspectDiff);

              if(imageHeight < imageWidth){

                initialCropperHeight = imageHeight * 0.8;
                initialCropperWidth =  (imageHeight * 0.8)*(4/3);

              } else if(imageHeight > imageWidth){

                initialCropperHeight = imageWidth * 0.8*(3/4);
                initialCropperWidth = (imageWidth * 0.8);

              } else if(imageHeight === imageWidth){

                initialCropperWidth = imageWidth * 0.8;
                initialCropperHeight = imageHeight * 0.8;

              }

            } else if(aspectRatio === '16:9'){

              aspectDiff = 16/9;
              diffHeight = 9;
              diffWidth = 16;

              leastWidth = 70;
              leastHeight = (70/aspectDiff);

              if(imageHeight < imageWidth){

                initialCropperHeight = imageHeight * 0.8;
                initialCropperWidth =  (imageHeight * 0.8)*(16/9);

              } else if(imageHeight > imageWidth){

                initialCropperHeight = imageWidth * 0.8*(9/16);
                initialCropperWidth = (imageWidth * 0.8);

              } else if(imageHeight === imageWidth){

                initialCropperWidth = imageWidth * 0.8;
                initialCropperHeight = imageHeight * 0.8;

              }

            } else if(aspectRatio === 'n:n'){

              // aspectDiff = 2/3;
              // diffHeight = 3;
              // diffWidth = 2;

              leastWidth = 70;
              leastHeight = 70;

              if(imageHeight < imageWidth){

                initialCropperHeight = imageHeight * 0.8;
                initialCropperWidth =  (imageHeight * 0.8)*(3/2);

              } else if(imageHeight > imageWidth){
                initialCropperHeight = imageWidth * 0.8*(2/3);
                initialCropperWidth = (imageWidth * 0.8);

              } else if(imageHeight === imageWidth){

                initialCropperWidth = imageWidth * 0.8;
                initialCropperHeight = imageHeight * 0.8;

              }

            }

          }());

           var initialDimensions = function(){
            if(imageHeight < imageWidth){
              fixedImage.style.width = divImageImg.style.width = (cropperDiv.getBoundingClientRect().width) + "px";
              fixedImage.style.height = divImageImg.style.height = ((cropperDiv.getBoundingClientRect().width)/naturalAR) + "px";
              cropArea.style.height = fixedImage.getBoundingClientRect().height + "px";
              cropArea.style.width = fixedImage.getBoundingClientRect().width + "px";
              cropArea.style.top = ((cropperDiv.getBoundingClientRect().height - cropArea.getBoundingClientRect().height)/2) + "px";
            } else if(imageHeight > imageWidth){
              fixedImage.style.height = divImageImg.style.height = (cropperDiv.getBoundingClientRect().height) + "px";
              fixedImage.style.width = divImageImg.style.width = ((cropperDiv.getBoundingClientRect().height)*naturalAR) + "px";
              cropArea.style.width = fixedImage.getBoundingClientRect().width + "px";
              cropArea.style.height = fixedImage.getBoundingClientRect().height + "px";
              cropArea.style.left = ((cropperDiv.getBoundingClientRect().width - cropArea.getBoundingClientRect().width)/2) + "px";
            } else if(imageHeight === imageWidth){
              fixedImage.style.height = divImageImg.style.height = (cropperDiv.getBoundingClientRect().height) + "px";
              fixedImage.style.width = divImageImg.style.width = ((cropperDiv.getBoundingClientRect().height)*naturalAR) + "px";
              cropArea.style.width = (fixedImage.getBoundingClientRect().width) + "px";
              cropArea.style.height = (fixedImage.getBoundingClientRect().height) + "px";
              cropArea.style.left = ((cropperDiv.getBoundingClientRect().width - cropArea.getBoundingClientRect().width)/2) + "px";
            }
            // box.style.height = (imageHeight) + "px";

            // fixedImage.style.top = (box.getBoundingClientRect().height - fixedImage.getBoundingClientRect().height)/2 + "px";
            // fixedImage.style.left = (opacityDiv.getBoundingClientRect().width - fixedImage.getBoundingClientRect().width)/2 + "px";

            fixedImage.style.left = "0px";
            divImageImg.style.left = "-"+((opacityDiv.getBoundingClientRect().width - cropper.getBoundingClientRect().width)/2) + "px"
            fixedImage.style.top = "0px";
            divImageImg.style.top = "-"+((opacityDiv.getBoundingClientRect().height - cropper.getBoundingClientRect().height)/2) + "px"

            cropper.style.height = opacityDiv.getBoundingClientRect().height + "px";
            cropper.style.width = opacityDiv.getBoundingClientRect().width + "px";
            cropper.style.top = ((opacityDiv.getBoundingClientRect().height - cropper.getBoundingClientRect().height)/2) + "px"
            cropper.style.left = ((opacityDiv.getBoundingClientRect().width - cropper.getBoundingClientRect().width)/2) + "px"
            setCropperData();
          }

          initialDimensions();


          /*
            *Positioning cropper on rotate
          */

          function positionCropper(cropperDim , cropAreaDim , imageDim , ang1 , prevAng){

            var ang = fixedImage.style.transform.match(/-?\d+/g)[0];
            var angCheck = parseInt(ang);
            var angCheck1 = angCheck;
            angCheck = Math.abs(angCheck);



            if((angCheck === 90) || (angCheck === 270)){


            if(imageTagDets.height<imageTagDets.width){
              fixedImage.style.width = divImageImg.style.width = cropperDiv.getBoundingClientRect().height + "px";
              fixedImage.style.height = divImageImg.style.height ="auto";
              cropArea.style.height = cropperDiv.getBoundingClientRect().height + "px";
              cropArea.style.top = "0px";
              cropArea.style.width = fixedImage.getBoundingClientRect().width + "px";
              cropArea.style.left = ((cropperDiv.getBoundingClientRect().width - cropArea.getBoundingClientRect().width)/2) + "px";
            } else if(imageTagDets.height>imageTagDets.width){
              fixedImage.style.width = divImageImg.style.width = "auto"
              fixedImage.style.height = divImageImg.style.height = cropperDiv.getBoundingClientRect().width + "px";
              cropArea.style.width = cropperDiv.getBoundingClientRect().width + "px";
              cropArea.style.left = "0px";
              cropArea.style.height = fixedImage.getBoundingClientRect().height + "px";
              cropArea.style.top = ((cropperDiv.getBoundingClientRect().height - cropArea.getBoundingClientRect().height)/2) + "px";
            }



            fixedImage.style.left = (cropArea.getBoundingClientRect().left - fixedImage.getBoundingClientRect().left) + "px";
            fixedImage.style.top = (cropArea.getBoundingClientRect().top - fixedImage.getBoundingClientRect().top) + "px";

            cropper.style.width = (cropperDim.height*cropArea.getBoundingClientRect().width) / cropAreaDim.height + "px";
            cropper.style.height = (cropperDim.width*cropArea.getBoundingClientRect().height) / cropAreaDim.width + "px";


            if((angCheck1 === -90)||(angCheck1 === -270)){
              cropper.style.left = (((cropperDim.top - cropAreaDim.top) * cropArea.getBoundingClientRect().width)/cropAreaDim.height) + "px";
              cropper.style.top = ((cropArea.getBoundingClientRect().height) - ((((cropperDim.left - cropAreaDim.left) * cropArea.getBoundingClientRect().height)/cropAreaDim.width) + cropper.getBoundingClientRect().height) ) + "px";
            }
            if((angCheck1 === 90) || (angCheck1 === 270)){
              cropper.style.top = (((cropperDim.left - cropAreaDim.left) * cropArea.getBoundingClientRect().height)/cropAreaDim.width) + "px";
              cropper.style.left = (cropArea.getBoundingClientRect().width - ( cropper.getBoundingClientRect().width + (((cropperDim.top - cropAreaDim.top)* cropArea.getBoundingClientRect().width)/cropAreaDim.height))) + "px";
            }



          } else {

            if(imageTagDets.height<imageTagDets.width){
              fixedImage.style.width = divImageImg.style.width = cropperDiv.getBoundingClientRect().width + "px";
              fixedImage.style.height = divImageImg.style.height = "auto";
              cropArea.style.width = cropperDiv.getBoundingClientRect().width + "px";
              cropArea.style.left = "0px";
              cropArea.style.height = fixedImage.getBoundingClientRect().height + "px";
              cropArea.style.top = (cropperDiv.getBoundingClientRect().height - cropArea.getBoundingClientRect().height)/2 + "px";
            } else {
              fixedImage.style.width = divImageImg.style.width = "auto";
              fixedImage.style.height = divImageImg.style.height = cropperDiv.getBoundingClientRect().height + "px";
              cropArea.style.height = cropperDiv.getBoundingClientRect().height + "px";
              cropArea.style.top = "0px";
              cropArea.style.width = fixedImage.getBoundingClientRect().width + "px";
              cropArea.style.left = (cropperDiv.getBoundingClientRect().width - cropArea.getBoundingClientRect().width)/2 + "px";
            }



            fixedImage.style.top = (box.getBoundingClientRect().height - fixedImage.getBoundingClientRect().height)/2 + "px";
            fixedImage.style.left = (opacityDiv.getBoundingClientRect().width - fixedImage.getBoundingClientRect().width)/2 + "px";

            cropper.style.width = (cropperDim.height*cropArea.getBoundingClientRect().width) / cropAreaDim.height + "px";
            cropper.style.height = (cropperDim.width*cropArea.getBoundingClientRect().height) / cropAreaDim.width + "px";

            if((angCheck1 === -180)){
              cropper.style.top = ((cropArea.getBoundingClientRect().height) - ((((cropperDim.left - cropAreaDim.left) * cropArea.getBoundingClientRect().height)/cropAreaDim.width) + cropper.getBoundingClientRect().height) ) + "px";
              cropper.style.left = (((cropperDim.top - cropAreaDim.top) * cropArea.getBoundingClientRect().width)/cropAreaDim.height) + "px";
            }
            if((angCheck1 === 0)||(angCheck1 === 180)){
              cropper.style.top = (((cropperDim.left - cropAreaDim.left) * cropArea.getBoundingClientRect().height)/cropAreaDim.width) + "px";
              cropper.style.left = (cropArea.getBoundingClientRect().width - ( cropper.getBoundingClientRect().width + (((cropperDim.top - cropAreaDim.top)* cropArea.getBoundingClientRect().width)/cropAreaDim.height))) + "px";
            }
          }

          var fixedImageTransform = fixedImage.style.transform;
          fixedImage.style.transform = 'rotate(0deg)';
          divImageImg.style.left = (fixedImage.getBoundingClientRect().left - cropper.getBoundingClientRect().left)+"px";
          divImageImg.style.top = (fixedImage.getBoundingClientRect().top - cropper.getBoundingClientRect().top)+"px";
          fixedImage.style.transform = fixedImageTransform;

          }

          /*
            * Defining cropper values to the image tag
          */

          function setCropperData(){

            var cropper = document.getElementsByClassName('lyteCropCropper')[0];
            var fixedImage = document.getElementsByClassName('lyteCropFixedImage')[0];
            var divImageImg = document.getElementsByClassName('lyteCropDivImageImg')[0];
            retValue.cropperDim = cropper.getBoundingClientRect();
            retValue.imageDim = divImageImg.getBoundingClientRect();
            retValue.imageSource = imageTag.src;
            retValue.displayImage = divImageImg;
            retValue.aspectRatio = aspectRatio;
            retValue.resetCropper = function(){
              if(imageHeight < imageWidth){
                fixedImage.style.width = divImageImg.style.width = (cropperDiv.getBoundingClientRect().width) + "px";
              } else if(imageHeight > imageWidth){
                fixedImage.style.height = divImageImg.style.height = (cropperDiv.getBoundingClientRect().height) + "px";
              } else if(imageHeight === imageWidth){
                fixedImage.style.height = divImageImg.style.height = (cropperDiv.getBoundingClientRect().height) + "px";
              }
              fixedImage.style.transform = divImageImg.style.transform = "";
              retValue.angle = 0;
              fixedImage.style.top = (box.getBoundingClientRect().height - fixedImage.getBoundingClientRect().height)/2 + "px";
              fixedImage.style.left = (opacityDiv.getBoundingClientRect().width - fixedImage.getBoundingClientRect().width)/2 + "px";
              // box.style.height = (imageHeight) + "px";
              cropper.style.height = initialCropperHeight + "px";
              cropper.style.width = initialCropperWidth + "px";
              var opDivDimension = opacityDiv.getBoundingClientRect();
              var cropperDim = cropper.getBoundingClientRect();
              cropper.style.top = ((opDivDimension.height - cropperDim.height)/2) + "px";
              cropper.style.left = ((opDivDimension.width - cropperDim.width)/2) + "px";
              var fixedImageDim = fixedImage.getBoundingClientRect();
              cropperDim = cropper.getBoundingClientRect();
              divImageImg.style.left = (fixedImageDim.left - cropperDim.left)+"px";
              divImageImg.style.top = (fixedImageDim.top - cropperDim.top)+"px";
              cropArea.style.width = fixedImage.getBoundingClientRect().width + "px";
              cropArea.style.height = fixedImage.getBoundingClientRect().height + "px";
              cropArea.style.top = (box.getBoundingClientRect().height - fixedImage.getBoundingClientRect().height)/2 + "px";
              cropArea.style.left = (opacityDiv.getBoundingClientRect().width - fixedImage.getBoundingClientRect().width)/2 + "px";
            };


            retValue.rotate = function(){
              var cropperDim = cropper.getBoundingClientRect();
              var cropAreaDim = cropArea.getBoundingClientRect();
              var imageDim = fixedImage.getBoundingClientRect();
              var angle;
              var o = fixedImage.style.transform;
              var prevAng;
              if(o){
                angle = o.match(/-?\d+/g);
                prevAng = angle[0];
                angle = parseInt(angle[0]) + 90;
                if(angle >= 360){
                  angle = 0;
                }
                // cropArea.style.transform = "rotate("+angle+"deg)";
                fixedImage.style.transform = "rotate("+angle+"deg)";
                divImageImg.style.transform = "rotate("+angle+"deg)";
              } else {
                var angle = 90;
                // cropArea.style.transform = "rotate("+angle+"deg)";
                fixedImage.style.transform = "rotate("+angle+"deg)";
                divImageImg.style.transform = "rotate("+angle+"deg)";
              }
              if(retValue.angle === undefined){
                angle = 0
                retValue.angle = angle;
              } else {
                retValue.angle = angle;
              }

              positionCropper(cropperDim , cropAreaDim , imageDim , angle , prevAng);

            };


            // retValue.rotate = function(an){
            //     var angle;
            //     var currentValue = retValue.angle;
            //     angle =  an + currentValue;
            //     fixedImage.style.transform = "rotate("+angle+"deg)";
            //     divImageImg.style.transform = "rotate("+angle+"deg)";
            //     if(retValue.angle === undefined){
            //       retValue.angle = 0;
            //     } else {
            //       retValue.angle = angle;
            //     }
            // };

            // retValue.rotateAntiClock = function(){
            //   var cropperDim = cropper.getBoundingClientRect();
            //   var cropAreaDim = cropArea.getBoundingClientRect();
            //   var imageDim = fixedImage.getBoundingClientRect();
            //   var angle;
            //   var o = fixedImage.style.transform;
            //   if(o){
            //     angle = o.match(/-?\d+/g);
            //     angle = parseInt(angle[0]) - 90;
            //     if(angle <= -360){
            //       angle = 0;
            //     }
            //     // cropArea.style.transform = "rotate("+angle+"deg)";
            //     fixedImage.style.transform = "rotate("+angle+"deg)";
            //     divImageImg.style.transform = "rotate("+angle+"deg)";
            //   } else {
            //     var angle = -90;
            //     // cropArea.style.transform = "rotate("+angle+"deg)";
            //     fixedImage.style.transform = "rotate("+angle+"deg)";
            //     divImageImg.style.transform = "rotate("+angle+"deg)";
            //   }
            //   if(retValue.angle === undefined){
            //     angle = 0;
            //     retValue.angle = angle;
            //   } else {
            //     retValue.angle = angle;
            //   }
            //
            //
            //   positionCropper(cropperDim , cropAreaDim , imageDim , angle);
            //
            // };


            retValue.getCroppedImage = function(){
              // debugger;

              var canvas = document.createElement('CANVAS');
              canvas.height = cropper.getBoundingClientRect().height;
              canvas.width = cropper.getBoundingClientRect().width;
              canvas.style.background = "#eee";
              var ctx = canvas.getContext('2d');

              var o = fixedImage.style.transform;
              var angle = 0;
              if(o){
                angle = o.match(/-?\d+/g);
                angle = parseInt(angle[0]);
              }
              if((Math.abs(angle) !== 90)&&(Math.abs(angle) !== 270)){
                divImageImg.style.transform = 'rotate(0deg)';
              }
              // var image = new Image();
              // image.src = divImageImg.src;
              var image = $L('.lyteCropDivImageImg')[0];
              // image.style.width = divImageImg.getBoundingClientRect().width + 'px';
              // image.style.height = divImageImg.getBoundingClientRect().height + 'px';
              var cx =  divImageImg.getBoundingClientRect().left - cropper.getBoundingClientRect().left;
              var cy =  divImageImg.getBoundingClientRect().top -  cropper.getBoundingClientRect().top;
              var cw =  divImageImg.getBoundingClientRect().width;
              var ch =  divImageImg.getBoundingClientRect().height;
              divImageImg.style.transform = o;
              if(angle !== 0){

                var halfWidth = cw / 2;
                var halfHeight = ch / 2;

                ctx.save();

                ctx.translate( cx+halfWidth , cy+halfHeight);
                ctx.rotate(angle * (Math.PI/180));
                if((Math.abs(angle)%90 === 0)&&(!((Math.abs(angle) === 180)||(Math.abs(angle) === 360)))){
                  cw = fixedImage.getBoundingClientRect().width;
                  ch = fixedImage.getBoundingClientRect().height;
                  ctx.drawImage(image,-halfHeight,-halfWidth,ch,cw);
                } else {
                  ctx.drawImage(image,-halfWidth,-halfHeight,cw,ch);
                }

                ctx.restore();

              } else {
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = 'high';
                ctx.drawImage(image,cx,cy,cw,ch);
                // console.log(cx , cy);
                // ctx.drawImage(image,0,-300,100,100);
              }

              // console.log(image);

              return canvas;
            }


            $L(imageTag).data('cropper' , retValue);

            setTimeout(function(){
              cropMove();
              imageMove();
              imageZoom();
              imageRotate();
            },100);

          }

          var prevHt = fixedImage.getBoundingClientRect().height;
          var prevWt = fixedImage.getBoundingClientRect().width;


          cropper.addEventListener("mousedown" , croppie);
          cropper.addEventListener("touchstart" , croppie);


          function croppie(){
            cropStart();
            // console.log('croppie');
            opacityDiv.style.opacity = "0.6";

            event.preventDefault();


            var todo;
            if((event.target.className === "lyteCropDivImageImg")||(event.target.className === "lyteCropDivImage")){
              todo = "parent";
            } else {
              todo = "child"
            }
            var topEdge           =  document.getElementsByClassName('lyteCropTopEdge')[0];
            var rightEdge         =  document.getElementsByClassName('lyteCropRightEdge')[0];
            var bottomEdge        =  document.getElementsByClassName('lyteCropBottomEdge')[0];
            var leftEdge          =  document.getElementsByClassName('lyteCropLeftEdge')[0];
            var topRightCorner    =  document.getElementsByClassName('lyteCropTopRightCorner')[0];
            var bottomRightCorner =  document.getElementsByClassName('lyteCropBottomRightCorner')[0];
            var bottomLeftCorner  =  document.getElementsByClassName('lyteCropBottomLeftCorner')[0];
            var topLeftCorner     =  document.getElementsByClassName('lyteCropTopLeftCorner')[0];

            // topEdge.style.background = rightEdge.style.background = bottomEdge.style.background = leftEdge.style.background = "rgba(255,255,255,0.6)";

            switch (todo) {

              case "child":{


                var cropperTop      = cropper.getBoundingClientRect().top;
                var cropperBottom   = cropper.getBoundingClientRect().bottom;
                var cropperRight    = cropper.getBoundingClientRect().right;
                var cropperLeft     = cropper.getBoundingClientRect().left;
                var cropperWidth    = cropper.getBoundingClientRect().width;
                var cropperHeight   = cropper.getBoundingClientRect().height;
                var previousClientX;
                var previousClientY;
                if(event.type === 'mousedown'){
                  previousClientX = event.clientX;
                  previousClientY = event.clientY;
                } else if(event.type === 'touchstart'){
                  previousClientX = event.touches[0].clientX;
                  previousClientY = event.touches[0].clientY;
                }
                var midHeight       = (cropper.getBoundingClientRect().top + (cropper.getBoundingClientRect().height / 2)) - cropArea.getBoundingClientRect().top;
                var midWidth        = (cropper.getBoundingClientRect().left + (cropper.getBoundingClientRect().width / 2)) - cropArea.getBoundingClientRect().left;
                var finalLeft       = opacityDiv.getBoundingClientRect().left - cropArea.getBoundingClientRect().left;
                var finalTop        = opacityDiv.getBoundingClientRect().top - cropArea.getBoundingClientRect().top;
                var finalRight      = opacityDiv.getBoundingClientRect().right - cropper.getBoundingClientRect().width - box.getBoundingClientRect().left;
                var tempWidth , tempHeight;
                var todoC;
                if (event.target.className === "") {
                  todoC = event.target.parentElement.className;
                } else {
                  todoC = event.target.className;
                }

                function cropFun(){
                  event.preventDefault();
                  var opacityDivLeft    =  opacityDiv.getBoundingClientRect().left;
                  var opacityDivRight   =  opacityDiv.getBoundingClientRect().right;
                  var opacityDivHeight  =  opacityDiv.getBoundingClientRect().height;
                  var opacityDivWidth   =  opacityDiv.getBoundingClientRect().width;
                  var opacityDivTop     =  opacityDiv.getBoundingClientRect().top;
                  var opacityDivBottom  =  opacityDiv.getBoundingClientRect().bottom;
                  var presentClientX;
                  var presentClientY;
                  var evX;
                  var evY;
                  if(event.type === 'mousemove'){
                    evX = event.clientX;
                    evY = event.clientY;
                    presentClientX = event.clientX;
                    presentClientY = event.clientY;
                  } else if(event.type === 'touchmove'){
                    evX = event.touches[0].clientX;
                    evY = event.touches[0].clientY;
                    presentClientX = event.touches[0].clientX;
                    presentClientY = event.touches[0].clientY;
                  }
                  var cropperCurrentHeight = cropper.getBoundingClientRect().height;
                  var cropperCurrentWidth = cropper.getBoundingClientRect().width;
                  var cropperCurrentRight = cropper.getBoundingClientRect().right;
                  var cropperCurrentLeft = cropper.getBoundingClientRect().left;
                  var cropperCurrentTop = cropper.getBoundingClientRect().top;
                  var cropperCurrentBottom = cropper.getBoundingClientRect().bottom;
                  var x = ( window.pageXOffset || document.documentElement.scrollLeft ) ,y = window.pageYOffset || document.documentElement.scrollTop;
                  var xChange = 0, yChange = 0;


                  switch (todoC) {
                    case "lyteCropLeftEdge":
                    if ((cropperWidth - (evX - previousClientX))>=leastWidth) {
                      if(evX > opacityDiv.getBoundingClientRect().left){
                        cropper.style.width   = cropperWidth - (presentClientX - previousClientX) + "px";
                        cropper.style.height  = (cropperWidth - (presentClientX - previousClientX))/aspectDiff + "px";
                        cropper.style.top     = ((cropperTop - cropArea.getBoundingClientRect().top) + ((presentClientX - previousClientX)/aspectDiff)/2) + "px";
                        cropper.style.left    = ((cropperLeft - cropArea.getBoundingClientRect().left) + (evX - previousClientX))+ "px";
                      }
                      if(evX-6 <= opacityDiv.getBoundingClientRect().left){
                        if((!(cropper.getBoundingClientRect().height >= opacityDiv.getBoundingClientRect().height))||(!(cropper.getBoundingClientRect().width >= opacityDiv.getBoundingClientRect().width))&&(cropper.getBoundingClientRect().left < opacityDiv.getBoundingClientRect().left)){
                          cropper.style.top = (opacityDivBottom - (((opacityDivWidth - (opacityDivRight - cropperRight))/aspectDiff) + (opacityDivBottom - (midHeight + ((opacityDivWidth - (opacityDivRight - cropperRight))/aspectDiff)/2)))) + "px";
                          cropper.style.left = opacityDiv.getBoundingClientRect().left - cropArea.getBoundingClientRect().left + "px";
                        }
                        cropper.style.width = opacityDivWidth - (opacityDivRight - cropperRight) + "px";
                        cropper.style.height = (opacityDivWidth - (opacityDivRight - cropperRight))/aspectDiff + "px";
                      }
                      if(cropper.getBoundingClientRect().bottom >= opacityDiv.getBoundingClientRect().bottom){
                        cropper.style.top = opacityDiv.getBoundingClientRect().bottom - cropper.getBoundingClientRect().height - cropArea.getBoundingClientRect().top + "px";
                      }
                      if(cropper.getBoundingClientRect().top <= opacityDiv.getBoundingClientRect().top){
                        cropper.style.top = opacityDiv.getBoundingClientRect().top - cropArea.getBoundingClientRect().top + "px";
                      }
                      if((cropper.getBoundingClientRect().bottom >= opacityDiv.getBoundingClientRect().bottom)&&(cropper.getBoundingClientRect().top <= opacityDiv.getBoundingClientRect().top)){
                        cropper.style.left = cropperRight - ((opacityDivBottom - opacityDivTop)*aspectDiff) - cropArea.getBoundingClientRect().left + "px";
                        cropper.style.width = (opacityDivBottom - opacityDivTop)*aspectDiff + "px";
                        cropper.style.height = opacityDivBottom - opacityDivTop + "px";
                        cropper.style.top = opacityDivTop - cropArea.getBoundingClientRect().top + "px";
                      }
                    } else {
                      if(!(aspectRatio === "n:n")){
                        cropper.style.left    = (cropperRight - leastWidth) - cropArea.getBoundingClientRect().left + "px";
                        cropper.style.top     = (midHeight - (leastHeight/2)) + "px";
                        cropper.style.width   = leastWidth +"px";
                        cropper.style.height  = leastHeight + "px";
                      }
                    }
                    break;
                    case "lyteCropTopEdge":
                        if ((cropperHeight - (evY - previousClientY))>=leastHeight) {
                          if(evY > opacityDiv.getBoundingClientRect().top+6){
                            cropper.style.width   = (cropperHeight - (evY - previousClientY))*aspectDiff + "px";
                            cropper.style.height  = cropperHeight - (evY - previousClientY)+ "px";
                            cropper.style.left    = ((cropperLeft - cropArea.getBoundingClientRect().left) + ((evY - previousClientY)*aspectDiff)/2) + "px";
                            cropper.style.top     = ((cropperTop - cropArea.getBoundingClientRect().top) + (evY - previousClientY))+ "px";
                          }
                          if(evY-6 <= opacityDiv.getBoundingClientRect().top){
                            if((!(cropper.getBoundingClientRect().height >= opacityDiv.getBoundingClientRect().height))||(!(cropper.getBoundingClientRect().width >= opacityDiv.getBoundingClientRect().width))&&(cropper.getBoundingClientRect().left < opacityDivLeft)){
                              cropper.style.left = (opacityDivRight - (((cropperBottom - opacityDivTop)*aspectDiff) + (opacityDivRight-(midWidth+(((cropperBottom - opacityDivTop)*aspectDiff)/2))))) + "px";
                              cropper.style.top = opacityDiv.getBoundingClientRect().top - cropArea.getBoundingClientRect().top + "px";
                            }
                            cropper.style.width = (cropperBottom - opacityDivTop)*aspectDiff + "px";
                            cropper.style.height = cropperBottom - opacityDivTop + "px";
                          }
                          if(cropper.getBoundingClientRect().left <= opacityDivLeft){
                            cropper.style.left = opacityDivLeft - cropArea.getBoundingClientRect().left + "px";
                          }
                          if(cropper.getBoundingClientRect().right >= opacityDiv.getBoundingClientRect().right){
                            cropper.style.left = opacityDiv.getBoundingClientRect().right - cropper.getBoundingClientRect().width - cropArea.getBoundingClientRect().left+ "px";
                          }
                          if((cropper.getBoundingClientRect().right >= opacityDiv.getBoundingClientRect().right)&&(cropper.getBoundingClientRect().left <= opacityDivLeft)){
                            cropper.style.width = opacityDivRight - opacityDivLeft + "px";
                            cropper.style.height = (opacityDivRight - opacityDivLeft)/aspectDiff + "px";
                            cropper.style.top = (cropperBottom - ((opacityDivRight - opacityDivLeft)/aspectDiff)) - cropArea.getBoundingClientRect().top + "px";
                            cropper.style.left = opacityDivLeft - cropArea.getBoundingClientRect().left + "px";
                          }
                        } else {
                          if(!(aspectRatio === "n:n")){
                            cropper.style.top     = (cropperBottom - leastHeight) - cropArea.getBoundingClientRect().top + "px";
                            cropper.style.left    = (midWidth - (leastWidth/2)) + "px";
                            cropper.style.width   = leastWidth +"px";
                            cropper.style.height  = leastHeight + "px";
                          }
                        }
                    break;
                    case "lyteCropBottomEdge":
                        if((cropperHeight + (evY - previousClientY))>=leastHeight){
                          if(evY < opacityDiv.getBoundingClientRect().bottom){
                            cropper.style.width   = (cropperHeight + (presentClientY - previousClientY))*aspectDiff + "px";
                            cropper.style.height  = cropperHeight + (evY - previousClientY)+ "px";
                            cropper.style.left    = ((cropperLeft - cropArea.getBoundingClientRect().left) - ((presentClientY - previousClientY)*aspectDiff)/2) + "px";
                            cropper.style.bottom  = ((cropperBottom - cropArea.getBoundingClientRect().bottom) - (presentClientY - previousClientY))+ "px";
                          }
                          if(evY >= opacityDiv.getBoundingClientRect().bottom){
                            cropper.style.left = midWidth - (((opacityDivBottom - cropperTop)*aspectDiff) / 2) + "px";
                            cropper.style.width = (opacityDivBottom - cropperTop)*aspectDiff + "px";
                            cropper.style.height = opacityDivBottom - cropperTop + "px";
                          }
                          if(cropper.getBoundingClientRect().left <= opacityDivLeft){
                            cropper.style.left = opacityDivLeft - cropArea.getBoundingClientRect().left + "px";
                          }
                          if(cropper.getBoundingClientRect().right >= opacityDiv.getBoundingClientRect().right){
                            cropper.style.left = opacityDivRight - cropper.getBoundingClientRect().width - cropArea.getBoundingClientRect().left+ "px";
                          }
                          if((cropper.getBoundingClientRect().right >= opacityDiv.getBoundingClientRect().right)&&(cropper.getBoundingClientRect().left <= opacityDivLeft)){
                            cropper.style.left = opacityDivLeft - cropArea.getBoundingClientRect().left + "px";
                            cropper.style.width = opacityDivRight - opacityDivLeft + "px";
                            cropper.style.height = (opacityDivRight - opacityDivLeft)/aspectDiff + "px";
                          }
                        } else {
                          if(!(aspectRatio === "n:n")){
                            cropper.style.left    = (midWidth - (leastWidth/2)) + "px";
                            cropper.style.width   = leastWidth + "px";
                            cropper.style.height  = leastHeight + "px";
                          }
                        }
                    break;
                    case "lyteCropRightEdge":
                        if((cropperWidth + (presentClientX - previousClientX))>=leastWidth){
                          if(presentClientX < opacityDivRight){
                            cropper.style.width   = cropperWidth + (presentClientX - previousClientX) + "px";
                            cropper.style.height  = (cropperWidth + (presentClientX - previousClientX))/aspectDiff + "px";
                            cropper.style.top     = ((cropperTop - cropArea.getBoundingClientRect().top) - ((presentClientX - previousClientX)/aspectDiff)/2) + "px";
                            cropper.style.right   = ((cropperRight - cropArea.getBoundingClientRect().right) - (presentClientX - previousClientX))+ "px";
                          }
                          if(presentClientX >= opacityDivRight){
                            cropper.style.top = midHeight - (((opacityDivRight - cropperLeft)/aspectDiff) / 2) + "px";
                            cropper.style.width = opacityDivRight - cropperLeft + "px";
                            cropper.style.height = (opacityDivRight - cropperLeft)/aspectDiff + "px";
                          }
                          if(cropper.getBoundingClientRect().bottom >= opacityDiv.getBoundingClientRect().bottom){
                            cropper.style.top = opacityDiv.getBoundingClientRect().bottom - cropper.getBoundingClientRect().height - cropArea.getBoundingClientRect().top + "px";
                          }
                          if(cropper.getBoundingClientRect().top <= opacityDiv.getBoundingClientRect().top){
                            cropper.style.top = opacityDivTop - cropArea.getBoundingClientRect().top + "px";
                          }
                          if((cropper.getBoundingClientRect().bottom >= opacityDiv.getBoundingClientRect().bottom)&&(cropper.getBoundingClientRect().top <= opacityDiv.getBoundingClientRect().top)){
                            cropper.style.left = cropperLeft - cropArea.getBoundingClientRect().left + "px";
                            cropper.style.width = (opacityDivBottom - opacityDivTop)*aspectDiff + "px";
                            cropper.style.height = (opacityDivBottom - opacityDivTop) + "px";
                          }
                        } else {
                          if(!(aspectRatio === "n:n")){
                            cropper.style.top     = (midHeight - (leastHeight/2)) + "px";
                            cropper.style.width   = leastWidth + "px";
                            cropper.style.height  = leastHeight + "px";
                          }
                        }
                    break;
                    case "lyteCropTopRightCorner":
                        if ((cropperHeight - (evY - previousClientY))>=leastHeight) {
                          if(evY >= opacityDivTop+5){
                            cropper.style.width   = (cropperHeight - (evY - previousClientY))*aspectDiff + "px";
                            cropper.style.height  = cropperHeight - (evY - previousClientY)+ "px";
                            cropper.style.top     = ((cropperTop - cropArea.getBoundingClientRect().top) + (evY - previousClientY))+ "px";
                            cropper.style.right   = ((cropperRight - cropArea.getBoundingClientRect().right) - (evX - previousClientX))+ "px";
                          }
                          if(evY < (opacityDiv.getBoundingClientRect().top+5)){
                            if((!(cropper.getBoundingClientRect().height >= opacityDiv.getBoundingClientRect().height))||(!(cropper.getBoundingClientRect().width >= opacityDiv.getBoundingClientRect().width))&&(cropper.getBoundingClientRect().left < opacityDivLeft)){
                              cropper.style.top = opacityDiv.getBoundingClientRect().top - cropArea.getBoundingClientRect().top  + "px";
                            }
                            cropper.style.width = (cropperBottom - opacityDivTop)*aspectDiff + "px";
                            cropper.style.height = cropperBottom - opacityDivTop + "px";
                          }
                         if(cropper.getBoundingClientRect().right >= opacityDiv.getBoundingClientRect().right){
                           cropper.style.top = (cropperBottom - ((opacityDivRight - cropperLeft)/aspectDiff)) - cropArea.getBoundingClientRect().top + "px";
                           cropper.style.width = opacityDivRight - cropperLeft + "px";
                           cropper.style.height = (opacityDivRight - cropperLeft)/aspectDiff + "px";
                         }
                        } else {
                          if(!(aspectRatio === "n:n")){
                            cropper.style.top     = (cropperBottom - leastHeight) - cropArea.getBoundingClientRect().top + "px";
                            cropper.style.width   = leastWidth + "px";
                            cropper.style.height  = leastHeight + "px";
                          }
                        }
                        if(aspectRatio === "n:n"){
                          if((cropperWidth + (presentClientX - previousClientX))>=leastWidth){
                            if(presentClientX < opacityDivRight){
                              cropper.style.width   = cropperWidth + (presentClientX - previousClientX) + "px";
                              cropper.style.height  = (cropperWidth + (presentClientX - previousClientX))/aspectDiff + "px";
                              cropper.style.top     = ((cropperTop - cropArea.getBoundingClientRect().top) - ((presentClientX - previousClientX)/aspectDiff)/2) + "px";
                              cropper.style.right   = ((cropperRight - cropArea.getBoundingClientRect().right) - (presentClientX - previousClientX))+ "px";
                            }
                            if(presentClientX >= opacityDivRight){
                              cropper.style.top = midHeight - (((opacityDivRight - cropperLeft)/aspectDiff) / 2) + "px";
                              cropper.style.width = opacityDivRight - cropperLeft + "px";
                              cropper.style.height = (opacityDivRight - cropperLeft)/aspectDiff + "px";
                            }
                            if(cropper.getBoundingClientRect().bottom >= opacityDiv.getBoundingClientRect().bottom){
                              cropper.style.top = opacityDiv.getBoundingClientRect().bottom - cropper.getBoundingClientRect().height - cropArea.getBoundingClientRect().top + "px";
                            }
                            if(cropper.getBoundingClientRect().top <= opacityDiv.getBoundingClientRect().top){
                              cropper.style.top = opacityDivTop - cropArea.getBoundingClientRect().top + "px";
                            }
                            if((cropper.getBoundingClientRect().bottom >= opacityDiv.getBoundingClientRect().bottom)&&(cropper.getBoundingClientRect().top <= opacityDiv.getBoundingClientRect().top)){
                              cropper.style.left = cropperLeft - cropArea.getBoundingClientRect().left + "px";
                              cropper.style.width = (opacityDivBottom - opacityDivTop)*aspectDiff + "px";
                              cropper.style.height = (opacityDivBottom - opacityDivTop) + "px";
                            }
                          }
                        }
                    break;
                    case "lyteCropTopLeftCorner":
                        if((cropperHeight - (evY - previousClientY))>=leastHeight){
                          if(evY >= opacityDivTop+5){
                            cropper.style.width   = (cropperHeight - (evY - previousClientY))*aspectDiff + "px";
                            cropper.style.height  = cropperHeight - (evY - previousClientY)+ "px";
                            cropper.style.top     = ((cropperTop - cropArea.getBoundingClientRect().top) + (evY - previousClientY))+ "px";
                            cropper.style.left    = ((cropperLeft - cropArea.getBoundingClientRect().left) + ((evY - previousClientY)*aspectDiff)) + "px";
                          }
                          if(evY-6 <= opacityDiv.getBoundingClientRect().top){
                            if((!(cropper.getBoundingClientRect().height >= opacityDiv.getBoundingClientRect().height))||(!(cropper.getBoundingClientRect().width >= opacityDiv.getBoundingClientRect().width))&&(cropper.getBoundingClientRect().left < opacityDivLeft)){
                              cropper.style.left = (opacityDivRight - (((cropperBottom - opacityDivTop)*aspectDiff) + (opacityDivRight - cropperRight))) - cropArea.getBoundingClientRect().left + "px";
                              cropper.style.top = opacityDiv.getBoundingClientRect().top - cropArea.getBoundingClientRect().top + "px";
                            }
                            cropper.style.width = (cropperBottom - opacityDivTop)*aspectDiff + "px";
                            cropper.style.height = cropperBottom - opacityDivTop + "px";
                          }
                          if(cropper.getBoundingClientRect().left <= opacityDiv.getBoundingClientRect().left){
                            cropper.style.top = (cropperBottom - ((cropperRight - opacityDivLeft)/aspectDiff)) - cropArea.getBoundingClientRect().top + "px";
                            cropper.style.left = opacityDiv.getBoundingClientRect().left - cropArea.getBoundingClientRect().left + "px";
                            cropper.style.width = cropperRight - opacityDivLeft + "px";
                            cropper.style.height = (cropperRight - opacityDivLeft)/aspectDiff + "px";
                          }
                        } else {
                          if(!(aspectRatio === "n:n")){
                            cropper.style.top     = (cropperBottom - leastHeight) - cropArea.getBoundingClientRect().top + "px";
                            cropper.style.left    = (cropperRight - leastWidth) - cropArea.getBoundingClientRect().left + "px";
                            cropper.style.width   = leastWidth + "px";
                            cropper.style.height  = leastHeight + "px";
                          }
                        }
                        if(aspectRatio === "n:n"){
                          if ((cropperWidth - (evX - previousClientX))>=leastWidth) {
                            if(evX > opacityDiv.getBoundingClientRect().left){
                              cropper.style.width   = cropperWidth - (presentClientX - previousClientX) + "px";
                              cropper.style.height  = (cropperWidth - (presentClientX - previousClientX))/aspectDiff + "px";
                              cropper.style.top     = ((cropperTop - cropArea.getBoundingClientRect().top) + ((presentClientX - previousClientX)/aspectDiff)/2) + "px";
                              cropper.style.left    = ((cropperLeft - cropArea.getBoundingClientRect().left) + (evX - previousClientX))+ "px";
                            }
                            if(evX-6 <= opacityDiv.getBoundingClientRect().left){
                              if((!(cropper.getBoundingClientRect().height >= opacityDiv.getBoundingClientRect().height))||(!(cropper.getBoundingClientRect().width >= opacityDiv.getBoundingClientRect().width))&&(cropper.getBoundingClientRect().left < opacityDiv.getBoundingClientRect().left)){
                                cropper.style.top = (opacityDivBottom - (((opacityDivWidth - (opacityDivRight - cropperRight))/aspectDiff) + (opacityDivBottom - (midHeight + ((opacityDivWidth - (opacityDivRight - cropperRight))/aspectDiff)/2)))) + "px";
                                cropper.style.left = opacityDiv.getBoundingClientRect().left - cropArea.getBoundingClientRect().left + "px";
                              }
                              cropper.style.width = opacityDivWidth - (opacityDivRight - cropperRight) + "px";
                              cropper.style.height = (opacityDivWidth - (opacityDivRight - cropperRight))/aspectDiff + "px";
                            }
                            if(cropper.getBoundingClientRect().bottom >= opacityDiv.getBoundingClientRect().bottom){
                              cropper.style.top = opacityDiv.getBoundingClientRect().bottom - cropper.getBoundingClientRect().height - cropArea.getBoundingClientRect().top + "px";
                            }
                            if(cropper.getBoundingClientRect().top <= opacityDiv.getBoundingClientRect().top){
                              cropper.style.top = opacityDiv.getBoundingClientRect().top - cropArea.getBoundingClientRect().top + "px";
                            }
                            if((cropper.getBoundingClientRect().bottom >= opacityDiv.getBoundingClientRect().bottom)&&(cropper.getBoundingClientRect().top <= opacityDiv.getBoundingClientRect().top)){
                              cropper.style.left = cropperRight - ((opacityDivBottom - opacityDivTop)*aspectDiff) - cropArea.getBoundingClientRect().left + "px";
                              cropper.style.width = (opacityDivBottom - opacityDivTop)*aspectDiff + "px";
                              cropper.style.height = opacityDivBottom - opacityDivTop + "px";
                              cropper.style.top = opacityDivTop - cropArea.getBoundingClientRect().top + "px";
                            }
                          }
                        }
                    break;
                    case "lyteCropBottomRightCorner":
                        if((cropperWidth + (presentClientX - previousClientX))>=leastWidth){
                          if(presentClientX < opacityDivRight){
                            cropper.style.width   = cropperWidth + (presentClientX - previousClientX) + "px";
                            cropper.style.height  = (cropperWidth + (presentClientX - previousClientX))/aspectDiff + "px";
                          }
                          if((cropper.getBoundingClientRect().right >= opacityDivRight-5)&&(presentClientX >= opacityDivRight-5)){
                            // cropper.style.top = (cropperBottom - ((opacityDivRight - cropperLeft)/aspectDiff)) - cropArea.getBoundingClientRect().top + "px";
                            cropper.style.width = opacityDivRight - cropperLeft + "px";
                            cropper.style.height = (opacityDivRight - cropperLeft)/aspectDiff + "px";
                          }
                          if(cropper.getBoundingClientRect().bottom >= opacityDiv.getBoundingClientRect().bottom){
                            cropper.style.height = opacityDivBottom - cropperTop + "px";
                            cropper.style.width = (opacityDivBottom - cropperTop)*aspectDiff + "px";
                          }
                        } else {
                          if(!(aspectRatio === "n:n")){
                            cropper.style.width   = leastWidth + "px";
                            cropper.style.height  = leastHeight + "px";
                          }
                        }
                        if(aspectRatio === "n:n"){
                          if((cropperHeight + (evY - previousClientY))>=leastHeight){
                            if(evY < opacityDiv.getBoundingClientRect().bottom){
                              cropper.style.width   = (cropperHeight + (presentClientY - previousClientY))*aspectDiff + "px";
                              cropper.style.height  = cropperHeight + (evY - previousClientY)+ "px";
                              cropper.style.left    = ((cropperLeft - cropArea.getBoundingClientRect().left) - ((presentClientY - previousClientY)*aspectDiff)/2) + "px";
                              cropper.style.bottom  = ((cropperBottom - cropArea.getBoundingClientRect().bottom) - (presentClientY - previousClientY))+ "px";
                            }
                            if(evY >= opacityDiv.getBoundingClientRect().bottom){
                              cropper.style.left = midWidth - (((opacityDivBottom - cropperTop)*aspectDiff) / 2) + "px";
                              cropper.style.width = (opacityDivBottom - cropperTop)*aspectDiff + "px";
                              cropper.style.height = opacityDivBottom - cropperTop + "px";
                            }
                            if(cropper.getBoundingClientRect().left <= opacityDivLeft){
                              cropper.style.left = opacityDivLeft - cropArea.getBoundingClientRect().left + "px";
                            }
                            if(cropper.getBoundingClientRect().right >= opacityDiv.getBoundingClientRect().right){
                              cropper.style.left = opacityDivRight - cropper.getBoundingClientRect().width - cropArea.getBoundingClientRect().left+ "px";
                            }
                            if((cropper.getBoundingClientRect().right >= opacityDiv.getBoundingClientRect().right)&&(cropper.getBoundingClientRect().left <= opacityDivLeft)){
                              cropper.style.left = opacityDivLeft - cropArea.getBoundingClientRect().left + "px";
                              cropper.style.width = opacityDivRight - opacityDivLeft + "px";
                              cropper.style.height = (opacityDivRight - opacityDivLeft)/aspectDiff + "px";
                            }
                          }
                        }
                    break;
                    case "lyteCropBottomLeftCorner":
                      if((cropperWidth - (evX - previousClientX))>=leastWidth){
                        if(evX > opacityDiv.getBoundingClientRect().left){
                          cropper.style.width   = cropperWidth - (presentClientX - previousClientX) + "px";
                          cropper.style.height  = (cropperWidth - (presentClientX - previousClientX))/aspectDiff + "px";
                          cropper.style.left    = ((cropperLeft - cropArea.getBoundingClientRect().left) + (evX - previousClientX))+ "px";
                        }
                        if(evX-6 <= opacityDivLeft+2){
                          if((!(cropper.getBoundingClientRect().height >= opacityDiv.getBoundingClientRect().height))||(!(cropper.getBoundingClientRect().width >= opacityDiv.getBoundingClientRect().width))&&(cropper.getBoundingClientRect().left < opacityDivLeft)){
                            cropper.style.left = opacityDivLeft - cropArea.getBoundingClientRect().left  + "px";
                          }
                          cropper.style.width = (cropperRight - opacityDivLeft) + "px";
                          cropper.style.height = (cropperRight - opacityDivLeft)/aspectDiff + "px";
                        }
                        if(cropper.getBoundingClientRect().bottom >= opacityDiv.getBoundingClientRect().bottom){
                          cropper.style.height = (opacityDivBottom - cropperTop) + "px";
                          cropper.style.width = (opacityDivBottom - cropperTop)*aspectDiff + "px";
                          cropper.style.left = opacityDivRight - (((opacityDivBottom - cropperTop)*aspectDiff) + (opacityDivRight - cropperRight)) - cropArea.getBoundingClientRect().left + "px";
                        }
                      } else {
                        if(!(aspectRatio === "n:n")){
                          cropper.style.left    = (cropperRight - leastWidth) - cropArea.getBoundingClientRect().left + "px";
                          cropper.style.width   = leastWidth + "px";
                          cropper.style.height  = leastHeight + "px";
                        }
                      }
                      if(aspectRatio === "n:n"){
                        if((cropperHeight + (evY - previousClientY))>=leastHeight){
                          if(evY < opacityDiv.getBoundingClientRect().bottom){
                            cropper.style.width   = (cropperHeight + (presentClientY - previousClientY))*aspectDiff + "px";
                            cropper.style.height  = cropperHeight + (evY - previousClientY)+ "px";
                            cropper.style.left    = ((cropperLeft - cropArea.getBoundingClientRect().left) - ((presentClientY - previousClientY)*aspectDiff)/2) + "px";
                            cropper.style.bottom  = ((cropperBottom - cropArea.getBoundingClientRect().bottom) - (presentClientY - previousClientY))+ "px";
                          }
                          if(evY >= opacityDiv.getBoundingClientRect().bottom){
                            cropper.style.left = midWidth - (((opacityDivBottom - cropperTop)*aspectDiff) / 2) + "px";
                            cropper.style.width = (opacityDivBottom - cropperTop)*aspectDiff + "px";
                            cropper.style.height = opacityDivBottom - cropperTop + "px";
                          }
                          if(cropper.getBoundingClientRect().left <= opacityDivLeft){
                            cropper.style.left = opacityDivLeft - cropArea.getBoundingClientRect().left + "px";
                          }
                          if(cropper.getBoundingClientRect().right >= opacityDiv.getBoundingClientRect().right){
                            cropper.style.left = opacityDivRight - cropper.getBoundingClientRect().width - cropArea.getBoundingClientRect().left+ "px";
                          }
                          if((cropper.getBoundingClientRect().right >= opacityDiv.getBoundingClientRect().right)&&(cropper.getBoundingClientRect().left <= opacityDivLeft)){
                            cropper.style.left = opacityDivLeft - cropArea.getBoundingClientRect().left + "px";
                            cropper.style.width = opacityDivRight - opacityDivLeft + "px";
                            cropper.style.height = (opacityDivRight - opacityDivLeft)/aspectDiff + "px";
                          }
                        }
                      }
                    break;
                    default :
                    break;
                  }
                  // divImageImg.style.left = "-"+((opacityDivLeft) + x )+"px";
                  // divImageImg.style.left = "-"+((opacityDivLeft - (opacityDivLeft - divImageImg.getBoundingClientRect().left)) + x)+"px";
                  // divImageImg.style.top = "-"+((opacityDiv.getBoundingClientRect().top) + window.scrollY )+"px";
                  // divImageImg.style.top = "-"+((opacityDiv.getBoundingClientRect().top - (opacityDiv.getBoundingClientRect().top - divImageImg.getBoundingClientRect().top))+window.scrollY)+"px";
                  var fixedImageTransform = fixedImage.style.transform;
                  fixedImage.style.transform = 'rotate(0deg)';
                  divImageImg.style.left = (fixedImage.getBoundingClientRect().left - cropper.getBoundingClientRect().left)+"px";
                  divImageImg.style.top = (fixedImage.getBoundingClientRect().top - cropper.getBoundingClientRect().top)+"px";
                  fixedImage.style.transform = fixedImageTransform;

                  if(fixedImage.naturalWidth > fixedImage.naturalHeight){
                    displayImage.style.height = (divImageImg.getBoundingClientRect().height * (displayImageDiv.getBoundingClientRect().height/cropper.getBoundingClientRect().height)) + "px";
                    retValue.height = (divImageImg.getBoundingClientRect().height * (displayImageDiv.getBoundingClientRect().height/cropper.getBoundingClientRect().height));
                    displayImage.style.width = "auto";
                    retValue.width = "auto";
                  } else {
                    displayImage.style.width = (divImageImg.getBoundingClientRect().width * (displayImageDiv.getBoundingClientRect().width/cropper.getBoundingClientRect().width)) + "px";
                    retValue.width = (divImageImg.getBoundingClientRect().width * (displayImageDiv.getBoundingClientRect().width/cropper.getBoundingClientRect().width));
                    displayImage.style.height = "auto";
                    retValue.height = "auto";
                  }

                  displayImage.style.top = "-" + ((cropper.getBoundingClientRect().top - opacityDiv.getBoundingClientRect().top)*(displayImageDiv.getBoundingClientRect().height/cropper.getBoundingClientRect().height)) + "px";
                  displayImage.style.left = "-" + ((cropper.getBoundingClientRect().left - opacityDivLeft)*(displayImageDiv.getBoundingClientRect().width/cropper.getBoundingClientRect().width)) + "px";

                  retValue.top =((cropper.getBoundingClientRect().top - opacityDiv.getBoundingClientRect().top)*(displayImageDiv.getBoundingClientRect().height/cropper.getBoundingClientRect().height));
                  retValue.left =((cropper.getBoundingClientRect().left - opacityDivLeft)*(displayImageDiv.getBoundingClientRect().width/cropper.getBoundingClientRect().width));
                  setCropperData();

                }
                document.addEventListener("mousemove" , cropFun);
                document.addEventListener("mouseup" , removeFun);
                // document.addEventListener("touchmove" , cropFun);
                // document.addEventListener("touchend" , removeFun);

                function removeFun(){
                  opacityDiv.style.opacity = "";
                  document.removeEventListener("mousemove" , cropFun);
                  document.removeEventListener("mouseup" , removeFun);
                  // document.removeEventListener("touchmove" , cropFun);
                  cropEnd();

                 // fitToScreen();


               }

               break;

              }




              case "parent":{


                if(event.target.className === "lyteCropDivImage" || event.target.className === "lyteCropDivImageImg"){
                  var cropperTop = cropper.getBoundingClientRect().top;
                  var cropperLeft = cropper.getBoundingClientRect().left;
                  var cropperRight = cropper.getBoundingClientRect().right;
                  var cropperBottom = cropper.getBoundingClientRect().bottom;
                  var cropperWidth = cropper.getBoundingClientRect().width;
                  var cropperHeight = cropper.getBoundingClientRect().height;
                  var previousClientX;
                  var previousClientY;
                  if(event.type === 'mousedown'){
                    previousClientX = event.clientX;
                    previousClientY = event.clientY;
                  } else if(event.type === 'touchstart'){
                    previousClientX = event.touches[0].clientX;
                    previousClientY = event.touches[0].clientY;
                  }
                  var finalLeft = opacityDiv.getBoundingClientRect().left - cropArea.getBoundingClientRect().left;
                  var finalRight = opacityDiv.getBoundingClientRect().right - cropper.getBoundingClientRect().width - box.getBoundingClientRect().left;
                  var finalTop = opacityDiv.getBoundingClientRect().top - cropArea.getBoundingClientRect().top;
                  var finalBottom = ((cropArea.getBoundingClientRect().bottom - (cropArea.getBoundingClientRect().bottom - opacityDiv.getBoundingClientRect().bottom) - cropper.getBoundingClientRect().height)-(window.innerHeight - cropArea.getBoundingClientRect().bottom));

                  function moveCropper(){
                    event.preventDefault();
                    var opacityDivLeft = opacityDiv.getBoundingClientRect().left;
                    var evX;
                    var evY;
                    if(event.type === 'mousemove'){
                      evX = event.clientX;
                      evY = event.clientY;
                    } else if(event.type === 'touchmove'){
                      evX = event.touches[0].clientX;
                      evY = event.touches[0].clientY;
                    }


                    if(((cropperTop+(evY-previousClientY) - cropArea.getBoundingClientRect().top)+cropArea.getBoundingClientRect().top)>opacityDiv.getBoundingClientRect().top){
                      cropper.style.top = (cropperTop+(evY-previousClientY) - cropArea.getBoundingClientRect().top)+"px";
                    } else {
                      cropper.style.top = finalTop +"px";
                    }
                    if(((cropperLeft+(evX-previousClientX) - cropArea.getBoundingClientRect().left)+cropArea.getBoundingClientRect().left)>opacityDivLeft){
                      cropper.style.left = ((cropperLeft+(evX - previousClientX))-cropArea.getBoundingClientRect().left) + "px";
                    } else {
                      cropper.style.left = finalLeft + "px";
                    }
                    if(!(((cropperRight+(evX-previousClientX) - cropArea.getBoundingClientRect().right)+cropArea.getBoundingClientRect().right)<opacityDiv.getBoundingClientRect().right)){
                      cropper.style.left = finalRight +"px";
                    }
                    if(!(((cropperBottom+(evY-previousClientY) - cropArea.getBoundingClientRect().bottom)+cropArea.getBoundingClientRect().bottom)<opacityDiv.getBoundingClientRect().bottom)){
                      cropper.style.top = opacityDiv.getBoundingClientRect().bottom - cropper.getBoundingClientRect().height - cropArea.getBoundingClientRect().top + "px";
                    }
                    var opacityDivTop = opacityDiv.getBoundingClientRect().top;
                    var fixedImageTransform = fixedImage.style.transform;
                    fixedImage.style.transform = 'rotate(0deg)';
                    divImageImg.style.left = (fixedImage.getBoundingClientRect().left - cropper.getBoundingClientRect().left)+"px";
                    divImageImg.style.top = (fixedImage.getBoundingClientRect().top - cropper.getBoundingClientRect().top)+"px";
                    fixedImage.style.transform = fixedImageTransform;
                    // divImageImg.style.left = "-"+(opacityDivLeft)+"px";
                    // divImageImg.style.left = "-"+((opacityDivLeft - (opacityDivLeft - divImageImg.getBoundingClientRect().left))+(opacityDivLeft - fixedImage.getBoundingClientRect().left))+"px";
                    // divImageImg.style.top = "-"+opacityDiv.getBoundingClientRect().top+"px";
                    // console.log(opacityDivTop - fixedImage.getBoundingClientRect().top);
                    // divImageImg.style.top = "-"+((opacityDiv.getBoundingClientRect().top - (opacityDiv.getBoundingClientRect().top - divImageImg.getBoundingClientRect().top)) + (opacityDivTop - fixedImage.getBoundingClientRect().top))+"px";

                    // console.log((cropper.getBoundingClientRect().top - opacityDiv.getBoundingClientRect().top)*(displayImageDiv.getBoundingClientRect().height/cropper.getBoundingClientRect().height));

                    displayImage.style.top = "-" + ((cropper.getBoundingClientRect().top - opacityDiv.getBoundingClientRect().top)*(displayImageDiv.getBoundingClientRect().height/cropper.getBoundingClientRect().height)) + "px";
                    displayImage.style.left = "-" + ((cropper.getBoundingClientRect().left - opacityDivLeft)*(displayImageDiv.getBoundingClientRect().width/cropper.getBoundingClientRect().width)) + "px";
                    // displayImage.style.top = "-" + (((divImageImg.getBoundingClientRect().height - cropper.getBoundingClientRect().height)/(cropper.getBoundingClientRect().height/displayImageDiv.getBoundingClientRect().height))/2 + (-previousClientY + event.clientY)) + "px";

                    retValue.top = ((cropper.getBoundingClientRect().top - opacityDiv.getBoundingClientRect().top)*(displayImageDiv.getBoundingClientRect().height/cropper.getBoundingClientRect().height));
                    retValue.left = ((cropper.getBoundingClientRect().left - opacityDivLeft)*(displayImageDiv.getBoundingClientRect().width/cropper.getBoundingClientRect().width));
                    setCropperData();
                  }

                  document.addEventListener("mousemove" , moveCropper);
                  document.addEventListener("mouseup" , remFun);
                  // document.addEventListener("touchmove" , moveCropper);
                  // document.addEventListener("touchend" , remFun);

                  function remFun(){
                    opacityDiv.style.opacity = "";
                    document.removeEventListener("mousemove" , moveCropper);
                    document.removeEventListener("mouseup" , remFun);
                    document.removeEventListener("mousedown" , moveCropper);
                    // document.removeEventListener("touchmove" , moveCropper);
                    cropEnd();
                  }
                }
                break;


              }

              default :
              break;

            }


            function fitToScreen(){
              var rt , newHt , newWt;

              if(cropper.getBoundingClientRect().height > cropper.getBoundingClientRect().width){

                rt = (opacityDiv.getBoundingClientRect().height - 100)/cropper.getBoundingClientRect().height;
                newHt = opacityDiv.getBoundingClientRect().height - 100 ; newWt = rt*cropper.getBoundingClientRect().width;
                cropper.style.height = newHt + "px";
                cropper.style.width = newWt + "px";
                cropper.style.top = ((opacityDiv.getBoundingClientRect().height - cropper.getBoundingClientRect().height)/2) + "px"
                cropper.style.left = ((opacityDiv.getBoundingClientRect().width - cropper.getBoundingClientRect().width)/2) + "px"
                fixedImage.style.height = fixedImage.getBoundingClientRect().height * rt + "px";
                fixedImage.style.width = fixedImage.getBoundingClientRect().width * rt + "px";
                divImageImg.style.height = divImageImg.getBoundingClientRect().height * rt + "px";
                divImageImg.style.width = divImageImg.getBoundingClientRect().width * rt + "px";

              } else {

                rt = (opacityDiv.getBoundingClientRect().width - 100)/cropper.getBoundingClientRect().width;
                newWt = opacityDiv.getBoundingClientRect().width - 100 ; newHt = rt*cropper.getBoundingClientRect().height;
                cropper.style.height = newHt + "px";
                cropper.style.width = newWt + "px";
                cropper.style.top = ((opacityDiv.getBoundingClientRect().height - cropper.getBoundingClientRect().height)/2) + "px"
                cropper.style.left = ((opacityDiv.getBoundingClientRect().width - cropper.getBoundingClientRect().width)/2) + "px"

              }
            }


          }




        divImageImg.style.left = (fixedImage.getBoundingClientRect().left - cropper.getBoundingClientRect().left)+"px";
        divImageImg.style.top = (fixedImage.getBoundingClientRect().top - cropper.getBoundingClientRect().top)+"px";

        cropArea.addEventListener('wheel', function(ev) {
          // ev.preventDefault();
          // if(ev.ctrlKey){
          //
          //   var fixedImageTransform = fixedImage.style.transform;
          //   fixedImage.style.transform = 'rotate(0deg)';
          //   var delY = ev.deltaY*10 || ev.deltaX*10;
          //   var fixedImageDimension = fixedImage.getBoundingClientRect();
          //   var cursorPosXInsideImage = ev.clientX - fixedImageDimension.left;
          //   var cursorPosYInsideImage = ev.clientY - fixedImageDimension.top;
          //   var oldWidth = fixedImageDimension.width;
          //   var oldHeight = fixedImageDimension.height;
          //   var newWidth = fixedImageDimension.width - delY;
          //   var newXPos,diffXPos,newYPos,diffYpos,leftValFixedImage,topValFixedImage;
          //   if(fixedImageDimension.width > fixedImageDimension.height) {
          //     var newWidth = fixedImageDimension.width - delY;
          //     if((newWidth >= 200)&&(newWidth <= 1500)){
          //       fixedImage.style.height = divImageImg.style.height = '';
          //       fixedImage.style.width = newWidth + 'px';
          //       divImageImg.style.width = newWidth + 'px';
          //       newXPos = (cursorPosXInsideImage/oldWidth)*newWidth;
          //       diffXPos = newXPos - cursorPosXInsideImage;
          //       newYPos = (cursorPosYInsideImage/oldHeight)*fixedImage.getBoundingClientRect().height;
          //       diffYpos = newYPos - cursorPosYInsideImage;
          //       leftValFixedImage = parseFloat(fixedImage.style.left);
          //       topValFixedImage = parseFloat(fixedImage.style.top);
          //       fixedImage.style.left = (leftValFixedImage - diffXPos) + 'px';
          //       fixedImage.style.top = (topValFixedImage - diffYpos) + 'px';
          //     }
          //   }
          //   else {
          //     var newHeight = fixedImageDimension.height - delY;
          //     if((newHeight >=200)&&(newHeight<=1000)){
          //       fixedImage.style.width = divImageImg.style.width = '';
          //       fixedImage.style.height = newHeight + 'px';
          //       divImageImg.style.height = newHeight + 'px';
          //       newXPos = (cursorPosXInsideImage/oldWidth)*fixedImage.getBoundingClientRect().width;
          //       diffXPos = newXPos - cursorPosXInsideImage;
          //       newYPos = (cursorPosYInsideImage/oldHeight)*newHeight;
          //       diffYpos = newYPos - cursorPosYInsideImage;
          //       leftValFixedImage = parseFloat(fixedImage.style.left);
          //       topValFixedImage = parseFloat(fixedImage.style.top);
          //       fixedImage.style.left = (leftValFixedImage - diffXPos) + 'px';
          //       fixedImage.style.top = (topValFixedImage - diffYpos) + 'px';
          //     }
          //   }
          //
          //   // var widthDiff = newWidth - fixedImageDimension.width;
          //   // fixedImageWrap.style.width = fixedImageWrap.style.height = newWidth + "px";
          //   //
          //   // fixedImageWrap.style.top = widthDiff/2 + "px";
          //   // fixedImageWrap.style.left = widthDiff/2 + "px";
          //
          //   fixedImageDimension = fixedImage.getBoundingClientRect();
          //
          //
          //   divImageImg.style.left = (fixedImageDimension.left - cropper.getBoundingClientRect().left)+"px";
          //   divImageImg.style.top = (fixedImageDimension.top - cropper.getBoundingClientRect().top)+"px";
          //   // fixedImage.style.transform = fixedImageTransform + " translateX(-" + newLt + "px) translateY(-" + newTt + "px)";
          //   fixedImage.style.transform = fixedImageTransform;
          // } else {
          //
          //   var fixedImageTransform = fixedImage.style.transform;
          //   fixedImage.style.transform = 'rotate(0deg)';
          //   var delTop = ev.deltaY/2;
          //   var delLeft = ev.deltaX/2;
          //   var fixedImageDimension = fixedImage.getBoundingClientRect();
          //
          //
          //   if(((fixedImage.getBoundingClientRect().top-51) < (cropArea.getBoundingClientRect().top - fixedImage.getBoundingClientRect().height)) && ((ev.deltaY>=0)) ){
          //     fixedImage.style.top = ((cropArea.getBoundingClientRect().top - fixedImage.getBoundingClientRect().height - cropArea.getBoundingClientRect().top)+ 50) + 'px';
          //     divImageImg.style.top = (((cropArea.getBoundingClientRect().top - fixedImage.getBoundingClientRect().height - cropArea.getBoundingClientRect().top) - (cropper.getBoundingClientRect().top - opacityDiv.getBoundingClientRect().top))+50) + 'px';
          //   } else if(((fixedImage.getBoundingClientRect().top+51) > opacityDiv.getBoundingClientRect().bottom)&&(ev.deltaY<=0)){
          //     fixedImage.style.top = (opacityDiv.getBoundingClientRect().bottom - opacityDiv.getBoundingClientRect().top - 50) + "px";
          //     divImageImg.style.top = (((opacityDiv.getBoundingClientRect().bottom - opacityDiv.getBoundingClientRect().top) - (cropper.getBoundingClientRect().top - opacityDiv.getBoundingClientRect().top))-50) + "px";
          //   } else {
          //     fixedImage.style.top = (fixedImage.getBoundingClientRect().top - opacityDiv.getBoundingClientRect().top - delTop) + 'px';
          //     divImageImg.style.top = (divImageImg.getBoundingClientRect().top - delTop) + 'px';
          //     divImageImg.style.top = (fixedImage.getBoundingClientRect().top - cropper.getBoundingClientRect().top)+"px";
          //   }
          //
          //
          //
          //   if(((fixedImage.getBoundingClientRect().left-51) <= (cropArea.getBoundingClientRect().left - fixedImage.getBoundingClientRect().width)) && (ev.deltaX>=0) ){
          //     fixedImage.style.left = ((cropArea.getBoundingClientRect().left - fixedImage.getBoundingClientRect().width - cropArea.getBoundingClientRect().left)+50) + 'px';
          //     divImageImg.style.left = (((cropArea.getBoundingClientRect().left - fixedImage.getBoundingClientRect().width - cropArea.getBoundingClientRect().left) - (cropper.getBoundingClientRect().left - opacityDiv.getBoundingClientRect().left))+50) + 'px';
          //   } else if(((fixedImage.getBoundingClientRect().left+51) > opacityDiv.getBoundingClientRect().right)&&(ev.deltaX<=0)){
          //     fixedImage.style.left = (opacityDiv.getBoundingClientRect().right - opacityDiv.getBoundingClientRect().left - 50) + "px";
          //     divImageImg.style.left = (((opacityDiv.getBoundingClientRect().right - opacityDiv.getBoundingClientRect().left) - (cropper.getBoundingClientRect().left - opacityDiv.getBoundingClientRect().left))-50) + "px";
          //   } else {
          //     fixedImage.style.left = (fixedImage.getBoundingClientRect().left - opacityDiv.getBoundingClientRect().left - delLeft) + 'px';
          //     divImageImg.style.left = (divImageImg.getBoundingClientRect().left - delLeft) + 'px';
          //     divImageImg.style.left = (fixedImage.getBoundingClientRect().left - cropper.getBoundingClientRect().left)+"px";
          //   }
          //
          //
          //
          //
          //
          //   fixedImage.style.transform = fixedImageTransform;
          //
          // }
          //
          //
          // setCropperData();


        });




        fixedImage.ondragstart = mainImage.ondragstart = divImageImg.ondragstart = function () { return false; };

      })();


      }


    }

  }

}());
