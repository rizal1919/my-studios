
<?php 


if(isset($_POST['name'])){
    var_dump($_POST);
    // $matches = preg_match_all("/jenjang/i", array_keys($_POST));

    $jumlahJurusan = 0;
    foreach( array_keys($_POST) as $new ){

        if( preg_match('/jurusan/i', $new) ){
            $jumlahJurusan++;
        }
    }

    $pendidikan = [];
    for( $i=1; $i<=$jumlahJurusan; $i++ ){
        $box = [];
        foreach( $_POST as $new => $value ){

            $criteria = ['jenjang', 'jurusan', 'nama_sekolah', 'ipk/nilai_rata_rata', 'pelajaran'];
            
            
            foreach( $criteria as $c ){

                
                if( $new == $c . $i and !in_array($c . $i, $box)){

                    $smallBox = [
                        $c => $value
                    ];

                    array_push($box, $smallBox);
                    
                }
               
            }
            
            // $date1True = in_array('date' . $i . '_1', $box);

            if( $new === 'date' . $i . '_1' and !in_array('data' . $i . '_1', $box)){
                

                    $smallBox = [
                        'date' . $i . '_1' => $value
                    ];

                    array_push($box, $smallBox);
               
            }

            if( $new == 'date' . $i . '_2' and !in_array('date' . $i . '_2', $box)){
                $smallBox = [
                    'date' . $i . '_2' => $value
                ];

                array_push($box, $smallBox);
            }
        }
        
        array_push($pendidikan, $box);
    }
    
}

var_dump($pendidikan);
// header("Location: http://localhost:8080/my-app");


?>