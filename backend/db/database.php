<?php

class Database
{
    private static $dbPath = "../db/test.db";

    public static function init()
    {
        $db = new SQLite3(self::$dbPath);

        // Create users table if not exists
        $db->exec("CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        )");

        $db->exec("CREATE TABLE IF NOT EXISTS reminders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user TEXT NOT NULL,
            type TEXT NOT NULL,
            description TEXT NOT NULL,
            expiration_date DATETIME NOT NULL,
            FOREIGN KEY (user) REFERENCES users(username)
        )");

        return $db;
    }
}

$db = Database::init();

?>
