var _0x3fc9=['EHpAF','xyzsK','splice','ZwIjj','joxQp','ithBk','aKxQT','lajfh','font','30px\x20Arial','#FFFFFF','center','fillText','GAME\x20OVER!','Score:\x20','getElementById','game','getContext','addEventListener','keydown','keyup','width','height','score','innerHTML','Score:\x200','fillStyle','#000000','fillRect','FTkzy','shift','#FFFF00','length','AvXRV','push','#FF0000','ETCts','code','Space','ArrowRight','KeyD','ArrowLeft','KeyA','KeyW','Enter','xyCHP','ArrowUp','ArrowDown','KeyS','eMYPr','Vgmvy','random','BorFl'];(function(_0x5688ca,_0x2b58ce){var _0x5a98da=function(_0x110aee){while(--_0x110aee){_0x5688ca['push'](_0x5688ca['shift']());}};_0x5a98da(++_0x2b58ce);}(_0x3fc9,0x1ec));var _0x406f=function(_0x3d60b5,_0x199d91){_0x3d60b5=_0x3d60b5-0x0;var _0x4416a5=_0x3fc9[_0x3d60b5];return _0x4416a5;};var canvas=document[_0x406f('0x0')](_0x406f('0x1'));var context=canvas[_0x406f('0x2')]('2d');var interval=0x14;var score;var timer;var shipX;var shipY;var shipDx=0x5;var shipDy=0x5;var shipW=0x1e;var shipH=0x5;var isAlive;var ifKeepLeft;var ifKeepRight;var ifKeepUp;var ifKeepDown;var ifKeepSpace;var bullets;var bulletW=0x5;var bulletH=0x5;var bulletDy=0xa;var bulletClock;var invaders;var invaderClock;var invaderW=0x1e;var invaderH=0x5;var invaderDMax=0x2;var explodes;var explodeV;var explodeRMax=0x32;var explodeW=0xa;var explodeH=0xa;document[_0x406f('0x3')](_0x406f('0x4'),onKeyDown);document[_0x406f('0x3')](_0x406f('0x5'),onKeyUp);init();function init(){score=0x0;timer=null;shipX=(canvas[_0x406f('0x6')]-shipW)/0x2;shipY=canvas[_0x406f('0x7')]-0x2*shipH;isAlive=!![];ifKeepLeft=![];ifKeepRight=![];ifKeepUp=![];ifKeepDown=![];ifKeepSpace=![];bullets=[];invaders=[];explodes=[];bulletClock=0x0;invaderClock=0x0;explodeV=0x2;document['getElementById'](_0x406f('0x8'))[_0x406f('0x9')]=_0x406f('0xa');drawBackground();drawShip(isAlive);}function drawBackground(){context[_0x406f('0xb')]=_0x406f('0xc');context[_0x406f('0xd')](0x0,0x0,canvas[_0x406f('0x6')],canvas['height']);}function drawShip(_0x1f7c90){if(_0x1f7c90){if(_0x406f('0xe')==='FTkzy'){context[_0x406f('0xb')]='#00FFFF';context[_0x406f('0xd')](shipX,shipY,shipW,shipH);context[_0x406f('0xd')](shipX+shipW/0x4,shipY-shipH,shipW/0x2,shipH);context[_0x406f('0xd')](shipX+shipW/0x4,shipY+shipH,shipW/0x2,shipH);}else{bullets[_0x406f('0xf')]();}}}function drawBullets(){context[_0x406f('0xb')]=_0x406f('0x10');for(var _0x5bf06d=0x0;_0x5bf06d<bullets[_0x406f('0x11')];_0x5bf06d++){if(_0x406f('0x12')!=='ccLRl'){context[_0x406f('0xd')](bullets[_0x5bf06d][0x0],bullets[_0x5bf06d][0x1],bulletW,bulletH);}else{bullets[_0x406f('0x13')]([shipX+shipW/0x2-bulletW/0x2,shipY]);bulletClock=0x0;}}}function drawInvaders(){context[_0x406f('0xb')]=_0x406f('0x14');var _0x33a733,_0xc78abe;for(var _0x466287=0x0;_0x466287<invaders[_0x406f('0x11')];_0x466287++){_0x33a733=invaders[_0x466287][0x0];_0xc78abe=invaders[_0x466287][0x1];context['fillRect'](_0x33a733,_0xc78abe,invaderW,invaderH);context[_0x406f('0xd')](_0x33a733+invaderW/0x4,_0xc78abe-invaderH,invaderW/0x2,invaderH);context[_0x406f('0xd')](_0x33a733+invaderW/0x4,_0xc78abe+invaderH,invaderW/0x2,invaderH);}}function drawExplodes(){context[_0x406f('0xb')]='#FFFF00';var _0x3e4da2,_0x530475,_0x12ffbc;for(var _0x31f1ba=0x0;_0x31f1ba<explodes[_0x406f('0x11')];_0x31f1ba++){if('ETCts'!==_0x406f('0x15')){if(invaders[_0x31f1ba][0x0]<0x0||invaders[_0x31f1ba][0x0]+invaderW>canvas['width']){invaders[_0x31f1ba][0x2]=-invaders[_0x31f1ba][0x2];}if(invaders[_0x31f1ba][0x1]<0x0||invaders[_0x31f1ba][0x1]+invaderH>canvas[_0x406f('0x7')]){invaders[_0x31f1ba][0x3]=-invaders[_0x31f1ba][0x3];}}else{_0x3e4da2=explodes[_0x31f1ba][0x0];_0x530475=explodes[_0x31f1ba][0x1];_0x12ffbc=explodes[_0x31f1ba][0x2];context['fillRect'](_0x3e4da2-_0x12ffbc,_0x530475-_0x12ffbc,explodeW,explodeH);context[_0x406f('0xd')](_0x3e4da2+_0x12ffbc,_0x530475-_0x12ffbc,explodeW,explodeH);context['fillRect'](_0x3e4da2-_0x12ffbc,_0x530475+_0x12ffbc,explodeW,explodeH);context[_0x406f('0xd')](_0x3e4da2+_0x12ffbc,_0x530475+_0x12ffbc,explodeW,explodeH);}}}function onKeyDown(_0x400860){switch(_0x400860[_0x406f('0x16')]){case _0x406f('0x17'):ifKeepSpace=!![];break;case _0x406f('0x18'):case _0x406f('0x19'):ifKeepRight=!![];break;case _0x406f('0x1a'):case _0x406f('0x1b'):ifKeepLeft=!![];break;case'ArrowUp':case _0x406f('0x1c'):ifKeepUp=!![];;break;case'ArrowDown':case'KeyS':ifKeepDown=!![];break;case _0x406f('0x1d'):if(timer===null){if(_0x406f('0x1e')!=='xyCHP'){context[_0x406f('0xb')]=_0x406f('0x14');var _0x45802b,_0x510b72;for(var _0x4c2121=0x0;_0x4c2121<invaders['length'];_0x4c2121++){_0x45802b=invaders[_0x4c2121][0x0];_0x510b72=invaders[_0x4c2121][0x1];context[_0x406f('0xd')](_0x45802b,_0x510b72,invaderW,invaderH);context[_0x406f('0xd')](_0x45802b+invaderW/0x4,_0x510b72-invaderH,invaderW/0x2,invaderH);context[_0x406f('0xd')](_0x45802b+invaderW/0x4,_0x510b72+invaderH,invaderW/0x2,invaderH);}}else{init();timer=setInterval(timerCallBack,interval);}}break;}}function onKeyUp(_0x2f7ec8){switch(_0x2f7ec8[_0x406f('0x16')]){case _0x406f('0x17'):ifKeepSpace=![];break;case _0x406f('0x18'):case'KeyD':ifKeepRight=![];break;case _0x406f('0x1a'):case'KeyA':ifKeepLeft=![];break;case _0x406f('0x1f'):case'KeyW':ifKeepUp=![];break;case _0x406f('0x20'):case _0x406f('0x21'):ifKeepDown=![];break;}}function updateShip(){if(ifKeepRight&&shipX<canvas['width']-shipW)shipX+=shipDx;if(ifKeepLeft&&shipX>0x0)shipX-=shipDx;if(ifKeepUp&&shipY>0x0)shipY-=shipDy;if(ifKeepDown&&shipY<canvas[_0x406f('0x7')]-shipH)shipY+=shipDy;}function updateBullets(){bulletClock+=interval;if(ifKeepSpace&&isAlive&&bulletClock>0x64){if('GSAQF'==='GSAQF'){bullets[_0x406f('0x13')]([shipX+shipW/0x2-bulletW/0x2,shipY]);bulletClock=0x0;}else{context[_0x406f('0xd')](bullets[_0x37336a][0x0],bullets[_0x37336a][0x1],bulletW,bulletH);}}for(var _0x37336a=0x0;_0x37336a<bullets[_0x406f('0x11')];_0x37336a++){bullets[_0x37336a][0x1]-=bulletDy;}while(bullets[_0x406f('0x11')]>0x0){if(_0x406f('0x22')===_0x406f('0x23')){explodes['shift']();}else{if(bullets[0x0][0x1]<0x0){bullets[_0x406f('0xf')]();}else{break;}}}}function updateInvaders(){invaderClock+=interval;if(invaderClock>0x3e8){invaders[_0x406f('0x13')]([Math['random']()*(canvas[_0x406f('0x6')]-invaderW),0x14,Math[_0x406f('0x24')]()*(invaderDMax*0x2)-invaderDMax,Math[_0x406f('0x24')]()*(invaderDMax*0x2)-invaderDMax]);invaders[_0x406f('0x13')]([Math['random']()*(canvas[_0x406f('0x6')]-invaderW),canvas['height']-0x14,Math['random']()*(invaderDMax*0x2)-invaderDMax,Math[_0x406f('0x24')]()*(invaderDMax*0x2)-invaderDMax]);invaders[_0x406f('0x13')]([0x14,Math[_0x406f('0x24')]()*(canvas[_0x406f('0x7')]-invaderH),Math[_0x406f('0x24')]()*(invaderDMax*0x2)-invaderDMax,Math[_0x406f('0x24')]()*(invaderDMax*0x2)-invaderDMax]);invaders['push']([canvas[_0x406f('0x6')]-invaderW-0x14,Math[_0x406f('0x24')]()*(canvas[_0x406f('0x7')]-invaderH),Math[_0x406f('0x24')]()*(invaderDMax*0x2)-invaderDMax,Math[_0x406f('0x24')]()*(invaderDMax*0x2)-invaderDMax]);rerollInvadersSpeed();invaderClock=0x0;}for(var _0x179be4=0x0;_0x179be4<invaders[_0x406f('0x11')];_0x179be4++){invaders[_0x179be4][0x0]+=invaders[_0x179be4][0x2];invaders[_0x179be4][0x1]+=invaders[_0x179be4][0x3];}for(var _0x179be4=0x0;_0x179be4<invaders[_0x406f('0x11')];_0x179be4++){if('BorFl'===_0x406f('0x25')){if(invaders[_0x179be4][0x0]<0x0||invaders[_0x179be4][0x0]+invaderW>canvas[_0x406f('0x6')]){invaders[_0x179be4][0x2]=-invaders[_0x179be4][0x2];}if(invaders[_0x179be4][0x1]<0x0||invaders[_0x179be4][0x1]+invaderH>canvas[_0x406f('0x7')]){invaders[_0x179be4][0x3]=-invaders[_0x179be4][0x3];}}else{invaderX=invaders[_0x179be4][0x0];invaderY=invaders[_0x179be4][0x1];context[_0x406f('0xd')](invaderX,invaderY,invaderW,invaderH);context['fillRect'](invaderX+invaderW/0x4,invaderY-invaderH,invaderW/0x2,invaderH);context['fillRect'](invaderX+invaderW/0x4,invaderY+invaderH,invaderW/0x2,invaderH);}}}function updateExplodes(){for(var _0x53e050=0x0;_0x53e050<explodes[_0x406f('0x11')];_0x53e050++){explodes[_0x53e050][0x2]+=explodeV;}while(explodes[_0x406f('0x11')]>0x0){if(_0x406f('0x26')==='EHpAF'){if(explodes[0x0][0x2]>explodeRMax){if(_0x406f('0x27')===_0x406f('0x27')){explodes[_0x406f('0xf')]();}else{sign=shipX>invaders[_0x53e050][0x0]?0x1:-0x1;invaders[_0x53e050][0x2]=sign*Math['random']()*invaderDMax;}}else{break;}}else{for(var _0x2be8c2=0x0;_0x2be8c2<invaders[_0x406f('0x11')];_0x2be8c2++){if(isCollision(shipX,shipY,shipW,shipH,invaders[_0x2be8c2][0x0],invaders[_0x2be8c2][0x1],invaderW,invaderH)){generateExplode(invaders[_0x2be8c2][0x0]+(invaderW-explodeW)/0x2,invaders[_0x2be8c2][0x1]);invaders[_0x406f('0x28')](_0x2be8c2,0x1);generateExplode(shipX+(shipW-explodeW)/0x2,shipY);isAlive=![];setTimeout(gameOver,0x1f4);return;}}}}}function generateExplode(_0x164de1,_0x465bed){explodes[_0x406f('0x13')]([_0x164de1,_0x465bed,0x0]);}function rerollInvadersSpeed(){var _0x4368e3;var _0x1467c4=0.6;for(var _0xcd2175=0x0;_0xcd2175<invaders[_0x406f('0x11')];_0xcd2175++){if(Math[_0x406f('0x24')]()>_0x1467c4){if(_0x406f('0x29')!==_0x406f('0x29')){explodes[_0x406f('0x13')]([x,y,0x0]);}else{_0x4368e3=shipX>invaders[_0xcd2175][0x0]?0x1:-0x1;invaders[_0xcd2175][0x2]=_0x4368e3*Math[_0x406f('0x24')]()*invaderDMax;}}if(Math['random']()>_0x1467c4){_0x4368e3=shipY>invaders[_0xcd2175][0x1]?0x1:-0x1;invaders[_0xcd2175][0x3]=_0x4368e3*Math[_0x406f('0x24')]()*invaderDMax;}}}function processInvaderShipCollision(){for(var _0x305d5b=0x0;_0x305d5b<invaders[_0x406f('0x11')];_0x305d5b++){if(isCollision(shipX,shipY,shipW,shipH,invaders[_0x305d5b][0x0],invaders[_0x305d5b][0x1],invaderW,invaderH)){if(_0x406f('0x2a')==='joxQp'){generateExplode(invaders[_0x305d5b][0x0]+(invaderW-explodeW)/0x2,invaders[_0x305d5b][0x1]);invaders[_0x406f('0x28')](_0x305d5b,0x1);generateExplode(shipX+(shipW-explodeW)/0x2,shipY);isAlive=![];setTimeout(gameOver,0x1f4);return;}else{var _0x1c19f3;var _0x264c64=0.6;for(var _0x42a8ab=0x0;_0x42a8ab<invaders[_0x406f('0x11')];_0x42a8ab++){if(Math[_0x406f('0x24')]()>_0x264c64){_0x1c19f3=shipX>invaders[_0x42a8ab][0x0]?0x1:-0x1;invaders[_0x42a8ab][0x2]=_0x1c19f3*Math[_0x406f('0x24')]()*invaderDMax;}if(Math[_0x406f('0x24')]()>_0x264c64){_0x1c19f3=shipY>invaders[_0x42a8ab][0x1]?0x1:-0x1;invaders[_0x42a8ab][0x3]=_0x1c19f3*Math[_0x406f('0x24')]()*invaderDMax;}}}}}}function processInvaderBulletCollision(){for(var _0x1fc6ad=0x0;_0x1fc6ad<invaders['length'];_0x1fc6ad++){if(_0x406f('0x2b')!==_0x406f('0x2c')){for(var _0x238d68=0x0;_0x238d68<bullets['length'];_0x238d68++){if(isCollision(bullets[_0x238d68][0x0],bullets[_0x238d68][0x1],bulletW,bulletH,invaders[_0x1fc6ad][0x0],invaders[_0x1fc6ad][0x1],invaderW,invaderH)){if(_0x406f('0x2d')!=='lajfh'){updateShip();updateBullets();updateInvaders();updateExplodes();processInvaderBulletCollision();drawBackground();drawShip(isAlive);drawBullets();drawInvaders();drawExplodes();processInvaderShipCollision();}else{generateExplode(invaders[_0x1fc6ad][0x0]+(invaderW-explodeW)/0x2,invaders[_0x1fc6ad][0x1]);invaders[_0x406f('0x28')](_0x1fc6ad,0x1);bullets['splice'](_0x238d68,0x1);addScore(0x1);_0x1fc6ad--;break;}}}}else{invaders[_0x406f('0x13')]([Math[_0x406f('0x24')]()*(canvas[_0x406f('0x6')]-invaderW),0x14,Math['random']()*(invaderDMax*0x2)-invaderDMax,Math[_0x406f('0x24')]()*(invaderDMax*0x2)-invaderDMax]);invaders[_0x406f('0x13')]([Math[_0x406f('0x24')]()*(canvas['width']-invaderW),canvas[_0x406f('0x7')]-0x14,Math[_0x406f('0x24')]()*(invaderDMax*0x2)-invaderDMax,Math['random']()*(invaderDMax*0x2)-invaderDMax]);invaders[_0x406f('0x13')]([0x14,Math[_0x406f('0x24')]()*(canvas[_0x406f('0x7')]-invaderH),Math['random']()*(invaderDMax*0x2)-invaderDMax,Math['random']()*(invaderDMax*0x2)-invaderDMax]);invaders[_0x406f('0x13')]([canvas[_0x406f('0x6')]-invaderW-0x14,Math[_0x406f('0x24')]()*(canvas[_0x406f('0x7')]-invaderH),Math[_0x406f('0x24')]()*(invaderDMax*0x2)-invaderDMax,Math[_0x406f('0x24')]()*(invaderDMax*0x2)-invaderDMax]);rerollInvadersSpeed();invaderClock=0x0;}}}function timerCallBack(){updateShip();updateBullets();updateInvaders();updateExplodes();processInvaderBulletCollision();drawBackground();drawShip(isAlive);drawBullets();drawInvaders();drawExplodes();processInvaderShipCollision();}function isXyInRect(_0x13f1b7,_0x4e4d70,_0x48a571,_0x166daa,_0x24a160,_0x540362){if(_0x13f1b7>=_0x48a571&&_0x13f1b7<=_0x48a571+_0x24a160&&_0x4e4d70>=_0x166daa&&_0x4e4d70<=_0x166daa+_0x540362)return!![];else return![];}function isCollision(_0x15ca59,_0x268722,_0x7415ba,_0x510078,_0xd55539,_0x3e1e7f,_0x50356d,_0x338957){if(isXyInRect(_0x15ca59+_0x7415ba,_0x268722,_0xd55539,_0x3e1e7f,_0x50356d,_0x338957)||isXyInRect(_0x15ca59,_0x268722+_0x510078,_0xd55539,_0x3e1e7f,_0x50356d,_0x338957)||isXyInRect(_0x15ca59+_0x7415ba,_0x268722+_0x510078,_0xd55539,_0x3e1e7f,_0x50356d,_0x338957))return!![];else return![];}function gameOver(){clearInterval(timer);timer=null;context[_0x406f('0x2e')]=_0x406f('0x2f');context[_0x406f('0xb')]=_0x406f('0x30');context['textAlign']=_0x406f('0x31');context[_0x406f('0x32')](_0x406f('0x33'),canvas[_0x406f('0x6')]/0x2,canvas[_0x406f('0x7')]/0x2);}function addScore(_0x503a51){score+=_0x503a51;document[_0x406f('0x0')](_0x406f('0x8'))[_0x406f('0x9')]=_0x406f('0x34')+score;}