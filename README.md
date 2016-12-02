# Scratch4D
Scratch for drones.

###Setup and Running
```npm install```
```npm run start```

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
1. clean files  
```
npm run clean
```


2. building files
```
npm run build
```    
