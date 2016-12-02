# Scratch4D
Scratch for drones.

##Setup and Running
1. ```npm install```  
3. ```npm run start```

##Configure Node.js
1. Install Node Version Manager.  
https://github.com/creationix/nvm  
2. ```nvm ls-remote```  
3. ```nvm use v5.0.0```

###Supported drone platforms
A.R. Drone 2.0  
Bebop Drone(working)

###Supported Environment
Windows 7/8.1/10    
Mac  
Linux x86/x86_64  
ARM Linux(working for Raspberry Pi)  

###External setup for UNIX
####Mac
You need ffmpeg binaries.    
```
brew install --use-clang --HEAD ffmpeg --with-faac --with-fdk-aac --with-ffplay --with-fontconfig --with-freetype --with-frei0r --with-libass --with-libbluray --with-libcaca --with-libquvi --with-libsoxr --with-libvidstab --with-libvorbis --with-libvpx --with-opencore-amr --with-openjpeg --with-openssl --with-opus --with-rtmpdump --with-speex --with-theora --with-tools --with-x265 --enable-libx264 --enable-gpl --enable-libxvid --enable-shared
```  
####Ubuntu 14.04 LTS
```bash
sudo apt-get install software-properties-common    
sudo add-apt-repository ppa:mc3man/trusty-media  
sudo apt-get update  
sudo apt-get install ffmpeg
```  


###Building
####1. Install Dev tools.
```
npm install -g asar electron-packager
```

####2. clean files  
```
npm run clean
```


####3. build files
```
npm run build
```

###Deploy
####1. Install electron-packager
```
npm install -g electron-packager  
```


####2. Deploy to target platform.
  
####Windows  
ia32   
```
npm run deploy:win32
```  
x64    
```
npm run deploy:win64
```  
####Mac  
```
npm run deploy:mac
```  
####Linux  
```
npm run deploy:linux
```  
####ARM Linux  
ARM
```
npm run deploy:arm
```  
ARMv7l
```
npm run deploy:armv7l
```  
####3. Move to ./Scratch4D-(platform)-(arch) directory and run program.
  





