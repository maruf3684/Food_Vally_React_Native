
adb commandssss

C:\Users\Munna\AppData\Local\Android\Sdk
C:\Program Files\OpenJDK\openjdk-11.0.13_8\bin

adb usb/ 
adb devices/ 
adb tcpip 5555/ 
adb kill-server/ 
adb disconnect/ 
adb start-server/ 
adb connect <YOUR_PHONE_IP>/ 
adb devices/ 
adb connect 192.168.0.2:5555/ 


npx react-native init AwesomeProject / 
npx react-native init AwesomeTSProject --template react-native-template-typescript / 


npx react-native start /
npx react-native run-android /


how to get database?
adb pull /data/data/APPLICATION_ID/files/ .
adb pull /data/data/com.awesomeproject/files/ .
adb pull /data/data/com.awesomeproject/files/default.realm .

//finally its worked
APPLICATION_ID=com.awesomeproject
adb shell "run-as com.awesomeproject cat /data/data/com.example.test/files/default.realm" > default.realm
