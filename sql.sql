# 성경 역본 테이블

CREATE TABLE `bible_translation`
(
    `bible_translation_id` INT AUTO_INCREMENT NOT NULL,
    `translation_name`     VARCHAR(20)        NOT NULL,
    CONSTRAINT bible_translation_id primary key (bible_translation_id)
);


# 공동체 나눔
CREATE TABLE `church_sharing`
(
    `sharing_id`    INT           NOT NULL AUTO_INCREMENT,
#     `church_id`     INT           NOT NULL AUTO_INCREMENT,
#     나중에 교회 추가 후 작성
    `sharing_title` VARCHAR(100)  NOT NULL,
#     `member_id`     INT           NOT NULL  AUTO_INCREMENT,
    `member_name`   VARCHAR(50)   NOT NULL,
    #     나중에 멤버 추가 후 작성
    `content`       VARCHAR(5000) NOT NULL,
    `created_at`    DATETIME      NOT NULL DEFAULT NOW(),
    `views`         INT           NOT NULL DEFAULT 0,
    `del_yn`        Boolean       NOT NULL DEFAULT 0,
    CONSTRAINT sharing_id primary key (sharing_id)
);

DROP TABLE church_sharing;

# 나눔 답글
CREATE TABLE `sharing_comment`
(
    `comment_id`  INT           NOT NULL AUTO_INCREMENT,
    `sharing_id`  INT           NOT NULL,
#     `member_id`  INT           NOT NULL AUTO_INCREMENT ,
#     나중에 멤버 추가 후 진행
    `member_name` VARCHAR(50)   NOT NULL,

    `comment`     VARCHAR(5000) NOT NULL,
    `created_at`  DATETIME      NOT NULL,
    CONSTRAINT comment_id primary key (comment_id),
    FOREIGN KEY (sharing_id) REFERENCES church_sharing (sharing_id)
);

DROP TABLE sharing_comment;

