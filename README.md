# SkyLife SDK
Integrated Development Environment for drones.  
![drone](img/drone.png)  

##Setup and Running
1. ```npm install```  
3. ```npm run start```

##Configure Node.js
1. Install Node Version Manager.  
https://github.com/creationix/nvm  
2. ```nvm ls-remote```  
3. ```nvm use v5.0.0```

##Supported drone platforms
A.R. Drone 2.0  
Bebop Drone  

##Supported Environment
Windows 7/8.1/10    
Mac OS X  
Linux x86/x86_64  
ARM Linux  

##External setup for UNIX  
You need ffmpeg binaries to enable video streaming feature.    

###Mac
```
brew install --use-clang --HEAD ffmpeg --with-faac --with-fdk-aac --with-ffplay --with-fontconfig --with-freetype --with-frei0r --with-libass --with-libbluray --with-libcaca --with-libquvi --with-libsoxr --with-libvidstab --with-libvorbis --with-libvpx --with-opencore-amr --with-openjpeg --with-openssl --with-opus --with-rtmpdump --with-speex --with-theora --with-tools --with-x265 --enable-libx264 --enable-gpl --enable-libxvid --enable-shared
```  
###Ubuntu 14.04 LTS
```bash
sudo apt-get install software-properties-common    
sudo add-apt-repository ppa:mc3man/trusty-media  
sudo apt-get update  
sudo apt-get install ffmpeg
```  

##Building    
###Windows  
ia32   
```
npm run build:win32
```  
x64    
```
npm run build:win64
```  
###Mac  
```
npm run build:mac
```  
###Linux  
```
npm run build:linux
```  
###ARM Linux  
ARM
```
npm run build:arm
```  
ARMv7l
```
npm run build:armv7l
```  
###3. Move to ./SkyLifeSDK-(platform)-(arch) directory and run program.
  




