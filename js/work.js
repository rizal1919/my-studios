// work

let work = document.getElementById('work');
work.setAttribute('data', '1');

let attributes = {};




document.getElementById('addWork').addEventListener('click', function(e){

    let now = work.getAttribute('data'); console.log(now);
    now = Number(now)+1; work.setAttribute('data', now);
    
    // headContainer
    const workContainer = document.createElement('div');
    workContainer.setAttribute('id', 'w' + now);

    // 1stChildWorkContainer
    const pekerjaanSatu = document.createElement('div');
    pekerjaanSatu.classList.add('row');
    pekerjaanSatu.classList.add('g-3');

    const labelPekerjaanSatu = document.createElement('label');
    labelPekerjaanSatu.classList.add('col-sm-3', 'col-form-lable', 'col-form-label-sm', 'text-end', 'fw-bold');

    // div.1.1
    const divPosisi = document.createElement('div');
    divPosisi.classList.add('col-sm-2');

    const posisi = document.createElement('input');
    posisi.classList.add('form-control', 'form-control-sm');
    attributes = {
        'type': 'text',
        'name': 'posisi' + now,
        'id': 'posisi' + now,
        'placeholder': 'posisi' + now
    }
    pasangAtribut(posisi, attributes);
    divPosisi.appendChild(posisi);
    
    // div 1.2
    const divPerusahaan = document.createElement('div');
    divPerusahaan.classList.add('col-sm-2');

    const perusahaan = document.createElement('input');
    perusahaan.classList.add('form-control', 'form-control-sm');
    attributes = {
        'type': 'text',
        'name': 'perusahaan' + now,
        'id': 'perusahaan' + now,
        'placeholder': 'perusahaan' + now,
    }
    pasangAtribut(perusahaan, attributes);
    divPerusahaan.appendChild(perusahaan);
    
    // div 1.3
    const divDatePerusahaanSatu = document.createElement('div');
    divDatePerusahaanSatu.classList.add('col-sm-2');

    const date1Perusahaan = document.createElement('input');
    date1Perusahaan.classList.add('form-control', 'form-control-sm');
    attributes = {
        'type': 'date',
        'name': 'dateWork' + now + '_1',
        'id': 'dateWork' + now + '_1',
    }
    pasangAtribut(date1Perusahaan, attributes);

    divDatePerusahaanSatu.appendChild(date1Perusahaan);

    // div 1.4
    const divSampaiPerusahaan = document.createElement('div');
    divSampaiPerusahaan.classList.add('col-sm-1');

    const sampaiPerusahaan = document.createElement('p');
    sampaiPerusahaan.classList.add('text-center');
    sampaiPerusahaan.innerText = 'Sampai';

    divSampaiPerusahaan.appendChild(sampaiPerusahaan);

    // div 1.5
    const divDatePerusahaanDua = document.createElement('div');
    divDatePerusahaanDua.classList.add('col-sm-2');

    const date2Perusahaan = document.createElement('input');
    date2Perusahaan.classList.add('form-control', 'form-control-sm');
    attributes = {
        'type': 'date',
        'name': 'dateWork' + now + '_2',
        'id': 'dateWork' + now + '_2',
    }
    pasangAtribut(date2Perusahaan, attributes);
    divDatePerusahaanDua.appendChild(date2Perusahaan);

    // kunci div 1
    pekerjaanSatu.append(labelPekerjaanSatu, divPosisi, divPerusahaan, divDatePerusahaanSatu, divSampaiPerusahaan, divDatePerusahaanDua);

    // div 2
    const pekerjaanDua = document.createElement('div');
    pekerjaanDua.classList.add('row', 'g-3', 'mb-3');

    // label
    const labelPekerjaanDua = document.createElement('input');
    labelPekerjaanDua.style.visibility = 'hidden';
    labelPekerjaanDua.classList.add('col-sm-3', 'col-form-label', 'col-form-lable-sm');

    // div 2.1
    const divProjek = document.createElement('div');
    divProjek.classList.add('col-sm-8');

    const projek = document.createElement('input');
    projek.classList.add('form-control', 'form-control-sm');
    attributes = {
        'type' : 'text',
        'name' : 'nama_project' + now,
        'id': 'nama_project' + now,
        'placeholder' : 'nama_project' + now
    }
    pasangAtribut(projek, attributes);
    divProjek.appendChild(projek);

    // div 2.2
    const divClosePerusahaan = document.createElement('div');
    divClosePerusahaan.classList.add('col-sm-1');

    const closePerusahaan = document.createElement('p');
    closePerusahaan.classList.add('btn', 'btn-danger', 'btn-sm');
    closePerusahaan.setAttribute('id', 'addWork');
    closePerusahaan.innerText = 'Batal';
    let strWork = 'w' + now; 
    closePerusahaan.setAttribute('onclick', `hapusSlot('${strWork}')`)

    divClosePerusahaan.appendChild(closePerusahaan);

    // kunci div 2
    pekerjaanDua.append(labelPekerjaanDua, divProjek, divClosePerusahaan);


    // div 3
    const pekerjaanTiga = document.createElement('div');
    pekerjaanTiga.classList.add('row', 'g-3', 'mb-3');

    // label 3
    const labelPekerjaanTiga = document.createElement('label');
    labelPekerjaanTiga.classList.add('col-sm-3', 'col-form-label', 'col-form-label-sm');
    labelPekerjaanTiga.style.visibility = 'hidden';

    // div 3.1
    const divTextAreaPerusahaan = document.createElement('div');
    divTextAreaPerusahaan.classList.add('col-sm-9');

    const inputTextAreaPerusahaan = document.createElement('input');
    attributes = {
        'type': 'hidden',
        'id': 'jobDesc' + now,
        'name': 'jobDesc' + now,
    }
    pasangAtribut(inputTextAreaPerusahaan, attributes);

    const textAreaPerusahaan = document.createElement('trix-editor');
    attributes = {
        'input': 'jobDesc' + now,
        'placeholder': "Jobdesc selama bekerja ..."
    }
    pasangAtribut(textAreaPerusahaan, attributes);


    divTextAreaPerusahaan.append(inputTextAreaPerusahaan, textAreaPerusahaan);
    
    // kunci div 3
    pekerjaanTiga.append(labelPekerjaanTiga, divTextAreaPerusahaan);


    // kunci semua div
    workContainer.append(pekerjaanSatu, pekerjaanDua, pekerjaanTiga);

    // attached to work section
    work.appendChild(workContainer);

    console.log(workContainer);


});
