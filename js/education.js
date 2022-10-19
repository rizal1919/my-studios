// to hiding upload files icon
document.addEventListener('trix-file-accept', function(e){
    e.preventDefault();
})

let ed = document.getElementById('education');
ed.setAttribute('data', '1');

document.getElementById('add').addEventListener('click', function(e){

    let know = ed.getAttribute('data');
    console.log('Sebelum' + know);
    know = Number(know) + 1;
    ed.setAttribute('data', know);
    console.log('Sesudah' + know);
    
    
    // container
    const headContainer = document.createElement('div');
    headContainer.setAttribute('id', 'ed' + know);

    // container 1
    const container1 = document.createElement('div');
    container1.classList.add('row');
    container1.classList.add('g-3');

    
    // container 2 
    const container2 = document.createElement('div');
    container2.classList.add('row');
    container2.classList.add('g-3');
    container2.classList.add('mb-3');

    // label
    const label = document.createElement('label');
    label.classList.add('col-sm-3');
    label.classList.add('col-form-label');
    label.classList.add('col-form-label-sm');


    // div1.1
    const childContainer1st = document.createElement('div');
    childContainer1st.classList.add('col-sm-2');

    const childOfContainer1st = document.createElement('input');
    childOfContainer1st.setAttribute('type', 'text');
    childOfContainer1st.setAttribute('placeholder', 'jurusan');
    childOfContainer1st.classList.add('form-control');
    childOfContainer1st.classList.add('form-control-sm');
    childOfContainer1st.setAttribute('name', 'jurusan' + know);

    childContainer1st.appendChild(childOfContainer1st);

        
    // div1.2
    const childContainer2ndChoice = document.createElement('div');
    childContainer2ndChoice.classList.add('col-sm-2');

    const childOfContainer2ndChoice = document.createElement('select');
    childOfContainer2ndChoice.setAttribute('name', 'jenjang' + know);
    childOfContainer2ndChoice.setAttribute('id', 'jenjang' + know);
    childOfContainer2ndChoice.classList.add('form-select');
    childOfContainer2ndChoice.classList.add('form-select-sm');

    const firstOption = document.createElement('option');
    firstOption.setAttribute('value', 'SMA');
    firstOption.innerText = 'SMA/SMK';
    const secondOption = document.createElement('option');
    secondOption.setAttribute('value', 'S1');
    secondOption.innerText = 'S1';
    const thirdOption = document.createElement('option');
    thirdOption.setAttribute('value', 'S2');
    thirdOption.innerText = 'S2';

    // pasang optionnya
    childOfContainer2ndChoice.appendChild(firstOption);
    childOfContainer2ndChoice.appendChild(secondOption);
    childOfContainer2ndChoice.appendChild(thirdOption);

    // masukan select nya ke div
    childContainer2ndChoice.appendChild(childOfContainer2ndChoice);


    // div1.3
    const childContainer2nd = document.createElement('div');
    childContainer2nd.classList.add('col-sm-3');

    const childOfContainer2nd = document.createElement('input');
    childOfContainer2nd.setAttribute('type', 'text');
    childOfContainer2nd.setAttribute('placeholder', 'nama_sekolah');
    childOfContainer2nd.classList.add('form-control');
    childOfContainer2nd.classList.add('form-control-sm');
    childOfContainer2nd.setAttribute('name', 'nama_sekolah' + know);

    
    childContainer2nd.appendChild(childOfContainer2nd);

    // div 1.4
    const childContainer3rd = document.createElement('div');
    childContainer3rd.classList.add('col-sm-1');

    const childOfContainer3rd = document.createElement('input');
    childOfContainer3rd.setAttribute('type', 'text');
    childOfContainer3rd.setAttribute('placeholder', 'ipk/nilai_rata_rata');
    childOfContainer3rd.classList.add('form-control');
    childOfContainer3rd.classList.add('form-control-sm');
    childOfContainer3rd.setAttribute('name', 'ipk/nilai_rata_rata' + know);
    
    childContainer3rd.appendChild(childOfContainer3rd);

    // div 1.5
    const childContainer4th = document.createElement('div');
    childContainer4th.classList.add('col-sm-1');

    const childOfContainer4th = document.createElement('p');
    childOfContainer4th.classList.add('btn');
    childOfContainer4th.classList.add('btn-danger');
    childOfContainer4th.classList.add('btn-sm');
    childOfContainer4th.innerText = "Cancel";
    childOfContainer4th.setAttribute('id', 'add');
    eds = 'ed' + know;
    // console.log(eds);
    childOfContainer4th.setAttribute('onclick', `hapusSlot('${eds}')`);
    // childOfContainer4th.style.visibility = 'hidden';
    childContainer4th.appendChild(childOfContainer4th);


    // label 2.1
    const label2 = document.createElement('label');
    label2.classList.add('col-sm-3');
    label2.classList.add('col-form-label');
    label2.classList.add('col-form-label-sm');
    label2.style.visibility = 'hidden';

    // div 2.2
    const pelajaranContainer = document.createElement('div');
    pelajaranContainer.classList.add('col-sm-4');

    const pelajaran = document.createElement('input');
    pelajaran.setAttribute('type', 'text');
    pelajaran.setAttribute('name', 'pelajaran' + know);
    pelajaran.setAttribute('id', 'pelajaran' + know);
    pelajaran.setAttribute('placeholder', 'pelajaran' + know);
    pelajaran.classList.add('form-control');
    pelajaran.classList.add('form-control-sm');

    pelajaranContainer.appendChild(pelajaran);

    // div 2.3
    const date1Container = document.createElement('div');
    date1Container.classList.add('col-sm-2');

    const date1 = document.createElement('input');
    date1.setAttribute('type', 'date');
    date1.setAttribute('name', 'date' + know + '.1');
    date1.setAttribute('id', 'date' + know + '.1');
    date1.classList.add('form-control');
    date1.classList.add('form-control-sm');

    date1Container.appendChild(date1);

    //div 2.4
    const sampaiContainer = document.createElement('div');
    sampaiContainer.classList.add('col-sm-1');

    const sampai = document.createElement('p');
    sampai.classList.add('text-center');
    sampai.innerText = 'Sampai';

    sampaiContainer.appendChild(sampai);
    
    //div 2.5
    const date2Container = document.createElement('div');
    date2Container.classList.add('col-sm-2');

    const date2 = document.createElement('input');
    date2.setAttribute('type', 'date');
    date2.setAttribute('name', 'date' + know + '.2');
    date2.setAttribute('id', 'date' + know) + '.2';
    date2.classList.add('form-control');
    date2.classList.add('form-control-sm');

    date2Container.appendChild(date2);

    // merging elements
    container1.appendChild(label);
    container1.appendChild(childContainer1st);
    container1.appendChild(childContainer2ndChoice);
    container1.appendChild(childContainer2nd);
    container1.appendChild(childContainer3rd);
    container1.appendChild(childContainer4th);

    container2.appendChild(label2);
    container2.appendChild(pelajaranContainer);
    container2.appendChild(date1Container);
    container2.appendChild(sampaiContainer);
    container2.appendChild(date2Container);
    

    // attached to headContainer div
    headContainer.appendChild(container1);
    headContainer.appendChild(container2);

    // attached to ed
    ed.appendChild(headContainer);

    console.log(headContainer);

    
    
})

function hapusSlot(id){
    // console.log(id);
    const me = document.getElementById(id);
    me.remove();
}
