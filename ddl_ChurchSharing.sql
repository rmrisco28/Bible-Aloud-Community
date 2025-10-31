CREATE TABLE prj6.church_sharing
(
    sharing_id    INT AUTO_INCREMENT     NOT NULL,
    sharing_title VARCHAR(100)           NOT NULL,
    member_name   VARCHAR(50)            NOT NULL,
    content       VARCHAR(5000)          NOT NULL,
    created_at    datetime DEFAULT NOW() NOT NULL,
    views         INT      DEFAULT 0     NOT NULL,
    del_yn        BIT(1)   DEFAULT 0     NOT NULL,
    CONSTRAINT pk_church_sharing PRIMARY KEY (sharing_id)
);