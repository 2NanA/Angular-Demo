<?php
//$t = microtime(true);







class api {

    public function A($aa,$at){
        return $aa+$at;
    }

    public function b($gg,$hj){
        return $aa+$at;
    }

     public function c($af,$ty){
        return $aa+$at;
    }
}

// for ($i=0; $i < 2000000; $i++) { 
//     $a = 'aaa';
// }
// for ($i=0; $i < 10; $i++) { 
//     foreach ($_SERVER as $key => $value) {
//         # code...
//     }
// }
//$rawpostdata = file_get_contents("php://input");
//var_dump($_POST); die;
// echo "<br>";
// //echo "Single Quotes"."<br>";
// echo "With Key "."<br>";

// for angularjs jsonp
//echo "console.log('".$_GET['ad']." ');";

// echo "<pre>";
// // var_dump(get_declared_classes());
// $a = (double)microtime()*10000;
// // var_dump($a);
// mt_srand((double)microtime()*10000);
// var_dump(rand());
// var_dump(uniqid(rand(), true));




// function guid() {    
//     if (function_exists('com_create_guid')) {        
//         return com_create_guid();    
//     } else {     
//         mt_srand((double)microtime()*10000);
//         $charid = strtoupper(md5(uniqid(rand(), true))); 
//         $hyphen = chr(45);        
//         $uuid   = substr($charid, 0, 8).$hyphen               
//         .substr($charid, 8, 4).$hyphen            
//         .substr($charid,12, 4).$hyphen            
//         .substr($charid,16, 4).$hyphen            
//         .substr($charid,20,12);
//         return $uuid;    
//     }
// }

// var_dump(php_strip_whitespace('testEcho.php'));

// echo $a;
// print_r(error_get_last());

//$subject = "A ghostb 0oooed";

// $subject = "dd";
// //$subject = "fsafbll";
// //$pattern = '/\n/';
// //$pattern = '/\a*/';
// $pattern = '/^\d{1,3}$/';

// $ret = preg_match($pattern, $subject, $matches);
// var_dump($ret);
// var_dump($matches);

// echo json_encode(array("name"=>"fLemt"));



error_reporting(0);

$name = $_GET['name'];
$callback = $_GET['callback'];

$pattern = '/^[\\w\\._\\d]+$/';
if (!preg_match($pattern, $callback)) {
  exit('invalid callback');
}

$salutations = array(
    "Adab",
    "Ahoj",
    "An-nyeong-ha-se-yo",
    "Apa khabar",
    "Barev Dzez",
    "Bula Vinaka",
    "Chào",
    "Ciao",
    "Dia Duit",
    "Hallo",
    "Halo",
    "Haye",
    "Hei",
    "Hej",
    "Hello",
    "Helo",
    "Hola",
    "Kamusta",
    "Konnichiwa",
    "Merhaba",
    "Mingalarba",
    "Namaskar",
    "Namaste",
    "Pryvit",
    "Pryvitannie",
    "Salam",
    "Salut",
    "Sat Sri Akal",
    "Sholem aleikhem",
    "Sveiki",
    "Szia", 
    "Tere",
    "Zdravo" );

$salutation = $salutations[rand(0, count($salutations) - 1)];
$greeting = $salutation . ' ' . $name . '!';
$data = array(
  "name" => $name,
  "salutation" => $salutation,
  "greeting" => $greeting );
$json = json_encode($data);
header("Content-type: text/javascript");


if ($callback)
  echo $callback .' (' . $json . ');';
else
  echo $json;