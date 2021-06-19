<?php
//php-parameters.php





if (isset($_GET['wishId'])){
$wishId = $_GET["wishId"];
?>
<p><?php echo("Wish: " . $wishId ); ?></p>
<p><?php echo ("Wish has been successfully added");?></p>
<?php
} else {
	echo"Wishes.";?>
	<p><?php echo ("Wish has not been uploaded");?></p>
<?php
}
?>


