
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- CSS from bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">

    <!-- my logo icon -->
    <link rel="shortcut icon" type="image/x-icon" href="img\my-black-logo.png" />

    <!-- my css file -->
    <link rel="stylesheet" href="css/app.css">

    <!-- my font-awsome link -->
    <script src="https://kit.fontawesome.com/9dd10fc461.js" crossorigin="anonymous"></script>

    <title>Document</title>
</head>
<body>

    <div class="container mt-5">
        <h1 class="p-5 text-bg-primary text-center">RSUD TONGAS</h1>
        <div class="mb-3 d-flex justify-content-between">
            <h3 class="col-sm-5 p-5 text-bg-secondary text-center" id="antrianPoliUmum"></h3>
            <h3 class="col-sm-5 p-5 text-bg-secondary text-center" id="antrianPoliMata"></h3>
        </div>
        <div class="text-center" id="park" style="display: none;">

        </div>
        <div class="mb-3 d-flex justify-content-center">
            <button class="p-5 text-bg-warning text-center" id="btnPoliUmum">Poli Umum</button>
            <button class="p-5 text-bg-warning text-center" id="btnPoliMata">Poli Mata</button>
        </div>
    </div>

     <!-- JavaScript from bootstrap -->
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>

     <!-- place your javascript functional here -->
     <script>
        document.getElementById('antrianPoliUmum').innerText = 0;
        document.getElementById('antrianPoliMata').innerText = 0;

        let boxLines = [];

        document.getElementById('btnPoliUmum').addEventListener('click', function(){

            let park = document.getElementById('park');
            let count = document.getElementById('antrianPoliUmum').innerText;
            // alert(count);

            count == 5 ? count = 1 : count++;

            // alert(count);
            document.getElementById('antrianPoliUmum').innerText = count;


            const voice = document.createElement('audio');
            voice.setAttribute('controls', '');
            // voice.setAttribute('autoplay', '');

            const antrian = document.createElement('source');
            antrian.setAttribute('src', 'voice/Antrian.mp3');
            antrian.innerText = 'Not supported';

            voice.appendChild(antrian);


            const voice1 = document.createElement('audio');
            voice1.setAttribute('controls', '');
            // voice1.setAttribute('autoplay', '');
            voice1.innerText = 'Not supported';

            const noAntrian = document.createElement('source');
            noAntrian.setAttribute('src', `voice/${count}.mp3`);
            

            voice1.appendChild(noAntrian);


            const voice2 = document.createElement('audio');
            voice2.setAttribute('controls', '');
            // voice2.setAttribute('autoplay', '');
            voice2.innerText = 'Not supported';

            const poli = document.createElement('source');
            poli.setAttribute('src', `voice/poliumum.mp3`);

            voice2.appendChild(poli);

            
            // alert(count);
           

            let poliUmum = [voice, voice1, voice2];
            boxLines.unshift(poliUmum);

        });
        
        document.getElementById('btnPoliMata').addEventListener('click', function(){

            let park = document.getElementById('park');
            let count = document.getElementById('antrianPoliMata').innerText;
            // alert(count);

            count == 5 ? count = 1 : count++;

            // alert(count);
            document.getElementById('antrianPoliMata').innerText = count;


            const voiceMata = document.createElement('audio');
            voiceMata.setAttribute('controls', '');
            // voice.setAttribute('autoplay', '');

            const antrianMata = document.createElement('source');
            antrianMata.setAttribute('src', 'voice/Antrian.mp3');
            antrianMata.innerText = 'Not supported';

            voiceMata.appendChild(antrianMata);


            const voice1Mata = document.createElement('audio');
            voice1Mata.setAttribute('controls', '');
            // voice1Mata.setAttribute('autoplay', '');
            voice1Mata.innerText = 'Not supported';

            const noAntrianMata = document.createElement('source');
            noAntrianMata.setAttribute('src', `voice/${count}.mp3`);
            

            voice1Mata.appendChild(noAntrianMata);


            const voice2Mata = document.createElement('audio');
            voice2Mata.setAttribute('controls', '');
            // voice2Mata.setAttribute('autoplay', '');
            voice2Mata.innerText = 'Not supported';

            const poliMata = document.createElement('source');
            poliMata.setAttribute('src', `voice/polimata.mp3`);

            voice2Mata.appendChild(poliMata);

            
            // alert(count);
           

            let poliMataBox = [voiceMata, voice1Mata, voice2Mata];
            boxLines.unshift(poliMataBox);

        });
        
        

        function run(elA, elB, elC){

            elA.autoplay = true;
            park.appendChild(elA);
            elA.load();
           
            setTimeout(function(){
                elB.autoplay = true;
                park.appendChild(elB);
                elB.load();
            }, 1800);

            setTimeout(function(){
                elC.autoplay = true;
                park.appendChild(elC);
                elC.load();
            }, 2700);
        }

        
        
        let time = boxLines.length*5000;
        
        setInterval(function() {

            for( const i of boxLines ){
                
                console.log(boxLines);
                run(i[0], i[1], i[2]);
                boxLines.shift();
                
            }
            console.log(boxLines);
            
        }, 5000+time);

       

        

     </script>
</body>
</html>