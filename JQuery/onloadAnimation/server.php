<?php
    $folder = "img/loader";
    $files = array();
    if ($handle = opendir($folder)) {
        while (false !== ($entry = readdir($handle))) {
            if ($entry != "." && $entry != "..") {
                $files[] = $entry;
            }
        }
        closedir($handle);
    }
    $json = json_encode($files);
    echo $json;