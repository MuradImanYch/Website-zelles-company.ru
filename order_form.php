<?
//ini_set('display_errors', 'Off'); 

$DataBase = new PDO('mysql:host=localhost;dbname=d39871_zelles;charset=utf8', 'd39871_zelles_us', 'chot44dhhkt3vccccd');
$data = $_POST;

if (isset($data['name']) && isset($data['number']) && isset($data['description'])) {
    if (!ctype_space($data['name']) && $data['name'] != '' && !ctype_space($data['number']) && $data['number'] != '' && !ctype_space($data['description']) && $data['description'] != '') {
            $name = htmlspecialchars($data['name'], ENT_QUOTES);
            $number = htmlspecialchars($data['number'], ENT_QUOTES);
            $description = htmlspecialchars($data['description'], ENT_QUOTES);

            $a = $DataBase->prepare("INSERT INTO `orders`(`name`, `number`, `description`, `time`) VALUES (:name, :number, :description, :time)");
            $a->execute(array('name' => $name, 'number' => $number, 'description' => $description, 'time' => time()));

            echo 'OK';
    }
}

