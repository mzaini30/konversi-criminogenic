// get url parameter

var get_url_parameter = function get_url_parameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

get_url_parameter_plus = function(x){
    return get_url_parameter(x).replace(/\+/g, ' ')
}

get_url_parameter_plus_2 = function(x){
    if (get_url_parameter(x).length >= 1){
        return ' (' + get_url_parameter_plus(x) + ')'    
    } else {
        return ''
    }
}

tingkat_resiko = get_url_parameter('tingkat-resiko')
if (tingkat_resiko == 'rendah'){
    $('.step-tingkat-resiko .rendah').addClass('active')
} else if (tingkat_resiko == 'menengah'){
    $('.step-tingkat-resiko .menengah').addClass('active')
} else if (tingkat_resiko == 'tinggi'){
    $('.step-tingkat-resiko .tinggi').addClass('active')
}

$('.nama').html(get_url_parameter_plus('nama'))
$('.nomor-registrasi').html(get_url_parameter_plus('nomor-registrasi'))
$('.tanggal-lahir').html(get_url_parameter_plus('tanggal-lahir'))
$('.jenis-kelamin').html(get_url_parameter_plus('jenis-kelamin'))
$('.lokasi').html(get_url_parameter_plus('lokasi'))
$('.tindak-pidana').html(get_url_parameter_plus('tindak-pidana'))
$('.lama-pidana').html(get_url_parameter_plus('lama-pidana'))
$('.alasan-assesment-dilakukan').html(get_url_parameter_plus('alasan-assesment-dilakukan') + get_url_parameter_plus_2('alasan-assesment-dilakukan-lainnya'))
$('.tingkat-resiko').html(get_url_parameter_plus('tingkat-resiko'))
$('.nama-pewawancara').html(get_url_parameter_plus('nama-pewawancara'))
$('.tanggal-assesment').html(get_url_parameter_plus('tanggal-assesment'))

rendah = 0
menengah = 0
tinggi = 0

// section start

pendidikan_atau_pekerjaan = [
    'opsi-1',
    'opsi-2',
    'opsi-3',
    'opsi-4',
    'opsi-5',
    'opsi-6',
    'opsi-7',
    'opsi-8',
    'opsi-9',
    'opsi-10'
]
skor_pendidikan_atau_pekerjaan = 0

for (x in pendidikan_atau_pekerjaan){
    if (get_url_parameter(pendidikan_atau_pekerjaan[x]) == 'on'){
        skor_pendidikan_atau_pekerjaan += 1
    }
}

$('.skor-pendidikan-atau-pekerjaan').html(skor_pendidikan_atau_pekerjaan)

if (skor_pendidikan_atau_pekerjaan >= 0 && skor_pendidikan_atau_pekerjaan <= 4){
    $('.step-pendidikan-atau-pekerjaan .rendah').addClass('active')
    rendah += 1
} else if (skor_pendidikan_atau_pekerjaan >= 5 && skor_pendidikan_atau_pekerjaan <= 7){
    $('.step-pendidikan-atau-pekerjaan .menengah').addClass('active')
    menengah += 1
} else if (skor_pendidikan_atau_pekerjaan >= 8 && skor_pendidikan_atau_pekerjaan <= 10){
    $('.step-pendidikan-atau-pekerjaan .tinggi').addClass('active')
    tinggi += 1
}

// section end

// alkohol narkoba

alkohol_narkoba = [
    'opsi-11',
    'opsi-12',
    'opsi-13',
    'opsi-14',
    'opsi-15',
    'opsi-16'
]
skor_alkohol_narkoba = 0

for (x in alkohol_narkoba){
    if (get_url_parameter(alkohol_narkoba[x]) == 'on'){
        skor_alkohol_narkoba += 1
    }
}

$('.skor-alkohol-narkoba').html(skor_alkohol_narkoba)

if (skor_alkohol_narkoba >= 0 && skor_alkohol_narkoba <= 1){
    $('.step-alkohol-narkoba .rendah').addClass('active')
    rendah += 1
} else if (skor_alkohol_narkoba >= 2 && skor_alkohol_narkoba <= 3){
    $('.step-alkohol-narkoba .menengah').addClass('active')
    menengah += 1
} else if (skor_alkohol_narkoba >= 4 && skor_alkohol_narkoba <= 6){
    $('.step-alkohol-narkoba .tinggi').addClass('active')
    tinggi += 1
}

// keuangan

keuangan = [
    'opsi-17',
    'opsi-18'
]
skor_keuangan = 0

for (x in keuangan){
    if (get_url_parameter(keuangan[x]) == 'on'){
        skor_keuangan += 1
    }
}

$('.skor-keuangan').html(skor_keuangan)

if (skor_keuangan == 0){
    $('.step-keuangan .rendah').addClass('active')
    rendah += 1
} else if (skor_keuangan == 1){
    $('.step-keuangan .menengah').addClass('active')
    menengah += 1
} else if (skor_keuangan == 2){
    $('.step-keuangan .tinggi').addClass('active')
    tinggi += 1
}

// rekreasi

rekreasi = [
    'opsi-19',
    'opsi-20'
]
skor_rekreasi = 0

for (x in rekreasi){
    if (get_url_parameter(rekreasi[x]) == 'on'){
        skor_rekreasi += 1
    }
}

$('.skor-rekreasi').html(skor_rekreasi)

if (skor_rekreasi == 0){
    $('.step-rekreasi .rendah').addClass('active')
    rendah += 1
} else if (skor_rekreasi == 1){
    $('.step-rekreasi .menengah').addClass('active')
    menengah += 1
} else if (skor_rekreasi == 2){
    $('.step-rekreasi .tinggi').addClass('active')
    tinggi += 1
}

// sosial

sosial = [
    'opsi-21',
    'opsi-22',
    'opsi-23',
    'opsi-24',
    'opsi-25',
    'opsi-26'
]
skor_sosial = 0

for (x in sosial){
    if (get_url_parameter(sosial[x]) == 'on'){
        skor_sosial += 1
    }
}

$('.skor-sosial').html(skor_sosial)

if (skor_sosial >= 0 && skor_sosial <= 2){
    $('.step-sosial .rendah').addClass('active')
    rendah += 1
} else if (skor_sosial >= 3 && skor_sosial <= 4){
    $('.step-sosial .menengah').addClass('active')
    menengah += 1
} else if (skor_sosial >= 5 && skor_sosial <= 6){
    $('.step-sosial .tinggi').addClass('active')
    tinggi += 1
}

// antisosial

antisosial = [
    'opsi-27',
    'opsi-28',
    'opsi-29',
    'opsi-30',
    'opsi-31'
]
skor_antisosial = 0

for (x in antisosial){
    if (get_url_parameter(antisosial[x]) == 'on'){
        skor_antisosial += 1
    }
}

$('.skor-antisosial').html(skor_antisosial)

if (skor_antisosial >= 0 && skor_antisosial <= 1){
    $('.step-antisosial .rendah').addClass('active')
    rendah += 1
} else if (skor_antisosial >= 2 && skor_antisosial <= 3){
    $('.step-antisosial .menengah').addClass('active')
    menengah += 1
} else if (skor_antisosial >= 4 && skor_antisosial <= 5){
    $('.step-antisosial .tinggi').addClass('active')
    tinggi += 1
}

// lainnya

lainnya = [
    'opsi-32',
    'opsi-33',
    'opsi-34',
    'opsi-35',
    'opsi-36',
    'opsi-37',
    'opsi-38',
    'opsi-39',
    'opsi-40'
]
skor_lainnya = 0

for (x in lainnya){
    if (get_url_parameter(lainnya[x]) == 'on'){
        skor_lainnya += 1
    }
}

$('.skor-lainnya').html(skor_lainnya)

if (skor_lainnya >= 0 && skor_lainnya <= 2){
    $('.step-lainnya .rendah').addClass('active')
    rendah += 1
} else if (skor_lainnya >= 3 && skor_lainnya <= 5){
    $('.step-lainnya .menengah').addClass('active')
    menengah += 1
} else if (skor_lainnya >= 6 && skor_lainnya <= 9){
    $('.step-lainnya .tinggi').addClass('active')
    tinggi += 1
}

// faktor

if (tinggi >= menengah && tinggi >= rendah){
    $('.step-faktor .tinggi').addClass('active')
} else if (menengah >= tinggi && menengah >= rendah){
    $('.step-faktor .menengah').addClass('active')
} else {
    $('.step-faktor .rendah').addClass('active')
}

if (get_url_parameter('jelaskan-1') != ''){
    $('.jelaskan-1 dd').html(get_url_parameter_plus('jelaskan-1'))
} else {
    $('.jelaskan-1').hide()
}
if (get_url_parameter('jelaskan-2') != ''){
    $('.jelaskan-2 dd').html(get_url_parameter_plus('jelaskan-2'))
} else {
    $('.jelaskan-2').hide()
}
if (get_url_parameter('jelaskan-3') != ''){
    $('.jelaskan-3 dd').html(get_url_parameter_plus('jelaskan-3'))
} else {
    $('.jelaskan-3').hide()
}
if (get_url_parameter('jelaskan-4') != ''){
    $('.jelaskan-4 dd').html(get_url_parameter_plus('jelaskan-4'))
} else {
    $('.jelaskan-4').hide()
}
if (get_url_parameter('jelaskan-5') != ''){
    $('.jelaskan-5 dd').html(get_url_parameter_plus('jelaskan-5'))
} else {
    $('.jelaskan-5').hide()
}
if (get_url_parameter('jelaskan-6') != ''){
    $('.jelaskan-6 dd').html(get_url_parameter_plus('jelaskan-6'))
} else {
    $('.jelaskan-6').hide()
}
if (get_url_parameter('jelaskan-7') != ''){
    $('.jelaskan-7 dd').html(get_url_parameter_plus('jelaskan-7'))
} else {
    $('.jelaskan-7').hide()
}
if (get_url_parameter('jelaskan-8') != ''){
    $('.jelaskan-8 dd').html(get_url_parameter_plus('jelaskan-8'))
} else {
    $('.jelaskan-8').hide()
}
if (get_url_parameter('jelaskan-9') != ''){
    $('.jelaskan-9 dd').html(get_url_parameter_plus('jelaskan-9'))
} else {
    $('.jelaskan-9').hide()
}
if (get_url_parameter('jelaskan-10') != ''){
    $('.jelaskan-10 dd').html(get_url_parameter_plus('jelaskan-10'))
} else {
    $('.jelaskan-10').hide()
}
if (get_url_parameter('opsi-11') == 'on'){
    $('.jelaskan-11 .jenis-narkoba').html(get_url_parameter_plus('jenis-narkoba'))
    $('.jelaskan-11 .frekuensi-narkoba').html(get_url_parameter_plus('frekuensi-narkoba'))
    $('.jelaskan-11 .jumlah-narkoba').html(get_url_parameter_plus('jumlah-narkoba'))
    if (get_url_parameter('jelaskan-11') == ''){
        $('.jelaskan-11 .jelaskan-narkoba').hide()
    } else {
        $('.jelaskan-11 .jelaskan-narkoba').html(get_url_parameter_plus('jelaskan-11'))
    }
} else {
    $('.jelaskan-11').hide()
}
if (get_url_parameter('opsi-12') == 'on'){
    $('.jelaskan-12 .jenis-alkohol').html(get_url_parameter_plus('jenis-alkohol'))
    $('.jelaskan-12 .frekuensi-alkohol').html(get_url_parameter_plus('frekuensi-alkohol'))
    $('.jelaskan-12 .jumlah-alkohol').html(get_url_parameter_plus('jumlah-alkohol'))
    if (get_url_parameter('jelaskan-12') == ''){
        $('.jelaskan-12 .jelaskan-alkohol').hide()
    } else {
        $('.jelaskan-12 .jelaskan-alkohol').html(get_url_parameter_plus('jelaskan-12'))
    }
} else {
    $('.jelaskan-12').hide()
}
if (get_url_parameter('jelaskan-13') != ''){
    $('.jelaskan-13 dd').html(get_url_parameter_plus('jelaskan-13'))
} else {
    $('.jelaskan-13').hide()
}
if (get_url_parameter('jelaskan-14') != ''){
    $('.jelaskan-14 dd').html(get_url_parameter_plus('jelaskan-14'))
} else {
    $('.jelaskan-14').hide()
}
if (get_url_parameter('jelaskan-15') != ''){
    $('.jelaskan-15 dd').html(get_url_parameter_plus('jelaskan-15'))
} else {
    $('.jelaskan-15').hide()
}
if (get_url_parameter('jelaskan-16') != ''){
    $('.jelaskan-16 dd').html(get_url_parameter_plus('jelaskan-16'))
} else {
    $('.jelaskan-16').hide()
}
if (get_url_parameter('jelaskan-17') != ''){
    $('.jelaskan-17 dd').html(get_url_parameter_plus('jelaskan-17'))
} else {
    $('.jelaskan-17').hide()
}
if (get_url_parameter('jelaskan-18') != ''){
    $('.jelaskan-18 dd').html(get_url_parameter_plus('jelaskan-18'))
} else {
    $('.jelaskan-18').hide()
}
if (get_url_parameter('jelaskan-19') != ''){
    $('.jelaskan-19 dd').html(get_url_parameter_plus('jelaskan-19'))
} else {
    $('.jelaskan-19').hide()
}
if (get_url_parameter('jelaskan-20') != ''){
    $('.jelaskan-20 dd').html(get_url_parameter_plus('jelaskan-20'))
} else {
    $('.jelaskan-20').hide()
}
if (get_url_parameter('jelaskan-21') != ''){
    $('.jelaskan-21 dd').html(get_url_parameter_plus('jelaskan-21'))
} else {
    $('.jelaskan-21').hide()
}
if (get_url_parameter('jelaskan-22') != ''){
    $('.jelaskan-22 dd').html(get_url_parameter_plus('jelaskan-22'))
} else {
    $('.jelaskan-22').hide()
}
if (get_url_parameter('jelaskan-23') != ''){
    $('.jelaskan-23 dd').html(get_url_parameter_plus('jelaskan-23'))
} else {
    $('.jelaskan-23').hide()
}
if (get_url_parameter('jelaskan-24') != ''){
    $('.jelaskan-24 dd').html(get_url_parameter_plus('jelaskan-24'))
} else {
    $('.jelaskan-24').hide()
}
if (get_url_parameter('jelaskan-25') != ''){
    $('.jelaskan-25 dd').html(get_url_parameter_plus('jelaskan-25'))
} else {
    $('.jelaskan-25').hide()
}
if (get_url_parameter('jelaskan-26') != ''){
    $('.jelaskan-26 dd').html(get_url_parameter_plus('jelaskan-26'))
} else {
    $('.jelaskan-26').hide()
}
if (get_url_parameter('jelaskan-27') != ''){
    $('.jelaskan-27 dd').html(get_url_parameter_plus('jelaskan-27'))
} else {
    $('.jelaskan-27').hide()
}
if (get_url_parameter('jelaskan-28') != ''){
    $('.jelaskan-28 dd').html(get_url_parameter_plus('jelaskan-28'))
} else {
    $('.jelaskan-28').hide()
}
if (get_url_parameter('jelaskan-29') != ''){
    $('.jelaskan-29 dd').html(get_url_parameter_plus('jelaskan-29'))
} else {
    $('.jelaskan-29').hide()
}
if (get_url_parameter('jelaskan-30') != ''){
    $('.jelaskan-30 dd').html(get_url_parameter_plus('jelaskan-30'))
} else {
    $('.jelaskan-30').hide()
}
if (get_url_parameter('jelaskan-31') != ''){
    $('.jelaskan-31 dd').html(get_url_parameter_plus('jelaskan-31'))
} else {
    $('.jelaskan-31').hide()
}
if (get_url_parameter('jelaskan-32') != ''){
    $('.jelaskan-32 dd').html(get_url_parameter_plus('jelaskan-32'))
} else {
    $('.jelaskan-32').hide()
}
if (get_url_parameter('jelaskan-33') != ''){
    $('.jelaskan-33 dd').html(get_url_parameter_plus('jelaskan-33'))
} else {
    $('.jelaskan-33').hide()
}
if (get_url_parameter('jelaskan-34') != ''){
    $('.jelaskan-34 dd').html(get_url_parameter_plus('jelaskan-34'))
} else {
    $('.jelaskan-34').hide()
}
if (get_url_parameter('jelaskan-35') != ''){
    $('.jelaskan-35 dd').html(get_url_parameter_plus('jelaskan-35'))
} else {
    $('.jelaskan-35').hide()
}
if (get_url_parameter('jelaskan-36') != ''){
    $('.jelaskan-36 dd').html(get_url_parameter_plus('jelaskan-36'))
} else {
    $('.jelaskan-36').hide()
}
if (get_url_parameter('jelaskan-37') != ''){
    $('.jelaskan-37 dd').html(get_url_parameter_plus('jelaskan-37'))
} else {
    $('.jelaskan-37').hide()
}
if (get_url_parameter('jelaskan-38') != ''){
    $('.jelaskan-38 dd').html(get_url_parameter_plus('jelaskan-38'))
} else {
    $('.jelaskan-38').hide()
}
if (get_url_parameter('jelaskan-39') != ''){
    $('.jelaskan-39 dd').html(get_url_parameter_plus('jelaskan-39'))
} else {
    $('.jelaskan-39').hide()
}
if (get_url_parameter('jelaskan-40') != ''){
    $('.jelaskan-40 dd').html(get_url_parameter_plus('jelaskan-40'))
} else {
    $('.jelaskan-40').hide()
}
