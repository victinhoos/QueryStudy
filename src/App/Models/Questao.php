<?php 

    Class Questao{

        
        function calculoTempo($i ,$iAtual, $dataComeco){

            $EF = 0;
            $IntervalModifier = 0;

            //Calculo
            $iNovo = $iAtual * $EF * $IntervalModifier;

            try{
                //Fácil
                if($i == 0){
                    $IntervalModifier =  0.15;
                }
                //Bom
                if($i == 1){
                    $IntervalModifier =  2.5;
                }
                //Dificil
                if($i == 2) {
                    $IntervalModifier = -0.15;
                }
                //Errei
                if($i ==3){
                    $IntervalModifier = -0.20;
                }

                $data1 = new DateTime();

            }catch(Exception $e){

            }
        }
        function questaoAleatoria(){
            
        }
    }

    
?>