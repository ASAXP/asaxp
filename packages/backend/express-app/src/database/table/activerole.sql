CREATE TABLE `active_role` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `role_name` VARCHAR(255) NOT NULL COMMENT '소속 팀' COLLATE 'utf8mb4_general_ci',
  PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=2
;