CREATE TABLE `active_role` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id INT,
  active_role_id INT,
  PRIMARY KEY (`id`) USING BTREE
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
  FOREIGN KEY (active_role_id) REFERENCES active_role(id) ON DELETE CASCADE
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=2
;
