CREATE TABLE `stories` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`parent_id` INT(10) UNSIGNED NULL DEFAULT NULL COMMENT '부모 스토리 id',
	`type` ENUM('epic','story','spike') NOT NULL DEFAULT 'story' COLLATE 'utf8mb4_general_ci',
	`description` VARCHAR(255) NOT NULL COMMENT '스토리에 대한 짧은 설명' COLLATE 'utf8mb4_general_ci',
	`content` TEXT NULL DEFAULT NULL COMMENT '스토리의 상세 내용' COLLATE 'utf8mb4_general_ci',
	`assignee_id` INT(10) UNSIGNED NULL DEFAULT NULL COMMENT '스토리 담당자 id',
	`point` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '스토리 점수 0~255',
	`created_at` TIMESTAMP NOT NULL DEFAULT 'CURRENT_TIMESTAMP' COMMENT '생성일',
	`updated_at` TIMESTAMP NOT NULL DEFAULT 'CURRENT_TIMESTAMP' ON UPDATE CURRENT_TIMESTAMP COMMENT '수정일',
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `parent_id` (`parent_id`) USING BTREE,
	CONSTRAINT `stories_ibfk_1` FOREIGN KEY (`parent_id`) REFERENCES `stories` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION
)
COMMENT='이 테이블은 모든 스토리(에픽, 스토리, 스파이크)를 포함합니다.'
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=4
;
