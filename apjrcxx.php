<?
ini_set('display_errors', 'Off'); 

if($_GET['variable'] != "jkfkdgf"){
    exit();
}

$DataBase = new PDO('mysql:host=localhost;dbname=d39871_zelles;charset=utf8', 'd39871_zelles_us', 'chot44dhhkt3vccccd');

$a = $DataBase->prepare("SELECT * FROM `orders`");
$a->execute();
$b = $a->fetchAll();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZelleS | Админ панель | Заказы</title>
    <link rel="stylesheet" href="styles/reset.css">
    <link rel="stylesheet" href="styles/admin.css">
</head>
<body>
    <main>
        <nav>
            <div class="container">
                <a href="/admin.html"><img src="assets/ico/logo.svg" alt="logo"></a>
                <ul>
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-table" width="22" height="22" viewBox="0 0 24 24" stroke-width="2" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <line x1="4" y1="10" x2="20" y2="10" />
                        <line x1="10" y1="4" x2="10" y2="20" />
                      </svg><li>Заказы</li></a>
                    <a href="#"><li>dwejii</li></a>
                    <a href="#"><li>dwejii</li></a>
                </ul>
            </div>
        </nav>
        <div class="main">
            <div class="topBar">
                <div class="barsWrap">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
                <div>nav bar</div>
            </div>
            <div class="table">
                <div class="container">
                    <h2>Заказы</h2>
                    <div class="tableWrap">
                        <table class="brd">
                            <tr>
                                <th>Имя</th>
                                <th>Телефон</th>
                                <th>Описание</th>
                                <th>Дата</th>
                            </tr>
                            <? 
                            foreach ($b as $key => $value) {
                                echo "<tr>";
                                echo "<td>".$value['name']."</td>";
                                echo "<td>".$value['number']."</td>";
                                echo "<td>".$value['description']."</td>";
                                echo "<td>".date('Y-m-d h:i:s',$value['time'])."</td>";
                                echo "</tr>";
                            }
                            ?>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="scripts/admin.js"></script>
</body>
</html>