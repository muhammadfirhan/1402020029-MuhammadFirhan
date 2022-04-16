$(document).ready(function () {
    $("#no-hp").change(function () {
        if ($("#no-hp").val() > 1) {
            $("#nominal").prop("disabled", false);
            $("#nominal-paket-data").prop("disabled", false);
        }else{
            $("#nominal").prop("disabled", true);
            $("#nominal-paket-data").prop("disabled", true);
            $("#buttonPaket").prop("disabled", true);
            $("#buttonPulsa").prop("disabled", true);
            document.getElementById("buttonPulsa").style.backgroundColor = "#6C727C";
            document.getElementById("buttonPaket").style.backgroundColor = "#6C727C";
            document.getElementById("nominal").value = "pilih";
            document.getElementById("nominal-paket-data").value = "pilih";
        }
    });
    // untuk pulsa
    $("#nominal").change(function () {
       
        document.getElementById("buttonPulsa").style.backgroundColor = "#fa591d";
        document.getElementById("buttonPulsa").style.border = "#fa591d";
        $("#buttonPulsa").prop("disabled", false);
    });
    // untuk paket
    $("#nominal-paket-data").change(function () {
       
        document.getElementById("buttonPaket").style.backgroundColor = "#fa591d";
        document.getElementById("buttonPaket").style.border = "#fa591d";
        $("#buttonPaket").prop("disabled", false);
    });
    // tombol beli pulsa
    $("#buttonPulsa").click(function () {
        const selectedNominal = $("#nominal").val();
        let panjang = selectedNominal.length;
        let nominalPulsa = $("#nominal").val();
        let nominal_choice = "";
        let harga_PerNominal = "";
        for (let i = 0; i < panjang; i++) {
            let nominal_pulsa = nominalPulsa.substring(i, i + 1);
            if (nominal_pulsa === "-") {
                nominal_choice += selectedNominal.substring(0, i);
                harga_PerNominal += selectedNominal.substring(i + 1, nominalPulsa.length);
            }
        }
        let confirmAction = confirm("Pembelian pulsa sebesar " + nominal_choice + " ke nomor " + $("#no-hp").val());
        if (confirmAction) {
            alert("Total harga pulsa " + harga_PerNominal + ",- ke nomor " + $("#no-hp").val() + " sedang di proses. Terima kasih :)");
        } else {
            
        }
    });
    // tombol beli paket
    $("#buttonPaket").click(function () {
        const selectedNominal = $("#nominal-paket-data").val();
        let panjang = selectedNominal.length;
        let nominalPulsa = $("#nominal-paket-data").val();
        let nominal_choice = "";
        let harga_PerNominal = "";
        for (let i = 0; i < panjang; i++) {
            let nominal_pulsa = nominalPulsa.substring(i, i + 1);
            if (nominal_pulsa === "-") {
                nominal_choice += selectedNominal.substring(0, i);
                harga_PerNominal += selectedNominal.substring(i + 1, nominalPulsa.length);
            }
        }
        let confirmAction = confirm("Pembelian paket data " + nominal_choice + " ke nomor " + $("#no-hp").val());
        if (confirmAction) {
            alert("Total harga paket data  " + harga_PerNominal + ",- ke nomor " + $("#no-hp").val() + " sedang di proses. Terima kasih :)");
        } else {
        }
    });


    $("#no-hp").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });
    
 
    $("#menu-pulsa").click(function () {

        $("#menu-pulsa").css({
            'border-color': '#03ac0e', 'color': '#03ac0e'
        });
        $("#menu-paket").css({
            'border-color': '#e5e7e9', 'color': '#31353B70'
        });
        $("#menu-listrik").css({
            'border-color': '#e5e7e9', 'color': '#31353B70'
        });
        $("#menu-flight").css({
            'border-color': '#e5e7e9', 'color': '#31353B70'
        });
        $("#nominal").show();
        $("#nominal-paket-data").hide();
        $("#buttonPaket").hide();
        $("#buttonPulsa").show();
    });
    $("#menu-paket").click(function () {

        $("#menu-paket").css({
            'border-color': '#03ac0e', 'color': '#03ac0e'
        });
        $("#menu-pulsa").css({
            'border-color': '#e5e7e9', 'color': '#31353B70'
        });
        $("#menu-listrik").css({
            'border-color': '#e5e7e9', 'color': '#31353B70'
        });
        $("#menu-flight").css({
            'border-color': '#e5e7e9', 'color': '#31353B70'
        });
        $("#nominal").hide();
        $("#nominal-paket-data").prop("hidden", false);
        $("#nominal-paket-data").show();
        $("#buttonPaket").prop("hidden", false);
        $("#buttonPaket").show();
        $("#buttonPulsa").hide();
    });
});