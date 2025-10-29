# 성경 역본 테이블

CREATE TABLE `bible_translation`
(
    `bible_translation_id` INT AUTO_INCREMENT NOT NULL,
    `translation_name`     VARCHAR(20)        NOT NULL,
    CONSTRAINT bible_translation_id primary key (bible_translation_id)
);
