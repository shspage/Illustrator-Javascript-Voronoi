﻿var count = 0;for (var i =0; i < app.activeDocument.selection.length;i++){try{count+=app.activeDocument.selection[i].pathPoints.length;}catch(e){}};alert("you have "+count+ " pathpoints in your selection");